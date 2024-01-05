# CSS display Property - Block, Inline, and Inline-Block

The display property in CSS defines how an HTML element will be displayed on the web page. Three commonly used values are block, inline, and inline-block.

1. block
The block value is used to make an element a block-level element. Block-level elements start on a new line and take up the full width available, pushing subsequent elements onto the next line.

css
Copy code
div {
  display: block;
}
Example:

html
Copy code
`<div>`
  This is a block-level element.
</div>
2. inline
The inline value is used to make an element an inline-level element. Inline-level elements don't start on a new line and only take up as much width as necessary. They allow other elements to sit beside them on the same line.

css
Copy code
span {
  display: inline;
}
Example:

html
Copy code
`<span>`This is an inline element.</span>
3. inline-block
The inline-block value combines features of both block and inline. It allows an element to have a width and height, and it will respect top and bottom margins and paddings. It remains inline, allowing other elements to be on the same line.

css
Copy code
img {
  display: inline-block;
}
Example:

html
Copy code
`<img src="example.jpg" alt="An inline-block element with an image.">`
Choose the appropriate display value based on your layout needs, whether you want elements to stack vertically (block), inline with text (inline), or a combination of both (inline-block).
