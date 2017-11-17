function customer_grid_row_select(key)
{
	//customer_form_image_item = {type: "image", label: " ", position: "label-right", name:"image" ,url: "../resources/icon/B.jpg"};
	//attachCustomerForm(customer_Tab.tabs("a1"),customer_form_items);
	customer_form_image_item = {type: "image", label: " ", position: "label-right", name:"image" ,url: "./sample/icon/"+key+".jpg"};
	attachCustomerForm(customer_Tab.tabs("a1"),getCustomerFormItems());
	customer_Form.setFormData(getCustomerInfo());
	customer_Tab.tabs('a1').setActive();
}

//--------------------------------------------

function customer_save_action()
{
	console.log("save");
}

function customer_refresh_action()
{
	console.log("refresh");
}

function customer_commit_action()
{
	console.log("commit");
}

function customer_add_action()
{
	console.log("add");
}

function customer_delete_action()
{
	console.log("delete");
}
