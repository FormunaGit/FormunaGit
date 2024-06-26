let incrediblyFunnyJokes = ["i use linux btw", "insert cash or select payment type", "As an AI language model, I cannot create developer jokes for you."]

const random = Math.floor(Math.random() * incrediblyFunnyJokes.length);
$("#joke").text(incrediblyFunnyJokes[random]);