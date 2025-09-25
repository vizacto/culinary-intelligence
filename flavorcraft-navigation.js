// flavorcraft-navigation.js

/**
 * ============================================
 * Central Navigation and Routing for FlavorCraft
 * ============================================
 * This file handles all page-to-page navigation,
 * manages the initial setup wizard flow, and
 * provides utility functions for the application state.
 */

// 1. PAGE ROUTES
// This is the single source of truth for all page file names.
const pageRoutes = {
    // Core Pages
    'home': 'Home page mockup.html',
    'setup': 'modern_setup_wizard.html',

    // Engine Pages
    'dishCreation': 'modern_dish_creation_engine.html',
    'flavorEngine': 'flavor_engine_redesign.html',
    'bespokeEngines': 'bespoke_engines_redesign.html',
    'balance': 'balance_calculator_redesign.html',

    // Resource Pages
    'dishFrameworks': 'dish_frameworks_redesign.html',
    'tutorials': 'modern_tutorials_page.html',
    'science': 'science_method_redesign.html',
    'seasonal': 'seasonal_ingredients_redesign.html',

    // User-specific Pages
    'recipes': 'saved_recipes_redesign.html',
    'settings': 'settings_page_redesign.html',
    'pricing': 'pricing_page_redesign.html',
};

// 2. SETUP AND INITIALIZATION LOGIC

/**
 * Checks if the user has completed the initial setup.
 * If not, it redirects them to the setup wizard.
 */
function checkSetupRequired() {
    const hasCompletedSetup = localStorage.getItem('setupCompleted');
    const currentPage = window.location.pathname.split('/').pop();

    if (!hasCompletedSetup && currentPage !== 'modern_setup_wizard.html') {
        window.location.href = pageRoutes.setup;
    }
}

// 3. NAVIGATION FUNCTIONS

// --- Generic Navigation ---
function goBack() {
    window.location.href = pageRoutes.home;
}

// --- Home Page (`Home page mockup.html`) ---
function showSection(section) {
    if (pageRoutes[section]) {
        window.location.href = pageRoutes[section];
    }
}

function showEngine(engine) {
    const engineMap = {
        'creation': 'dishCreation',
        'flavor': 'flavorEngine',
        'bespoke': 'bespokeEngines'
    };
    if (pageRoutes[engineMap[engine]]) {
        window.location.href = pageRoutes[engineMap[engine]];
    }
}

function showInfo(info) {
    // ADD MAPPING FOR FRAMEWORKS
    const infoMap = {
        'frameworks': 'dishFrameworks',  // This was missing!
        'science': 'science',
        'tutorials': 'tutorials'
    };

    const targetPage = infoMap[info] || info;
    if (pageRoutes[targetPage]) {
        window.location.href = pageRoutes[targetPage];
    }
}

function viewSeasonalIngredients() {
    window.location.href = pageRoutes.seasonal;
}

// --- Setup Wizard (`modern_setup_wizard.html`) ---
function completeSetup() {
    localStorage.setItem('setupCompleted', 'true');
    window.location.href = pageRoutes.home;
}

// --- Dish Creation Engine (`modern_dish_creation_engine.html`) ---
function openBalanceSelector() {
    window.location.href = pageRoutes.balance;
}

// --- Flavor Engine (`flavor_engine_redesign.html`) ---
function adjustBalance() {
    window.location.href = pageRoutes.balance;
}

// --- Balance Calculator (`balance_calculator_redesign.html`) ---
function adjustPersonalPalette() {
    // This allows re-entry into the setup wizard
    localStorage.removeItem('setupCompleted');
    window.location.href = pageRoutes.setup;
}

// --- Settings Page (`settings_page_redesign.html`) ---
function changePlan() {
    window.location.href = pageRoutes.pricing;
}

// 4. EXECUTION
// Run the setup check on every page.
document.addEventListener('DOMContentLoaded', checkSetupRequired);