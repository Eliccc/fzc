function bodyOnMouseDown()
{
    var e = event || window.event; 
    var elem = e.target || e.srcElement;  
    while (elem) {
        if(elem.className && elem.className.indexOf('imgCancelBtn') != -1 ){
            
            return;
        }
        elem = elem.parentNode;  
    }
    //没有的话
    customer_image_controler.hideX(this.showed);
    return ;

}
var customer_image_controler = {
    isLongTap: false,
    longTapTimer: false,
    haveX: false,
    showed: false,
    reMoveX: false,
    rmCancelBtn: function(elem){
        var id = elem.parentNode.parentNode.getAttribute('dhx_f_id')
        this.delSelectedPic('imgs', id);
        console.log(elem.parentNode)
        this.hideX(elem.parentNode);
        this.reMoveX = true;
    },
    imgMouseUp: function(e, that){
        if(this.longTapTimer){
            clearTimeout(this.longTapTimer);
        }
    },
    imgMousedown: function(e, that){
        var _this = this;
        if(that.children[1].children[0].src.indexOf('imgs/dataview/add.png') != -1){
            console.log('只能选图片');
        }else{
            _this.longTapTimer = setTimeout(function(){
                _this.showX(that);
                _this.isLongTap = true;
                clearTimeout(_this.longTapTimer);
            }, 1000);
        }
    },
    showX: function(that){
        this.haveX = true;
        this.showed = that;
        var targetId = that.parentNode.getAttribute('dhx_f_id');
        that.children[0].style.display = 'block';
        var vdata = customer_Dataview.serialize();
        for(var i=0; i < vdata.length; i++){
            if(vdata[i].id == targetId){
                vdata[i].hideCancelBtn = 'show';
            }
        }
    },
    hideX: function(that){
        this.haveX = false;
        if(that && that.parentNode){
            var targetId = that.parentNode.getAttribute('dhx_f_id');
            that.children[0].style.display = 'none';
            var vdata = customer_Dataview.serialize();
            for(var i=0; i < vdata.length; i++){
                if(vdata[i].id == targetId){
                    vdata[i].hideCancelBtn = 'hide';
                }
            }
        }
    },
    imgMouseMove: function(e, that){
        if(start){
            this.imgMouseMove = true;
            clearTimeout(this.longTapTimer);
        }
    },
    imgMouseClick: function(that){
        var _this = this;
        var inputFile = document.getElementById('imgs');
        inputFileonclick = function(){
            var xmlName = document.getElementById("xmlName").value;
            $('#myModal').modal('hide');
            this.addCusImageDataView({name: xmlName, pics: customer_image_view_contrust.customer_dataview_add_icon})
            count++;
        };

        var id = that.parentNode.getAttribute('dhx_f_id');
            if(!this.isLongTap && !this.haveX && !this.reMoveX){
                console.log('单击');
                if(id =='others'){
                    var modal = new Modal();
                    modal.setSaveCallBack(function(){
                        var xmlName = document.getElementById("xmlName").value;
                        modal.hide();
                        var tid = Math.random();
                        var itemData = {id : 'item' + tid, name : xmlName, pics : 'imgs/dataview/add.png'};
                        _this.addCusImageDataView({id : tid, name: xmlName, pics: customer_image_view_contrust.customer_dataview_add_icon,hideCancelBtn:'hide', order : customer_Dataview.dataCount()});
                    })
                    modal.show();
                }else{
                    if(isPC()){
                        var imgs = inputFile;
                        imgs.onchange = function(){
                            _this.preImg('imgs', id);
                            document.getElementById('imgs').value = '';
                        };
                        imgs.click();
                    }else{
                        //跳转相册选取照片
                        this.startCibfactoryAlbum(id , 100000,'userTest',true);
                    }
                
                }
                
            }
            this.reMoveX = false;
            this.isLongTap = false;
            this.imgMouseMove = false;
            
    },
    getElementByAttr: function(tag, attr, value)
    {
        var aElements = document.getElementsByTagName(tag);
        var tagEles = [];
        for(var i = 0; i < aElements.length; i++){
            if(aElements[i].getAttribute(attr) == value){
                tagEles.push(aElements[i]);
            }
        }
        return tagEles;
    },
    addCusImageDataView: function(data)
    {
        customer_Dataview.add(data);
        customer_Dataview.moveBottom('others');
    },
    //跳转相册选取照片
    startCibfactoryAlbum: function(id, notesId, userName,isSingleSelected){
        var onSucceeded = function(resultJson) {

    //      console.log(resultJson);
            var reasutArray = JSON.parse(resultJson);
            var url = reasutArray[0].imgBase64;
    //      var imgPre = getElementByAttr('div', 'dhx_f_id', id);
            //imgPre.src = url; 

            var imgPre = getElementByAttr('div', 'dhx_f_id', id);
            var vdata = customer_Dataview.serialize();
            for(var i=0; i < vdata.length; i++){
                if(vdata[i].id == id){
                    vdata[i].pics = url;
                }
            }
            imgPre[0].children[0].children[1].children[0].src=url
            
        }
        var onFailed = function(resultJson) {
    //      console.log(resultJson);
            alert('js回调成功, login 失败 + resultJson:' + resultJson);
        }
        WebApp.this.startCibfactoryAlbum(onSucceeded,onFailed,notesId, userName,isSingleSelected);
    },
    createHidenInputFile: function (id){
        var inputFile = document.createElement('input');
        inputFile.id = id;
        inputFile.type = 'file';
        return inputFile;
    },


    /** 
    * 从 file 域获取 本地图片 url 
    */ 
    getFileUrl: function(sourceId) { 
        var url; 
        if (navigator.userAgent.indexOf("MSIE")>=1) { // IE 
            url = document.getElementById(sourceId).value; 
        } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox 
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0)); 
        } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome 
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0)); 
        } 
        return url; 
    },

    /** 
    * 将本地图片 显示到浏览器上 
    */ 
    preImg: function(sourceId, targetId) { 
        var url = this.getFileUrl(sourceId); 
        var imgPre = this.getElementByAttr('div', 'dhx_f_id', targetId);
        var vdata = customer_Dataview.serialize();
        for(var i=0; i < vdata.length; i++){
            if(vdata[i].id == targetId){
                vdata[i].pics = url;
            }
        }
        imgPre[0].children[0].children[1].children[0].src=url

    },
    /*
        删除已经选中的图片
    */
    delSelectedPic: function(sourceId, targetId){
        var url = customer_image_view_contrust.customer_dataview_add_icon;
        var imgPre = getElementByAttr('div', 'dhx_f_id', targetId);
        var vdata = customer_Dataview.serialize();
        for(var i=0; i < vdata.length; i++){
            if(vdata[i].id == targetId){
                vdata[i].pics = url;
            }
        }
        imgPre[0].children[0].children[1].children[0].src=url
    }

}