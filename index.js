window.onload = function () {

    transToDecBtn = () => {
        var colorDecA = document.getElementById('colorDecA').value;
        var colorDecB = document.getElementById('colorDecB').value;
        var colorDecC = document.getElementById('colorDecC').value;
        var theHex = (Number(colorDecA).toString(16) + Number(colorDecB).toString(16) + Number(colorDecC).toString(16)).toUpperCase();
        console.log(theHex)
        document.getElementById('theHex').innerText = theHex;
        bool = document.execCommand('copy');//还不能用
        console.log(bool)
    }

}