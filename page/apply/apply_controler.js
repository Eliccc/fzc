var apply_controler = {
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
            ['applLoanAmt','downPayPct','applTotTnrNum','useLimitInd','guarantyType','guarantyCode'
            ,'compoInd','applyBusinessCode','houseAmt','downPayAmt','secRatioPct'];
            
            optionid 接口名/编号 功能
            applyTypeCode 码表/003
            useLimitInd 
            guarantyCode

            动态接口：
                补全
        */

        apply_view.form.reloadOptions("useLimitInd", CodeLibraryCache.getItems("YSENO_IND_CODE"));
        console.log(1)
        apply_view.form.reloadOptions("guarantyCode", CodeLibraryCache.getItems("GUARANTY_CODE"));
        apply_view.form.reloadOptions("compoInd",CodeLibraryCache.getItems("YSENO_IND_CODE"));
    },
    initFormValue: function(){
        console.warn('添加表单回显');
        mymap = apply_data.getMap();
        for(var i in mymap)
        {
            //console.log(i+":"+mymap[i]);
            apply_view.form.setItemValue(i,mymap[i]);
        }
        apply_view.form.setItemValue("commBranchName",mymap["commBranchName"]);
        //base_view.form.setItemValue("txBchCode",value_map["txBchCode"]);
        //base_view.form.setItemValue("applyTypeCode",value_map["applyTypeCode"]);
        //base_view.form.setItemValue("loanGrpCode",value_map["loanGrpCode"]);
        //base_view.form.setItemValue("loanTypeCode",value_map["loanTypeCode"]);
    },
    onFormChange: function(name, value){
        apply_data._formDataMap.name = value;
        console.warn("本地保存");
    },
    onFormFocus: function(name){
        if(name == 'applyBusinessCode'){
            var data = ['属性1','属性2','属性3','属性4'];
            var modal = new Modal();            
            modal.show('产品属性',1, data, function(index){
                    
                }, 
                function(){
                   
                    modal.hide();
                }
            );
        }
    }
}