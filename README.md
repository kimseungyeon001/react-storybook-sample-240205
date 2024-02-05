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

react storybookのサンプルコード
sample code for react storybook

### Pattern 1

storybookのみ利用したシンプルな方法
only storybook

- メリット：シンプルな構成でStorybookを利用可能
- merit: you can use with a simple configuration

- デメリット：APIの呼び出しと表示を分ける必要がある
- demerit: you must divide the api calls and display area


### Pattern 2

storybookにmsw を利用した方法
storybook with msw

- メリット：APIの呼び出しと表示を分けなくてもいい
- merit: you not need divide the api calls and display area

- デメリット：mswを 利用するための  addon の追加が必要になる
- demerit: you must add an addon for the storybook
