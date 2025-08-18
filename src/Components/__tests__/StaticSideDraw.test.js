import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StaticSideDraw from '../StaticSideDraw';

describe('StaticSideDraw Component', () => {
  test('renders the author name correctly', () => {
    render(<StaticSideDraw />);
    const authorName = screen.getByText('CHANDRA PRAKASH V');
    expect(authorName).toBeInTheDocument();
  });

  test('renders the email address', () => {
    render(<StaticSideDraw />);
    const email = screen.getByText('chandraprakashveluchamy@gmail.com');
    expect(email).toBeInTheDocument();
  });

  test('renders all navigation menu items', () => {
    render(<StaticSideDraw />);
    
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText('Software Proficiency')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('KeySkills')).toBeInTheDocument();
    expect(screen.getByText('Timeline')).toBeInTheDocument();
  });

  test('renders navigation links with correct href attributes', () => {
    render(<StaticSideDraw />);
    
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: 'Software Proficiency' })).toHaveAttribute('href', '#tech');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'KeySkills' })).toHaveAttribute('href', '#keyskills');
    expect(screen.getByRole('link', { name: 'Timeline' })).toHaveAttribute('href', '#timeline');
  });

  test('renders the job title', () => {
    render(<StaticSideDraw />);
    const jobTitle = screen.getByText('Senior Software Engineer in Test, Instructor and Innovator');
    expect(jobTitle).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    render(<StaticSideDraw />);
    
    // Check for social icon links by their container divs
    const socialIcons = document.querySelectorAll('.social-icon');
    expect(socialIcons.length).toBeGreaterThan(0);
  });

  test('has correct CSS classes applied', () => {
    render(<StaticSideDraw />);
    
    const board = document.querySelector('.board');
    expect(board).toBeInTheDocument();
    
    const sidebar = document.querySelector('.sidebarparent');
    expect(sidebar).toBeInTheDocument();
    
    const aside = document.querySelector('#colorlib-aside');
    expect(aside).toBeInTheDocument();
  });

  test('renders email icon', () => {
    render(<StaticSideDraw />);
    // Check that FaMailBulk icon is rendered by looking for its parent span
    const emailSpan = screen.getByText('chandraprakashveluchamy@gmail.com').closest('.email');
    expect(emailSpan).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    render(<StaticSideDraw />);
    
    const nav = document.querySelector('nav[role="navigation"]');
    expect(nav).toBeInTheDocument();
    
    const navbar = document.querySelector('#navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('renders author image with correct background style', () => {
    render(<StaticSideDraw />);
    
    const authorImg = document.querySelector('.author-img');
    expect(authorImg).toBeInTheDocument();
    expect(authorImg).toHaveStyle('background-image: url(images/about.jpg)');
  });
});
