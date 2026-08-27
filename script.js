08.27 23:10
const playBtn = document.getElementById("playBtn");
const geminiBtn = document.getElementById("geminiBtn");
const textInput = document.getElementById("textInput");
// تشغيل الصوت
playBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return;
    playBtn.classList.add("active");
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    utter.onend = () => {
        playBtn.classList.remove("active");
    };
    speechSynthesis.speak(utter);
});
// فتح Gemini ونسخ النص
geminiBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return;
    navigator.clipboard.writeText(text);
    window.open("https://gemini.google.com/app", "_blank");
});

