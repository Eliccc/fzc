var customer_image_view = {
	attach_customerImage: function(parentObject){
		customer_Dataview = parentObject.attachDataView({
			type:{
				template: customer_image_view_contrust.customer_Dataview_tpl(),
				height:150,
				width: 150
			}
		});
		customer_Dataview.parse(customer_image_view_contrust.customer_Dataview_item(),'json');
	}
}

var customer_image_view_contrust = {
	customer_dataview_add_icon: "imgs/dataview/add.png",
	customer_Dataview_item: function(){
		return [
			{name: '身份证正面', pics: this.customer_dataview_add_icon},
			{name: '身份证反面', pics: this.customer_dataview_add_icon},
			{
				'id': 'others',
				'name':'点击添加',
				'pics': this.customer_dataview_add_icon
			}
		];
	},
	customer_Dataview_tpl: function(){
		var tpl = "<div class=abccc onclick='customer_image_controler.imgMouseClick(this)' onmouseup='customer_image_controler.imgMouseUp(event, this)' onmousedown='customer_image_controler.imgMousedown(event, this)' >"+
					"<div style='position: absolute; display:none' class='imgCancelBtn #hideCancelBtn#' onclick='customer_image_controler.rmCancelBtn(this)'>X</div>"+
					"<div class=bcddd><img src='#pics#'></div>"+
					"<div class=cdeee>#name#</div>"+
					"</div>";
		return tpl;
	}
}



