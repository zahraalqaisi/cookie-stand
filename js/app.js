'use strict';

let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//this is from w3schools
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }




const seattle={
    locationName:'seattle',
    minCustomers:23,
    maxCustomers:65,
    avgCookies:6.3,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCuctomersEachHour:function(){
        for (let i = 0; i < hours.length; i++) {
            
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
            this.total=this.total+ this.cookiesEachHour[i];

            
        }
    },
    render:function(){
        let parent=document.getElementById('parent');
        console.log(parent);

        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);


        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i] } cookies`

           
            
        }
        let totalLi=document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total} cookies`
    }

}
seattle.calcCuctomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();
console.log(seattle);




//===========================tokyo================
const tokyo={
    locationName:'tokyo',
    minCustomers:3,
    maxCustomers:24,
    avgCookies:1.2,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCuctomersEachHour:function(){
        for (let i = 0; i < hours.length; i++) {
            
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
            this.total=this.total+ this.cookiesEachHour[i];

            
        }
    },
    render:function(){
        let parent=document.getElementById('parent');
        console.log(parent);

        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);


        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i] } cookies`

           
            
        }
        let totalLi=document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total} cookies`
    }

}
tokyo.calcCuctomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();

//===========================dubai================
const dubai={
    locationName:'dubai',
    minCustomers:11,
    maxCustomers:38,
    avgCookies:3.7,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCuctomersEachHour:function(){
        for (let i = 0; i < hours.length; i++) {
            
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
            this.total=this.total+ this.cookiesEachHour[i];

            
        }
    },
    render:function(){
        let parent=document.getElementById('parent');
        console.log(parent);

        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);


        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i] } cookies`

           
            
        }
        let totalLi=document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total} cookies`
    }

}
dubai.calcCuctomersEachHour();
dubai.calcCookiesEachHour();
dubai.render();



//===========================paris================
const paris={
    locationName:'paris',
    minCustomers:20,
    maxCustomers:38,
    avgCookies:2.3,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCuctomersEachHour:function(){
        for (let i = 0; i < hours.length; i++) {
            
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
            this.total=this.total+ this.cookiesEachHour[i];

            
        }
    },
    render:function(){
        let parent=document.getElementById('parent');
        console.log(parent);

        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);


        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i] } cookies`

           
            
        }
        let totalLi=document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total} cookies`
    }

}
paris.calcCuctomersEachHour();
paris.calcCookiesEachHour();
paris.render();



//===========================lima================
const lima={
    locationName:'lima',
    minCustomers:2,
    maxCustomers:16,
    avgCookies:4.6,
    customersEachHour:[],
    cookiesEachHour:[],
    total:0,


    calcCuctomersEachHour:function(){
        for (let i = 0; i < hours.length; i++) {
            
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
            this.total=this.total+ this.cookiesEachHour[i];

            
        }
    },
    render:function(){
        let parent=document.getElementById('parent');
        console.log(parent);

        let nameElement=document.createElement('h3');

        parent.appendChild(nameElement);


        nameElement.textContent=this.locationName;

        let ulElement=document.createElement('ul');
        
        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            let liElement=document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent=`${hours[i]}: ${this.cookiesEachHour[i] } cookies`

           
            
        }
        let totalLi=document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total} cookies`
    }

}
lima.calcCuctomersEachHour();
lima.calcCookiesEachHour();
lima.render();
//i got help by samer's review