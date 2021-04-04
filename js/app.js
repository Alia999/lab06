'use strict';

let Workinghours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];


// *******************************************************


let Seattle = {


    minCust: 23,
    maxCust: 65,
    AvgCookieSale: 6.3,
    customers: 0,
    customersperHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust)) + minCust;

    },


    NumberofCustomers: function () {
        for (let i = 0; i < Workinghours .length; i++) {
            this.customers = this.RandomNum(this.minCust, this.maxCust);
            console.log(this.customers);
            this.customersperHours.push(this.customers);
           console.log(this.customersperHours[i]);
        }
    },


    NumberofCookies: function () {

        for (let j = 0; j < this.customersperHours.length; j++) {
        this.cookiesNumber.push(this.customersperHours[j] * this.AvgCookieSale);
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo: function () {

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Seattle";
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);

        for (let i = 0; i < Workinghours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent =  Workinghours[i] + " " + this.customersperHours[i] + " ";
        }


        let liElement=document.createElement('li');
        ulElement.appendChild(liElement)
        liElement.textContent+= "Total: "+this.total;

    }



}


let parent = document.getElementById('cities');
 console.log(parent);
 let headerElement = document.createElement('header');
 parent.appendChild(headerElement);
 let h1Element = document.createElement('h1');
 headerElement.appendChild(h1Element);
 h1Element.textContent = "Salmon Cookies:Sales Data";










Seattle.NumberofCustomers ();
Seattle.NumberofCookies();
Seattle.PrintInfo();
//***************************************************************************************************** *
//Tokyo	3	24	1.2
let Tokyo = {


  minCust : 3,
    maxCust: 24,
    AvgCookieSale: 1.2,
    customers: 0,
    customersperHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust)) + minCust;

    },


    NumberofCustomer: function () {
        for (let i = 0; i <  Workinghours.length; i++) {
            this.customers = this.RandomNum(this.minCust, this.maxCust);
            console.log(this.customers);
            this.customersperHours.push(this.customers);
            console.log(this.customersperHours);
        }
    },


    NumberofCookies: function () {

        for (let j = 0; j < this.customersperHours.length; j++) {
        this.cookiesNumber.push(this.customersperHours[j] * this.AvgCookieSale);
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Tokyo";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<Workinghours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= Workinghours[i]+" "+this.customersperHours[i]+ " ";   
          }


       let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}



Tokyo.NumberofCustomer();
Tokyo.NumberofCookies();
Tokyo.PrintInfo();;


//***************************************************************************************************** *
//Dubai	11	38	3.7
let Dubai = {


    minCust: 11,
    maxCust: 38,
    AvgCookieSale: 3.7,
    customers: 0,
    customersperHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust)) + minCust;

    },


    NumberofCustomer: function () {
        for (let i = 0; i <  Workinghours.length; i++) {
            this.customers = this.RandomNum(this.minCust, this.maxCust);
            console.log(this.customers);
            this.customersperHours.push(this.customers);
           console.log(this.customersByHours);
        }
    },


    NumberofCookies: function () {

        for (let j = 0; j < this.customersperHours.length; j++) {
        this.cookiesNumber.push(this.customersperHours[j] * this.AvgCookieSale);
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Dubai";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i< Workinghours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=Workinghours[i]+" "+this.customersperHours[i]+ " ";   
          }


       let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total; "+this.total;

        }



}



Dubai.NumberofCustomer ();
Dubai.NumberofCookies();
Dubai.PrintInfo();
//************************************************************************************************ *
//Paris	20	38	2.3
let Paris = {


    minCust: 20,
    maxCust: 38,
    AvgCookieSale: 2.3,
    customers: 0,
    customersperHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust)) + minCust;

    },


    NumberofCustomers: function () {
        for (let i = 0; i <  Workinghours.length; i++) {
            this.customers = this.RandomNum(this.minCust, this.maxCust);
            console.log(this.customers);
            this.customersperHours.push(this.customers);
           console.log(this.customersperHours);
        }
    },


    NumberofCookies: function () {

        for (let j = 0; j < this.customersperHours.length; j++) {
        this.cookiesNumber.push(this.customersperHours[j] * this.AvgCookieSale);
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Paris";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<Workinghours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent= Workinghours[i]+" "+this.customersperHours[i]+ " ";   
          }


        let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}


Paris.NumberofCustomers();
Paris.NumberofCookies();
Paris.PrintInfo();
//***************************************************************************************************************

let Lima = {


    minCust: 2,
    maxCust: 16,
    AvgCookieSale: 4.6,
    customers: 0,
    customersperHours: [],
    cookies: 0,
    cookiesNumber: [],
    total: 0,


    RandomNum: function (minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust)) + minCust;

    },


    NumberofCustomer: function () {
        for (let i = 0; i < Workinghours.length; i++) {
            this.customers = this.RandomNum(this.minCust, this.maxCust);
            console.log(this.customers);
            this.customersperHours.push(this.customers);
           console.log(this.customersperHours);
        }
    },


    NumberofCookies: function () {

        for (let j = 0; j < this.customersperHours.length; j++) {
        this.cookiesNumber.push(this.customersperHours[j] * this.AvgCookieSale);
       this.total+= this.cookiesNumber[j];


        }

    },


    PrintInfo:function (){

        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = "Lima";


        let ulElement=document.createElement('ul');

         parent.appendChild(ulElement);

        for(let i=0;i<Workinghours.length;i++){
            let liElement=document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent=Workinghours[i]+" "+this.customersperHours[i]+ " ";   
          }


      let liElement=document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent+= "Total: "+this.total;

        }



}


Lima.NumberofCustomer ();
Lima.NumberofCookies();
Lima.PrintInfo();
