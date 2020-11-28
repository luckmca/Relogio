class timeController {

    constructor(){

        this._currentDate;
        this._timespEl = document.querySelector("#hrsp");
        this._dateSpEl = document.querySelector("#dtsp");
        this.initialize();
        

    }


    initialize(){

        setInterval(()=>{

            this.currentDate = this.currentDate.toLocaleTimeString("pt-br");
            
            
        }, 1000)

        setInterval(()=>{

            
            this.currentDate = this.currentDate.toLocaleDateString("pt-br");
            
        }, 10000)

    }

    get timespEl(){

        return this._timespEl.innerHTML;
    }

    set timespEl(value){

        this._timespEl.innerHTML = value;


    }

    get dateSpEl(){

        return this._dateSpEl.innerHTML;


    }

    set dateSpEl(value){

        this._dateSpEl.innerHTML = value;
    }

    get currentDate(){

        return new Date;
    }

    set currentDate(value){

        this._timespEl.innerHTML = value;
    }

        
}


