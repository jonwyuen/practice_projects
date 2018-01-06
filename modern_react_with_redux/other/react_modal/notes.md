Placing a modal - Make it a child of document.body (with redux)

        document.body
        |           |
Root Component    Modal (Child of body, no z-index stacking issues)
      |               |
  Component         Provider
      |               |
  Fake Modal       Child Component
  (fake modal will create the modal on document.body)


