const brokenquotes=[ "Your heart will heal, your tears will dry, and your story will continue.",    "One day, you'll look back and realize that it all made you stronger.",
    "The wound is the place where the Light enters you. – Rumi",
    "Sometimes, good things fall apart so better things can fall together. – Marilyn Monroe",
    "Healing doesn’t mean the damage never existed. It means the damage no longer controls our lives.",
    "No matter how much it hurts now, one day you will look back and be grateful it brought you to a better place.",
    "You are not broken. You are breaking through.",
    "When you’re going through hell, keep going. – Winston Churchill",
    "Even the darkest night will end, and the sun will rise.",
    "You don’t have to control your thoughts. You just have to stop letting them control you.",
    "One of the hardest lessons in life is letting go, whether it’s guilt, anger, love, loss, or betrayal.",
    "Sometimes, it’s better to move on without closure. Some people can’t give you what you need because they are empty.",
    "Letting go does not mean you stop caring. It means you stop trying to force others to.",
    "Healing takes time, but every small step forward is progress.",
    "Your heart will heal, and your soul will shine again. Keep going.",
    "What lies ahead is much more important than what we leave behind.",
    "Pain is real, but so is hope.",
    "Never regret being a good person, even to the wrong people.",
    "Sometimes, you have to let go of the life you planned to make room for the life waiting for you.",
    "Broken hearts hurt but they make you strong and help you grow.",
    "Sometimes what didn’t work out for you really worked out for you.",
    "Forgive yourself for accepting less than you deserved. But don’t do it again.",
    "You’re allowed to let go of people who constantly make you feel undervalued.",
   
    "Moving on doesn’t mean forgetting; it means you choose happiness over hurt.",
    "Don’t let the heart that didn’t love you keep you from the one that will.",
    "It’s okay to not have it all figured out right now.",
    "One day, you’ll thank yourself for never giving up.",
    "It hurts now, but remember: the pain you feel today will be your strength tomorrow.",
    "You’re worthy of love, peace, and healing.",
    "Someday, all the love you’ve given to the wrong people will find its way back to you.",
    "Your story isn’t over; this is just a chapter.",
    "No matter what, you’re allowed to take time to heal.",
    "Give yourself permission to be happy again.",
    "Trust the process; healing is a journey, not a destination.",
    "Some endings are beginnings in disguise.",
    "Let your scars remind you that healing is possible.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "You’ll smile again, laugh again, and love again.",
    "Just because you miss someone doesn’t mean you need them back.",
    "It’s okay to feel lost. It’s part of finding your way.",
    "Pain changes people, but it also shapes resilience.",
    "Don’t let a broken heart define you.",
    "The comeback is always stronger than the setback.",
    "No one is you, and that is your power.",
    "Your value doesn’t decrease based on someone’s inability to see your worth.",
    "Healing doesn’t mean you forget; it means you remember without pain.",
    "You owe it to yourself to keep moving forward.",
    "Don’t let the memory of what hurt you keep you from what could heal you.",
    "Sometimes the best way to be happy is to learn to let go.",
    "Never chase anyone. A person who appreciates you will stay on their own.",
    "Time may not erase the pain, but it will lessen its sting.",
    "Your future needs you, not your past.",
    "Take a deep breath; this is just a chapter, not your whole story."
];
let currentIndex = Math.floor(Math.random() * brokenquotes.length); // Set a random index on load

function displayQuote() {
    const quoteElement = document.getElementById('t1');
    if (quoteElement) {
        quoteElement.innerHTML = `"${brokenquotes[currentIndex]}"`;
    }
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % brokenquotes.length;
    displayQuote();
}

function previousQuote() {
    currentIndex = (currentIndex - 1 + brokenquotes.length) % brokenquotes.length;
    displayQuote();
}

// Corrected window.onload to display a random quote initially
window.onload = () => {
    displayQuote();
};