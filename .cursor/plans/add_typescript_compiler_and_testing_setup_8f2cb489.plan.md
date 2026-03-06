---
name: Add TypeScript Compiler and Testing Setup
overview: Create a new Git branch, add TypeScript compiler type-checking script, and set up React Testing Library with Vitest for testing React components in the Next.js project.
todos:
  - id: create-git-branch
    content: Create a new Git branch for these changes
    status: completed
  - id: add-type-check-script
    content: Add 'type-check' script to package.json using tsc --noEmit
    status: completed
  - id: install-test-dependencies
    content: Install Vitest, React Testing Library, and related testing dependencies
    status: completed
  - id: create-vitest-config
    content: Create vitest.config.ts with React and jsdom configuration
    status: completed
  - id: create-test-setup
    content: Create test/setup.ts file with jest-dom imports
    status: completed
  - id: add-test-scripts
    content: Add test, test:run, and test:ui scripts to package.json
    status: completed
  - id: create-example-test
    content: Create app/page.test.tsx as an example test file
    status: completed
isProject: false
---

# Add TypeScript Compiler and Testing Setup

## Overview

This plan will create a new Git branch, add TypeScript compiler type-checking capabilities, and set up React Testing Library with Vitest for testing React components.

## Tasks

### 1. Create Git Branch

- Create a new Git branch (suggested name: `add-typescript-tests` or specify your preferred name)
- Command: `git checkout -b <branch-name>`

### 2. Add TypeScript Compiler Script

- Update [package.json](package.json) to add a `type-check` script:
- Add `"type-check": "tsc --noEmit"` to the scripts section
- This allows running `npm run type-check` to verify TypeScript types without emitting files (Next.js already handles compilation)

### 3. Install Testing Dependencies

Install the following dev dependencies:

- `vitest` - Modern test runner (faster alternative to Jest)
- `@vitejs/plugin-react` - Vite plugin for React support
- `@testing-library/react` - React Testing Library for component testing
- `@testing-library/jest-dom` - Custom Jest matchers for DOM assertions
- `@testing-library/user-event` - User interaction simulation
- `jsdom` - DOM environment for tests

### 4. Create Vitest Configuration

- Create [vitest.config.ts](vitest.config.ts) in the root directory
- Configure Vitest with:
- React plugin support
- jsdom environment for DOM testing
- Test setup file path
- Path alias resolution matching tsconfig.json (`@/*`)

### 5. Create Test Setup File

- Create [test/setup.ts](test/setup.ts)
- Import `@testing-library/jest-dom` to enable custom DOM matchers (e.g., `toBeInTheDocument()`)

### 6. Add Test Scripts to package.json

Add the following scripts to [package.json](package.json):

- `"test": "vitest"` - Run tests in watch mode
- `"test:run": "vitest run"` - Run tests once (for CI)
- `"test:ui": "vitest --ui"` - Run tests with UI (optional)

### 7. Create Example Test File

- Create [app/page.test.tsx](app/page.test.tsx) as an example test for the home page
- Demonstrate basic React Testing Library usage

### 8. Update .gitignore (if needed)

- Ensure test coverage directories are ignored (likely already covered)

## Files to be Modified

- [package.json](package.json) - Add scripts and dependencies
- [.gitignore](.gitignore) - Verify test coverage is ignored (if needed)

## Files to be Created

- [vitest.config.ts](vitest.config.ts) - Vitest configuration
- [test/setup.ts](test/setup.ts) - Test setup and global imports
- [app/page.test.tsx](app/page.test.tsx) - Example test file

## After Implementation

- Run `npm install` to install new dependencies
- Run `npm run type-check` to verify TypeScript compilation
- Run `npm test` to run tests in watch mode