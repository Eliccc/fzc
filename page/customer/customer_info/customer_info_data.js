function getCustomerList()
{
	data =[
		   [
			  "<img style='border-radius:50%' src='./sample/icon/a1.jpg'>",
			  "主申请人",
			  "奥巴马",
			  ],
		   [
			  "<img style='border-radius:50%' src='./sample/icon/b1.jpg'>",
			  "主申请人配偶",
			  "萨达姆"],
		   [
			  "<img style='border-radius:50%' src='./sample/icon/c1.jpg'>",
			  "共同还款人",
			  "安倍"],
		   [
			  "<img style='border-radius:50%' src='./sample/icon/d1.jpg'>",
			  "保证人",
			  "普京"]
		];
	return data;
}

function getCustomerInfo()
{
	var m={};
	m["name"] = customer_Grid.cells(customer_Grid.getSelectedRowId(), 2).getValue();
	m["mail_addr"]="US Washington DC Box01";
	return m;
}
