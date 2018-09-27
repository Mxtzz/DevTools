window.onload = function () {

    transToDecBtn = () => {
        var colorDecA = document.getElementById('colorDecA').value;
        var colorDecB = document.getElementById('colorDecB').value;
        var colorDecC = document.getElementById('colorDecC').value;
        var theHex = (Number(colorDecA).toString(16) + Number(colorDecB).toString(16) + Number(colorDecC).toString(16)).toUpperCase();
        console.log(theHex)
        document.getElementById('theHex').innerText = "#"+theHex;
        // bool = document.execCommand('copy');//还不能用
        // console.log(bool)
    }

    transToHexBtn = () => {
        var transToDec = document.getElementById('colorHex').value;
        var theDec = transToDec.toString().split("");
        let theDecA = parseInt((theDec[0]+theDec[1]),16);
        let theDecB = parseInt((theDec[2]+theDec[3]),16);
        let theDecC = parseInt((theDec[4]+theDec[5]),16);
        console.log(theDec)
        console.log(theDecA)
        document.getElementById('theDecA').innerText = theDecA;
        document.getElementById('theDecB').innerText = theDecB;
        document.getElementById('theDecC').innerText = theDecC;
        // bool = document.execCommand('copy');//还不能用
        // console.log(bool)
    }

}