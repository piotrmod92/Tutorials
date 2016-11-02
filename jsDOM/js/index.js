var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i=0; i<items.length; i++)
{
	inputs[i].value = inputs[i].previousElementSibling.innerHTML;
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem()
{
	this.className="edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
	
}

function updateItem()
{
	this.className="edit";
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event)
{
	if (event.which === 13)
	{
		updateItem.call(this);
	}
}

/* var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", hideIt);
bruce.addEventListener("click", hideIt);
ben.addEventListener("click", hideIt);

function hideIt()
{
	var allImages = document.querySelectorAll("img");
	for(var i = 0; i < allImages.length; i++)
	{
		allImages[i].className="hide";
	}
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId)
	if(pic.className === "hide") {pic.className = "";}
	else {pic.className = "hide";}
} */


/* var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add()
{
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "your sum is: " + (one + two);
} */

