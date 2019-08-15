var doc = new jsPDF();
var button = document.getElementById("generatePDF");
button.addEventListener('click', printPDF);

function printPDF() {
    //console.log('test');

    //var img = new Image()
    //img.src = 'assets/media/images/ccdq_pdf.png'
    doc.setFontSize(15);
    doc.addImage(img, 'PNG', 0, 0, 210, 290);

    doc.text(65, 131, document.getElementById("street_cars").value);
    doc.text(72, 141, document.getElementById("carshare").value);
    doc.text(72, 151, document.getElementById("percentage").value);
    doc.text(72, 161, document.getElementById("bikes").value);


    doc.text(150, 152, document.getElementById("gardens").value);
    doc.text(154, 164, document.getElementById("grow_food").value);
    doc.text(154, 175, document.getElementById("food_gardens").value);
    doc.text(154, 186, document.getElementById("veggie").value);

    doc.text(72, 190, document.getElementById("solar_panel").value);
    doc.text(72, 200, document.getElementById("roof").value);


    doc.save('Climate Change Detective Quest.pdf');
}
