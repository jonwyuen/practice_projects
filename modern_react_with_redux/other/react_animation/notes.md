React CSS Transistion Group - used to add items and remove items from lists

```js
const transitionOptions = {
  transitionName: 'fade',
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 500
};

<ul className="list-group">
  <ReactCSSTransitionGroup {...transitionOptions}>
    {this.renderQuotes()}
  </ReactCSSTransitionGroup>
</ul>;
```

```css
/* <transitionName>-enter/leave */
/* starting state of animation */
.fade-enter {
  right: 100px;
  transform: rotateX(90deg) rotateZ(90deg);
  opacity: 0;
}

/* end state of animation */
.fade-enter-active {
  right: 0px
  transform: rotateX(0deg) rotateZ(0deg);
  opacity: 1;
  transition: 0.5s ease-in all;
}

.fade-leave {
  right: 0px;
  opacity: 1;
}

.fade-leave-active {
  right: -100px;
  opacity: 0;
  transition: 0.5s ease-out all;
}
```
