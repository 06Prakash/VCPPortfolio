import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Utility functions for testing
export const renderWithTestId = (Component, props = {}) => {
  return render(<Component data-testid="test-component" {...props} />);
};

export const findByTestId = (container, testId) => {
  return container.querySelector(`[data-testid="${testId}"]`);
};

export const findAllByClass = (container, className) => {
  return container.querySelectorAll(`.${className}`);
};

export const hasExternalLinkAttributes = (element) => {
  return (
    element.hasAttribute('target') &&
    element.getAttribute('target') === '_blank' &&
    element.hasAttribute('rel') &&
    element.getAttribute('rel') === 'noopener noreferrer'
  );
};

export const validateJsonStructure = (data, requiredFields) => {
  if (!Array.isArray(data)) return false;
  
  return data.every(item => 
    requiredFields.every(field => 
      item.hasOwnProperty(field) && 
      (typeof item[field] === 'string' || typeof item[field] === 'number')
    )
  );
};

export const mockProjectData = [
  {
    id: 1,
    title: "Mock Project 1",
    content: "Mock content for project 1",
    role: "Developer",
    technology: "React, JavaScript"
  },
  {
    id: 2,
    title: "Mock Project 2",
    content: "Mock content for project 2",
    role: "Lead Developer",
    technology: "Python, Django"
  }
];

export const mockTimelineData = [
  {
    color: "timeline-icon color-6",
    icon: "faCode",
    title: "Mock Position 1",
    timeSpan: "2023-Present",
    content: "Mock content for position 1"
  },
  {
    color: "timeline-icon color-3",
    icon: "faGraduationCap",
    title: "Mock Education",
    timeSpan: "2020-2023",
    content: "Mock content for education"
  }
];

// Custom matchers for better testing
export const customMatchers = {
  toHaveProperExternalLink: (received) => {
    const pass = hasExternalLinkAttributes(received);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to have proper external link attributes`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to have target="_blank" and rel="noopener noreferrer"`,
        pass: false,
      };
    }
  },

  toBeValidJsonData: (received, requiredFields) => {
    const pass = validateJsonStructure(received, requiredFields);
    
    if (pass) {
      return {
        message: () => `expected ${received} not to be valid JSON data with required fields`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be valid JSON array with fields: ${requiredFields.join(', ')}`,
        pass: false,
      };
    }
  }
};

// Setup function for common test configurations
export const setupTestEnvironment = () => {
  // Mock console.error to avoid cluttering test output
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });
};

// Helper to test CSS classes
export const expectElementToHaveClasses = (element, classes) => {
  classes.forEach(className => {
    expect(element).toHaveClass(className);
  });
};

// Helper to test responsive design elements
export const getResponsiveElements = (container) => {
  return {
    containers: container.querySelectorAll('.container, .container-fluid'),
    rows: container.querySelectorAll('.row'),
    columns: container.querySelectorAll('[class*="col-"]'),
  };
};

// Helper to test animation elements
export const getAnimationElements = (container) => {
  return {
    animateBoxes: container.querySelectorAll('.animate-box'),
    fullHeightElements: container.querySelectorAll('.js-fullheight'),
    fadeElements: container.querySelectorAll('[data-animate-effect*="fade"]'),
  };
};

// Helper to test accessibility features
export const getAccessibilityElements = (container) => {
  return {
    headings: container.querySelectorAll('h1, h2, h3, h4, h5, h6'),
    navigation: container.querySelectorAll('nav[role="navigation"]'),
    landmarks: container.querySelectorAll('[role]'),
    links: container.querySelectorAll('a'),
    buttons: container.querySelectorAll('button'),
  };
};
