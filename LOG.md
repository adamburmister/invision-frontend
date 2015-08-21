# Work Log

## Thursday

- Converting the HTML mockup to React components.

- Adding Neat so I have access to Sass grid mixins (I could roll my own, but a hassle,
  and there's rarely a reason to roll your own in real life)

- Adding Scss for the page nav, hero, hero nav, footer. Still need to extract the
  icons to SVG.

## Wednesday 6pm

- So I'm at the point where I have the bones ready to go, so I'm looking at how
  I can best tackle the CSS layout issues. Given the grid structure, and the
  very wide content provided in the screenflow (and since I'm unsure I have permission
  to ask questions or not for this task) I'm assuming the design should be liquid,
  probably down to breakpoints for mobile.

  I'm taking the instruction line "Not rely on HTML/CSS frameworks; while their
  use is not prohibited, the markup should be as clean and free of unnecessary
  elements" to mean I shouldn't be putting in grid layout classes into the markup.
  I will instead use Sass to mixin grid systems into the BEM'ified elements themselves.

  Unfortunately because of the IE9 requirement I can't implement a flexbox grid...
  I will be going old-school percentage width based.

- Learning Redux's architecture.

## Tuesday 6pm

- The courier delivered my electric longboard today! (ridemarbel.com) I don't expect
  the evening to be overly productive ;)

- Talked to some React users about Flux implementations, am going to play with Redux
  rather than Alt now based on their recommendations.

- Writing the first HTML mockup, using BEM notation (not sure what you guys prefer,
  but can refactor later easily enough).

- Added a base Gulp project task with Sass, live-reload, dist-build, etc

- Added JSPM, Babel for ES6 transpiling, and React/Redux packages

## Monday 10pm

- I've had a chat with Danielle today and have taken 20 minutes to review the content
  she's sent through - I understand the requirements, and am starting to work out a
  TOOD list of tasks required to implement the task.

- I've been wanting to learn a couple new technlogies recently: diving more into
  React, Alt.JS (Flux implementation), Reactive.JS (not related to React),
  and Falcor (Netflix's JSON Graph).

  Since I want a project to learn and test these new concepts on I think I will kill
  two birds with one stone... this will slow my submission down, but given (when I asked)
  there was no time restriction I think this should be ok (please forgive me otherwise).
