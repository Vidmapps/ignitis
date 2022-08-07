# Ignitis pick a plan wareframe

Desktop view             |  Mobile view
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/58663418/183295377-08d63174-18e4-4f23-8e6c-944931360499.png)|![image](https://user-images.githubusercontent.com/58663418/183295422-2328d56e-7679-4ecf-b6d9-22fa35b2891e.png)




## About The Project
Based on the design sketches, developed a mini-webpage-wareframe for picking the best plan using React.js (real calculations TBA).

### Functions

- Using the `switch`, you can pick if you want to have one zone or two zones plan.
- If two zones plan picked, you can use `progress bar` to select the distribution.
- There are some `fields of the input` to add average monthly fees/usage from previous months and pick the type of fee/usage.
- After the `submit button` is clicked it picked the best plan based on the previous selected and added data (real calculations TBA, for now it picks the first plan by default).
- If the best plan was picked before, it is shown even after the page refresh.


### In progress

- Add real calculations;
- Fix responsive desgin:
  - Remove duplicatd elements;
  - Add all mobile fields.

### Installation

- npm install
- npm start

### Built With

- React.js v18.2.0;
- styled-components v5.3.5
