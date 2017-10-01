// @flow
function Create2DArray(rows: number): Array<Array<any>> {
  const arr = [];

  for (let i = 0; i < rows; i += 1) {
    arr[i] = [];
  }

  return arr;
}

export default Create2DArray;
