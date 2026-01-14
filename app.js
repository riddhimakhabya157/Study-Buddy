// -------------------- Study Resources --------------------
function getResources() {
    const topic = document.getElementById('topicInput').value;
    const list = document.getElementById('resourceList');
    list.innerHTML = '';

    if (!topic) {
        alert("Please enter a topic!");
        return;
    }

    const resources = [
        `AI-generated guide for "${topic}"`,
        `Video tutorials on "${topic}"`,
        `Practice exercises for "${topic}"`
    ];

    resources.forEach(res => {
        const li = document.createElement('li');
        li.textContent = res;
        list.appendChild(li);
    });

    // Simulate saving last topic
    localStorage.setItem('lastTopic', topic);
}

/// -------------------- AI Doubt Solver (Smart Simulation) --------------------
function askDoubt() {
    const question = document.getElementById('doubtInput').value.toLowerCase();
    const answerBox = document.getElementById('doubtAnswer');
    
    if (!question) {
        alert("Please type your question!");
        return;
    }

    // Offline predefined answers for common topics
    const answers = {
        "newton's law": "Newton's Laws are three fundamental laws of motion: 1) Law of Inertia, 2) F = ma, 3) Action-Reaction.",
        "circle": "A circle is a shape with all points equidistant from the center. Area = πr², Circumference = 2πr.",
        "photosynthesis": "Photosynthesis is the process by which plants make food using sunlight, CO2, and water.",
        "gravity": "Gravity is the force that attracts two bodies toward each other. On Earth, g = 9.8 m/s²."
    };

    let found = false;
    for (let key in answers) {
        if (question.includes(key)) {
            answerBox.textContent = "AI says: " + answers[key];
            found = true;
            break;
        }
    }

    if (!found) {
        answerBox.textContent = "AI says: This is a simulation answer for '" + question + "'";
    }
}


// -------------------- Motivation --------------------
function getMotivation() {
    const quotes = [
        "Believe in yourself! 💪",
        "You can do it! 🚀",
        "Every day is a chance to learn something new! 🌟"
    ];
    const text = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivationText').textContent = text;
}

// -------------------- Focus Music --------------------
function getFocusMusic() {
    const links = [
        "https://www.youtube.com/watch?v=5qap5aO4i9A",
        "https://www.youtube.com/watch?v=DWcJFNfaw9c",
        "https://www.youtube.com/watch?v=hHW1oY26kxQ"
    ];
    const music = links[Math.floor(Math.random() * links.length)];
    document.getElementById('musicLink').innerHTML = `<a href="${music}" target="_blank">Click to play focus music</a>`;
}

// -------------------- Timer Simulation --------------------
function startTimer() {
    const timerText = document.getElementById('timerText');
    let seconds = 5; // demo timer
    timerText.textContent = seconds + " seconds remaining...";
    const interval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            timerText.textContent = seconds + " seconds remaining...";
        } else {
            timerText.textContent = "Focus session complete! 🎉";
            clearInterval(interval);
        }
    }, 1000);
}

// -------------------- Login Simulation --------------------
function login() {
    alert("Login / Signup feature coming soon (Firebase Auth)");
}
