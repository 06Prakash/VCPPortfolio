import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Introduction from '../Introduction';

describe('Introduction Component', () => {
  test('renders the main heading with name', () => {
    render(<Introduction />);
    const heading = screen.getByText(/Hi! This is/);
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/Chandra Prakash V/)).toBeInTheDocument();
  });

  test('renders View CV button with correct link', () => {
    render(<Introduction />);
    const cvButton = screen.getByRole('link', { name: /View CV/ });
    expect(cvButton).toBeInTheDocument();
    expect(cvButton).toHaveAttribute('href', 'https://docs.google.com/document/d/1ozn1yFWu0JhejBmXvSzHG4vTe2E30mfzAQmo-iUCbwA/edit?usp=sharing');
    expect(cvButton).toHaveAttribute('target', '_blank');
    expect(cvButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders Guiding World button with correct link', () => {
    render(<Introduction />);
    const guidingButton = screen.getByRole('link', { name: /Guiding World/ });
    expect(guidingButton).toBeInTheDocument();
    expect(guidingButton).toHaveAttribute('href', 'https://www.udemy.com/user/chandra-prakash-v/');
    expect(guidingButton).toHaveAttribute('target', '_blank');
    expect(guidingButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders all slide content', () => {
    render(<Introduction />);
    
    // First slide content
    expect(screen.getByText(/Hi! This is/)).toBeInTheDocument();
    
    // Second slide content
    expect(screen.getByText('Passionate Towards Innovation!!')).toBeInTheDocument();
    
    // Third slide content
    expect(screen.getByText(/Creativity is contagious/)).toBeInTheDocument();
    expect(screen.getByText(/pass it on!!/)).toBeInTheDocument();
  });

  test('has correct section id and data attributes', () => {
    render(<Introduction />);
    
    const section = document.querySelector('#colorlib-hero');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-section', 'home');
    expect(section).toHaveClass('js-fullheight');
  });

  test('renders slides with correct background images', () => {
    render(<Introduction />);
    
    const slides = document.querySelectorAll('.slide');
    expect(slides).toHaveLength(3);
    
    expect(slides[0]).toHaveStyle('background-image: url(images/img_bg.jpg)');
    expect(slides[1]).toHaveStyle('background-image: url(images/img-1.jpg)');
    expect(slides[2]).toHaveStyle('background-image: url(images/img-5.jpg)');
  });

  test('has proper flexslider structure', () => {
    render(<Introduction />);
    
    const flexslider = document.querySelector('.flexslider');
    expect(flexslider).toBeInTheDocument();
    expect(flexslider).toHaveClass('js-fullheight');
    
    const slidesList = document.querySelector('.slides');
    expect(slidesList).toBeInTheDocument();
  });

  test('renders overlay elements for all slides', () => {
    render(<Introduction />);
    
    const overlays = document.querySelectorAll('.overlay');
    expect(overlays).toHaveLength(3);
  });

  test('has proper Bootstrap grid structure', () => {
    render(<Introduction />);
    
    const containerFluid = document.querySelectorAll('.container-fluid');
    expect(containerFluid.length).toBeGreaterThan(0);
    
    const rows = document.querySelectorAll('.row');
    expect(rows.length).toBeGreaterThan(0);
    
    const columns = document.querySelectorAll('.col-md-12');
    expect(columns.length).toBeGreaterThan(0);
  });

  test('buttons have correct CSS classes', () => {
    render(<Introduction />);
    
    const cvButton = screen.getByRole('link', { name: /View CV/ });
    expect(cvButton).toHaveClass('btn', 'btn-danger');
    
    const guidingButton = screen.getByRole('link', { name: /Guiding World/ });
    expect(guidingButton).toHaveClass('btn', 'btn-danger');
  });

  test('renders slider text inner elements', () => {
    render(<Introduction />);
    
    const sliderTextInner = document.querySelectorAll('.slider-text-inner');
    expect(sliderTextInner).toHaveLength(3);
    
    const sliderText = document.querySelectorAll('.slider-text');
    expect(sliderText).toHaveLength(3);
  });
});
