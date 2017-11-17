var base_view = {
	attach_layout: function(parentView){
		var base_layout = parentView.attachLayout("1C");
		var base_top_view = base_layout.cells("a");
		base_top_view.hideHeader();
		this.form = this.package_layout(
			base_top_view,
			base_view_construct.form_items()
		);
		base_controler.initSelectOptions();
		base_controler.initFormValue();
		this.form.attachEvent("onChange", function (name, value){
		     base_controler.onFormChange(name, value);
		});
	},
	package_layout: function(parentObject){
		return parentObject.attachForm(base_view_construct.form_items());
	}
}

var base_view_construct = {
	form_set_left: 50,
	form_label_width: 150,
	form_input_width: 300,
	form_input_width_long: 350,
	form_checked_label_width: 60,
	form_items: function(){return [ 
		{type: "settings", position: "label-left", labelWidth: this.form_label_width, inputWidth: this.form_input_width},
		{type: "label", list: [
			{type: "settings", offsetLeft: this.form_set_left},
			{type : "select",name : "isCommBranchAccept",label : "是否社区支行受理",required : true,
				options :[]
			}, 
			{
				type : "select",name : "commBranchName",label : "社区支行",required : true,
				options : []
			},
			{
				type : "select",name : "txBchCode",	label : "处理机构",required : true,
				options :[]
			},
			{
				type : "select",name : "applyTypeCode",	label : "申请类型",required : true,
				options : []
			}, 
			{
				type : "select",name : "loanGrpCode",label : "业务类型",required : true,
				options :[]
				
			}, 
			{
				type : "select",name : "loanTypeCode",label : "业务品种",required : true,
				options :[]
				
			}, 
			{
				type : "select",name : "bchCode",label : "合作项目",required : true,
				options :[{value: "0", text: "恒大"},{value: "1", text: "上港"}]
			}
		]}
	]}
}



