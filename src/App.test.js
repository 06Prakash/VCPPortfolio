import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component - Basic Tests', () => {
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

  test('contains portfolio content', () => {
    render(<App />);
    
    // Check for presence of main sections
    expect(document.querySelector('#colorlib-page')).toBeInTheDocument();
    expect(document.querySelector('#container-wrap')).toBeInTheDocument();
    expect(document.querySelector('#colorlib-main')).toBeInTheDocument();
  });
});
