const button = document.getElementById("addbtn");
document.getElementById("lists");

// APIを叩く処理を一つの関数 getUsers() にまとめている
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}



function addList(user) {
  // "li"を作成するコード
  const list = document.createElement("li");
  // "li"要素に　userの名前を追加する
  list.innerText = user.name;
  // listsに先ほど定義したlist.innerTextを入力する
  lists.appendChild(list);
  console.log(list);
}


// apiを叩いて反応があるまでに時間がかかり、その間にDOM操作を行うのを防ぐためにasync await 構文を用いる
async function listUsers() {
  //データやりとり
  const users = await getUsers();
  // console.log(users);
  // DOM操作
  users.forEach(addList);
  
}

button.addEventListener("click", listUsers);
window.addEventListener("load", listUsers);