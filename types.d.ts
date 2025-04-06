/**
 * Type definitions for @soyluisarrieta/eslint package
 * This file contains the type definitions for the ESLint configuration
 */

import { Linter } from 'eslint';

/**
 * ESLint configuration object for TypeScript and React
 * Contains predefined rules for better code quality and consistency
 *
 * @property {string[]} ignores - Directories and files to ignore during linting
 * @property {string[]} files - File patterns to include in linting
 * @property {Object} plugins - ESLint plugins used in the configuration
 * @property {Object} rules - Custom ESLint rules configuration
 */
declare const config: Linter.Config;

/**
 * Configuration includes:
 * 
 * Ignored patterns:
 * - node_modules directories
 * - dist directories
 * - UI component directories
 * 
 * File patterns:
 * - TypeScript (.ts) files
 * - TypeScript React (.tsx) files
 * 
 * Rule categories:
 * - TypeScript-specific rules (unused expressions, promises handling, etc.)
 * - Code style rules (quotes, spacing, indentation, etc.)
 * - React-specific rules (JSX formatting, React imports, etc.)
 * 
 * Each rule includes a brief comment explaining its purpose and effect on the codebase.
 */
export default config;