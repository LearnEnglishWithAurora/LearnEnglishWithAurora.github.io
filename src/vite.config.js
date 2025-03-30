import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
    // base: '/aurora',
    plugins: [vitePluginRequire.default()],
    define: {
        firebaseConfig: {
            apiKey: "AIzaSyAGz2x2bGOZjgBcUxBV7E4-xLtL0NszImQ",
            authDomain: "aurora-language-learning-app.firebaseapp.com",
            projectId: "aurora-language-learning-app",
            storageBucket: "aurora-language-learning-app.appspot.com",
            messagingSenderId: "251894860890",
            appId: "1:251894860890:web:cbc7735ba34d698c56dc63",
            measurementId: "G-LKN9TF0F4D",
        },
    },
    build: {
        outDir: "./aurora",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
                error: resolve(__dirname, "./404.html"),
                demonstration: resolve(__dirname, "./demonstration.html"),
                login: resolve(__dirname, "./pages/login/index.html"),
                profile: resolve(__dirname, "./pages/profile/index.html"),
                library: resolve(__dirname, "./pages/library/index.html"),
                home: resolve(__dirname, "./pages/home/index.html"),
                // test: resolve(__dirname, "./pages/test/index.html"),
            },
        },
    },
});
