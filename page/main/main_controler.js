var main_controlder = new Object;

main_controlder.onLeftSelect = function(id)
{
	app.setCurrentPage(id);
	if (id=="base"){
		base_view.attach_layout(right_view);
		main_view.showTopButtons(["save","commit","refresh"]);
	}
	if (id=="customer"){
		customer_view.attach_layout(right_view);
		main_view.showTopButtons(["save","commit","add","delete","refresh"]);
	}
	if (id=="apply"){

		apply_view.attach_layout(right_view);
		main_view.showTopButtons(["commit","save","refresh"]);
	}
	if (id=="info"){
		attach_layout_d(right_view);
		main_view.showTopButtons(["commit","add"]);
	}
	if (id=="business"){
		attach_layout_e(right_view);
		main_view.showTopButtons(["save","commit","refresh"]);
	}
}

main_controlder.main_toolbar_click = function(id)
{
	var fun_name = app.getCurrentPage()+"_controler.on"+id;
	console.log(fun_name)
	eval(fun_name+"()");
}
