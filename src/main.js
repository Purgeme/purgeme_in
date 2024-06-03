import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Score, QuantizerCelebi, argbFromHex, hexFromArgb, themeFromSourceColor, TonalPalette, Hct, themeFromImage } from "@material/material-color-utilities";


const app = createApp(App)

app.use(router)

app.mount('#app')

var numOfBackgrounds = 8
var bgImg = "/backgrounds/bg"+Math.floor(Math.random()*numOfBackgrounds)+".jpg";
document.body.style.backgroundImage = "url('"+bgImg+"')";

// Dynamic colors

// Get background image
// var img = document.getElementById("testimg");
var img = new Image();
img.src = bgImg
// Generate Material 3 color scheme from the image
themeFromImage(img, []).then(
    (value) => {

        // Check for darkMode
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Extract colors
        const scheme = systemDark ? value.schemes.dark : value.schemes.light;
        var primary = hexFromArgb(scheme.primary);
        var secondary = hexFromArgb(scheme.secondary);
        var onPrimaryContainer = hexFromArgb(scheme.onPrimaryContainer);
        var onSecondaryContainer = hexFromArgb(scheme.onSecondaryContainer);
        var primaryContainer = hexFromArgb(scheme.primaryContainer);
        var secondaryContainer = hexFromArgb(scheme.secondaryContainer);

        // Apply colors
        var r = document.querySelector(':root');
        r.style.setProperty('--border-color', primary);
        r.style.setProperty('--fg-color', onPrimaryContainer);
        r.style.setProperty('--fg-color-alt', onSecondaryContainer);
        r.style.setProperty('--bg-color', primaryContainer+"50");
        r.style.setProperty('--bg-color-alt', secondaryContainer+"50");
    }
);
