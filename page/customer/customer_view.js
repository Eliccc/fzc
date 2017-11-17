var customer_view = {
	attach_layout: function(parentView){
		this.layout = parentView.attachLayout("3L");

		var customer_left_view = this.layout.cells("a");
		var customer_top_view = this.layout.cells("b");
		var customer_bottom_view = this.layout.cells("c");

		customer_left_view.setWidth(customer_view_construct.customer_grid_width);
		customer_left_view.hideHeader();
		customer_top_view.hideHeader();
		customer_top_view.setHeight(customer_view_construct.customer_toolbar_height);
		customer_top_view.fixSize(false, true);
		customer_bottom_view.hideHeader();



		this.attach_customerGrid(customer_left_view);
		//this.attach_customerTabbar(b_bottom_view);
		this.attach_customerToolbar(customer_top_view);
		this.attach_customerTabbar(customer_bottom_view);
	},
	attach_customerGrid: function(parentView){
		customer_Grid = parentView.attachGrid();
		customer_Grid.setHeader(customer_view_construct.customer_grid_header);
		customer_Grid.setInitWidths(customer_view_construct.customer_grid_init_widths);
		customer_Grid.setColAlign(customer_view_construct.customer_grid_col_align);
		customer_Grid.init();
		customer_Grid.parse(customer_data.getCustomerList(),"jsarray");
		customer_Grid.selectRow(0);
		customer_Grid.attachEvent("onRowSelect", function(id){
			//customer_grid_row_select(id);
			//setStoreData();
		});
		// customer_Grid.attachEvent("onBeforeSelect", function(new_row,old_row){
		// 	if (!customer_Grid.getRowById(old_row)) return true;
		// 	customerInfoAction.customer_save_action();	
		// 	dealPicData(new_row);
		// 	return true;
		// });
	},
	attach_customerToolbar: function(parentObject){
		customer_Toolbar = parentObject.attachToolbar({
			align: customer_view_construct.customer_toolbar_align,
			icons_path: customer_view_construct.customer_toolbar_icons_path,
			items: customer_view_construct.customer_toolbar_items()
		});
	},
	attach_customerTabbar: function(parentObject){
		customer_Tab = parentObject.attachTabbar({
			mode: customer_view_construct.customer_tabbar_mode,
			tabs: customer_view_construct.customer_tabbar_tabs()
		});
		customer_info_view.attach_customerForm(customer_Tab.tabs("a1"));
		customer_image_view.attach_customerImage(customer_Tab.tabs("a2"));
		// var formItems = customer_data.getCustomerFormItems('./sample/icon/1.jpg'); //默认第一张图片
		// attachCustomerForm(customer_Tab.tabs("a1"), formItems);
		// // initCustomerFormData(customer_Tab.tabs("a1"));
		// attachCustomerImage(customer_Tab.tabs("a2"));
		// customer_Tab.attachEvent('onSelect',function(newp,oldp){
		// 	return true;
		// })
		// customer_Form.setFormData(customerInfoModel.getCustomerInfo());
		// setCustomInfo(customer_Form);  //切換页签加载对应数据
	}
}


var customer_view_construct = {
	customer_grid_width: 230,
	customer_grid_header: ",类型,姓名",
	customer_grid_init_widths: "60,*,68",
	customer_grid_col_align: "left,left,left",
	customer_toolbar_align: "right",
	customer_toolbar_icons_path: "imgs/customer_buttons/",
	customer_toolbar_height: 48,
	customer_toolbar_items: function(){
		var customer_toolbar_items = 
		[
		  {id: "credit_check", type: "button", text: "联网核查", img: "new.gif"},
		  {type: "separator"},
		  {id: "fack_check", type: "button", text: "人脸识别", img: "save.gif"},
		  {type: "separator"},
		  {type: "separator"},
		  {id: "link_device", type: "buttonSelect", text: "外设读取", img: "open.gif", img_disabled: "new_dis.gif",
			options:[
				{id: "ocr_id", type: "button" , text: "OCR身份证", img: "new.gif", img_disabled: "new_dis.gif"},
				{id: "ocr_card", type: "button", text: "OCR名片", img: "open.gif", img_disabled: "new_dis.gif"},
				{id: "id_card", type: "button", text: "身份证读卡", img: "save.gif"}
		  	]}
		];
		if(isPC()){
			customer_toolbar_items[2].disabled = true;
			customer_toolbar_items[5].disabled = true;
		}
		return customer_toolbar_items;
	},

	customer_tabbar_mode: "bottom",
	customer_tabbar_tabs: function(){
		return[
			{id: "a1", text: "客户信息", width:"248", active: true},
			{id: "a2", text: "影像信息", width:"248"}
		];
	}
}