//添加店铺初始化信息

String.prototype.replaceAll = function(s1,s2) {

    return this.replace(new RegExp(s1,"gm"),s2);

}


var map = new BMap.Map("container");
var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
map.addControl(new BMap.NavigationControl(opts));               // 添加平移缩放控件
//map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
//map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件

//map.enableScrollWheelZoom();                  // 启用滚轮放大缩小。
//map.enableKeyboard();                         // 启用键盘操作。
var myGeo= new BMap.Geocoder();
function shopAddressConmove(address, content) {
	address = address.replaceAll(",","");
	// 将地址解析结果显示在地图上，并调整地图视野  
	myGeo.getPoint(address,
		function(point){
			if (point) {  
				map.closeInfoWindow();
				map.centerAndZoom(point, 16);
				var marker = new BMap.Marker(point);
				marker.enableDragging(true); // 设置标注可拖拽	   
				map.addOverlay(marker);  
				marker.addEventListener("dragstart",
					function() {
						map.closeInfoWindow();
					}
				);
				marker.addEventListener("dragend",
					function(latlng) {
						myGeo.getLocation(latlng.point, mapShowAddress);
					}
				);
				marker.addEventListener("click",
					function(latlng) {
						myGeo.getLocation(latlng.point, mapShowAddress);
					}
				);
				myGeo.getLocation(point, mapShowAddress);
			}else{
				shopAddressConmove(address.split(" ")[0], content)
			}
		}
	, "中国");
}

function shopAddressContmove(address, content) {
	address = address.replaceAll(",","");
	// 将地址解析结果显示在地图上，并调整地图视野  
	myGeo.getPoint(address, 
		function(point){  
			if (point) {  
				map.closeInfoWindow();
				map.centerAndZoom(point, 16);			
			}else{
				alert("不能解析: " + address);
			}
		}
	, "中国");
}


//添加和修改店铺时移动确定店铺位置
function mapShowAddress(response) {
	map.clearOverlays();
	if (response){
		var point = new BMap.Point(response.point.lng, response.point.lat);
		var marker = new BMap.Marker(point);
		marker.enableDragging(true); // 设置标注可拖拽	
		map.addOverlay(marker);    
		marker.addEventListener("dragstart",
			function() {
				map.closeInfoWindow();
			}
		);
		marker.addEventListener("dragend",
			function(latlng) {
				myGeo.getLocation(latlng.point, mapShowAddress);
			}
		);
		marker.addEventListener("click",
			function(latlng) {
				myGeo.getLocation(latlng.point, mapShowAddress);
			}
		); 
		
		var sContent = '<b>地址:</b>' + response.address + '<br>' + '<button onclick="setlatlng(' + point.lat + ',' + point.lng + ',this); return false;">标注在此</button>';
		var infoWindow = new BMap.InfoWindow(sContent); 
		marker.openInfoWindow(infoWindow);
		
		/*
        '<b>orig latlng:</b>' + response.name + '<br/>' + 
        '<b>latlng:</b>' + place.Point.coordinates[1] + "," + place.Point.coordinates[0] + '<br>' +
        '<b>Status Code:</b>' + response.Status.code + '<br>' +
        '<b>Status Request:</b>' + response.Status.request + '<br>' +
        '<b>Address:</b>' + place.address + '<br>' +
        '<b>Accuracy:</b>' + place.AddressDetails.Accuracy + '<br>' +
        '<b>Country code:</b> ' + place.AddressDetails.Country.CountryNameCode*/
		

	}
}

//标注店铺位置按钮调用方法
function setlatlng(lat, lng, obj) {
	document.getElementById("hLat").value = lat;
	document.getElementById("hLng").value = lng;
	obj.innerHTML = '已标注';
	obj.disabled = "disabled";
}

//-----------------------根据经纬度定位-------------
function showAddressBylatlng(lat, lng) {
	var point = new BMap.Point(lng, lat);
	map.centerAndZoom(point, 14);	
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
}


//修改店铺信息初始化店铺位置
function shopShowAddressBylatlng(lat, lng) {
	var point = new BMap.Point(lng,lat);
	map.centerAndZoom(point, 14);	
	var marker = new BMap.Marker(point);
	marker.enableDragging(true); // 设置标注可拖拽	  
	map.addOverlay(marker);
	myGeo.getLocation(point, mapOnlyShowAddress); 	
}


//添加和修改店铺时移动确定店铺位置
function mapOnlyShowAddress(response) {
	map.clearOverlays();
	if (response){
		var point = new BMap.Point(response.point.lng, response.point.lat);
		var marker = new BMap.Marker(point);
		marker.enableDragging(true); // 设置标注可拖拽	
		map.addOverlay(marker);    
		marker.addEventListener("dragstart",
			function() {
				map.closeInfoWindow();
			}
		);
		marker.addEventListener("dragend",
			function(latlng) {
				myGeo.getLocation(latlng.point, mapShowAddress);
			}
		);
		
		var sContent = '<b>地址:</b>' + response.address + '<br>';
		var infoWindow = new BMap.InfoWindow(sContent); 
		marker.openInfoWindow(infoWindow);
		
	}
}

// 编写自定义函数,创建标注
function addMarker(point, imageType,content){
if(imageType == "1"){
  var myIcon = new BMap.Icon("images/daohang.png", new BMap.Size(23, 25), {
    offset: new BMap.Size(10, 25),  // 指定定位位置
    imageOffset: new BMap.Size(0, - 26)   // 设置图片偏移
  });
 }else if(imageType=="0"){
 	var myIcon = new BMap.Icon("images/daohang.png", new BMap.Size(23, 25), {
    offset: new BMap.Size(10, 25),  // 指定定位位置
    imageOffset: new BMap.Size(0, - 77)   // 设置图片偏移
  });
 }
  var opts = {
	  width : 250,     // 信息窗口宽度
	  height: 130     // 信息窗口高度
  }
  
  var marker = new BMap.Marker(point, {icon: myIcon});
  marker.addEventListener("click",
			function(latlng) {
				var infoWindow = new BMap.InfoWindow(content,opts); 
				this.openInfoWindow(infoWindow);
			}
		); 
  map.addOverlay(marker);
}

function showPeripheryShop(noshowid,size){	
	var bounds = map.getBounds();
	var str = new Array("A","B","C","D","E","F","G","H","I");
	var $peripheryShop = $("#peripheryShop");
	$.ajax({
		type: "POST",
		url: auto.base + "/auto/shop!ajaxGetShopByLatlng.action",
		dataType: "json",
		data:{"east":bounds.getNorthEast().lng,"west":bounds.getSouthWest().lng,"south":bounds.getSouthWest().lat,"north":bounds.getNorthEast().lat,"size":size},
		success: function(data) {
			var j=0;
			var html = "";
			for(var i=0;i<data.length;i++){
				if(noshowid!=data[i].id){
					var point = new BMap.Point(data[i].lng,data[i].lat);
	  				addMarker(point,j,data[i].name,data[i].address);
	  				html += '<li><a href="'+auto.base+'/auto/shop/'+data[i].id+'.htm" target="_blank">'+str[j]+'.'+data[i].name+'</a><div class="car_xstar carPNG"><div class="s'+data[i].averTotleScore+' carPNG"></div></div></li>';
	  				j++;
  				}
			}
			$peripheryShop.html(html);
		}
	});
}

