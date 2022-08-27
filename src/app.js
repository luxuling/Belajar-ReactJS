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
    function submit(event){
        event.preventDefault()
        console.log("nama: "+nama)
    }

    return<>
        <div className="flex justify-center bg-slate-200 w-72 rounded-lg mx-auto h-auto py-5 mb-32">
            <form action="" className="px-4">
                <label htmlFor="">nama</label>
                <input type="text" name="nama" id="" className="outline-none border border-sky-300 ring-1 ring-sky-300 rounded-lg px-4 py-1 focus:border-sky-300 focus:border focus:ring-1 focus:ring-sky-300" onChange={function(event){
                    setNama(event.target.value)
                }}/>
                <div className="py-5 flex justify-center">
                <input type="submit" value="submit" className="py-2 px-3 shadow-slate-400 shadow-lg rounded-lg cursor-pointer" onClick={submit}/>
                </div>
            </form>
        </div>
    </>
}
ReactDOM.render(<Form />, formDiv)