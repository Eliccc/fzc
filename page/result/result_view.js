function attach_layout_d(parentView)
{
	showTopButtons(["refresh","commit"]);
	layout_D = parentView.attachLayout("4G");

	var d_view_1 = layout_D.cells("a");
	var d_view_2 = layout_D.cells("b");
	var d_view_3 = layout_D.cells("c");
	var d_view_4 = layout_D.cells("d");

	d_view_1.setText('提示');
	d_view_2.setText('预审批结果');
	d_view_3.setText('异常展示栏');
	d_view_4.setText('贷款申请列表');
	d_view_4.collapse();

	attachCustomerGrid(d_view_2,getCustomerList());
	//attachCustomerTabbar(b_bottom_view,customer_form_data);
	//attachCustomerToolbar(b_top_view);
}

