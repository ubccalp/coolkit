var generatePdfButton = document.getElementById("generatePDF");
generatePdfButton.addEventListener('click', printPDF);
var addStoryButton = document.getElementById("addStory");
addStoryButton.addEventListener('click', addStoryFunc);
var removeStoryButton = document.getElementById("removeStory");
removeStoryButton.addEventListener('click', removeStoryFunc);

var numberOfStories = 1;

function squirrelChanged(squirrel) {
    if (squirrel.value == "YesSquirrel") {
        document.getElementById("canopyGaps").style.display = "none";
    }
    else {
        document.getElementById("canopyGaps").style.display = "inline";
    }
}

function addStoryFunc() {
    numberOfStories++;

    // create elements, add content, add classes
    const label = document.createElement("label");
    label.classList.add("width-adjustment");
    const header = document.createElement("h4");
    header.textContent = "Story " + numberOfStories;
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

function removeStoryFunc() {
    var confirmation = window.confirm("Delete Story?");
    if (confirmation && numberOfStories > 1) {
        numberOfStories--;
        var lastElement = document.querySelector('label:last-child');
        lastElement.parentNode.removeChild(lastElement);
    }
}

function printPDF() {
    var storyCollection = document.getElementsByClassName("textarea-identifier");
    for (j = 0; j < numberOfStories; j++) {
        console.log(storyCollection[j].value);
    }

    var numberOfPages = numberOfStories / 2 - 1;

    var doc = new jsPDF();

    var storyNumber = 1;
    doc.text(20, 20, 'Story ' + storyNumber);

    var textField = new TextField();
    textField.Rect = [20, 25, 180, 100];
    textField.multiline = true;
    textField.V = storyCollection[storyNumber - 1].value;
    doc.addField(textField);
    storyNumber++;

    if (storyNumber <= numberOfStories) {
        doc.text(20, 20 + 125, 'Story ' + storyNumber);
        var textField = new TextField();
        textField.Rect = [20, 25 + 125, 180, 100];
        textField.multiline = true;
        textField.V = storyCollection[storyNumber - 1].value;
        doc.addField(textField);
        storyNumber++
    }

    for (i = 0; i < numberOfPages; i++) {
        doc.addPage('l');
        doc.text(20, 20, 'Story ' + storyNumber);
        var textField = new TextField();
        textField.Rect = [20, 25, 180, 100];
        textField.multiline = true;
        textField.V = storyCollection[storyNumber - 1].value;
        doc.addField(textField);
        storyNumber++;

        if (storyNumber <= numberOfStories) {
            doc.text(20, 20 + 125, 'Story ' + storyNumber);
            var textField = new TextField();
            textField.Rect = [20, 25 + 125, 180, 100];
            textField.multiline = true;
            textField.V = storyCollection[storyNumber - 1].value;
            doc.addField(textField);
            storyNumber++
        }
    }

    doc.save("Collecting Stories.pdf");
}