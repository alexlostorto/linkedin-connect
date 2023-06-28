startButton = document.querySelector('#start');

startButton.addEventListener('click', function() {
    let description = document.querySelector('#description').value;
    let action = document.querySelector('#action').value;

    console.log(description);
    console.log(action);

    if (startButton.textContent == 'Start') {
        startButton.textContent = 'Stop';
    } else {
        startButton.textContent = 'Start';
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "Start", description: description, action: action});
    });
});