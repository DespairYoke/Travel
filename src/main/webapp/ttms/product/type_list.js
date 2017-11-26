var columns = [
{
field : 'selectItem',
radio : true
},
{
title : '分类id',
field : 'id',
visible : false,
align : 'center',
valign : 'middle',
width : '80px'
},
{
title : '分类名称',
field : 'name',
align : 'center',
valign : 'middle',
sortable : true,
width : '180px'
},
{
title : '上级分类',
field : 'parentName',
align : 'center',
valign : 'middle',
sortable : true,
width : '180px'
},
{
title : '排序号',
field : 'sort',
align : 'center',
valign : 'middle',
sortable : true,
width : '100px'
}];//定义table表头及每列元数据信息

$(function(){
	doGetObjects();
});
function doGetObjects(){
  var tableId="typeTable";
  var url="type/doFindObjects.do";
  //TreeTable是在tree.table.js中定义的
  var table=new TreeTable(tableId, url, columns);
  //设置在哪一列上展开树结构(0表示第一列)
  table.setExpandColumn(2);
  //初始化table对象(底层会发起异步请求获得数据然后更新页面)
  table.init();
}
























