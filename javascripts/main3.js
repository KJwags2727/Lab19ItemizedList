document.body.innerHTML='<p>'


funtion addItem() {


var a = new Array(3);
a[0]="Cheesecake";
a[1]="Cinnamon Roll";
a[2]="Coconut chocolate pie"

var b = new Array(3);
a[0]="$4.00";
a[1]="$5.00";
a[2]="$3.50"


for (var i=0; i<a.length; i++) {
	console.log(a[i]);
}
for (var i=0; i<b.length; i++) {
	console.log(a[i], b[i]);
}
console.log("Shopping List");


}
