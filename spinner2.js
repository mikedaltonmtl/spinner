const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < 21; i++) {

  setTimeout(() => {
    process.stdout.write(array[i % 4]);
  }, 100 + (i * 200));

}