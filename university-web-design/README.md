# What I've Learnt - University Web Design

This document shows the things I've learnt as a beginner into Website Development in this follow-along website development session. It includes `HTML` and `CSS` terms as well as some other methods that can aid a lot in building a website.

## Components

While building a website, it is common for us to use certain fonts, images and icons in our design. The traditional way of doing this is to download each of them into files and then link it as we use them. However, it might be easier if we can skip the steps of download, rename, move to folder and link to use the components.

### Fonts

For fonts and icons, [Google Fonts](https://fonts.google.com/) has a variety of fonts available to be used without needing to download it. After selecting the fonts that we want to use, we can just embed the font in our website on both `HTML` and `CSS`. One of the example is as below:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,300&display=swap" rel="stylesheet">
```

In `CSS`:

```css
* {
    font-family: 'Roboto', sans-serif;
}
```

### Icons

Google Fonts has a icon library called the [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) which also can be embedded in our `HTML` code easily without downloading it. We can then use the icons using the `<span>` tag or `<i>` tag, and the name of the icon as the "`innerText`" of the tag. For example to create a "face" icon, we just need to write the following code in `HTML`:

```html
<span class="material-icons">face</span>
```

However, there are also some important icons (including the brand icons) that are not available on Google's Material Icons library. Therefore, the [FontAwesome](https://fontawesome.com/icons) icons library is also commonly considered while building websites. It sometimes even contains multiple variations of similar icons. 

To learn how to use FontAwesome icons, I suggest you to check out [this tutorial from W3Schools](https://www.w3schools.com/icons/default.asp) as it is slightly different for each version of FontAwesome Icons.

### Images

It is always encouraged to download and save High-Res images locally and then link it in our `HTML` file. To find High-Res images, we can go to [Unsplash](https://unsplash.com/) or [Pixabay](https://pixabay.com/) as they contain a lot of free stunning high resolution royalty-free images.

## Website Layout

The `HTML` file defines the layout or the structure of the website that we build. Below are some of the things that I've learnt so that structuring the website becomes way easier.

### Elements in the `<head>` Tag

While we are building a responsive website, it is always common for us to include the following line in our `<head>` tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

This allows us to do [Media Query](https://web.dev/learn/design/media-queries/) so that we can design our layout according to the screen sizes.

It is always common for website developers to include the website favicon next to the "`<title>`". To add that, we just need to write the following line:

```html
<link rel="icon" type="image/x-icon" href="./images/favicon.ico">
```

The [Favicon Ico Generator](https://www.favicon.cc/) website allows users to draw their favicon in a 16px  $\times$ 16px size.

### The `<section>` Tag

Although it is easier for us to just use `<div>` to structure the layout of our website, using the `<section>` element will improve the readability of our `HTML` code.

The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading (`<h1>` or other headings), with very few exceptions.

### The `<nav>` Tag

Similar to the `<section>` tag, the `<nav>` tag stores all elements related to website navigation. This also improves the overall readbility in the `HTML` code.

### The `<ul>` and `<li>` Tag

From what we've learnt in `HTML`, the `<ul>` tag represents an unordered list, which by its word is used on lists like the task lists, shopping lists and many more. However, it is also useful to be used in the navigation section of our `HTML` file.

Basically, this combination of tag is very useful when we are dealing with elements that will perform similar function and will have similar styles to it. In this case, the navigation button each will direct the user to a specific section of the page, and they should all have the similar hover effect. Therefore, this tag combination is perfect for this case.

### The `<a>` Tag

A lot of times when we are dealing with buttons, we will straight away use the `<button>` tag. Although it might not be wrong using the `<button>` tag on buttons, but sometimes the `<a>` tag will be even more useful.

> Not all clickable elements must be a button. But we can design a button from an element with `<a>` tag.

### Scroll to Certain Section Upon Clicking

Sometimes we will have a button that will scroll us to a specific section under the same page. To do this, we can just reference the button to a specific `id` in the page. For example, if we want to bring the user to the `about` section of the page with `id="about"`, we can just put the `#id` of that section in the `href` attribute, for this case it will be `href="#about"`.

But this will cause the page to jump straight to that section without the scrolling effect. To do the scrolling effect, one simple way to do it in `CSS` is to add the following code:

```css
html {
    scroll-behavior: smooth;
}
```

Otherwise, we can also use some other `JavaScript` scrolling libraries like the [JQuery Smooth Scroll Plugin](http://flesler.blogspot.com/2007/10/jqueryscrollto.html).

### Multiple Columns of Content

In responsive web design, we will mostly deal with layout that will be stretched into multiple columns at higher width, and condense into multiple rows at shorter width. 

The easiest way to do this is to have a `row` and a `column` containers. For example:

```html
<div class="row">
    <div class="column">Content in Column 1</div>
    <div class="column">Content in Column 2</div>
    <div class="column">Content in Column 3</div>
</div>
```

Then to further specify the layout of this row and column, we will specify the following properties:

```css
.row {
    display: flex;
    justify-content: space-between;
}

.column {
    flex-basis: 31%; /* Good for columns of 3 */
    ...
}

/* Media Query */
@media screen and (max-width: 700px) {
    .row {
        flex-direction: column;
    }
}
```

The `flex-direction: column;` property will make the columns stack from top to bottom.

### `CSS` Variables

Sometimes, especially when dealing with similar styles like a color's hex code, it might be difficult to always write the hex code of that color compared to using a variable to represent it. In `CSS`, global variables are declared inside the `:root` selector. Each variable will start with `--`, and will be called along with `var()`. For example:

```css
/* Declaring Global Variable */
:root {
    --red-color-primary: #f44336;
}

/* Using Variable */
.hero-button {
    background-color: var(--red-color-primary);
}
```

### The Arrow `>` in Selectors

The arrow `>` refers to "immediately after", which can be used to select the class or id of the child element immediately after the parent element. Note that the selectors below are different:

```css
.blog-container > h1 {
    ...
}

.blog-container h1 {
    ...
}
```

The first one, `.blog-container > h1` refers to all child `h1` elements immediately after the element of class `blog-container`. 

The second one without the arrow `>` means that all `h1` elements (may not be immediately) after the parent elements of class `blog-container` are selected. This essentially means that the following code is also equivalent to `.blog-container h1`.

```css
.blog-container > div > span > .blog-title > h1 {
    ...
}
```

### Margin vs Padding

Even some beginner website developers still get confused between the usage of margin and padding. From what I've noticed, the difference between both can be explained by the following analogy:

Imagine that we have 2 containers (`<div>`) next to each other, and each container contains an element. 

* **Padding** refers to the distance between the element and its container.
    * If `margin: 0;`, the containers have 0 distance between each other.
* **Margin** refers to the distance between both container.
    * If `padding: 0;`, each container has the same boundary as the element inside it.

Sometimes it might look the same if we use `margin: 10px;` and `padding: 10px;`, but to illustrate the difference, simply add the `background-color: beige;` and we can see the difference.

### Border Sizing Property

There may be a situation where we defined the size of the `<div>` but the `padding` causes its size to visually extends over the desired size. To solve this, we will use the following property:

```css
.container {
    border-sizing: border-box;
}
```
This will make sure that all sizing on the `<div>` will depend on the border of the `<div>` including the padding.

## Website Styling 

A website will be cool to have some styles so that it looks more interesting and user friendly. Below are some of the styling methods I learnt while building this website.

### Hero Image / Cover Image

Some websites will have a hero image, which essentially means an image that covers the entire screen of the website window. To do this, we will specify the following properties in our `CSS` file:

```css
.header {
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
}
```

### Onhover Effects

Onhover effect is a common effect that is present on almost every clickable links, buttons and many more. Nowadays, elements that have onhover effects will be intepreted as hyperlinks or buttons that will redirect to a different place.

This effect can be easily done on `CSS` using `:hover` on the selector. Note that it may not always be at the end of a selector especially when certain elements that we want to change onhover is located inside the element "onhover". One example can be seen as below:

```css
.campus > .row > .campus-column > .location-overlay:hover > h3 {
    bottom: 49%;
    opacity: 1;
}
```

In this case, we will change the style of the `<h3>` tag when the cursor hovers over the container with the class `location-overlay`.

### Onhover Cursor

It is also common for all clickable links to have the `pointer` cursor instead of the default mouse cursor. To add this, we will use the `cursor: pointer;` property on the selector in `CSS`.

### Transition

If we just change the styling of elements onclick or onhover, it will look abrupt, which is not that nice. There is a property in `CSS` called `transition`, which we can define the transition duration and transition style in this property.

It is best to include this `transition` property for every elements (not on the ones that have `:hover`) that will have visual changes upon user interactions. Especially for onhover effects, we would also love to have the smooth transition "offhover".

```css
/* This enables the transition to present onhover and offhover */
.hero-button {
    color: black;
    background-color: transparent;
    transition: 0.5s ease;
}

.hero-button:hover {
    color: white;
    background-color: black;
}

/* The transition is only present onhover */
.hero-button-2 {
    color: black;
    background-color: transparent;
}

.hero-button-2:hover {
    color: white;
    background-color: black;
    transition: 0.5s ease;
}
```

# Conclusion

As a beginner into static website development, I am certain that by following along professionals in building website is one of the most beneficial and effective way to learn `HTML`, `CSS` and a little bit of `JS`.

This is my second time creating a website, and by comparing to the first time of me building a website, I can see some significant difference in the usage of certain elements and explore the possibilities to a better website design.