import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../Projects';

// Mock the project data
jest.mock('./../../data/projectData.json', () => [
  {
    "id": 1,
    "title": "Test Project 1",
    "content": "This is test project 1 content",
    "role": "Developer",
    "technology": "React, JavaScript"
  },
  {
    "id": 2,
    "title": "Test Project 2",
    "content": "This is test project 2 content",
    "role": "Lead Developer",
    "technology": "Python, Django"
  },
  {
    "id": 3,
    "title": "Test Project 3",
    "content": "This is test project 3 content",
    "role": "DevOps Engineer",
    "technology": "AWS, Docker"
  }
]);

describe('Projects Component', () => {
  test('renders projects section with meta heading', () => {
    render(<Projects />);
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
    
    const metaHeading = document.querySelector('.heading-meta');
    expect(metaHeading).toBeInTheDocument();
    expect(metaHeading).toHaveClass('font-size-maintainer');
  });

  test('renders all project titles', () => {
    render(<Projects />);
    
    expect(screen.getByText('Test Project 3')).toBeInTheDocument(); // Should be first due to sorting
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    expect(screen.getByText('Test Project 1')).toBeInTheDocument(); // Should be last due to sorting
  });

  test('projects are sorted by ID in descending order', () => {
    render(<Projects />);
    
    const projectTitles = screen.getAllByRole('heading', { level: 3 });
    expect(projectTitles[0]).toHaveTextContent('Test Project 3');
    expect(projectTitles[1]).toHaveTextContent('Test Project 2');
    expect(projectTitles[2]).toHaveTextContent('Test Project 1');
  });

  test('projects start in collapsed state', () => {
    render(<Projects />);
    
    // Content should not be visible initially
    expect(screen.queryByText('This is test project 1 content')).not.toBeInTheDocument();
    expect(screen.queryByText('This is test project 2 content')).not.toBeInTheDocument();
    expect(screen.queryByText('This is test project 3 content')).not.toBeInTheDocument();
  });

  test('accordion icons show "+" when collapsed', () => {
    render(<Projects />);
    
    const accordionIcons = document.querySelectorAll('.accordion-icon');
    accordionIcons.forEach(icon => {
      expect(icon).toHaveTextContent('+');
    });
  });

  test('clicking project header expands the project', () => {
    render(<Projects />);
    
    const firstProjectHeader = screen.getByText('Test Project 3').closest('.project-header');
    fireEvent.click(firstProjectHeader);
    
    // Content should now be visible
    expect(screen.getByText('This is test project 3 content')).toBeInTheDocument();
    expect(screen.getByText('Role:')).toBeInTheDocument();
    expect(screen.getByText('DevOps Engineer')).toBeInTheDocument();
    expect(screen.getByText('Technology:')).toBeInTheDocument();
    expect(screen.getByText('AWS, Docker')).toBeInTheDocument();
  });

  test('clicking project header toggles accordion icon', () => {
    render(<Projects />);
    
    const firstProjectHeader = screen.getByText('Test Project 3').closest('.project-header');
    const accordionIcon = firstProjectHeader.querySelector('.accordion-icon');
    
    // Initially shows "+"
    expect(accordionIcon).toHaveTextContent('+');
    
    // Click to expand
    fireEvent.click(firstProjectHeader);
    expect(accordionIcon).toHaveTextContent('-');
    
    // Click to collapse
    fireEvent.click(firstProjectHeader);
    expect(accordionIcon).toHaveTextContent('+');
  });

  test('clicking project header twice collapses the project', () => {
    render(<Projects />);
    
    const firstProjectHeader = screen.getByText('Test Project 3').closest('.project-header');
    
    // Expand
    fireEvent.click(firstProjectHeader);
    expect(screen.getByText('This is test project 3 content')).toBeInTheDocument();
    
    // Collapse
    fireEvent.click(firstProjectHeader);
    expect(screen.queryByText('This is test project 3 content')).not.toBeInTheDocument();
  });

  test('multiple projects can be expanded simultaneously', () => {
    render(<Projects />);
    
    const project1Header = screen.getByText('Test Project 1').closest('.project-header');
    const project2Header = screen.getByText('Test Project 2').closest('.project-header');
    
    // Expand both projects
    fireEvent.click(project1Header);
    fireEvent.click(project2Header);
    
    // Both should be visible
    expect(screen.getByText('This is test project 1 content')).toBeInTheDocument();
    expect(screen.getByText('This is test project 2 content')).toBeInTheDocument();
  });

  test('project content shows role and technology information', () => {
    render(<Projects />);
    
    const projectHeader = screen.getByText('Test Project 2').closest('.project-header');
    fireEvent.click(projectHeader);
    
    expect(screen.getByText('This is test project 2 content')).toBeInTheDocument();
    expect(screen.getByText('Role:')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    expect(screen.getByText('Technology:')).toBeInTheDocument();
    expect(screen.getByText('Python, Django')).toBeInTheDocument();
  });

  test('project items have correct CSS classes', () => {
    render(<Projects />);
    
    const projectItems = document.querySelectorAll('.project-item');
    expect(projectItems).toHaveLength(3);
    
    projectItems.forEach(item => {
      expect(item).toHaveClass('project-item');
      expect(item).not.toHaveClass('open');
    });
  });

  test('expanded project has "open" CSS class', () => {
    render(<Projects />);
    
    const projectHeader = screen.getByText('Test Project 1').closest('.project-header');
    const projectItem = projectHeader.closest('.project-item');
    
    // Initially not open
    expect(projectItem).not.toHaveClass('open');
    
    // Click to expand
    fireEvent.click(projectHeader);
    expect(projectItem).toHaveClass('open');
  });

  test('has correct section structure and attributes', () => {
    render(<Projects />);
    
    const container = document.querySelector('.Container');
    expect(container).toBeInTheDocument();
    
    const section = document.querySelector('.colorlib-work');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-section', 'projects');
  });

  test('renders correct number of projects', () => {
    render(<Projects />);
    
    const projectItems = document.querySelectorAll('.project-item');
    expect(projectItems).toHaveLength(3);
  });
});
