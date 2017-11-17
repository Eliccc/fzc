var top_view,left_view,right_view;

var _main_toolbar_items = 
[
  {id: "Add", type: "button", img: "add1.png", img0: "add0.png"},
  {id: "Delete", type: "button", img: "delete1.png", img0: "delete0.png"},
  {id: "Save", type: "button", img: "save1.png", img0: "save0.png"},
  {id: "Commit", type: "button", img: "commit1.png", img0: "commit0.png"},
  {id: "Refresh", type: "button", img: "refresh1.png", img0: "refresh0.png"},
];
var _main_left_sliderbar_items =
[
	{id: "base", text: "基础信息", icon: "baseinfo.png", selected: true},
	{id: "customer", text: "客户信息", icon: "customer.png"},
	{id: "apply",   text: "贷款信息",   icon: "apply.png"  },
	{id: "info", text: "预审批结果", icon: "result.png"}
];

var main_view = {
	top_div_height: 40,
	left_div_width: 130,
	toolbar_icons_path: "imgs/toolbar/",
	toolbar_items: _main_toolbar_items,
	left_sliderbar_icons_path: "imgs/sidebar/",
	left_sliderbar_width: 150,
	left_sliderbar_template: "tiles",
	left_sliderbar_items :_main_left_sliderbar_items,
	onLoad: function(){
		var main_Layout = this.main_Layout;
		href_arg_map = GetArgsFromHref(window.location.href);
		if (main_Layout != null) myLayout.unload();
		var main_Layout = new dhtmlXLayoutObject({
				parent: document.body,
				pattern: "3T"
			});

		top_view = main_Layout.cells("a");
		left_view = main_Layout.cells("b");
		right_view = main_Layout.cells("c");

		main_view.fixLayout();
		
		top_view.appendObject("div_top");
		left_view.appendObject("div_left");
		
		main_view.attachLeftSliderbar();
		main_view.attachTopToolbar();

		base_view.attach_layout(right_view);
		app.setCurrentPage("base");

	},
	fixLayout: function(){
		top_view.setHeight(main_view.top_div_height);
		top_view.fixSize(true, true);
		top_view.hideHeader();
		left_view.setWidth(main_view.left_div_width);
		left_view.fixSize(true, true);
		left_view.hideHeader();
		right_view.hideHeader();
		main_view.showTopButtons(["save","commit","refresh"]);
	},
	attachLeftSliderbar: function(){
		LeftSidebar = new dhtmlXSideBar({
			parent: "div_left",
			icons_path: main_view.left_sliderbar_icons_path,
			width: main_view.left_sliderbar_width,
			template: main_view.left_sliderbar_template,
			items: main_view.left_sliderbar_items
		});
		LeftSidebar.attachEvent("onSelect", function(id){
			main_controlder.onLeftSelect(id);
		});
	},
	attachTopToolbar: function(){
		var k0 = document.getElementById('div_top_left');
		k0.innerHTML = "预审批编号："+href_arg_map['apply_id'];	
	},
	showTopButtons: function(arr){
		var v="";
		for(i=0;i < main_view.toolbar_items.length;i++)
		{
			var b = main_view.toolbar_items[i];
			if (b==null || b==undefined)
				break;
			if (indexOfArray(arr,b['id'].toLowerCase())>=0)
			{
				v = v+ "<input id=\"" + b['id'] + "\" type=\"image\" src=\"" + main_view.toolbar_icons_path + b['img'] + "\" onmouseover=\"this.src='" + main_view.toolbar_icons_path + b['img0'] + "'\" onmouseout=\"this.src='" + main_view.toolbar_icons_path + b['img']+"'\" onClick = \"main_controlder.main_toolbar_click('"+b['id']+"')\"/>";
			}
		}
		document.getElementById('div_top_right').innerHTML = v;
	}
};



//-------------------------------------------------------------------


