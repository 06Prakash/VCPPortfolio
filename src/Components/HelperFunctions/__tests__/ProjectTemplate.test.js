import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectTemplate from '../ProjectTemplate';

describe('ProjectTemplate Component', () => {
  const mockProps = {
    Title: "Test Project Title",
    Content: "This is test project content for testing purposes",
    Role: "Lead Developer",
    Technology: "React, JavaScript, Node.js"
  };

  test('renders project title correctly', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(screen.getByText('Test Project Title')).toBeInTheDocument();
  });

  test('renders project content correctly', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(screen.getByText('This is test project content for testing purposes')).toBeInTheDocument();
  });

  test('renders role information', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(screen.getByText('Role:')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
  });

  test('renders technology information', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(screen.getByText('Technology:')).toBeInTheDocument();
    expect(screen.getByText('React, JavaScript, Node.js')).toBeInTheDocument();
  });

  test('has correct CSS classes applied', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(document.querySelector('.colorlib-narrow-content')).toBeInTheDocument();
    expect(document.querySelector('.block-shadow')).toBeInTheDocument();
    expect(document.querySelector('.title-span')).toBeInTheDocument();
    expect(document.querySelector('.content-span')).toBeInTheDocument();
  });

  test('has proper Bootstrap grid structure', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    const rows = document.querySelectorAll('.row');
    expect(rows.length).toBeGreaterThan(0);
    
    const columns = document.querySelectorAll('.col-md-12');
    expect(columns.length).toBeGreaterThan(0);
  });

  test('title is underlined', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    const titleElement = screen.getByText('Test Project Title');
    const parentElement = titleElement.parentElement;
    expect(parentElement.querySelector('u')).toBeInTheDocument();
  });

  test('role and technology labels are bold', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    const roleLabel = screen.getByText('Role:');
    const technologyLabel = screen.getByText('Technology:');
    
    expect(roleLabel.tagName).toBe('B');
    expect(technologyLabel.tagName).toBe('B');
  });

  test('has alignment classes for role and technology', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    expect(document.querySelector('.Alignment_left')).toBeInTheDocument();
    expect(document.querySelector('.Alignment_right')).toBeInTheDocument();
  });

  test('has animation attributes', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    const animateBox = document.querySelector('.animate-box');
    expect(animateBox).toBeInTheDocument();
    expect(animateBox).toHaveAttribute('data-animate-effect', 'fadeInLeft');
  });

  test('handles empty or undefined props gracefully', () => {
    const emptyProps = {
      Title: "",
      Content: "",
      Role: "",
      Technology: ""
    };
    
    render(<ProjectTemplate {...emptyProps} />);
    
    expect(document.querySelector('.colorlib-narrow-content')).toBeInTheDocument();
  });

  test('handles missing props gracefully', () => {
    render(<ProjectTemplate />);
    
    expect(document.querySelector('.colorlib-narrow-content')).toBeInTheDocument();
  });

  test('has proper structure hierarchy', () => {
    render(<ProjectTemplate {...mockProps} />);
    
    const container = document.querySelector('.colorlib-narrow-content');
    const row = container.querySelector('.row');
    const column = row.querySelector('.col-md-12');
    const innerRow = column.querySelector('.row');
    const innerColumn = innerRow.querySelector('.col-md-12');
    
    expect(container).toBeInTheDocument();
    expect(row).toBeInTheDocument();
    expect(column).toBeInTheDocument();
    expect(innerRow).toBeInTheDocument();
    expect(innerColumn).toBeInTheDocument();
  });
});
