Reselect used when we have one or more different pieces of state and we care about a value that is the product or calculated result of these different pieces of state

Posts Reducer -> Reselect Selector -> Selected Post List
^
|
Selected Posts Reducer --

Selectors take in diff pieces of state, do some calc, then spit out data

1 or more piece of Redux state -> Selector -> Derived/Calculated State
