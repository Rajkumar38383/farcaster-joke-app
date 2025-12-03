// Import Farcaster SDK
import sdk from 'https://esm.sh/@farcaster/miniapp-sdk@0.1.0';

// State management
let currentJoke = '';
let isSDKReady = false;

// DOM elements
const jokeText = document.getElementById('jokeText');
const jokeBtn = document.getElementById('jokeBtn');
const shareBtn = document.getElementById('shareBtn');

// Initialize the app
async function initApp() {
    try {
        // Initialize Farcaster SDK
        const context = await sdk.context;
        console.log('Farcaster context:', context);

        // Signal that the app is ready
        sdk.actions.ready();
        isSDKReady = true;

        console.log('Farcaster SDK initialized successfully');

        // Show initial state
        jokeText.classList.remove('loading');
        jokeText.textContent = 'Click the button below for a hilarious joke! 🎉';

    } catch (error) {
        console.error('Error initializing Farcaster SDK:', error);
        // App still works without SDK, just without sharing functionality
        jokeText.classList.remove('loading');
        jokeText.textContent = 'Click the button below for a hilarious joke! 🎉';
    }
}

// Generate and display a new joke
function showNewJoke() {
    // Disable button during animation
    jokeBtn.disabled = true;

    // Remove animation class if present
    jokeText.classList.remove('animate');

    // Add loading state
    jokeText.classList.add('loading');
    jokeText.textContent = 'Getting a fresh joke';

    // Simulate a brief delay for better UX
    setTimeout(() => {
        // Get random joke
        currentJoke = getRandomJoke();

        // Update UI
        jokeText.classList.remove('loading');
        jokeText.textContent = currentJoke;
        jokeText.classList.add('animate');

        // Enable share button
        shareBtn.disabled = false;

        // Re-enable joke button
        jokeBtn.disabled = false;
    }, 500);
}

// Share joke on Farcaster
async function shareJoke() {
    if (!currentJoke) {
        alert('Generate a joke first!');
        return;
    }

    try {
        // Prepare the cast text
        const castText = `${currentJoke}\n\n😂 Generated with Joke Generator mini app!`;

        if (isSDKReady) {
            // Use Farcaster SDK to open composer
            await sdk.actions.openComposer({
                text: castText,
                embeds: [window.location.href]
            });
            console.log('Composer opened successfully');
        } else {
            // Fallback: copy to clipboard
            await navigator.clipboard.writeText(castText);
            alert('Joke copied to clipboard! Paste it in Farcaster to share.');
        }
    } catch (error) {
        console.error('Error sharing joke:', error);

        // Fallback: try to copy to clipboard
        try {
            await navigator.clipboard.writeText(currentJoke);
            alert('Joke copied to clipboard!');
        } catch (clipboardError) {
            console.error('Clipboard error:', clipboardError);
            alert('Unable to share. Please copy the joke manually.');
        }
    }
}

// Event listeners
jokeBtn.addEventListener('click', showNewJoke);
shareBtn.addEventListener('click', shareJoke);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'J' for new joke
    if (e.key === 'j' || e.key === 'J') {
        if (!jokeBtn.disabled) {
            showNewJoke();
        }
    }
    // Press 'S' to share
    if (e.key === 's' || e.key === 'S') {
        if (!shareBtn.disabled) {
            shareJoke();
        }
    }
});

// Initialize app on load
initApp();

// Auto-generate first joke after a short delay
setTimeout(() => {
    if (jokeText.classList.contains('loading') ||
        jokeText.textContent.includes('Click the button')) {
        showNewJoke();
    }
}, 1500);
