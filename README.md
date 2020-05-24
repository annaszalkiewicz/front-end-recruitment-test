# Snowdog Front-end Recruitment test

## Overview
This project is part recruitment process at (https://snow.dog/)[Snowdog]

## How to run project on local machine

1. Clone repository
```
$ git clone https://github.com/annaszalkiewicz/front-end-recruitment-test.git
```
2. Install all dependencies
```
$ npm install --global gulp && npm install
```
Follow [installation instructions](https://github.com/google/web-starter-kit/blob/v0.6.5/docs/install.md) and read [commands](https://github.com/google/web-starter-kit/blob/v0.6.5/docs/commands.md) documentation for more details

3. Run project
```
$ npm start
```
Project should open automatically in your browser (http://localhost:3000/)[http://localhost:3000/]


### Task 1
Add [this repo](https://github.com/SnowdogApps/front-end-recruitment-test-submodule) as submodule at `/submodule` folder, then run gulp task `submodule` to add symlink.

[Here](http://localhost:3000/submodule.html) you should see a beautiful page with slices of fried bacon.

Add JS to clone bacon image and attach this action to **Yeah, I want more bacon!** button.

### Task 2
Add tab **Checkout** that reflects design from `/projects/checkout.png`.

Use SCSS to write your styles.

### Task 3
Add simple JS validation to checkout form created earlier.

Remember to show success/error message on form submit.
