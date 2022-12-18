export class WetherDataProcessor {
    #cityGeoCodes
    constructor(){
        this.#cityGeoCodes = [{city: "Rehovot" , latitude:"31.046", longitude : "34.851"},
        {city:"Haifa",  }] //todo fill this array from inet
    }
    getData(requestObject){
        //{city,dateFrom, dateTo, hoursFrom, hoursTo}
        const url  = this.getUrl(requestObject);
        const promiseResponse = fetch(url);
       return this.processDate(promiseResponse.then(response => response.json()))
    }
    getUrl(requestObject){
        //todo creates Url for request and returns it
    }
    processData(promiseData){
        return promiseData(data => {
            //todo
            // return {city, object: [{date , hour, temperature} ,......]}
        })
    }
}