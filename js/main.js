document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
        "So many books, so little time. - Frank Zappa",
        "A room without books is like a body without a soul. - Marcus Tullius Cicero",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Calm minds solve loud problems.","Growth starts the moment excuses stop.",
        "Small steps beat perfect plans.",
        "Discipline works when motivation disappears.","Your future listens to what you do today.",
        "Silence is sometimes the strongest answer.",
        "Progress is better than pressure.",
        "Confidence comes from keeping promises to yourself.",
        "Storms pass, skills remain.",
        "Focus turns effort into results.","You don’t need speed, you need direction.",
        "Consistency is quiet but unstoppable.",
        "Fear shrinks when action begins.",
        "Strong habits build strong lives.","Learn fast, stay humble.",
        "Energy flows where attention goes.",
        "Patience is power in disguise.",
        "Start before you feel ready.",
        "Results love persistence.",
        "A clear mind is a competitive advantage.","Hard days train tougher minds.",
        "Self-respect grows from self-control.","Don’t rush—build.",
        "Clarity beats chaos every time.",
        "Effort compounds silently.",
        "Dreams need deadlines.",
        "Calm is a skill you can train.",
        "Progress is messy—and worth it.",
        "Do less, better.",
        "Strength begins with showing up.",
        "Pressure reveals priorities.","Learn to pause, not quit.",
        "Focus is saying no to noise.",
        "One good decision can reset everything.",
        "Discipline creates freedom.",
        "The grind ends, skills don’t.",
        "Build habits, not hype.","Quiet work creates loud results.",
        "You grow when you stay uncomfortable.",
        "Effort today buys ease tomorrow.",
        "Control what you can, release the rest.","Momentum loves action.",
        "Master basics before chasing shortcuts.",
        "Calm people think clearer.",
        "Improvement beats comparison.",
        "Start small. Stay steady.",
        "Pressure is temporary; progress is permanent.",
        "Focus turns chaos into clarity.",
        "Keep going—future you is watching.",
        "Consistency is the real talent."
    ];

    const quoteElement = document.getElementById('quote');
    const generateButton = document.getElementById('generate-btn');

    generateButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});