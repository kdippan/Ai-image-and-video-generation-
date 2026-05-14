// GitHub Copilot can help you refine this:
async function generateMyImage() {
    const prompt = document.getElementById('userPrompt').value;
    const imageElement = await puter.ai.txt2img(prompt); 
    document.getElementById('gallery').appendChild(imageElement);
}

async function generateMyVideo() {
    const prompt = document.getElementById('userPrompt').value;
    // Puter uses high-speed models to generate short video clips
    const videoURL = await puter.ai.txt2vid(prompt); 
    const videoTag = `<video src="${videoURL}" controls autoplay></video>`;
    document.getElementById('gallery').innerHTML += videoTag;
}
