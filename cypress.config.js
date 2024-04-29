const {defineConfig} = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const {allureCypress, AllureCypress} = require("allure-cypress/reporter");

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );
    allureCypress(on, {
        resultsDir: "./allure-results"
    });
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        excludeSpecPattern: [
            "*.js",
            "*.md"
        ],
        chromeWebSecurity: false,
        projectId: "bfi83g",
        supportFile: false,
        numTestsKeptInMemory: 0,
        setupNodeEvents,
    }
})