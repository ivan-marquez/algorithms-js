function addUpToV1(n) {
  var total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}

module.exports = {
  addUpToV1,
  addUpToV2
};
