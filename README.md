# barbershop
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Install

Run `gem install compass`

Run `npm install` && `bower install`

Yeoman API:

https://github.com/yeoman/generator-angular#readme

For Deployment:

a. Run an `npm install` in the project's root to ensure `grunt-build-control` is installed
b. Run `grunt build`. Optionally, run `grunt serve:dist` to ensure everything is working fine
c. Open Gruntfile.js and ensure `buildcontrol.heroku.options.remote` is set to the correct heroku repo
d. Go to the `dist/` folder and run an `npm install`
e. Run `grunt deploy` from the root folder
