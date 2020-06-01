const parser = new DOMParser();

const table1 = `
    <table style="margin: 0 auto">
        <tbody>
        <tr>
            <td style="color: #ff00ff; background-color:#FFFFFF">Q</td>
            <td style="background-color: #442244; color: #442244">Y</td>
            <td style="color: #FFFF00; background-color:#442244">A</td>
        </tr>
        <tr>
            <td style="color: #FFEEFE; background-color:#990000">Q</td>
            <td style="color: #FFFF00; background-color:#FF0">M</td>
            <td style="color: #000000; background-color:#FF7777">O</td>
        </tr>
        </tbody>
    </table>
`;

const table2A=`
    <table style="margin: 0 auto">
        <tbody>
        <tr>
            <td style="color: #ff00ff;">Q</td>
            <td style="color: #442244;">Y</td>
            <td style="color: #FFFF00;">A</td>
        </tr>
        <tr>
            <td style="color: #FFEEFE;">Q</td>
            <td style="color: #FFFF00;">M</td>
            <td style="color: #000000;">O</td>
        </tr>
        </tbody>
    </table>
`;

const table2B=`
<table style="margin: 0 auto">
    <tbody>
    <tr>
        <td style="background-color:#FFFFFF">Q</td>
        <td style="background-color: #442244;">Y</td>
        <td style="background-color:#442244">A</td>
    </tr>
    <tr>
        <td style="background-color:#990000">Q</td>
        <td style="background-color:#FF0">M</td>
        <td style="background-color:#FF7777">O</td>
    </tr>
    </tbody>
</table>
`;

//QYAQMO

const fullHTMLDoc = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>${table1}</body>
</html>
`;



QUnit.test( "Base Test", function( assert ) {
    let testHTML = parser.parseFromString(table1, "text/html");
    assert.equal( generateString(testHTML), "QAQO", "Passed!" );
});
QUnit.test( "Base Test in full document", function( assert ) {
    let testHTML = parser.parseFromString(fullHTMLDoc, "text/html");
    assert.equal( generateString(testHTML), "QAQO", "Passed!" );
});

QUnit.test( "No background-color", function( assert ) {
    let testHTML = parser.parseFromString(table2A, "text/html");
    assert.equal( generateString(testHTML), "QYAQMO", "Passed!" );
});

QUnit.test( "No text color", function( assert ) {
    let testHTML = parser.parseFromString(table2B, "text/html");
    assert.equal( generateString(testHTML), "QYAQMO", "Passed!" );
});  



/*
function processTDs (tdArr) {
    let string = '';
    tdArr.forEach(td => {
        if (td.style) {

        } else {
            console.error('missing style attribute');
            return false 
        }
        let textColor = td.style.color ? td.style.color : window.getComputedStyle(td, null).getPropertyValue("color");
        let bgColor = td.style.background ? td.style.background : window.getComputedStyle(td, null).getPropertyValue("background-color");
        
        if (textColor === bgColor) {
            string+=td.innerText;
        }
    });

    return string;


}
*/