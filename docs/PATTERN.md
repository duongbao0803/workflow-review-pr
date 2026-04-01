# AI-Agent-PR Architecture Pattern

This document defines the standard architectural pattern for the AI-Agent-PR frontend application, which is built on React + Vite + TypeScript.

## 1. Directory Structure

A clean, feature-and-screen-based architecture ensures scalability and code maintainability.

```
src/
├── assets/         # Static assets like images, SVGs, global CSS, etc.
├── components/     # (To be added) Reusable UI components shared across multiple screens (e.g., Buttons, Modals).
├── screens/        # Top-level Page/Screen components. Each file corresponds to one main view in the app.
├── utils/          # Standalone pure functions, helpers, or global state definitions.
├── App.css         # Global application styling.
├── App.tsx         # Main entry component, focuses solely on Layout and Routing/State orchestration.
└── main.tsx        # React Root entry point.
```

## 2. Core Principles

### Single Responsibility
- **`App.tsx`**: Should act as the "Router" or "Orchestrator". It renders the navigation layout and decides which Screen to present based on the state. It *must not* contain the actual screen implementations.
- **`screens/*`**: Dedicated to implementing specific views or pages. (e.g., `HomeScreen.tsx`, `NormalScreen.tsx`).
- **`utils/*`**: Isolate business logic, data models, or shared memory (e.g. `leakHelpers.ts`) from UI components.

### Avoiding God Objects
Previously, `App.tsx` contained multiple screens, making it bloated and difficult to follow.
By defining individual modules for each isolated view, every `.tsx` file stays concise, easier to audit, test, and style independently.

### Exporting Pattern
- Use **named exports** (e.g., `export function HomeScreen()`) for components within the `screens` directory. This allows IDEs to easily auto-import and keeps names consistent.
- `App.tsx` and main entry files can remain as `export default`.

## 3. Example Scenario

If you're building a new `Settings` view:
1. Create `src/screens/SettingsScreen.tsx` with `export function SettingsScreen() { ... }`
2. Define any helper data transforms in `src/utils/settingsHelper.ts` (if needed).
3. Import `SettingsScreen` into `App.tsx`.
4. Add it to the main `renderScreen()` or Router configuration.

By adhering to this modular pattern, any complex AI PR review or logic features will stay decoupled, scalable, and easy to debug.
