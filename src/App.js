import { useEffect, useState } from "react";
import "./App.css";
import Chartlayout from "./components/charts/Chartlayout";
import Header from "./components/header/Header";
import Options from "./components/options/Options";
import { database } from "./utils/firebase";
import { ref, onValue, query, limitToLast } from "firebase/database";
import {calculateTime, calculateTimeForQurey} from "./utils/calculateTime";

function App() {
  const [data, setData] = useState([]);
  const [optionData, setOptionData] = useState({
    live: true,
    strikes: 10,
    date: new Date(),
    time: [1],
  });
  const currentTime = new Date();
  const day = currentTime.getDate();
  const month = currentTime.getUTCMonth() + 1;
  const year = currentTime.getUTCFullYear();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  useEffect(() => {
    const selectedDate = new Date(optionData.date);
    const selectedDatemonth =
      selectedDate.getUTCMonth() + 1 < 10
        ? `0${selectedDate.getUTCMonth() + 1}`
        : selectedDate.getUTCMonth() + 1;

    const selectedDateDay =
      selectedDate.getDate() < 10
        ? `0${selectedDate.getDate()}`
        : selectedDate.getDate();

    const queryStr = optionData.live
      ? `option${year}${formattedMonth}${formattedDay}`
      : `option${selectedDate.getUTCFullYear()}${selectedDatemonth}${selectedDateDay}/${calculateTimeForQurey(optionData.time[0])}`;


      function limit(){
        return optionData.live?limitToLast(1):limitToLast(7)
      }
      console.log(queryStr)
    const dbRef = query(ref(database, queryStr),limit());
    onValue(dbRef, async (snapshot) => {
      const resdata = snapshot.val();
      if (!!resdata) {
        // console.log(optionData.live?resdata[Object.keys(resdata)]:resdata)
        setData(optionData.live?resdata[Object.keys(resdata)]:resdata);
        console.log(`Data update ${new Date().toLocaleDateString()}`);
      } else {
        setData({});
        console.log("Data not found");
      }
    });
    return () => {};
  }, [optionData.live, optionData]);
  return (
    <div className="App">
      <Header {...data} optionData={optionData} />
      <Options setData={setOptionData} optionData={optionData} />
      <Chartlayout
        data={data}
        strikes={optionData.strikes}
      />
    </div>
  );
}

export default App;
