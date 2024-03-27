function tts() {
    // Get the content of the 'blog' element
    const content = document.getElementById('blog').textContent;

    // Create a new SpeechSynthesisUtterance instance
    const message = new SpeechSynthesisUtterance();

    // Set the text to be spoken to the content of the 'blog' element
    message.text = content;

    // Get a list of available voices
    const voices = window.speechSynthesis.getVoices();

    // Find the voice named "David" (you can replace this with the desired voice name)
    const selectedVoice = voices.find(voice => voice.name === 'Microsoft James - English (Australia)');

    if (selectedVoice) {
        // Set the selected voice for the message
        message.voice = selectedVoice;

        // Create an instance of the speech synthesis object
        const speechSynthesis = window.speechSynthesis;

        // Start speaking
        speechSynthesis.speak(message);
    } else {
        console.log("Voice 'David' not found.");
    }
}


function listVoices() {
    // Get a list of available voices
    const voices = window.speechSynthesis.getVoices();

    // Loop through the list of voices and print their details
    voices.forEach(function(voice, index) {
        console.log("Voice " + index + ":");
        console.log("Name: " + voice.name);
        console.log("Lang: " + voice.lang);
        console.log("Default: " + voice.default);
        console.log("URI: " + voice.voiceURI);
        console.log("---");
    });
}

// Wait for the voices to be loaded (voices are usually loaded asynchronously)
window.speechSynthesis.onvoiceschanged = function() {
    listVoices();
};
