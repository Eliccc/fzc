var base_data = {
	_formDataMap: {}, //存储表单数据
	getMap: function(){
		if (getMapLength(base_data._formDataMap) == 0)
		{
			base_data._formDataMap = base_data.getRemoteMap();
		}
		return base_data._formDataMap;
	},
	getRemoteMap: function(){
		mymap = {};
		/*
		url = app.server_url+"/call.jsp";
		parameter="{appid:'web.page',clazz:'com.cib.cap.project.page.CodeLibrary'" + ",method:'getSessionInfo',input:{itemno:'111',itemname:'test3'}}";
		AjaxUtil.call(myurl,parameter,
			function suc(v)
			{
				mymap = v;
			},
			function err(v)
			{
				alert(v);
			}
		);
		*/
		mymap["isCommBranchAccept"] = "yes";
		mymap["commBranchName"] = "0";
		return mymap;
	},
	///////////////////////
	setBaseFormData : function(){
		if (base_local_map == null) {
			base_local_map = {};
		} else {
			var field = ['isCommunityBank','commBranch','handleOrg','applyType','businessType','loanTypeCode','cooperationPro'];
			for(var t in field){
				baseinfo_Form.setItemValue(field[t], base_local_map[field[t]]);
			}
		}
	},
	echoBaseInfo: function(){
		if (mainModel.base_local_map == null){
			return;
		}
		var field = ['isCommunityBank','commBranch','handleOrg','applyType','businessType','loanTypeCode','cooperationPro'];
		for(var t in field){
			baseinfo_Form.setItemValue(field[t], mainModel.base_local_map[field[t]]);
		}
	},

	/*
		从接口获取列表下拉框的数据
	*/
	getIsCommBranchAcceptItems: function(){
		var data = AjaxUtil.synCachedCall('cfsqzhcx');
		var result = this.dataCvert2Opts_isba(JSON.parse(data));
		return result;
	},
	dataCvert2Opts_isba: function(data){
		if(typeof(data) != 'object'){
			data = JSON.parse(data);
		}
		if(AjaxUtil.isLocalJson){
			data = {info: data};
		}
		var option = data.info.result;
		var result = [];
		for (var i=0; i< option.length; i++) {
			var t = {};
			t.value = option[i].commBranchCode;
			t.text = option[i].commBranchName;
			result.push(t);
		};
		return result;
	},

	getHandleOrg: function (){
		var datas = JSON.parse(AjaxUtil.synCachedCall('login'));
		if(AjaxUtil.isLocalJson){
			datas = {info: datas};
		}
		var data = datas.info.result;
		var result = [];
		for (var i = 0; i < data.handleOrg.length; i++) {
			var t = {};
			t.value = data.handleOrg[i].handleOrgId;
			t.text = data.handleOrg[i].handleOrgName;
			result.push(t);
		};	
		return result;
	},

	getBusinessType: function (notesid){ //业务品种
		var applyType = '01';
		var param = "notesId=" + notesid + "&applyType=" + applyType;
		var data = AjaxUtil.synCachedCall('cfgbt');
		data = JSON.parse(data);
		if(AjaxUtil.isLocalJson){
			data = {info: data};
		}
		var temp = this.dataConvertTypeInfo(data.info.result);
		return temp;
	},
	dataConvertTypeInfo: function (option){ //业务品种数据转化
		var business_info = {};
		var result = [];
		var proInfos = {};
		for (var i = 0; i < option.length; i++) {
				var t = {};
				t.value = option[i].businessType;
				t.text = option[i].businessTypeName;
				result.push(t);
				business_info.type = result;
				var proInfo = [];	
				for (var j =0; j<option[i].product.length; j++) {
					var t1 = {};
					t1.value = option[i].product[j].productType;
					t1.text = option[i].product[j].productTypeName;
					proInfo.push(t1);
				};
				proInfos[t.value] = proInfo;
				business_info.productInfo = proInfos;
		};
		return business_info;
	},

	getCooperationPro: function (){
		var info =  JSON.parse(AjaxUtil.synCachedCall('cfgxmxx'));
		if(AjaxUtil.isLocalJson){
			info = {info: info};
		}
		var data = info.info.result;
		var result = [];
		for(var i = 0; i < data.length; i++){
			var t = {};
			t.value = data[i].projectCode;
			t.text = data[i].projectName;
			result.push(t);
		}
		return result;
	}














	
};



