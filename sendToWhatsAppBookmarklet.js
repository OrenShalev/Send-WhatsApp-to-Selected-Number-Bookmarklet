javascript:(function sendToSelectedNumber() {
  /* Get the text the user selected. */
  const selectedText = document.getSelection().toString();
  /* Remove whitespace around selection, characters which aren't digits or '+', and leadding zero. */
  const parsedText = selectedText.trim().replace(/[^0-9+]/g, '').replace(/^0/, '');
  /* If starts with '+' remove it, otherwise prepend '972'. */
  const finalNumber = parsedText.startsWith('+') ? parsedText.substring(1) : `972${parsedText}`;
  
  console.info(`Trying to send a WA message to number: ${finalNumber}`);
  const url =`https://wa.me/${finalNumber}`;
  window.open(url, '_blank');
})();
