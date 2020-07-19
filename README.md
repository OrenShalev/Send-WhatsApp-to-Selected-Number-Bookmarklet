# Send-WhatsApp-to-Selected-Number-Bookmarklet

[Text][4]

Code:
```JavaScript
javascript:(function sendToSelectedNumber() {
  /* Get the text the user selected. */
  const selectedText = document.getSelection().toString();
  /* Remove whitespace around selection, characters which aren't digits or '+', and leadding zero. */
  const parsedText = selectedText.trim().replace(/[^0-9+]/g, '').replace(/^0/,'');
  /* If starts with '+' remove it, otherwise prepend '972'. */
  const finalNumber = parsedText.startsWith('+') ? parsedText.substring(1) : `972${parsedText}`;
  
  const url =`https://wa.me/${finalNumber}`;
  console.log(url);
  /*   window.open(url, '_blank'); */
})();
```

 [1]: "javascript:(function%20sendToSelectedNumber()%20%7B%7D)()"
 [2]: http://example.com/test%281%29.html
 [4]: https://google.com/?q=aa(b)
