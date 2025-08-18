import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KeySkills from '../KeySkills';

describe('KeySkills Component', () => {
  test('renders main heading', () => {
    render(<KeySkills />);
    
    const heading = screen.getByText('Key Skills & Professional Achievements');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
  });

  test('renders all key skills and achievements', () => {
    render(<KeySkills />);
    
    const expectedSkills = [
      'Successfully reduced operational costs and improved quality by mentoring team members and fostering continuous learning of emerging technologies.',
      'Enhanced team productivity by designing and implementing multiple internal tools tailored to workflow needs.',
      'Developed a Chrome memory leakage detection tool to monitor memory usage and optimize product page performance.',
      'Built two robust automation frameworks, including an ETL automation suite and a performance testing framework using JMeter.',
      'Conducted in-depth research to identify optimal JAR combinations for HTTP/2 protocol scripting, enabling organization-wide performance testing support.',
      'Educator on Udemy with over 6,000 students, delivering courses in testing, automation, and technology best practices.',
      'Collaborative and approachable team player with a strong commitment to shared success.',
      'Experienced team leader focused on motivation, clarity, and delivering high-impact outcomes.',
      'Promotes and maintains a transparent and accountable work culture.',
      'Highly self-driven and well-organized professional with a proactive mindset.',
      'Passionate lifelong learner, consistently exploring new tools and technologies to stay ahead of the curve.'
    ];

    expectedSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders skills as list items', () => {
    render(<KeySkills />);
    
    const listItems = document.querySelectorAll('li');
    expect(listItems).toHaveLength(11);
  });

  test('has correct section structure and attributes', () => {
    render(<KeySkills />);
    
    const container = document.querySelector('.container_div');
    expect(container).toBeInTheDocument();
    
    const section = document.querySelector('.colorlib-blog');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('data-section', 'keyskills');
  });

  test('renders unordered list', () => {
    render(<KeySkills />);
    
    const unorderedList = document.querySelector('ul');
    expect(unorderedList).toBeInTheDocument();
  });

  test('contains specific achievement about cost reduction', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Successfully reduced operational costs/)).toBeInTheDocument();
  });

  test('contains specific achievement about Udemy education', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Educator on Udemy with over 6,000 students/)).toBeInTheDocument();
  });

  test('contains specific achievement about Chrome memory tool', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Developed a Chrome memory leakage detection tool/)).toBeInTheDocument();
  });

  test('contains specific achievement about automation frameworks', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Built two robust automation frameworks/)).toBeInTheDocument();
  });

  test('contains leadership and team skills', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Collaborative and approachable team player/)).toBeInTheDocument();
    expect(screen.getByText(/Experienced team leader focused on motivation/)).toBeInTheDocument();
  });

  test('contains personal attributes', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Highly self-driven and well-organized professional/)).toBeInTheDocument();
    expect(screen.getByText(/Passionate lifelong learner/)).toBeInTheDocument();
  });

  test('contains work culture related skills', () => {
    render(<KeySkills />);
    
    expect(screen.getByText(/Promotes and maintains a transparent and accountable work culture/)).toBeInTheDocument();
  });

  test('component structure matches expected layout', () => {
    render(<KeySkills />);
    
    // Check the nested structure
    const containerDiv = document.querySelector('.container_div');
    const section = containerDiv.querySelector('.colorlib-blog');
    const innerDiv = section.querySelector('div');
    const heading = innerDiv.querySelector('h3');
    const list = innerDiv.querySelector('ul');
    
    expect(containerDiv).toBeInTheDocument();
    expect(section).toBeInTheDocument();
    expect(innerDiv).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  test('all list items are properly structured', () => {
    render(<KeySkills />);
    
    const listItems = document.querySelectorAll('li');
    
    listItems.forEach(item => {
      expect(item.textContent.trim()).not.toBe('');
      expect(item.textContent.length).toBeGreaterThan(10); // Ensure substantial content
    });
  });
});
