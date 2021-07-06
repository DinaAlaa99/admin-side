   //const { mongo } = require('../db/mongo')
   //const {Mongoose} = require('mongoose')
   //const stationModel = require('../model/stationsModel')
   var stores = [{
           name: 'Store 1',
           location: {
               lat: 31.21472093473785,
               lng: 29.926479386896688
           },
           hours: '8AM to 10PM'
       },
       {
           name: 'Store 2',
           location: {
               lat: 31.211344162792813,
               lng: 29.920590607305524
           },
           hours: '9AM to 9PM'
       }
   ]
   var markers = []

   function openform() {
       var x = document.getElementById("form");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   }

   function viewList() {
       console.log('here')
       var select = document.getElementById("select")

       for (var i = 0; i < stores.length; i++) {
           var option = document.createElement("OPTION"),
               txt = document.createTextNode(stores[i].name);
           option.appendChild(txt);
           option.setAttribute("value", stores[i].name);
           select.insertBefore(option, select.lastChild);

       }
   } 
function getdata() {
    const stationNameinArabic = document.getElementById("stationNameA").value
    const stationNameinEnglish = document.getElementById("stationNameE").value
   

    console.log(stationNameinArabic)
    console.log(stationNameinEnglish)
   }




   function initMap() {
       var myMapCenter = {
           lat: 31.20703092649701,
           lng: 29.92371068041598
       }

       // Create a map object and specify the DOM element for display.
       var map = new google.maps.Map(document.getElementById('map'), {
           center: myMapCenter,
           zoom: 14
       })


       function markStore(storeInfo) {

           // Create a marker and set its position.
           var marker = new google.maps.Marker({
               map: map,
               position: storeInfo.location,
               title: storeInfo.name
           });

           //show store info when marker is clicked
           marker.addListener('click', function () {
               showStoreInfo(storeInfo);
           });
       }
       map.addListener("click", (mapsMouseEvent) => {
           position = mapsMouseEvent.latLng
           console.log(position)
           positionJSON= JSON.stringify(position.toJSON(), null, 2)
           var info_div = document.getElementById('info_div');
           var positionInfo = JSON.parse(positionJSON)
           info_div.innerHTML = positionJSON
           
           console.log(positionInfo.lng)
           document.getElementById("Longitude").value = `${positionInfo.lng}`
           document.getElementById("Latitude").value = `${positionInfo.lat}`
           
       })

       // show store info in text box
       function showStoreInfo(storeInfo) {
           var info_div = document.getElementById('info_div');
           info_div.innerHTML = 'Store name: ' +
               storeInfo.name +
               '<br>Hours: ' + storeInfo.hours;
       }


       stores.forEach(function (store) {
           markStore(store);
       })
       viewList()
      
   }