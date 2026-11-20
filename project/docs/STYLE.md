# K-Learn Hub Coding and UI Style Guide

## 1. Purpose

This document defines coding and user interface conventions for K-Learn Hub. The goal is to improve readability, consistency, reliability, and maintainability.

## 2. Code Style

### MUST

- MUST use TypeScript for application code to catch type-related errors early.
- MUST use meaningful and descriptive names for variables, functions, and components.
- MUST use PascalCase for React component names and camelCase for variables and functions.
- MUST handle errors from asynchronous operations instead of silently ignoring them.
- MUST validate user input before saving data or processing API requests.
- MUST keep functions focused on one responsibility to make them easier to test and maintain.
- MUST run ESLint before submitting code changes.

### SHOULD

- SHOULD keep functions short and split complex logic into smaller functions.
- SHOULD use constants instead of unexplained magic numbers.
- SHOULD remove unused variables, imports, and unreachable code.
- SHOULD reuse shared components and utility functions instead of duplicating logic.
- SHOULD format code consistently using Prettier.

## 3. UI Style

### MUST

- MUST use clear and consistent labels for buttons, forms, and navigation.
- MUST provide understandable error messages when an operation fails.
- MUST show loading or disabled states while an asynchronous action is in progress.
- MUST make form fields identifiable and provide validation feedback.
- MUST prevent users from submitting invalid or duplicate registrations.

### SHOULD

- SHOULD keep spacing, typography, and button styles consistent across pages.
- SHOULD provide clear empty states when no classes or registrations are available.
- SHOULD make interactive elements visually distinguishable.
- SHOULD ensure layouts remain usable on different screen sizes.

## 4. Rationale

These rules help developers understand the code, reduce common programming errors, provide predictable user experiences, and make future maintenance easier.
