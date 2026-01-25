import './App.css'
import {
  ElementExpresstions,
  BasicExpressions,
  ObjectArrayexpressions,
  FunctionExpressions
} from "./jsxbasic";


function getUserContent(userStatus) {
  return (
    userStatus === "admin" ? (
      <>
        <h2>Admin Dashboard</h2>
        <button>Manange Users</button>
      </>
    ) : userStatus === "member" ? (
      <p>Welcome to the community!</p>
    ) : (
      <a href="/signup">Sign up here</a>
    )
  );
}

const isLoggedIn = true
const hasMessages = true
const message = null

function App() {
  
  const books = [
    {id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
    {id: 2, title: 'Advanced Hooks', published: false, publisher: 'OReilly' },
    {id: 3, title: 'JSX in Depth', published: true, publisher: 'Packt' }
  ];

  const publisheds = books.filter(book => book.published)

  const fruits = ["Apple", "Banana", "Cherry"]

  return (
    <>
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {publisheds.length ?
        publisheds.map(book =>
          <article key={book.in}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        )
      : <p>No published books found.</p>  
    }



      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{index} {fruit}</li>
          ))}
      </ul>

      {[
        <button>A</button>,
        <button>B</button>,
        <button>C</button>
      ]}
      {[0, 123, 'A', 'Hello', true, false]}

      {hasMessages && <h2>You have new messages!</h2>}
      {message && <p>Message: {message}</p>}

      <p>
        Message: {message ?? <em>No message</em>}
      </p>
      <p>
        Message: {message || <em>Empty</em>}
      </p>

      {getUserContent("admin")}

      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}

      <h1>JSX</h1>
      <FunctionExpressions/>
      <br/>
      <ObjectArrayexpressions/>
      <br/>
      <ElementExpresstions/>
      <br/>
      <BasicExpressions/>
      
    </>
  )
}

export default App
