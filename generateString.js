function generateString (HTML) {
    let arrOfTds = [];
    let rows = HTML.querySelectorAll('table tr');

    rows.forEach((row)=>{
        let tds = row.querySelectorAll('td');
        tds.forEach(td=>arrOfTds.push(td))
    });
    return processTDs(arrOfTds);


    function processTDs (tdArr) {
        let string = '';
        tdArr.forEach(td => {
            if (td.style) {
                let textColor = td.style.color ? td.style.color : window.getComputedStyle(td, null).getPropertyValue("color");
                let bgColor = td.style.backgroundColor ? td.style.backgroundColor : window.getComputedStyle(td, null).getPropertyValue("background-color");
    
                if (textColor !== bgColor) {
                    string+=td.innerText;
                }
            } else {
                console.error('missing style attribute');
                return false 
            }
        });
        return string;
    }

}
