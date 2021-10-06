module.exports = () => {
  const insertionSort = function(input) {
    for (let i = 0; i < input.length; i++) {
      let key = input[i];
      let j = i - 1;

      while (j >= 0 && input[j] > key) {
        if (input[j] > key) {
          let tmp = input[j];

          input[j] = key;
          input[j + 1] = tmp;
          j--;
        }
      }
    }
  };

  const printArray = function(input) {
    console.log();

    for (let i = 0; i < input.length; i++) {
      console.log(` ${input[i]} `);
    }

    console.log();
  };

  return {
    insertionSort,
    printArray
  };
};
