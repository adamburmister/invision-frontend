
# InVision Frontend Project

## Usage

1. Install Gulp globally: `npm install -g gulp`
2. Run `gulp install` in the root directory to install npm & jspm dependencies automatically or do it yourself by running `npm install` and then `jspm install` in the root directory
3. Run `gulp` or `npm start` to start the local dev server
4. `open http://localhost:8080`

## Testing

Run `karma start` or `npm test` to run tests once.

Run `npm run test:watch` to run tests continuously.

## Generating documentation

Run `npm run docs` to generate documentation for JavaScript and SASS automatically in the `docs` folder.

## Building

Run `gulp build` or `npm run build` to build the app for distribution in the `dist` folder.
