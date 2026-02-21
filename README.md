    # Playwright End-to-End Automation Testing

    A comprehensive Playwright-based test automation framework implementing the Page Object Model (POM) pattern for end-to-end testing.

    ## 📋 Project Overview

    This project demonstrates a professional test automation framework for web applications using Playwright. It includes end-to-end tests, page object models for maintainability, and data-driven testing with JSON datasets.

    ## 🛠️ Technologies Used

    - **Playwright** v1.57.0 - Modern web testing and automation framework
    - **Node.js** - JavaScript runtime
    - **ExcelJS** v4.4.0 - Excel file manipulation
    - **Firefox Browser** - Configured for test execution

    ## 📦 Prerequisites

    - Node.js (v14 or higher)
    - npm or yarn package manager
    - Firefox browser (required for configured tests)

    ## 🚀 Installation

    1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd "playwright Automation"
    ```

    2. Install dependencies:
    ```bash
    npm install
    ```

    3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

    ## 📂 Project Structure

    ```
    playwright Automation/
    ├── tests/                          # Test files
    │   ├── end2EndPOM.spec.js         # Main end-to-end tests with POM
    │   ├── endToEndTesting.spec.js    # Additional e2e tests
    │   ├── basicTest.spec.js          # Basic test examples
    │   ├── calendarTest.spec.js       # Calendar component tests
    │   ├── iframes.spec.js            # iFrame handling tests
    │   ├── fileread.js                # File reading utilities
    │   └── filereadPlaywright.spec.js # Playwright file operations
    │
    ├── pageObjectModel/               # Page Object Models
    │   ├── POManager.js               # POM manager
    │   └── cartPractice/              # E-commerce test scenarios
    │       ├── loginPage.js           # Login page object
    │       ├── cartitem.js            # Shopping cart page object
    │       ├── paymentMethod.js       # Payment page object
    │       └── confrimationOrder.js   # Order confirmation page object
    │
    ├── dataSet/                       # Test data
    │   └── e2edataSet.json           # End-to-end test data
    │
    ├── playwright-report/             # HTML test reports
    ├── test-results/                  # Test execution results
    ├── screenshots/                   # Screenshot artifacts
    ├── playwright.config.js           # Playwright configuration
    ├── package.json                   # Dependencies and scripts
    └── README.md                      # This file
    ```

    ## ⚙️ Configuration

    The `playwright.config.js` file contains the following settings:

    - **Browser**: Firefox
    - **Headless Mode**: Disabled (visible browser window)
    - **Test Timeout**: 40 seconds
    - **Expect Timeout**: 5 seconds
    - **Screenshot**: Captured on every test
    - **Trace**: Retained on failure for debugging
    - **Reporter**: HTML report generation

    ## 📝 Running Tests

    ### Run main end-to-end tests:
    ```bash
    npm run run
    ```

    ### Run all tests:
    ```bash
    npx playwright test
    ```

    ### Run specific test file:
    ```bash
    npx playwright test tests/end2EndPOM.spec.js
    ```

    ### Run tests in headed mode:
    ```bash
    npx playwright test --headed
    ```

    ### Run tests in debug mode:
    ```bash
    npx playwright test --debug
    ```

    ## 📊 Test Reports

    After running tests, view the HTML report:
    ```bash
    npx playwright show-report
    ```

    Reports are generated in the `playwright-report/` directory and include:
    - Test execution results
    - Screenshots on test failure
    - Execution traces for debugging

    ## 🏗️ Page Object Model (POM) Structure

    The project uses the Page Object Model pattern for maintainability:

    - **POManager.js**: Manager class that initializes and manages all page objects
    - **Page Objects** in `cartPractice/`:
    - `loginPage.js`: Handles login interactions
    - `cartitem.js`: Manages shopping cart operations
    - `paymentMethod.js`: Payment processing interactions
    - `confrimationOrder.js`: Order confirmation verification

    ## 📌 Key Features

    - ✅ End-to-end test automation with Playwright
    - ✅ Page Object Model for clean, maintainable code
    - ✅ JSON-based test data management
    - ✅ HTML test reporting
    - ✅ Screenshot and trace capture on failures
    - ✅ Support for iFrame and complex UI elements
    - ✅ Calendar and form interaction testing
    - ✅ Excel file handling capability

    ## 🐛 Debugging

    - Review screenshots in `screenshots/` directory
    - Check HTML reports in `playwright-report/`
    - Run tests in debug mode: `npx playwright test --debug`
    - Access trace files for failed tests in `test-results/`

    ## 📝 Best Practices

    - Use page objects for all page interactions
    - Keep test data in `dataSet/e2edataSet.json`
    - Follow naming conventions for test files (*.spec.js)
    - Review test reports after each run
    - Leverage debug mode for troubleshooting

    ## 📚 Resources

    - [Playwright Documentation](https://playwright.dev/)
    - [Page Object Model Best Practices](https://playwright.dev/docs/pom)
    - [Test Configuration Guide](https://playwright.dev/docs/test-configuration)

    ## 👤 Author

    Automation Testing Team

    ## 📄 License

    ISC