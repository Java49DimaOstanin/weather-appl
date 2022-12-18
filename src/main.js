


//https://api.open-meteo.com/v1/gfs?latitude=31.0461&longitude=34.8516&hourly=temperature_2m&timezone=IST&start_date=2022-12-18&end_date=2023-01-03
// let latitude = 31.046;
// let longitude = 34.851;
// let start_date="2022-12-18";
// let end_date="2022-12-18";
// const baseUrl = "https://api.open-meteo.com/v1/gfs?";
// const baseParams = "&hourly=temperature_2m&timezone=IST&";
// const url = `${baseUrl}latitude=${latitude}&longitude=${longitude}${baseParams}start_date=${start_date}&end_date=${end_date}`
// let promiseResponse = fetch(url);
// console.log("1", promiseResponse);    
// let promiseDate = promiseResponse.then((response) => response.json())
// console.log("2", promiseDate);
// let dataProcessing = promiseDate.then(data => console.log(data.hourly.temperature_2m[0]))
// console.log("3", dataProcessing);

import { DataForm } from "./ui/DataForm.js";
import { WetherDataProcessor } from "./data/WeatherDateProcessor.js";
import { TemperaturesList } from "./ui/TemperatureList.js";

const weatherDateProcessor = new WetherDataProcessor();
const dataForm = DataForm();
const termperaturList = TemperaturesList();
dataForm.addHandler((dataFromForm) => {
    const promiseData = weatherDateProcessor.getData(dataFromForm);
    promiseData.then( data => termperaturList.showTemperatures(data));

})
const params = {/* requared params for form*/};

const minDate = document.querySelector(".class [min]");
const maxDate = document.querySelector(".class [max]");























// function displayUserName(userName) {
//   console.log(userName);
// }
// // function getUserNameById(id, processFun) {
// //    setTimeout(function(id){
// //     processFun("user" + id);
// //    } ,5000,id)
// // }
// function getUserNameById(id){
//     let c = 0;
//     for (let i = 0; i < 123214323;i++){
//         i++
//     }
//     return "user" + id;
// }
// let userName = getUserNameById()
// getUserNameById(100,displayUserName);
// console.log("whaiting for result... it take some time")