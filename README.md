# License Plate Availability Checker 🚗💨

An automated end-to-end testing suite built with **Cypress** to navigate the Latvian CSDD portal, bypass the unified state login portal cross-origin boundary, and search for specific custom license plate patterns.

## 🛠️ Features
- **Cross-Origin Authentication:** Safely automates transitions across `csdd.lv` and the state identity provider `vpm.viss.gov.lv`.
- **Dynamic Security Sandbox Handling:** Uses advanced data-serialization techniques to pass runtime variables across secure browser contexts.
- **Environment Isolation:** Keeps sensitive production user credentials completely isolated from codebase.

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Clone the repository and install the development dependencies:
```bash
git clone [https://github.com/MindaugsLibietis/license-plate-driver.git](https://github.com/MindaugsLibietis/license-plate-driver.git)
cd license-plate-driver
npm install
```
### 3. Configuration

cypress.env.json
{
  "PERSONAL_CODE": "YOUR-PERSONAL-CODE",
  "TARGET_PLATE": "YOUR-TARGET-PLATE"
}

Interactive GUI Mode (Recommended for observation):
```bash
npx cypress open
```
Select E2E Testing, choose your browser, and launch