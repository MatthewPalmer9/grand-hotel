# Grand Hotel &mdash; A pseudo-luxury hotel website
Make your life luxurious. At Grand Hotel, embrace the royal R&R experience you deserve!

## Where can I see a demo?
This project is hosted live [at this link](https://grand-hotel-silk.vercel.app/).

## Want to save time? Let me help you find what you're looking for.
- **Interested code architecture?**
  - **SCSS/CSS:** Instead of importing a bunch of CSS files and cluttering the top of a component file, this application uses `styles/index.js`. All styles are accessed from that directory, which are then imported at the top level of the application. [See the file setup](https://github.com/MatthewPalmer9/grand-hotel/tree/master/src/styles) | [See the top level import (At Line 3)](https://github.com/MatthewPalmer9/grand-hotel/blob/master/src/index.js)
  - **Components:** All components and subcomponents exist at `src/components`. [See components structure](https://github.com/MatthewPalmer9/grand-hotel/tree/master/src/components)

- **Interested in cross-browser functionality?**
  - **Smooth Scroll**: The property which handles smooth scrolling in CSS isn't supported by all browsers. However, this problem is solved by using JavaScript. [See how I used it here](https://github.com/MatthewPalmer9/grand-hotel/blob/master/src/App.js)

- **Interested in design decisions?**
  - **Device Scaling**: There's 2 different ways to design responsively using media queries. The first method is by using absolute measurements, such as literal pixels (BAD!). The second involves understanding screen PPI (pixels per inch), setting `font-size: 62.5%`, and measuring almost EVERYTHING in rem units. This allows an app to scale to any device. [See here (Line 19)](https://github.com/MatthewPalmer9/grand-hotel/blob/master/src/styles/global/global.scss)
  - **Fibonacci Sequence**: Developers often get hung up on what units to use when making design decisions. To save time, I use the Fibonacci Sequence `..., 2, 3, 5, 8, 13, 21, 34, ... etc.` as my default choice of measurement. These values are changed when polishing up the design, but generally you can expect me to have a method and reason for my pattern of development.

  # Contact
  - Connect with me on [LinkedIn](https://linkedin.com/in/mattpdev)!
  - **Email:** matthewpalmer9@outlook.com
  - **Online Resume:** [Matthew Palmer's Resume](https://docs.google.com/document/d/1-4BHZ96uD8QJ2SkTX21MXHgcdytroYjalObEu8Azp_o)
