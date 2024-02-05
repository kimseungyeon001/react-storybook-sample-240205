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

setting .config.ts
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

sample code for react storybook

### Pattern 1

only storybook

- merit: you can use with a simple configuration
- demerit: you must divide the api calls and display area


### Pattern 2

storybook with msw

- merit: you not need divide the api calls and display area
- demerit: you must add an addon for the storybook
