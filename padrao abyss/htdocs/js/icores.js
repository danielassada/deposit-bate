/* ColorPicker */

function ColorPicker(clr) {
invertHx(clr)
}

/* HexArray Builder */
var alfabetoHex="0123456789ABCDEF"

var priD=0 //dígito primeiro
var segD=-1 //digito segundo
var colHex=new Array()
var colNor=new Array()
for(i=0;i<256;i++){
iaua=(alfabetoHex.length-2)
	if(segD>iaua){
	segD=0
	priD++
	}
	else {
	segD++
	}
colHex[i]=""+alfabetoHex.charAt(priD)+""+alfabetoHex.charAt(segD)+""
colNor[""+alfabetoHex.charAt(priD)+""+alfabetoHex.charAt(segD)+""]=i
}

function toHex(r,g,b){
var resultado=""
resultado+="#"+colHex[r]+""
resultado+=""+colHex[g]+""
resultado+=""+colHex[b]+""
return resultado;
}
function fromHex(v){
var resultado=""
resultado+=""+colNor[v]+""
return resultado;
}
function invertHx(v){
var cR=0;var cG=0;var cB=0

cR=v.substring(1,3)
cR=cR.toUpperCase()

cG=v.substring(3,5)
cG=cG.toUpperCase()

cB=v.substring(5,7)
cB=cB.toUpperCase()

sr=fromHex(cR);sg=fromHex(cG);sb=fromHex(cB)

invertClr(sr, sg, sb)
}
function invertClr(r,g,b){
nwR=(255-r)
nwG=(255-g)
nwB=(255-b)
alert("Real color: "+toHex(r,g,b)+"\nInverse color: "+toHex(nwR,nwG,nwB)+"")
realClr.style.backgroundColor=toHex(r,g,b)
realClr.innerHTML=toHex(r,g,b)

inverseClr.style.backgroundColor=toHex(nwR,nwG,nwB)
inverseClr.innerHTML=toHex(nwR,nwG,nwB)


}


var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});