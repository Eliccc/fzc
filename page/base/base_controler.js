var base_controler = {
	onSave: function(){
		console.warn('修改索引 onSave');
		myurl = app.server_url+"/call.jsp";
		parameter="{appid:%22web.page%22,clazz:%22com.cib.cap.project.page.CodeLibrary%22,method:%22getSessionInfo%22,input:{itemno:%22111%22,itemname:%22test3%22}}";
		AjaxUtil.call(myurl,parameter,
			function s(v)
			{
				alert(v);
			},
			function e(v)
			{
				alert(v);
			}
		);
	},
	onRefresh: function(){
		console.warn('修改索引 onRefresh');
	},
	onCommit: function(){
		console.warn('修改索引 onCommit');
	},
	initSelectOptions: function(){
		/*
			['isCommBranchAccept','commBranchName','txBchCode','applyTypeCode','loanGrpCode','loanTypeCode','bchCode'];
			
			optionid 接口名/编号 功能
			applyTypeCode 码表/003
			isCommBranchAccept 
			动态接口：
				commBranchName cfsqzhcx/061 查找社区分行
				txBchCode login 处理机构
				|-loanGrpCode  申请类型
				|-loanTypeCode  
				bchCode: cfgxmxx 合作项目
		*/
		console.warn('CodeLibraryCache.getItems()方法返回格式需要转换');
		base_view.form.reloadOptions("isCommBranchAccept", CodeLibraryCache.getItems("YSENO_IND_CODE"));
		base_view.form.reloadOptions("commBranchName", base_data.getIsCommBranchAcceptItems());
		base_view.form.reloadOptions("txBchCode",base_data.getHandleOrg());
		base_view.form.reloadOptions("applyTypeCode",CodeLibraryCache.getItems("APPL_TYPE_CODE"));
		base_view.form.reloadOptions("loanGrpCode",base_data.getBusinessType().type);
		//loanTypeCode在onchange事件中赋值
		//base_view.form.reloadOptions("loanTypeCode",base_data.getBusinessType().productInfo[base_data.loanGrpCode_selected]);
		base_view.form.reloadOptions("bchCode",base_data.getCooperationPro());
	},
	initFormValue: function(){
		console.warn('添加表单回显');
		mymap = base_data.getMap();
	    for(var i in mymap)
		{
			//console.log(i+":"+mymap[i]);
			base_view.form.setItemValue(i,mymap[i]);
	    }
		base_view.form.setItemValue("commBranchName",mymap["commBranchName"]);
		//base_view.form.setItemValue("txBchCode",value_map["txBchCode"]);
		//base_view.form.setItemValue("applyTypeCode",value_map["applyTypeCode"]);
		//base_view.form.setItemValue("loanGrpCode",value_map["loanGrpCode"]);
		//base_view.form.setItemValue("loanTypeCode",value_map["loanTypeCode"]);
	},
	onFormChange: function(name, value){
		//处理联动
		if(name == 'loanGrpCode'){
			base_view.form.reloadOptions("loanTypeCode",base_data.getBusinessType().productInfo[value]);
		}
		console.warn("本地保存");
		base_data._formDataMap.name = value;
	}

}
