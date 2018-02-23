* grid-template-columns defines the number and sizes of the columns of the grid
* grid-template-rows defines the number and sizes of the rows of the grid
* grid-template is a shorthand for defining both grid-template-columns and grid-template-rows in one line
* grid-gap puts blank space between rows and/or columns of the grid
* grid-row-start and grid-row-end makes elements span certain rows of the grid
* grid-column-start and grid-column-end makes elements span certain columns of the grid
* grid-area is a shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end, all in one line

* grid-template-areas specifies grid named grid areas
* grid layouts are two-dimensional: they have a row, or inline, axis and a column, or block, axis.
* justify-items specifies how individual elements should spread across the row axis
* justify-content specifies how groups of elements should spread across the row axis
* justify-self specifies how a single element should position itself with respect to the row axis
* align-items specifies how individual elements should spread across the column axis
* align-content specifies how groups of elements should spread across the column axis
* align-self specifies how a single element should position itself with respect to the column axis
* grid-auto-rows specifies the height of rows added implicitly to the grid
* grid-auto-columns specifies the width of columns added implicitly to the grid
* grid-auto-flow specifies in which direction implicit elements should be created

* Which of the following would make a grid with 2 columns - one twice as big as the other?
  * grid-template-columns: 1fr 2fr;
* Which of the following would make an item start at row 2 and end right before row 5?
  * grid-row: 2 / span 3;
* Which of the following would make a grid with 2 equally sized columns and 4 equally sized rows?
  * grid-template-columns: 50% 50%; grid-template-rows: 1fr 1fr 1fr 1fr;
* How wide will the .item element be if the following CSS is in effect?
```
.layout {
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 200px 100px;
  grid-gap: 10px;
}
.item {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```
  * 200px
* Which of the following is equivalent to the sample code below?
```
.item {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}
```
  * grid-area: 2 / 1 / 4 / 2;
* Which of the following would make an item span 3 columns?
  * grid-column-start: 1; grid-column-end: 4;
* How tall will the .item element be if the following CSS is in effect?
```

.layout {
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 200px 100px;
  grid-gap: 10px;
}
.item {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```
  * 310px
* Which of the following is equivalent to the sample code below?
```
.layout {
  grid-template-columns: 200px 200px;
  grid-template-rows: 100px 200px 100px;
}
```
  * grid-template: 100px 200px 100px / 200px 200px;
* Which function can be used to set minimum and maximum heights and widths for your rows and columns?
  * minmax()
* Which of the following would create an item that begins at the 3rd row of the grid?
  * grid-row-start: 3;
* Which of the following is equivalent to the sample code below?
```
.item {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
}
```
  * grid-column: 2 / 5; grid-row: 1 / 4;
* Which of the following is a display value for a CSS Grid parent element?
  * grid
* Which of the following would make a grid with 3 columns where the middle column takes up 60% of the space, the first column takes up 1/3 of the remaining space and the last column takes up 2/3 of the remaining space?
  * grid-template-columns: 1fr 60% 2fr;

