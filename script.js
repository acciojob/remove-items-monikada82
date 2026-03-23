//your JS code here. If required.
function removeColor(){
	const select=document.getElementById("colorSelect");
	const selectIndex=sel.selectedIndex;

	if(selectIndex!==-1){
		select.remove(selectIndex);
	}
}
	document.querySelector('input[type="button"]').addEventListener("click",remove);