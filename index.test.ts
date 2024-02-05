import { describe, expect, test, beforeAll } from 'bun:test'; // Import the test functions

beforeAll(() => {
    console.log('Before all tests');
    // This will run before all tests
    });

    describe('index.ts', () => {
        test('server', () => {
            // Test the server
        });
    });

    describe('file.ts', () => {
        test('file', () => {
            // Test the file
        });
    });

    describe('modules.ts', () => {
        test('path', () => {
            // Test the path module
        });
    });

    // Run the tests

    describe('math', () => {
        test('add', () => {
            expect(2 + 2).toBe(4);
        });
    });