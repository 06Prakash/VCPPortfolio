import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from '../Timeline';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <span data-testid="font-awesome-icon">{icon.iconName}</span>
}));

// Mock the timeline data
jest.mock('./../../data/timelineData.json', () => [
  {
    "color": "timeline-icon color-6",
    "icon": "faCode",
    "title": "Lead DevOps Engineer - Fresh Works",
    "timeSpan": "2023-Present",
    "content": "Test content for lead devops engineer role"
  },
  {
    "color": "timeline-icon color-3",
    "icon": "faClipboardCheck",
    "title": "Senior Software Engineer in Test - Fresh Works",
    "timeSpan": "2020-2022",
    "content": "Test content for senior software engineer role"
  },
  {
    "color": "timeline-icon color-2",
    "icon": "faGraduationCap",
    "title": "BE graduation at KLNCE",
    "timeSpan": "2009-2013",
    "content": "Test content for graduation"
  }
]);

describe('Timeline Component', () => {
  test('renders timeline section with meta heading', () => {
    render(<Timeline />);
    
    expect(screen.getByText('Timeline')).toBeInTheDocument();
    
    const metaHeading = document.querySelector('.heading-meta');
    expect(metaHeading).toBeInTheDocument();
  });

  test('renders all timeline entries', () => {
    render(<Timeline />);
    
    expect(screen.getByText('Lead DevOps Engineer - Fresh Works')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer in Test - Fresh Works')).toBeInTheDocument();
    expect(screen.getByText('BE graduation at KLNCE')).toBeInTheDocument();
  });

  test('renders all time spans', () => {
    render(<Timeline />);
    
    expect(screen.getByText('2023-Present')).toBeInTheDocument();
    expect(screen.getByText('2020-2022')).toBeInTheDocument();
    expect(screen.getByText('2009-2013')).toBeInTheDocument();
  });

  test('renders all timeline content', () => {
    render(<Timeline />);
    
    expect(screen.getByText('Test content for lead devops engineer role')).toBeInTheDocument();
    expect(screen.getByText('Test content for senior software engineer role')).toBeInTheDocument();
    expect(screen.getByText('Test content for graduation')).toBeInTheDocument();
  });

  test('renders FontAwesome icons', () => {
    render(<Timeline />);
    
    const icons = screen.getAllByTestId('font-awesome-icon');
    expect(icons).toHaveLength(3);
    
    // Check if the correct icons are rendered based on the mocked data
    expect(icons[0]).toHaveTextContent('code');
    expect(icons[1]).toHaveTextContent('clipboard-check');
    expect(icons[2]).toHaveTextContent('graduation-cap');
  });

  test('has correct section structure and attributes', () => {
    render(<Timeline />);
    
    const section = document.querySelector('.colorlib-experience');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-section', 'timeline');
  });

  test('renders timeline-centered container', () => {
    render(<Timeline />);
    
    const timelineCentered = document.querySelector('.timeline-centered');
    expect(timelineCentered).toBeInTheDocument();
  });

  test('renders timeline entries with correct classes', () => {
    render(<Timeline />);
    
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    // 3 data entries + 1 begin entry = 4 total
    expect(timelineEntries).toHaveLength(4);
    
    // Check that the last entry is the begin entry
    const beginEntry = timelineEntries[timelineEntries.length - 1];
    expect(beginEntry).toHaveClass('timeline-entry', 'begin', 'animate-box');
  });

  test('renders timeline icons with correct color classes', () => {
    render(<Timeline />);
    
    const coloredIcons = document.querySelectorAll('.timeline-icon');
    expect(coloredIcons.length).toBeGreaterThan(0);
    
    // Check specific color classes from mocked data
    expect(document.querySelector('.color-6')).toBeInTheDocument();
    expect(document.querySelector('.color-3')).toBeInTheDocument();
    expect(document.querySelector('.color-2')).toBeInTheDocument();
  });

  test('renders timeline labels with proper structure', () => {
    render(<Timeline />);
    
    const timelineLabels = document.querySelectorAll('.timeline-label');
    expect(timelineLabels).toHaveLength(3);
    
    timelineLabels.forEach(label => {
      const h3 = label.querySelector('h3');
      const span = h3.querySelector('span');
      const p = label.querySelector('p');
      
      expect(h3).toBeInTheDocument();
      expect(span).toBeInTheDocument();
      expect(p).toBeInTheDocument();
    });
  });

  test('renders animate-box classes for animations', () => {
    render(<Timeline />);
    
    const animateBoxes = document.querySelectorAll('.animate-box');
    expect(animateBoxes.length).toBeGreaterThan(0);
    
    // Check for data-animate-effect attributes
    const fadeInLeftBoxes = document.querySelectorAll('[data-animate-effect="fadeInLeft"]');
    expect(fadeInLeftBoxes.length).toBeGreaterThan(0);
  });

  test('renders Bootstrap grid structure', () => {
    render(<Timeline />);
    
    const narrowContent = document.querySelector('.colorlib-narrow-content');
    expect(narrowContent).toBeInTheDocument();
    
    const rows = document.querySelectorAll('.row');
    expect(rows.length).toBeGreaterThan(0);
    
    const columns = document.querySelectorAll('[class*="col-md"]');
    expect(columns.length).toBeGreaterThan(0);
  });

  test('getIcon function returns correct icons', () => {
    render(<Timeline />);
    
    // Since we mocked FontAwesome, we can test that the correct icon names are passed
    const icons = screen.getAllByTestId('font-awesome-icon');
    
    // Based on our mock data and the getIcon function logic
    expect(icons.some(icon => icon.textContent === 'code')).toBe(true);
    expect(icons.some(icon => icon.textContent === 'clipboard-check')).toBe(true);
    expect(icons.some(icon => icon.textContent === 'graduation-cap')).toBe(true);
  });

  test('timeline entry inner structure is correct', () => {
    render(<Timeline />);
    
    const timelineEntryInners = document.querySelectorAll('.timeline-entry-inner');
    expect(timelineEntryInners).toHaveLength(4); // 3 data + 1 begin
    
    timelineEntryInners.forEach((inner, index) => {
      const icon = inner.querySelector('.timeline-icon');
      expect(icon).toBeInTheDocument();
      
      // Only data entries should have timeline-label (not the begin entry)
      if (index < 3) {
        const label = inner.querySelector('.timeline-label');
        expect(label).toBeInTheDocument();
      }
    });
  });

  test('renders begin entry with color-none icon', () => {
    render(<Timeline />);
    
    const beginEntry = document.querySelector('.timeline-entry.begin');
    expect(beginEntry).toBeInTheDocument();
    
    const colorNoneIcon = beginEntry.querySelector('.timeline-icon.color-none');
    expect(colorNoneIcon).toBeInTheDocument();
  });
});
