for (let i = 0; i < 5; i++) {

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 + (i * 800));

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + (i * 800));

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + (i * 800));

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700 + (i * 800));

}
