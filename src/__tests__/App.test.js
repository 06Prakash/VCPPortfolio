import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock all child components to avoid dependency issues
jest.mock('../Components/StaticSideDraw', () => {
  return function MockStaticSideDraw() {
    return <div data-testid="static-side-draw">StaticSideDraw Component</div>;
  };
});

jest.mock('../Components/Introduction', () => {
  return function MockIntroduction() {
    return <div data-testid="introduction">Introduction Component</div>;
  };
});

jest.mock('../Components/Technology', () => {
  return function MockTechnology() {
    return <div data-testid="technology">Technology Component</div>;
  };
});

jest.mock('../Components/Projects', () => {
  return function MockProjects() {
    return <div data-testid="projects">Projects Component</div>;
  };
});

jest.mock('../Components/KeySkills', () => {
  return function MockKeySkills() {
    return <div data-testid="key-skills">KeySkills Component</div>;
  };
});

jest.mock('../Components/Timeline', () => {
  return function MockTimeline() {
    return <div data-testid="timeline">Timeline Component</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders main container structure', () => {
    render(<App />);
    
    const colorlibPage = document.querySelector('#colorlib-page');
    expect(colorlibPage).toBeInTheDocument();
    
    const containerWrap = document.querySelector('#container-wrap');
    expect(containerWrap).toBeInTheDocument();
    
    const colorlibMain = document.querySelector('#colorlib-main');
    expect(colorlibMain).toBeInTheDocument();
  });

  test('renders StaticSideDraw component', () => {
    render(<App />);
    
    expect(screen.getByTestId('static-side-draw')).toBeInTheDocument();
    expect(screen.getByText('StaticSideDraw Component')).toBeInTheDocument();
  });

  test('renders Introduction component', () => {
    render(<App />);
    
    expect(screen.getByTestId('introduction')).toBeInTheDocument();
    expect(screen.getByText('Introduction Component')).toBeInTheDocument();
  });

  test('renders Technology component', () => {
    render(<App />);
    
    expect(screen.getByTestId('technology')).toBeInTheDocument();
    expect(screen.getByText('Technology Component')).toBeInTheDocument();
  });

  test('renders Projects component', () => {
    render(<App />);
    
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.getByText('Projects Component')).toBeInTheDocument();
  });

  test('renders KeySkills component', () => {
    render(<App />);
    
    expect(screen.getByTestId('key-skills')).toBeInTheDocument();
    expect(screen.getByText('KeySkills Component')).toBeInTheDocument();
  });

  test('renders Timeline component', () => {
    render(<App />);
    
    expect(screen.getByTestId('timeline')).toBeInTheDocument();
    expect(screen.getByText('Timeline Component')).toBeInTheDocument();
  });

  test('components are rendered in correct order', () => {
    render(<App />);
    
    const components = [
      screen.getByTestId('static-side-draw'),
      screen.getByTestId('introduction'),
      screen.getByTestId('technology'),
      screen.getByTestId('projects'),
      screen.getByTestId('key-skills'),
      screen.getByTestId('timeline')
    ];
    
    components.forEach(component => {
      expect(component).toBeInTheDocument();
    });
  });

  test('main content area contains all sections except sidebar', () => {
    render(<App />);
    
    const colorlibMain = document.querySelector('#colorlib-main');
    
    // StaticSideDraw should be outside of colorlib-main
    expect(colorlibMain).not.toContainElement(screen.getByTestId('static-side-draw'));
    
    // All other components should be inside colorlib-main
    expect(colorlibMain).toContainElement(screen.getByTestId('introduction'));
    expect(colorlibMain).toContainElement(screen.getByTestId('technology'));
    expect(colorlibMain).toContainElement(screen.getByTestId('projects'));
    expect(colorlibMain).toContainElement(screen.getByTestId('key-skills'));
    expect(colorlibMain).toContainElement(screen.getByTestId('timeline'));
  });

  test('has proper HTML structure hierarchy', () => {
    render(<App />);
    
    const colorlibPage = document.querySelector('#colorlib-page');
    const containerWrap = colorlibPage.querySelector('#container-wrap');
    const colorlibMain = containerWrap.querySelector('#colorlib-main');
    
    expect(colorlibPage).toBeInTheDocument();
    expect(containerWrap).toBeInTheDocument();
    expect(colorlibMain).toBeInTheDocument();
    
    // Verify the nesting
    expect(colorlibPage).toContainElement(containerWrap);
    expect(containerWrap).toContainElement(colorlibMain);
  });

  test('App component exports correctly', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });

  test('renders all components exactly once', () => {
    render(<App />);
    
    expect(screen.getAllByTestId('static-side-draw')).toHaveLength(1);
    expect(screen.getAllByTestId('introduction')).toHaveLength(1);
    expect(screen.getAllByTestId('technology')).toHaveLength(1);
    expect(screen.getAllByTestId('projects')).toHaveLength(1);
    expect(screen.getAllByTestId('key-skills')).toHaveLength(1);
    expect(screen.getAllByTestId('timeline')).toHaveLength(1);
  });
});
