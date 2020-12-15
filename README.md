# MwTrial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Tasks:

### Outlets 
#### Hello World!
1. Create an outlet and say “Hello World!”. You can use any outlet ref on the homepage.
2. Move your outlet to the product detail page and insert it somewhere after the products price but before the quantity selector, without overwriting or replacing anything.

See https://sap.github.io/spartacus-docs/outlets

### Services/Injectables
#### Pickup Availability
1. Show a message in your outlet, whether the current product is available for pickup or not (take advantage of the existing services provided by the spartacus library).

See https://sap.github.io/spartacus/

#### Shot With
1. Create a new outlet right after the product Summary but before the UpSelling ContentSlot.
2. Create a new service and fetch some image data from any random picture API of your choice (e.g.  https://picsum.photos)
3. Fetch atleast 6 different images and represent them in a responsive grid.

*(pretend as if the images were shot with the current product ;))*

### CMS/CX-Components
#### Enhanced Product Summary
1. Without using outlets, try to override the existing `cx-product-summary` component on the product details page with a custom one and say "Hello World!".
2. Try to enhance your "Hello World!"component with the former display and logic from the `cx-product-summary` component.
3. Now replace the "Hello World!" part with your logic from the "Pick Up Availability" Outlet.

See https://sap.github.io/spartacus-docs/customizing-and-extending

#Angular CLI Help
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

