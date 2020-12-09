////////////////////
// Owner : Honglin (Jim) Wei
// Date  : Dec 6 (v1)
// From  : // https://developers.google.com/maps/documentation/javascript/adding-a-google-map#all
////////////////////

// Initialize init Map function
function initMap(){
  // Give constant variable for fleming location
    const camp = {lat:45.147803,lng:-78.875912};
    
    // Uses the map element to center at fleming, and zoom to lvl 13
    // const map = new KHayes_Final.pdf.Map(document.getElementById("map"),{
    //     zoom: 13,
    //     center: camp,
    //   });
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom: 13,
      center: camp,
    });
    // Marker pointing at fleming
    const marker = new google.maps.Marker({
      position: camp,
      map: map,
    });
}
// End Owner: Honglin (Jim) Wei