function main() {
    var I1 = document.getElementById("I1").value;
    var I2 = document.getElementById("I2").value;
    var I3 = document.getElementById("I3").value;
    var I4 = document.getElementById("I4").value;
    for(var i=1; i<=4; i++) {
        for(var j=1; j<=4; j++){
            document.getElementById("G"+i+"G"+j).value = document.getElementById("I"+i).value / document.getElementById("I"+j).value;
        }
    }

    var data = [];
    for(var i=1; i<=4; i++) {
        var row = [];
        for(var j=1; j<=4; j++){
            let v = document.getElementById("G"+i+"G"+j).value;
            row.push(v);
        }
        data.push(row);
    }
    var ViArr = [];
    var PiArr = [];
    var Vi;
    for (i=0; i<4; i++){
        let v = Math.pow(data[i][0]*data[i][1]*data[i][2]*data[i][3],(1/4));
        ViArr.push(v);
        document.getElementById("G"+(i+1)+"Vi").value = v;
    }
    Vi = ViArr[0]+ViArr[1]+ViArr[2]+ViArr[3];
    document.getElementById("Vi").value = Vi;
    for (i=0; i<4; i++){
        PiArr.push(ViArr[i]/Vi);
        document.getElementById("G"+(i+1)+"Pi").value = ViArr[i]/Vi;
    }

    var SG = [];
    for ( i=0; i<4; i++){
        let v = data[i][0]*PiArr[0] + data[i][1]*PiArr[1] + data[i][2]*PiArr[2] + data[i][3]*PiArr[3];
        SG.push(v);
        document.getElementById("SG1"+(i+1)).innerHTML = v;
    }

    var SG2 = [];
    for ( i=0; i<4; i++){
        let v = SG[i]/PiArr[i];
        SG2.push(v);
        document.getElementById("SG2"+(i+1)).innerHTML = v;
    }
    document.getElementById("max").innerHTML = (SG2[0]+SG2[1]+SG2[2]+SG2[3])/4;
    var ui = (((SG2[0]+SG2[1]+SG2[2]+SG2[3])/4)-4)/(4-1)
    document.getElementById("ui").innerHTML = ui;
    var wi = 0.9;

    document.getElementById("wi").innerHTML = wi;
    document.getElementById("wu").innerHTML = ui/wi;
}
