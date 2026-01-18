async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affiliation: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affiliation: "HogeHoge大学",
      is_student: true,
    },
  ];
  const result = await test(userList);
  // awaitは不要？
  return result;
}


// setTimeoutは第一引数は関数
// setTimeout(function() {console.log("即時")}, 0);

// 名前付き関数も指定できる。その場合は，第三引数以降が関数の引数になる。
// function hoge(msg) {
//   console.log(msg);
// }
// setTimeout(hoge, 1000, "1秒後");  // 1秒後に実行する関数を登録するだけで，実際に待つわけではない

// // 解1
async function test(userList) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return userList.map((user) => {
    const full_name = user.family_name + " " + user.first_name;
    return { ...user, full_name: full_name };
  });
}

// // 解2
// function test(userList) {
//   return new Promise((resolve) => {
//     // resolveを実行する無名関数を登録している
//     // resolveに引数を渡すことで，その引数がthenのonFulfilledに渡される
//     setTimeout(() => {
//       resolve(
//         userList.map((user) => {
//           const full_name = user.family_name + " " + user.first_name;
//           return { ...user, full_name: full_name };
//         }),
//       );
//     }, 3000);
//   });
// }