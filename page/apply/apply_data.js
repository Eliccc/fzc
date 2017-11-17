var apply_data = {
    _formDataMap: {}, //存储表单数据
    getMap: function(){
        if (getMapLength(apply_data._formDataMap) == 0)
        {
            apply_data._formDataMap = apply_data.getRemoteMap();
        }
        return apply_data._formDataMap;
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
}