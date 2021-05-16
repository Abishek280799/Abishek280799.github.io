var names=new Array();
names[0]="Abi";
names[1]="Ari";
names[2]="boombies";
names[3]="bos";
names[4]="dhoni";
names[5]="csk";
names[6]="jos";
names[7]="James";
names[8]="jana";
names[9]="jaga";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}