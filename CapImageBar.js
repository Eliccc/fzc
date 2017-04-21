function CapImageBar(imageBarConfig){
	this.capImageBar = {
		element: imageBarConfig.element,
		imageList : imageBarConfig.imageList,
		imageMap:imageBarConfig.imageMap,
		clickCallback:imageBarConfig.clickCallback,
		longClickCallback:imageBarConfig.longClickCallback,
		// 默认配置
		styleConfig: {
			width:imageBarConfig.styleConfig.width || '100%',
			width:imageBarConfig.styleConfig.width || '250px',
			unipartedWidth: imageBarConfig.styleConfig.unipartedWidth || '200px',
			unipartedHeight:  imageBarConfig.styleConfig.unipartedHeight || '200px',
			baseImage:imageBarConfig.styleConfig.baseImage || '这里要写默认的样式',
		}
	};
}


CapImageBar.prototype.comboClick = function(){

}


CapImageBar.prototype.init = function(){
	this.draw();
	this.addEvent();
}

CapImageBar.prototype.draw = function(){
	//获取了imageBar的配置
	var imageBarConfig = this.capImageBar;
	//添加dom节点
	var capImageBar = document.getElementById('capImageBar');
	
	var imageBar_inner = document.createElement("DIV");
		imageBar_inner.className = 'imageBar_inner';

	for(var i in imageBarConfig.imageList){
		var imageId = imageBarConfig.imageList[i];
		var component = document.createElement("DIV");
		component.className = 'component';
		component.id = imageId;

		var imgEle = document.createElement("IMG");
		imgEle.src = imageBarConfig.imageMap[imageId].url;
		imgEle.className = 'imgCls';
		

		var txtEle = document.createElement("DIV");
		txtEle.className = 'image_txt';
		txtEle.innerHTML = imageBarConfig.imageMap[imageId].text;

		component.appendChild(imgEle);
		component.appendChild(txtEle);
		imageBar_inner.appendChild(component);

		imageBar_inner.width = imageBarConfig
	}

	capImageBar.appendChild(imageBar_inner);
}

CapImageBar.prototype.addEvent = function(){
	var _this = this
	var imageBarConfig = this.capImageBar;
	for(var i in imageBarConfig.imageList){
		var imageId = imageBarConfig.imageList[i];
		this.addLongtap(imageId, _this)
	}
}

CapImageBar.prototype.addLongtap = function(elementId, _this){
	var file = document.getElementById('selectFile');

	var tmp;


	var timer;
	var target = document.getElementById(elementId);
	var rmEle = document.createElement("DIV");
	rmEle.id = elementId+'rm';
	rmEle.className = 'rm';
	var rmEnable = false;


//	file.onchange=function(){
//		var url = file.value;
//		console.log(target.id);
//		_this.tmp.childNodes[0].src = url;
//	}


	rmEle.onclick = function(){
		target.removeChild(rmEle);
//		div1.style.display = 'none'    //这个是删除div1
		//更换背景图
		console.log(target.id);
		target.childNodes[0].src = "./image/image0.png";
	}
	var longtap = function(){
		timer = setTimeout(function(){
			target.appendChild(rmEle);
			rmEnable = true;
			console.log('set true');
		},1000);
	
	}
	var stoptap = function(e){
		
		clearTimeout(timer);
		console.log('stoptap');
//		e.stopPropagation();
	}

	target.ontouchstart = longtap;
	target.onmousedown = longtap;
	target.onmouseup = stoptap;
	target.ontouchend = stoptap;

	target.onclick = function(e){
		console.log(rmEnable);
		if(!rmEnable){
//			_this.tmp = target;
//			file.click();
			
			rmEnable = false;
		}
	}

//
//	//点击其他地方的时候，rm隐藏
//	document.body.onmousedown = function(){
//		var e = e || window.event; 
//		var elem = e.target || e.srcElement;  
//		while (elem) {
//			if (elem.id && elem.id == elementId+'rm') {  
//				return;  
//			}
//			elem = elem.parentNode;  
//		}
//		console.log('test able:'+rmEnable);
//			document.removeChild(rmEle);
//			rmEnable = false;
//	}
}

CapImageBar.prototype.tmp;

CapImageBar.prototype.setImages = function(arr){
	this.capImageBar.imageList = arr;
}

CapImageBar.prototype.show = function(){
	
}

