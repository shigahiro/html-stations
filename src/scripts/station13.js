data = "global data";

// このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// ↓関数の中の処理は変更しないでください
// 通常の関数だとthisは呼び出し元のオブジェクトを参照する
// const returnThisData = function () {
//   return this.data;
// };

// アロー関数だとthisは定義された場所のスコープを参照します
const returnThisData = () => {
  return this.data;
};
// ↑関数の中の処理は変更しないでください

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
