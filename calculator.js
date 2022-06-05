function buttonclear() {
	document.getElementById("screen").value = ""
}

function buttonclick(val) {
	document.getElementById("screen").value += val;
}

function result(eql) {
	var result = eval(document.getElementById("screen").value);
	document.getElementById("screen").value = result;
}
