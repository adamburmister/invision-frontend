# Work Log

## Tuesday, Wednesay

- Fleshing out the React side, getting Isotope to bend to my will, and trying
  to understand and implement a Redux flow.

- IE9 testing and fixes. Found a bug around the modal, and lack of placeholder
  support (fixed with a JS lib).

## Sunday, Monday

- Set up Isotope to deal with the grid and filters

- Continuing to learn React practices

- Modal developed (although a bit flakey for large photo viewing - i'd fix that if I had time)

## Friday

- Long week of work, now onto this :)

- Have most of the CSS done for the home page. Still need to do settings, etc,
  but have enough to wire up to React and Redux now... that's all relatively new
  to me so I'm spending a couple hours playing around learning that before applying
  to this project.
  I will do a basic React implementation, then a Flux, then a Redux.

- Oh damn, just tried populating some test data and I realise now my naieve grid
  won't do the job with floats (of course)... will need to implement a IE9 friendly
  masonry system (I miss flexbox)...
  - A CSS3 Columns layout works fine, but the display order is wrong as it goes
    vertically across columns, not horizontally as in mock ups
  - I may have to resort to the masonry JS to get it done as per design
    - Masony isn't great either... as we expand the replies we have to move pieces
      up or down... currently they shuffle left or right too (with default implementation)
      So the CSS3 Columns is actually a pretty good solution, despite sort order.

## Thursday

- Converting the HTML mockup to React components.

- Adding Neat so I have access to Sass grid mixins (I could roll my own, but a hassle,
  and there's rarely a reason to roll your own in real life)

- Adding Scss for the page nav, hero, hero nav, footer. Still need to extract the
  icons to SVG.

- Finished enough of the Posts list that I can proceed to start backing it with
  React data flows. I'll tackle that tomorrow.

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
