## Abstract

Your first goal is to make a task list with tasks you can create and delete. Data does not have to save on reload, and you should think about what components you need to make (you can do this without making components, but that is bad design).

Your second goal is to make a `Modal` component that, on first render, has button saying "Click Me!".

This will primarily be difficult because of the styling: the modal component has to overlay, be centered in the entire screen, and not shift other content previously on the screen.

- Modal should meet the below specification
  - The modal should not exist in DOM (not simply just hidden with CSS) until the "open" button is clicked
  - The modal should be completely removed from DOM when the "close" button is clicked
  - The modal should have a width and height of `20rem` and be centered in the screen

**Please read [the reference](#reference) before beginning!** It will help you avoid common conceptual misunderstandings and allow you to finish faster and more correctly.

## Requirements

- Do not install any other packages.
- Treat this like a codebase with many collaborators, i.e. use Prettier
- Complete all TODOs: you can check where all of them are with `grep -R --exclude-dir=node_modules TODO`

Email me at [dseum@college.harvard.edu](mailto:dseum@college.harvard.edu) if you have any questions or concerns!

## Usage

### Setup

Install packages with `npm install`.

### Development

1. Run the dev server with `npm run dev`.
2. Open [http://localhost:5173](http://localhost:5173) with your browser.

You can start editing the page by modifying `src/app.tsx`. The page auto-updates as you edit the file.

## Reference

### IDE

Your IDE is your friend! VS Code has many LSP (Language Server Protocol) extensions that will provide completion and other conveniences.

ESLint is also helpful. It is a linter, which is a program to look out for common mistakes in JS and to provide style recommendations. It will catch many React lifecycle bugs automatically.

### Client Side Rendering

To explain this, you have to understand a brief timeline of the web.

1. You could only serve statically on the web, e.g. having an `index.html` hosted on a server. There was no dynamic content, in that once you uploaded the asset, it couldn't query another API to change its content. To update what the content, you had to reupload the asset.
2. Skip many many years. There was the invention of JS frameworks that made components. Components solve the issue of updating, for instance, a navigation bar across all your pages. Before, you had to manually go into every page's HTML file then copy paste the navigation bar.[^1]
3. This was the advent of SPA (Single Page Applications), where instead of having multiple HTML pages that URLs would directly navigate to, you would ship a single HTML page with JS to dynamically change the content on this single page to simulate different pages.

Thus, all HTML rendering of different pages is done locally (and not before) with JS.

[^1]: Some of you might know that PHP was already a solution to this issue, but there are reasons why we need this in JS. If you want to know further, let me know.

### Inline CSS

In HTML, you do the following.

```html
<div style="border-width:2px;border-color:black" />
```

In JSX, you do the following.

```js
const Component = () => {
  return (
    <div
      style={{
        'border-width': '2px',
        'border-color': 'black',
      }}
    />
  )
}
```

If you're more interested in integrated styling, check out [CSS Modules](https://github.com/css-modules/css-modules).

### `createPortal`

This is used for rendering the modal. This is important so that the modal is not rendered (and thus, styled) where the `Modal` component is placed. This is because than unknown parent element's CSS and layout restrictions possibly cascade and make it look differently. Modal rendering should be deterministic: they should look the same no matter where the actual component is placed.

Read more about it [here](https://react.dev/reference/react-dom/createPortal).
