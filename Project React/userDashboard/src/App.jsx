import { useState,useEffect } from 'react'
import "./app.css"

function App() {
  const [ users, setUsers] = useState([]); //users data 
  const [loading, setLoading] = useState(true); //loading
  const [search, setSearch] = useState(""); //search input

  useEffect (() => {
    //Api call function
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        // Json Data Convert
        const data = await res.json();

        setUsers(data);

        console.log(data)
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []); // [] -> run only once

  //Filter Login
  const filteredUsers = users.filter(user =>  
    user.name.toLowerCase().includes(search.toLowerCase()),
  )


  return (
    <>
      <div className='text-center p-5'>
        <h1 className='text-2xl'>User Dashboard</h1>
        {/* Search Input */}
        <input type="text" placeholder='Serach user...' value={search} onChange={(e) => setSearch(e.target.value)} className='mt-5.5  border-amber-100 border-2 p-2 rounded-2xl ' />

        {/* Loading */}
        {loading ? (
          <p className='mt-5 text-2xl'>Loading...</p>
        ) : (
          <div className='grid  space-y-4 mt-5 grid-cols-3'>
          {filteredUsers.map((user)=> (
            <div className='bg-gray-700 border-2 rounded-2xl border-cyan-950 w-3xs' key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          )  )}
        </div>
        )}
      </div>
    </>
  )
}

export default App
