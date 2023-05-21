import { useState } from "react";
import { contacts } from "./Contact";
import Table from "./Table";


function Contacts (){
    const [query, setQuery] = useState("");

    const search = (data) =>{
        return data.filter(item => item.firstName.toLowerCase().includes(query) || 
        item.lastName.toLowerCase().includes(query) || 
        item.phone.includes(query))
    }

    return(
        <div className="contacts">
        <input type="text" placeholder="Search..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
        <Table data={search(contacts)}/>
        </div>
    );
}
export default Contacts;