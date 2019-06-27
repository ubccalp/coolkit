var generatePdfButton = document.getElementById("generatePDF");
generatePdfButton.addEventListener('click', printPDF);
var addPledgeButton = document.getElementById("addPledge");
addPledgeButton.addEventListener('click', addPledgeFunc);
var removePledgeButton = document.getElementById("removePledge");
removePledgeButton.addEventListener('click', removePledgeFunc);

var numberOfPledges = 1;

function addPledgeFunc() {
    numberOfPledges++;

    // create elements, add content, add classes
    const label = document.createElement("label");
    label.classList.add("width-adjustment");
    const header = document.createElement("h4");
    header.textContent = "Pledge #" + numberOfPledges;
    //label.textContent = "Story " + numberOfStories;
    header.classList.add("storyheading");

    //const lineBreak = document.createElement("br");
    const lineBreak2 = document.createElement("br");

    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea-size-adjustment");
    textarea.classList.add("textarea-identifier");

    // append to document
    //label.appendChild(lineBreak);
    label.appendChild(header);
    label.appendChild(textarea);
    //label.appendChild(lineBreak2);
    document.getElementById("storyList").appendChild(label);
}

function removePledgeFunc() {
    var confirmation = window.confirm("Delete Pledge?");
    if (confirmation && numberOfPledges > 1) {
        numberOfPledges--;
        var lastElement = document.querySelector('label:last-child');
        lastElement.parentNode.removeChild(lastElement);
    }
}

function printPDF() {
    var pledgeCollection = document.getElementsByClassName("textarea-identifier");
    for (j = 0; j < numberOfPledges; j++) {
        console.log(pledgeCollection[j].value);
    }

    var numberOfPages = numberOfPledges / 2 - 1;

    var doc = new jsPDF();

    var pledgeNumber = 1;
    doc.text(20, 20, 'Pledge # ' + pledgeNumber);

    var textField = new TextField();
    textField.Rect = [20, 25, 180, 100];
    textField.multiline = true;
    textField.V = pledgeCollection[pledgeNumber - 1].value;
    doc.addField(textField);
    pledgeNumber++;

    if (pledgeNumber <= numberOfPledges) {
        doc.text(20, 20 + 125, 'Pledge # ' + pledgeNumber);
        var textField = new TextField();
        textField.Rect = [20, 25 + 125, 180, 100];
        textField.multiline = true;
        textField.V = pledgeCollection[pledgeNumber - 1].value;
        doc.addField(textField);
        pledgeNumber++
    }

    for (i = 0; i < numberOfPages; i++) {
        doc.addPage('l');
        doc.text(20, 20, 'Pledge # ' + pledgeNumber);
        var textField = new TextField();
        textField.Rect = [20, 25, 180, 100];
        textField.multiline = true;
        textField.V = pledgeCollection[pledgeNumber - 1].value;
        doc.addField(textField);
        pledgeNumber++;

        if (pledgeNumber <= numberOfPledges) {
            doc.text(20, 20 + 125, 'Pledge # ' + pledgeNumber);
            var textField = new TextField();
            textField.Rect = [20, 25 + 125, 180, 100];
            textField.multiline = true;
            textField.V = pledgeCollection[pledgeNumber - 1].value;
            doc.addField(textField);
            pledgeNumber++
        }
    }

    doc.save("Making a Pledge.pdf");
}
