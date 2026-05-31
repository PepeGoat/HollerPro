// HollerPro — Firebase Real-time Sync
// ─────────────────────────────────────────────────────────────
// Without this file configured, posts only appear on the device
// that wrote them. With it, everything syncs across all devices
// instantly. Free, no credit card, takes ~3 minutes to set up.
//
// SETUP:
//  1. Go to https://console.firebase.google.com
//  2. "Create a project" → give it any name → Continue through
//  3. Click the </> web icon → name it "hollerpro" → Register app
//  4. Copy the firebaseConfig object shown → paste it below
//  5. Back in the console: Build → Realtime Database → Create database
//     → pick any region → "Start in test mode" → Enable
//  6. Save this file and push to GitHub — done.
// ─────────────────────────────────────────────────────────────

window.FB_CONFIG = null;

// Replace null with your config object, for example:
// window.FB_CONFIG = {
//   apiKey: "AIzaSy...",
//   authDomain: "my-project.firebaseapp.com",
//   databaseURL: "https://my-project-default-rtdb.firebaseio.com",
//   projectId: "my-project",
//   storageBucket: "my-project.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abc123"
// };
