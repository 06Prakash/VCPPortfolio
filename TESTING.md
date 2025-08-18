# Portfolio Unit Tests

This directory contains comprehensive unit tests for the VCP Portfolio React application.

## Test Structure

```
src/
├── __tests__/
│   ├── App.test.js                 # Main App component tests
│   ├── App.integration.test.js     # Integration tests
│   └── testUtils.js               # Test utilities and helpers
├── Components/
│   ├── __tests__/
│   │   ├── StaticSideDraw.test.js  # Sidebar navigation tests
│   │   ├── Introduction.test.js    # Hero section tests
│   │   ├── Technology.test.js      # Skills and tech tests
│   │   ├── Projects.test.js        # Projects accordion tests
│   │   ├── KeySkills.test.js       # Key skills section tests
│   │   └── Timeline.test.js        # Career timeline tests
│   └── HelperFunctions/
│       └── __tests__/
│           └── ProjectTemplate.test.js  # Project template component tests
└── data/
    └── __tests__/
        └── dataValidation.test.js  # JSON data validation tests
```

## What's Tested

### Components
- **StaticSideDraw**: Navigation menu, social links, contact info, responsive behavior
- **Introduction**: Hero slides, external links, background images, button functionality
- **Technology**: Skills sections, certifications, proper categorization
- **Projects**: Accordion functionality, data sorting, project details display
- **KeySkills**: Achievement list rendering, content validation
- **Timeline**: Career progression, FontAwesome icons, timeline structure
- **ProjectTemplate**: Individual project item behavior, state management

### Data Validation
- **projectData.json**: Schema validation, required fields, data integrity
- **timelineData.json**: Timeline structure, icon mapping, chronological order

### Integration Tests
- Component interaction and communication
- Navigation linking between sidebar and main content
- External link security attributes
- Responsive design structure
- Accessibility features
- Animation and styling classes

## Test Features

### Comprehensive Coverage
- Unit tests for all React components
- Integration tests for component interactions
- Data validation for JSON files
- Accessibility testing
- Security testing for external links

### Testing Utilities
- Custom test helpers in `testUtils.js`
- Mock implementations for external dependencies
- Responsive design validation helpers
- Accessibility testing utilities

### Mocking Strategy
- FontAwesome icons properly mocked
- React Icons mocked for testing
- Social Icons component mocked
- JSON data files can be mocked for specific test scenarios

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test StaticSideDraw.test.js

# Run tests for specific component
npm test -- --testPathPattern=Components

# Run integration tests only
npm test App.integration.test.js
```

## Test Coverage Goals

- **Statements**: > 90%
- **Branches**: > 85%
- **Functions**: > 90%
- **Lines**: > 90%

## Key Testing Patterns

### Component Rendering
```javascript
test('renders component correctly', () => {
  render(<Component />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});
```

### User Interactions
```javascript
test('handles click events', () => {
  render(<Component />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(/* expected result */).toBe(true);
});
```

### Data Validation
```javascript
test('validates JSON structure', () => {
  expect(Array.isArray(data)).toBe(true);
  data.forEach(item => {
    expect(item).toHaveProperty('requiredField');
  });
});
```

### Accessibility Testing
```javascript
test('has proper accessibility attributes', () => {
  render(<Component />);
  const nav = document.querySelector('nav[role="navigation"]');
  expect(nav).toBeInTheDocument();
});
```

## Mock Examples

### FontAwesome Icons
```javascript
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <span data-testid="font-awesome-icon">{icon.iconName}</span>
}));
```

### JSON Data
```javascript
jest.mock('./../../data/projectData.json', () => [
  { id: 1, title: "Test Project", content: "Test content", role: "Developer", technology: "React" }
]);
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Semantic Queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Test User Interactions**: Verify that user actions produce expected results
4. **Mock External Dependencies**: Keep tests isolated and fast
5. **Validate Accessibility**: Ensure components are accessible to all users
6. **Test Error States**: Verify components handle edge cases gracefully

## Continuous Integration

These tests are designed to run in CI/CD pipelines with:
- Fast execution times
- Reliable mocking
- Comprehensive coverage reporting
- Clear failure messages

## Future Enhancements

- Visual regression testing
- Performance testing
- E2E testing integration
- Automated accessibility audits
- Cross-browser testing
