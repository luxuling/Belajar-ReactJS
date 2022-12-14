const element = document.getElementById("root"); //buat element di react
// const h1 = React.createElement("h1",{
//     children: "hello from reactJS!!"
// })
//buat paragraph
// const p1 = React.createElement("p",{
//     children: "ini paragraf pertama"
// })
// const p2 = React.createElement("p",{
//     children: "ini paragraf kedua"
// })
// const paragraf = React.createElement(React.Fragment,{
//     children: [p1,p2]
// })
//buat list
// const ul = React.createElement("ul",{
//     className: "ul"
// },
// React.createElement("li", null, "apple"),
// React.createElement("li", null, "orange"),
// React.createElement("li", null, "banana")
// )
//with JSX
// const ul = (
//     <ul>
//         <li>apple</li>
//         <li>orange</li>
//         <li>banana</li>
//     </ul>
// )

function tanggal() {
  const div = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hi", null, "Selamat datang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(div, element);
}

setInterval(tanggal, 1000);
const wrapper = document.getElementById("wrapper");
const box = /*#__PURE__*/React.createElement("div", {
  className: "h-52 w-52 bg-sky-300 rounded-lg shadow-slate-400 shadow-lg mx-auto"
});
ReactDOM.render(box, wrapper);
const btnWrap = document.getElementById("btn-wrap");

function sapa(msg) {
  alert(msg);
}

const button = /*#__PURE__*/React.createElement("div", {
  className: "flex justify-center py-6"
}, /*#__PURE__*/React.createElement("button", {
  onClick: sapa.bind(this, "hallo"),
  className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg"
}, "Click Me!"));
ReactDOM.render(button, btnWrap);
const counter = document.getElementById("counter");

function App() {
  const [count, setCount] = React.useState(0);
  const [click, setClick] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg",
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", {
    id: "num",
    className: "my-auto"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg",
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg",
    onClick: function () {
      setClick(true);
    }
  }, "Click me too!!"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), counter); //login buton

const loginDiv = document.getElementById("login");

function Login() {
  const logged = React.useRef(null);
  const [log, setLog] = React.useState(false);

  if (log) {
    logged.current.textContent = "BERHASIL LOGGIN";
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: logged,
    className: "text-slate-800 font-semibold text-xl text-center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/React.createElement("buttton", {
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer",
    onClick: function () {
      setLog(true);
    }
  }, "login")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Login, null), loginDiv); //list

const listDiv = document.getElementById("list");

function List() {
  const nama = ["dody", "wp", "ayyub", "taqi", "faruq"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-slate-800 font-semibold text-xl text-center"
  }, "List nama"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center bg-sky-300 rounded-lg w-44 mx-auto py-3"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-disc"
  }, nama.map(nama => {
    return /*#__PURE__*/React.createElement("li", null, nama);
  }))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(List, null), listDiv); //from

const formDiv = document.getElementById("form");

function Form() {
  const [nama, setNama] = React.useState("");
  const h1 = React.useRef(null);

  function submit(event) {
    event.preventDefault();
    h1.current.textContent = `terima kasih ${nama}`;
    console.log("nama: " + nama);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center bg-slate-200 w-72 rounded-lg mx-auto h-auto py-5 mb-10"
  }, /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "px-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "nama"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    className: "outline-none border border-sky-300 ring-1 ring-sky-300 rounded-lg px-4 py-1 focus:border-sky-300 focus:border focus:ring-1 focus:ring-sky-300",
    onChange: function (event) {
      setNama(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "py-5 flex justify-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "submit",
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer",
    onClick: submit
  })))), /*#__PURE__*/React.createElement("h1", {
    ref: h1,
    className: "text-center text-slate-800 text-xl font-semibold mb-10"
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), formDiv); //fetch API

const apiDiv = document.getElementById("fetch");

function Fetch() {
  let [title, setTitle] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getData = async () => {
      const getNews = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=f2885538eab2402788c28125bc6de076");
      const news = await getNews.json();
      const articles = news.articles;
      setTitle(articles);
      setLoading(false);
    };

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-center text-3xl font-bold text-slate-800 mb-5 uppercase"
  }, "judul berita"), /*#__PURE__*/React.createElement("div", {
    className: "overflow-scroll h-56 w-1/2 mx-auto"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-decimal"
  }, loading && /*#__PURE__*/React.createElement("h1", {
    className: "text-center text-1xl font-bold text-slate-800 mb-5 uppercase"
  }, "masih loading bang"), !loading && title.map(value => {
    return /*#__PURE__*/React.createElement("li", null, value.title);
  }))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Fetch, null), apiDiv); //to do list 

const todoDiv = document.getElementById("todolist");

function Todo() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [msg, setMsg] = React.useState("");
  React.useEffect(function () {
    console.log(todos);
  }, [todos]);

  function submit(event) {
    event.preventDefault();
    setMsg("");

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        activity
      };
      const indexTodo = todos.findIndex(value => value.id == edit.id);
      const updatedTodo = [...todos];
      updatedTodo[indexTodo] = updateTodo;
      setTodos(updatedTodo);
      setActivity("");
      setEdit({});
      return;
    }

    if (activity.length == 0) {
      setMsg("*mohon diisi dulu!!");
      return;
    }

    setTodos([...todos, {
      id: Date.now(),
      activity
    }]);
    setActivity("");
  }

  function done(item) {
    const updateTodo = { ...item,
      done: item.done ? false : true
    };
    const indexTodo = todos.findIndex(value => value.id == item.id);
    const updatedTodo = [...todos];
    updatedTodo[indexTodo] = updateTodo;
    setTodos(updatedTodo);
  }

  function removeTodo(todoid) {
    const filteredTodos = todos.filter(todo => todo.id !== todoid);
    setTodos(filteredTodos);
    cencelUpdate();
  }

  function editTodo(item) {
    setMsg("");
    setActivity(item.activity);
    setEdit(item);
  }

  function cencelUpdate() {
    setActivity("");
    setEdit({});
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "my-16 flex flex-wrap justify-evenly w-1/2 h-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-semibold text-slate-800"
  }, "Todo list"), /*#__PURE__*/React.createElement("form", {
    action: "",
    className: "w-fullh-auto mb-5"
  }, msg && /*#__PURE__*/React.createElement("p", {
    className: "text-pink-500"
  }, msg), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    },
    placeholder: "masukan kegiatan anda",
    className: "outline-none focus:border-b-2 focus:border-sky-300"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer",
    onClick: submit
  }, edit.id ? "simpan perubahan" : "tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    className: "py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer",
    onClick: cencelUpdate
  }, "cencel")), /*#__PURE__*/React.createElement("ul", {
    className: "w-full px-4v list-disc"
  }, todos.length == 0 && /*#__PURE__*/React.createElement("h1", {
    className: "text-center mt-5 text-lg font-medium"
  }, "belum ada aktivitas"), todos.map(item => {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id,
      className: "p-2"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: item.id,
      className: !item.done ? "py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer mr-3 bg-pink-500" : "py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer mr-3 bg-lime-300"
    }, !item.done ? "belum selesai" : "sudah selesai"), /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "",
      id: item.id,
      className: "mr-2 hidden",
      checked: item.done,
      onChange: done.bind(this, item)
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-lg font-medium text-slate-800"
    }, item.activity), /*#__PURE__*/React.createElement("button", {
      className: "py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer ml-3",
      onClick: editTodo.bind(this, item)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      className: "py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer ml-3",
      onClick: removeTodo.bind(this, item.id)
    }, "hapus"));
  }))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Todo, null), todoDiv);