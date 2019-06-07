<script>

var elements = document.getElementsByClassName("column");
var i;

function all(){
	for (i=0; i<elements.length; i++) {
		elements[i].style.flex = "100%";
	}
}

function beautiiful(){
	for(i=0 ; elements.length; i++) {
		elements[i].style.flex = "50%";
	}
}