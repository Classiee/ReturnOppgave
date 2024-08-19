function createAndShowHtml(color, text, fontSize, border) {
    document.getElementById("buttons").innerHTML =
    `<div ${createStyle(color, fontSize, border)}>${text}</div>`;
}

function createStyle(color, fontSize, border) {
    return `style="${createBackgroundColor(color)}${createFontSize(fontSize)}${createBorder(border)}"`;
}

function createBackgroundColor(color) {
    return `background-color: ${color};`;
}

function createFontSize(fontSize) {
    return `font-size: ${fontSize}px;`;
}

function createBorder(border) {
    return `border: ${border}px solid;`;
}