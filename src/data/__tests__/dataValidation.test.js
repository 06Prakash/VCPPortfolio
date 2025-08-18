import projectData from '../projectData.json';
import timelineData from '../timelineData.json';

describe('Data Files Validation', () => {
  describe('projectData.json', () => {
    test('projectData should be an array', () => {
      expect(Array.isArray(projectData)).toBe(true);
    });

    test('projectData should not be empty', () => {
      expect(projectData.length).toBeGreaterThan(0);
    });

    test('each project should have required fields', () => {
      projectData.forEach((project, index) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('content');
        expect(project).toHaveProperty('role');
        expect(project).toHaveProperty('technology');

        expect(typeof project.id).toBe('number');
        expect(typeof project.title).toBe('string');
        expect(typeof project.content).toBe('string');
        expect(typeof project.role).toBe('string');
        expect(typeof project.technology).toBe('string');

        expect(project.title.length).toBeGreaterThan(0);
        expect(project.content.length).toBeGreaterThan(0);
        expect(project.role.length).toBeGreaterThan(0);
        expect(project.technology.length).toBeGreaterThan(0);
      });
    });

    test('project IDs should be unique', () => {
      const ids = projectData.map(project => project.id);
      const uniqueIds = [...new Set(ids)];
      expect(uniqueIds.length).toBe(ids.length);
    });

    test('project IDs should be positive numbers', () => {
      projectData.forEach(project => {
        expect(project.id).toBeGreaterThan(0);
      });
    });

    test('should contain expected sample projects', () => {
      const titles = projectData.map(project => project.title);
      expect(titles).toContain('Performance Framework Development');
    });
  });

  describe('timelineData.json', () => {
    test('timelineData should be an array', () => {
      expect(Array.isArray(timelineData)).toBe(true);
    });

    test('timelineData should not be empty', () => {
      expect(timelineData.length).toBeGreaterThan(0);
    });

    test('each timeline entry should have required fields', () => {
      timelineData.forEach((entry, index) => {
        expect(entry).toHaveProperty('color');
        expect(entry).toHaveProperty('icon');
        expect(entry).toHaveProperty('title');
        expect(entry).toHaveProperty('timeSpan');
        expect(entry).toHaveProperty('content');

        expect(typeof entry.color).toBe('string');
        expect(typeof entry.icon).toBe('string');
        expect(typeof entry.title).toBe('string');
        expect(typeof entry.timeSpan).toBe('string');
        expect(typeof entry.content).toBe('string');

        expect(entry.color.length).toBeGreaterThan(0);
        expect(entry.icon.length).toBeGreaterThan(0);
        expect(entry.title.length).toBeGreaterThan(0);
        expect(entry.timeSpan.length).toBeGreaterThan(0);
        expect(entry.content.length).toBeGreaterThan(0);
      });
    });

    test('timeline colors should follow expected pattern', () => {
      timelineData.forEach(entry => {
        expect(entry.color).toMatch(/^timeline-icon color-\d+$/);
      });
    });

    test('timeline icons should be valid FontAwesome icon names', () => {
      const validIcons = [
        'faCode',
        'faClipboardCheck',
        'faServer',
        'faShip',
        'faGraduationCap',
        'faHighlighter'
      ];

      timelineData.forEach(entry => {
        expect(validIcons).toContain(entry.icon);
      });
    });

    test('should contain expected timeline entries', () => {
      const titles = timelineData.map(entry => entry.title);
      expect(titles.some(title => title.includes('Fresh Works'))).toBe(true);
      expect(titles.some(title => title.includes('graduation'))).toBe(true);
    });

    test('timeline entries should have proper time format', () => {
      timelineData.forEach(entry => {
        // Should contain either "Present" or year format like "2020-2022"
        const timePattern = /(\d{4}-\d{4}|\d{4}-Present|\d{4})/;
        expect(entry.timeSpan).toMatch(timePattern);
      });
    });
  });

  describe('Data Integration', () => {
    test('project data should be sortable by ID', () => {
      const sorted = projectData.sort((a, b) => b.id - a.id);
      expect(sorted).toBeDefined();
      expect(sorted.length).toBe(projectData.length);
      
      // Verify sorting worked
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].id).toBeGreaterThanOrEqual(sorted[i + 1].id);
      }
    });

    test('timeline data should be in chronological order', () => {
      // Verify that more recent entries appear first
      const presentEntry = timelineData.find(entry => entry.timeSpan.includes('Present'));
      if (presentEntry) {
        const presentIndex = timelineData.indexOf(presentEntry);
        expect(presentIndex).toBeLessThan(timelineData.length / 2); // Should be in first half
      }
    });
  });
});
