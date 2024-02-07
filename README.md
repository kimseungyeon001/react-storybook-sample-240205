## Getting Started

### Install

create the project
```
git clone https://github.com/kimseungyeon001/react-storybook-sample.git
```

access the project directory
```
cd react-storybook-sample
```

install dependencies
```
npm install
```

setting config.ts
```
cp ./src/config.local.ts ./src/config.ts
```

### Start
```
npm run dev
```

### Storybook
```
npm run storybook
```

## Introduction

You can use the following two patterns together.
I recommend you to use Pattern 1 for most components.
You can use Pattern 2 for play function tests (test on Storybook).

### Pattern 1: src/components/pages/PatternFirstPge

Storybook + props

- PROS:
  - Simple
  - You can change a component's appearance by props
- CONS:
  - You need to split API calls from your components
    - See PatternFirstPage component implementation,
      - witch has a presenter component(without API calls) and component(with API calls)

### Pattern 2: src/components/pages/PatternSecondPge

Storybook + msw

- PROS:
  - You can write play function tests on Storybook with mocks
    - play function is a test code on Storybook
    - with play function, it's easy to debug compared to jest/vitest on node.js
    - play functions can be integrated into jest/vitest
      - You can call play function tests from jest/vitest
- CONS:
  - Complicated
