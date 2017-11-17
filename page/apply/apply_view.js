var apply_view = {
    attach_layout: function(parentView){
        var apply_layout = parentView.attachLayout("1C");
        var apply_top_view = apply_layout.cells("a");
        apply_top_view.hideHeader();
        this.form = apply_top_view.attachForm(apply_view_construct.apply_form_items());

        apply_controler.initSelectOptions();
        apply_controler.initFormValue();
        this.form.attachEvent("onChange", function (name, value){
             apply_controler.onFormChange(name, value);
        });
        this.form.attachEvent("onFocus", function (name){
             apply_controler.onFormFocus(name);
        });
    },
    package_layout: function(parentObject){
        return parentObject.attachForm(base_view_construct.form_items());
    }
}

var apply_view_construct = {
    apply_form_set_left: 50,
    apply_form_label_width: 100,
    apply_form_input_width: 200,
    apply_form_label_width_long: 350,
    apply_form_checked_label_width: 60,
    apply_form_checkbox_label_width: 30,
    apply_form_block_set_left: 30,
    apply_form_block_width: 400,
    apply_form_items: function(){
        return [ 
            {type: "settings", position: "label-left", labelWidth: this.apply_form_label_width, inputWidth: this.apply_form_input_width},
            {type: "label",list: [
                {type: "settings", offsetLeft: this.apply_form_set_left},
                {type : "input",name : "applLoanAmt",label : "申请金额(元)",required : true, numberFormat: ["0,000.00"]},    
                {type : "input",name : "downPayPct",label : "首付比例（%）",required : true,disabled :true},      
                {type : "input",name : "applTotTnrNum",label : "申请期限(月)",required : true,},             
                {
                    type : "select",name : "useLimitInd",label : "是否使用额度",required : true,
                    options : [{value: "0", text: "否"}]
                },  
                {type: "block",width: this.apply_form_block_width, offsetLeft: this.apply_form_block_set_left,list: [
                {type: "settings",offsetLeft:0,position: "label-left",},
                    {type : "label",name : "guarantyType",label : "担保方式<a style='color:red'>&nbsp;*</a>"},
                    {type: "newcolumn"},
                    {type: "checkbox", name : 'c1',label: "信用", labelWidth:this.apply_form_checkbox_label_width},
                    {type: "newcolumn"},
                    {type: "checkbox", name : 'c2',label: "抵押", labelWidth:this.apply_form_checkbox_label_width},
                    {type: "newcolumn"},
                    {type: "checkbox", name : 'c3',label: "保证", labelWidth:this.apply_form_checkbox_label_width},
                    {type: "newcolumn"},
                    {type: "checkbox", name : 'c4',label: "质押", labelWidth:this.apply_form_checkbox_label_width}, 
                        ]},
                {   type : "select",name : "guarantyCode",label : "主担保方式",required : true,
                    options : []
                },              
                {
                    type : "select",name : "compoInd",label : "是否组合贷款",required : true,
                    options : []
                },
                {type : "input",name : "applyBusinessCode",label : "产品属性",required : true}, 
                    {type: "newcolumn"},
                {type : "input",name : "houseAmt",label : "购置总价(元)",required : true,numberFormat: ["0,000.00"]}, 
                {type : "input",name : "downPayAmt",label : "首付金额(元)",required : true, numberFormat: ["0,000.00"]}, 
                {type : "input",name : "secRatioPct",label : "总抵押率(%)",required : true,disabled :true},         
            ]}
        ];
    }
}
