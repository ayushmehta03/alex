let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
    text_speak.la = "hi-GB"
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")

    }
    else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display ='none'
    voice.style.display='block'

})

function takeCommand(message) {
    btn.style.display='flex'
    voice.style.display='none'
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir , How can I help you?")
    }

    else if (message.includes("who are you")) {
        speak("I am virtual  assistant , made by Archit Archit")
    }

    else if (message.includes("where are you")){
        speak("I am in UPES University")
    }
    else if (message.includes("which language is best")){
        speak("Python is the best programming language for all purposes")}

    
    else if(message.includes("open youtube")){
        speak("Opening youtube sir")
        window.open("https://www.youtube.com/ ")  }
    
    else if (message.includes("open my upes lms")){
        speak("Opening LMS")
        window.open("https://myupes-beta.upes.ac.in/oneportal/app/auth/login")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")

    }
    else if (message.includes("open flipkart")){
        speak("opening flipkart")
        window.open("https://www.flipkart.com/")
    }
    else if (message.includes("open amazon ")){
        speak("opening amazon")
        window.open("https://www.amazon.in/")
    }


    else{
        speak(`This is what i found on regarding ${message}`)
        window.open(`https://www.bing.com/search?q=${message}`)}

}
