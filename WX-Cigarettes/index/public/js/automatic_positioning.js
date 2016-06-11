function getLocation(){
   var address = document.getElementById("address");
   var geolocation = new BMap.Geolocation();
   geolocation.getCurrentPosition(function(r){
       if(this.getStatus() == BMAP_STATUS_SUCCESS){
           var geoc = new BMap.Geocoder();
           geoc.getLocation(r.point, function(rs){
               var addComp = rs.addressComponents;
               var detailedAddress = addComp.city  + addComp.district + addComp.street + addComp.streetNumber;
               address.innerHTML = detailedAddress;
           });

       }else {
           alert('定位失败！');
       }
   },{enableHighAccuracy: true})
}
window.onload = function(){
   getLocation();
}
