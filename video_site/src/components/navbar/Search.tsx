import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
    const [search, setSearch] = useState<string>("");
    const dispatch = useAppDispatch();

    const match = useMatch("/");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(search, "search");
        
        dispatch(searched(search));
        if (!match) navigate("/");
    }



    return (
        <form onSubmit={handleSubmit} >
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
        </form>
    )
}
