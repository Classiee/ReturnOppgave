function createAndShowHtml(color, text, fontSize) {
    document.getElementById("buttons").innerHTML = '
    <button style="background-color: ' + color + '; font-size: ' + fontSize + 'px;">' + text + '</button>';
}