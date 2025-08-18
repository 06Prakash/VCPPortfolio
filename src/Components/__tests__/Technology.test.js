import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Technology from '../Technology';

describe('Technology Component', () => {
  test('renders main section header', () => {
    render(<Technology />);
    expect(screen.getByText('SOFTWARE PROFICIENCY')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  test('renders all technology categories', () => {
    render(<Technology />);
    
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('DataBases')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  test('renders all technology items', () => {
    render(<Technology />);
    
    // Technology items
    expect(screen.getByText('Ruby')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Azure')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Jenkins')).toBeInTheDocument();
    expect(screen.getByText('K8s')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  test('renders all database items', () => {
    render(<Technology />);
    
    expect(screen.getByText('mySQL')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
    expect(screen.getByText('Oracle')).toBeInTheDocument();
  });

  test('renders all tools', () => {
    render(<Technology />);
    
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('K9s')).toBeInTheDocument();
    expect(screen.getByText('Docker Desktop')).toBeInTheDocument();
    expect(screen.getByText('Podman')).toBeInTheDocument();
    expect(screen.getByText('Github Desktop')).toBeInTheDocument();
    expect(screen.getByText('Sequel Ace')).toBeInTheDocument();
    expect(screen.getByText('Chatgpt')).toBeInTheDocument();
    expect(screen.getByText('Copilot')).toBeInTheDocument();
    expect(screen.getByText('Gemini')).toBeInTheDocument();
  });

  test('renders certifications section', () => {
    render(<Technology />);
    
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  test('renders all certifications', () => {
    render(<Technology />);
    
    expect(screen.getByText('Kubernetes: Package Management with Helm')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes: Monitoring with Prometheus')).toBeInTheDocument();
    expect(screen.getByText('Learn Kubernetes from Linkedin')).toBeInTheDocument();
    expect(screen.getByText('Terraform Beginner to Advanced - Using Google Cloud Platform')).toBeInTheDocument();
    expect(screen.getByText('OCJP 6 : Oracle Java Professional 6 Certificate')).toBeInTheDocument();
    expect(screen.getByText('IBM DB2 Academic Associate : DB2 Database and Application Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Master Diploma In Computer Administration')).toBeInTheDocument();
    expect(screen.getByText('Honours Diploma In Computer Hardware And Networking')).toBeInTheDocument();
  });

  test('has correct section structure and attributes', () => {
    render(<Technology />);
    
    const section = document.querySelector('#tech');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-section', 'tech');
    expect(section).toHaveClass('colorlib-work', 'technology-section');
  });

  test('has correct CSS classes for structure', () => {
    render(<Technology />);
    
    const container = document.querySelector('.technology-container');
    expect(container).toBeInTheDocument();
    
    const proficiencyContainer = document.querySelector('.proficiency-container');
    expect(proficiencyContainer).toBeInTheDocument();
    
    const proficiencyItems = document.querySelectorAll('.proficiency-item');
    expect(proficiencyItems).toHaveLength(3);
    
    const sectionHeaders = document.querySelectorAll('.section-header');
    expect(sectionHeaders).toHaveLength(2);
    
    const certificationsContainer = document.querySelector('.certifications-container');
    expect(certificationsContainer).toBeInTheDocument();
  });

  test('renders meta heading with correct class', () => {
    render(<Technology />);
    
    const metaHeading = document.querySelector('.heading-meta');
    expect(metaHeading).toBeInTheDocument();
    expect(metaHeading).toHaveClass('font-size-maintainer');
  });

  test('renders lists for each category', () => {
    render(<Technology />);
    
    const lists = document.querySelectorAll('ul');
    // 3 lists for proficiency items + 1 for certifications = 4 total
    expect(lists).toHaveLength(4);
  });

  test('renders correct number of list items for technology section', () => {
    render(<Technology />);
    
    const proficiencyItems = document.querySelectorAll('.proficiency-item');
    
    // Technology section should have 9 items
    const technologyList = proficiencyItems[0].querySelector('ul');
    const technologyItems = technologyList.querySelectorAll('li');
    expect(technologyItems).toHaveLength(9);
    
    // Database section should have 3 items
    const databaseList = proficiencyItems[1].querySelector('ul');
    const databaseItems = databaseList.querySelectorAll('li');
    expect(databaseItems).toHaveLength(3);
    
    // Tools section should have 9 items
    const toolsList = proficiencyItems[2].querySelector('ul');
    const toolsItems = toolsList.querySelectorAll('li');
    expect(toolsItems).toHaveLength(9);
  });

  test('renders correct number of certifications', () => {
    render(<Technology />);
    
    const certificationsContainer = document.querySelector('.certifications-container ul');
    const certificationItems = certificationsContainer.querySelectorAll('li');
    expect(certificationItems).toHaveLength(8);
  });
});
