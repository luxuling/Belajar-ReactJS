const element = document.getElementById("root")
    //buat element di react
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

    function tanggal (){
        const div  =(
            <>
            <hi>Selamat datang</hi>
            <h2>{new Date().toLocaleTimeString()}</h2>
            </>
        )
        ReactDOM.render(div, element)
    }
    setInterval(tanggal, 1000)

    const wrapper = document.getElementById("wrapper")

    const box  = (
        <div className="h-52 w-52 bg-sky-300 rounded-lg shadow-slate-400 shadow-lg mx-auto">

        </div>
    )

    ReactDOM.render(box, wrapper)
    const btnWrap = document.getElementById("btn-wrap")
    function sapa(msg) {
        alert(msg)
    }
    const button = (
        <div className="flex justify-center py-6">
            <button onClick={sapa.bind(this,"hallo")} className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg">Click Me!</button>
        </div>
    )
    ReactDOM.render(button,btnWrap)
    
    const counter = document.getElementById("counter")

    function App(){
        const [count, setCount] = React.useState(0)
        const [click, setClick] = React.useState(false)

        React.useEffect(() => {
          console.log(document.getElementById("num"))
        },[])
        
      return <>
            <button className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg" onClick={function(){
                setCount(count-1)
            }}>
                -
            </button>
            <span id="num" className="my-auto">{count}</span>
            <button className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg" onClick={function(){
                setCount(count+1)
            }}>
                +
            </button>

            <button className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg" onClick={function(){
                setClick(true)
            }}>Click me too!!</button>
        </>
    }
    ReactDOM.render(<App />, counter)
//login buton
const loginDiv = document.getElementById("login")
    function Login(){ 
        const logged = React.useRef(null)
        const [log, setLog] = React.useState(false)
    
        if(log){
        logged.current.textContent="BERHASIL LOGGIN"

        }
        return<>
                <h1 ref={logged} className="text-slate-800 font-semibold text-xl text-center"></h1>
                <div className="flex justify-center">
                <buttton className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer" onClick={function(){
                    setLog(true)
                }}>
                    login
                </buttton>
                </div>
            </>
        
    }

ReactDOM.render(<Login />, loginDiv)
//list
const listDiv = document.getElementById("list")
function List(){
    const nama = ["dody", "wp", "ayyub", "taqi", "faruq"]
    return <>
    <h1 className="text-slate-800 font-semibold text-xl text-center">List nama</h1>
    <div className="flex justify-center bg-sky-300 rounded-lg w-44 mx-auto py-3">
        <ul className="list-disc">
            {nama.map((nama)=>{
                return <li>{nama}</li>
            })}
        </ul>
    </div>
    </>
}
ReactDOM.render(<List />, listDiv)
//from

const formDiv = document.getElementById("form")

function Form(){
    const [nama, setNama] = React.useState("")
    const h1 = React.useRef(null)
    function submit(event){
        event.preventDefault()
        h1.current.textContent=`terima kasih ${nama}`
        console.log("nama: "+nama)
    }

    return<>
        <div className="flex justify-center bg-slate-200 w-72 rounded-lg mx-auto h-auto py-5 mb-10">
            <form action="" className="px-4">
                <label htmlFor="">nama</label>
                <input type="text" name="nama" value={nama} className="outline-none border border-sky-300 ring-1 ring-sky-300 rounded-lg px-4 py-1 focus:border-sky-300 focus:border focus:ring-1 focus:ring-sky-300" onChange={function(event){
                    setNama(event.target.value)
                }}/>
                <div className="py-5 flex justify-center">
                <input type="submit" value="submit" className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer" onClick={submit}/>
                </div>
            </form>
        </div>
        <h1 ref={h1} className="text-center text-slate-800 text-xl font-semibold mb-10"></h1>
    </>
}
ReactDOM.render(<Form />, formDiv)
//fetch API
const apiDiv = document.getElementById("fetch")
function Fetch(){
    let [title, setTitle] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(()=>{
        const getData = async ()=>{
            const getNews = await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=f2885538eab2402788c28125bc6de076")
            const news = await getNews.json()
            const articles = news.articles
            setTitle(articles)
            setLoading(false)
        }
        getData()
  
    },[]) 
        return <>
        <h1 className="text-center text-3xl font-bold text-slate-800 mb-5 uppercase">judul berita</h1>
        <div className="overflow-scroll h-56 w-1/2 mx-auto">
            <ul className="list-decimal">
                {loading && <h1 className="text-center text-1xl font-bold text-slate-800 mb-5 uppercase">masih loading bang</h1>}
                {!loading && title.map((value)=>{
                    return <li>{value.title}</li>
                })}
                
            </ul>
        </div>
        </>
    
}
ReactDOM.render(<Fetch />, apiDiv)
//to do list 
const todoDiv = document.getElementById("todolist")

function Todo(){
    const [activity, setActivity] = React.useState("")
    const [todos, setTodos] = React.useState([])
    const [edit ,setEdit] = React.useState({})
    React.useEffect(function(){
        console.log(todos)
    },[todos])
    function submit(event){
        event.preventDefault()

        if(edit.id){
            const updateTodo = {
                id: edit.id,
                activity
            }
            const indexTodo = todos.findIndex((value)=>value.id == edit.id)
            const updatedTodo = [...todos]
            updatedTodo[indexTodo] = updateTodo
            setTodos(updatedTodo)
            setActivity("")
            setEdit({})
            return
        }
        setTodos([...todos,{
            id : Date.now(),
            activity
        }])
        setActivity("")
    }
    function removeTodo(todoid){
        const filteredTodos = todos.filter((todo)=>todo.id !== todoid)
        setTodos(filteredTodos)
    }
    function editTodo(item){
        setActivity(item.activity)
        setEdit(item)
    }
    return <>
        <div className="my-16 flex flex-wrap justify-evenly w-1/2 h-auto">
            <h1 className="text-2xl font-semibold text-slate-800">Todo list</h1>
            <form action="" className="w-fullh-auto">
                <input type="text" name="" value={activity} onChange={function(event){
                    setActivity(event.target.value)
                }} placeholder="masukan kegiatan anda" className="outline-none focus:border-b-2 focus:border-sky-300"/>

                <button type="submit" className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer" onClick={submit}>{edit.id ? "simpan perubahan":"tambah"}</button>
            </form>
            <ul className="w-full px-4v list-disc">
                {todos.map((item)=>{
                  return (
                  <li key={item.id} className="p-2">{item.activity}
                  <button className="py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer ml-3" onClick={editTodo.bind(this, item)}>edit</button>
                  <button className="py-1 px-2 shadow-slate-300 shadow-md rounded-lg cursor-pointer ml-3" onClick={removeTodo.bind(this,item.id)}>hapus</button>
                  </li>
                  )
                })}
            </ul>
        </div>
    </>
}

ReactDOM.render(<Todo />, todoDiv)