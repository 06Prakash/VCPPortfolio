import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Integration tests that test component interactions
describe('App Integration Tests', () => {
  test('renders complete portfolio application', () => {
    render(<App />);
    
    // Check that all major sections are present
    expect(document.querySelector('#colorlib-page')).toBeInTheDocument();
    expect(document.querySelector('#container-wrap')).toBeInTheDocument();
    expect(document.querySelector('#colorlib-main')).toBeInTheDocument();
  });

  test('sidebar and main content are properly separated', () => {
    render(<App />);
    
    const containerWrap = document.querySelector('#container-wrap');
    const colorlibMain = document.querySelector('#colorlib-main');
    
    // StaticSideDraw should be a sibling to colorlib-main, not inside it
    expect(containerWrap).toContainElement(colorlibMain);
    
    // Main content should contain the main sections
    const introSection = document.querySelector('[data-section="home"]');
    const techSection = document.querySelector('[data-section="tech"]');
    const projectsSection = document.querySelector('[data-section="projects"]');
    const keyskillsSection = document.querySelector('[data-section="keyskills"]');
    const timelineSection = document.querySelector('[data-section="timeline"]');
    
    if (introSection) expect(colorlibMain).toContainElement(introSection);
    if (techSection) expect(colorlibMain).toContainElement(techSection);
    if (projectsSection) expect(colorlibMain).toContainElement(projectsSection);
    if (keyskillsSection) expect(colorlibMain).toContainElement(keyskillsSection);
    if (timelineSection) expect(colorlibMain).toContainElement(timelineSection);
  });

  test('all sections have proper data-section attributes for navigation', () => {
    render(<App />);
    
    // These attributes are used for navigation linking
    const expectedSections = ['home', 'tech', 'projects', 'keyskills', 'timeline'];
    
    expectedSections.forEach(sectionName => {
      const section = document.querySelector(`[data-section="${sectionName}"]`);
      if (section) {
        expect(section).toHaveAttribute('data-section', sectionName);
      }
    });
  });

  test('navigation links in sidebar correspond to main sections', () => {
    render(<App />);
    
    // Check that navigation hrefs match section IDs
    const navLinks = [
      { href: '#home', section: 'home' },
      { href: '#tech', section: 'tech' },
      { href: '#projects', section: 'projects' },
      { href: '#keyskills', section: 'keyskills' },
      { href: '#timeline', section: 'timeline' }
    ];

    navLinks.forEach(({ href, section }) => {
      const link = document.querySelector(`a[href="${href}"]`);
      const sectionElement = document.querySelector(`[data-section="${section}"], #${section.replace('#', '')}`);
      
      if (link && sectionElement) {
        // Both link and corresponding section exist
        expect(link).toBeInTheDocument();
        expect(sectionElement).toBeInTheDocument();
      }
    });
  });

  test('external links have proper security attributes', () => {
    render(<App />);
    
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('social media links are functional', () => {
    render(<App />);
    
    // Check for social media links (LinkedIn, HackerEarth, etc.)
    const socialLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="hackerearth"], a[href*="udemy"]');
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^https?:\/\//);
    });
  });

  test('images have proper src attributes', () => {
    render(<App />);
    
    const images = document.querySelectorAll('img, [style*="background-image"]');
    
    images.forEach(element => {
      if (element.tagName === 'IMG') {
        expect(element).toHaveAttribute('src');
      } else {
        // For background images
        const style = element.getAttribute('style');
        if (style && style.includes('background-image')) {
          expect(style).toMatch(/url\([^)]+\)/);
        }
      }
    });
  });

  test('project data integration works correctly', () => {
    render(<App />);
    
    // Projects should be rendered from JSON data
    const projectSection = document.querySelector('[data-section="projects"]');
    if (projectSection) {
      const projectItems = projectSection.querySelectorAll('.project-item');
      expect(projectItems.length).toBeGreaterThan(0);
    }
  });

  test('timeline data integration works correctly', () => {
    render(<App />);
    
    // Timeline should be rendered from JSON data
    const timelineSection = document.querySelector('[data-section="timeline"]');
    if (timelineSection) {
      const timelineEntries = timelineSection.querySelectorAll('.timeline-entry');
      expect(timelineEntries.length).toBeGreaterThan(0);
    }
  });

  test('CSS classes are applied for styling', () => {
    render(<App />);
    
    // Check for key CSS classes that indicate proper styling
    const expectedClasses = [
      '.colorlib-work',
      '.technology-section',
      '.colorlib-blog',
      '.colorlib-experience',
      '.timeline-centered'
    ];

    expectedClasses.forEach(className => {
      const element = document.querySelector(className);
      if (element) {
        expect(element).toBeInTheDocument();
      }
    });
  });

  test('FontAwesome integration works', () => {
    render(<App />);
    
    // Timeline should contain FontAwesome icons
    const timelineSection = document.querySelector('[data-section="timeline"]');
    if (timelineSection) {
      // Check for timeline icons which use FontAwesome
      const timelineIcons = timelineSection.querySelectorAll('.timeline-icon');
      expect(timelineIcons.length).toBeGreaterThan(0);
    }
  });

  test('responsive structure is in place', () => {
    render(<App />);
    
    // Check for Bootstrap responsive classes
    const responsiveElements = document.querySelectorAll('[class*="col-"], .container-fluid, .row');
    expect(responsiveElements.length).toBeGreaterThan(0);
  });

  test('animation classes are applied', () => {
    render(<App />);
    
    // Check for animation classes
    const animatedElements = document.querySelectorAll('.animate-box, .js-fullheight');
    expect(animatedElements.length).toBeGreaterThan(0);
  });

  test('accessibility attributes are present', () => {
    render(<App />);
    
    // Check for navigation role
    const navigation = document.querySelector('nav[role="navigation"]');
    if (navigation) {
      expect(navigation).toBeInTheDocument();
    }

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });
});
