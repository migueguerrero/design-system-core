# Design System Core — AI Agent Instructions

## 1. Project Mission

Build a reusable, accessible, framework-agnostic Design System that can be maintained and extended with AI agents.

Teenant is the first validation project, not the owner of the Design System.

## 2. Architecture Principles

- Keep core tokens and components independent of any specific product.
- Separate primitive tokens, semantic tokens, component tokens, and product themes.
- Prefer existing components and patterns before creating new ones.
- Use stable naming conventions and version-controlled source files.
- Design for future React, Vue, Angular, Web Components, and HTML/CSS support.
- Do not assume that a React implementation automatically works in other frameworks.

## 3. Initial MVP Scope

- Design tokens
- Shared CSS
- React components: Button, Input, Card
- Storybook documentation
- Figma component library
- Automated checks and version control

## 4. Component Requirements

Each component should document:

- Purpose and usage
- Properties and variants
- Interaction states
- Accessibility requirements
- Responsive behavior when applicable
- Examples and tests

## 5. Accessibility

Target WCAG 2.2 Level AA where applicable.
Use semantic HTML, keyboard support, visible focus, and appropriate contrast.
Do not claim WCAG compliance without validation.

## 6. AI Change Workflow

1. Understand the request.
2. Inspect existing tokens, components, and documentation.
3. Propose reuse or extension before creating a new component.
4. Explain affected files and potential breaking changes.
5. Implement the smallest appropriate change.
6. Run available checks and report their results.
7. Update relevant documentation.
8. Request human review before publishing or releasing.

## 7. Figma and Code

- Git is the versioned source for tokens, code, and technical documentation.
- Figma is the visual design and prototyping environment.
- Storybook displays implemented components.
- Do not assume automatic Figma synchronization.
- Document any manual or automated synchronization steps.

## 8. Agent Safety

- Never expose secrets or credentials.
- Never deploy, publish packages, or merge changes without explicit approval.
- Never silently introduce breaking changes.
- Do not invent test results or claim that integrations are working without verification.
- Keep changes reviewable and reversible.
