var customer_info_view = {
	attach_customerForm: function(parentObject){
		customer_Form = parentObject.attachForm(
			customer_info_view_construct.form_items()
		);
	}
}

var customer_info_view_construct = {
	customer_form_set_left: 20,
	customer_form_label_width: 75,
	customer_form_input_width: 170,
	customer_form_input_width_long: 370,
	form_items: function(){
		customer_form_image_item = {type: "image", label: " ", position: "label-right", name:"image" ,url: './sample/icon/1.jpg',id:'image'};
		var my_customer_form_items = 
		[	
			{type:"label", label:"<strong>主申请人</strong>", name : 'label',offsetLeft: '20px'},
			{type: "settings", position: "label-left", labelWidth: this.customer_form_label_width, inputWidth: this.customer_form_input_width,width:300},
			{type: "label", name:"label",list: [
				{type: "settings", offsetLeft: this.customer_form_set_left},
				customer_form_image_item,
				{type: "newcolumn"},
				{type: "input", name: "name", label: "姓名", value: ""},
				{type: "newcolumn"},
				{type: "input", name: "ex_name", label: "曾用名", value: ""},
				{type: "newcolumn"},
				{type: "select", name: "id_type", label: "身份证类型", options:[
					
				]},
				{type: "newcolumn"},
				{type: "input", name: "id_code", label: "证件号码", value: ""},
				{type: "newcolumn"},
				{type: "calendar", name: "birthday", label: "出生日期", value: ""},
				{type: "newcolumn"},
				{type: "input", name: "age", label: "年龄", value: ""},
				{type: "newcolumn"},
				{type: "input", name: "id_addr", label: "证件签发地", value: ""},
				{type: "newcolumn"},
				{type: "calendar", name: "id_term", label: "证件有效期", value: ""},
				{type: "newcolumn"},
				{type: "select", name: "fam_status", label: "婚姻状况", options:[

				]},
				{type: "newcolumn"},
				{type: "select", name: "degree", label: "最高学位", options:[
					{value: "1", text: "高中", selected: true},
					{value: "2", text: "本科"},
					{value: "3", text: "博士"}
				]},
				{type: "newcolumn"},
				{type: "select", name: "sex", label: "性别", options:[
	            				{value: "m", text: "男", selected: true},
	            				{value: "f", text: "女"}
	            			]},
				{type: "input", name: "mail_addr", inputWidth: this.customer_form_input_width_long + 50, label: "通讯地址", value: ""},
				{type: "input", name: "work_addr", inputWidth: this.customer_form_input_width_long + 50, label: "单位名称", value: ""}
			]}
		];
		return my_customer_form_items;
	}
}