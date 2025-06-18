# Playwright TypeScript Automation Framework

## Overview
This project is a robust automation framework built with Playwright and TypeScript for testing the automationexercise.com website. It follows the Page Object Model (POM) design pattern and implements best practices for maintainable and scalable test automation.

## Architecture

### 1. Framework Structure
```
playwright-typescript-automation/
├── src/
│   ├── pages/
│   │   ├── base/
│   │   │   └── BasePage.ts         # Base page with common functionality
│   │   ├── constants/
│   │   │   └── locators.ts         # Centralized locator management
│   │   └── products/
│   │       └── ProductsPage.ts     # Product page specific functionality
│   ├── tests/
│   │   ├── smoke/
│   │   │   └── launch.test.ts      # Smoke tests
│   │   └── products/
│   │       └── products.test.ts    # Product page tests
│   └── utils/                      # (Future) Utility functions
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md
```

### 2. Key Components

#### Page Objects
- **BasePage**: Abstract class providing common functionality for all pages
  - Navigation methods
  - Element interaction methods
  - Wait utilities
  - Common assertions

- **ProductPage**: Extends BasePage with product-specific functionality
  - Product listing
  - Add to cart
  - Search functionality
  - Category navigation

#### Constants
- **locators.ts**: Centralized management of all selectors
  - URLs
  - Page-specific locators
  - Navigation elements
  - Reusable selectors

#### Tests
- **Smoke Tests**: Basic functionality verification
- **Product Tests**: Detailed product page functionality
- **Test Organization**: Grouped by feature/functionality

### 3. Playwright Features Used

#### Browser Management
- Cross-browser testing (Chromium, Firefox, WebKit)
- Browser context isolation
- Parallel test execution
- Headless/headed mode support

#### Test Runner
- Built-in test runner
- Test grouping and organization
- Before/After hooks
- Test isolation

#### Reporting
- HTML reports
- Screenshot capture
- Video recording
- Trace viewer

#### Selectors
- CSS selectors
- XPath
- Text content
- Role-based selectors

## Local Development

### 1. Code Generation
Playwright provides several tools for code generation:

```bash
# Record new test
npx playwright codegen https://www.automationexercise.com

# Record with specific browser
npx playwright codegen --browser=firefox https://www.automationexercise.com

# Record with specific viewport
npx playwright codegen --viewport-size=800,600 https://www.automationexercise.com
```

### 2. Test Development Workflow
1. Use codegen to record initial test steps
2. Refactor generated code into Page Objects
3. Add assertions and validations
4. Run tests in debug mode for verification
5. Commit to version control

### 3. Debugging Tools
- Playwright Inspector
- Trace Viewer
- Debug mode
- Console logging

## Running Tests

### Basic Commands
```bash
# Run all tests
npm test

# Run specific test file
npx playwright test src/tests/smoke/launch.test.ts

# Run tests in headed mode
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

### Test Reports
```bash
# View HTML report
npm run report

# Open trace viewer
npx playwright show-trace trace.zip
```

## Best Practices

### 1. Page Object Model
- Separate page logic from test logic
- Encapsulate selectors
- Reusable page methods
- Clear page hierarchy

### 2. Selector Management
- Centralized locator storage
- Meaningful naming conventions
- Regular maintenance
- Version control for selectors

### 3. Test Organization
- Logical grouping
- Clear naming conventions
- Independent test cases
- Proper setup and teardown

### 4. Error Handling
- Custom error messages
- Screenshot capture
- Detailed logging
- Retry mechanisms

## CI/CD Integration

### GitHub Actions
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npx playwright install
      - run: npm test
```

## Future Enhancements
1. API Testing Integration
2. Performance Testing
3. Visual Regression Testing
4. Mobile Testing
5. Custom Reporter Implementation

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
MIT License 