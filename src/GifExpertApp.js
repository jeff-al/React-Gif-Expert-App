import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Keylor"]);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                            category={ category }
                            key={ category }
                        />
                    )
                }
            </ol>
        </>
    );

} 

export default GiftExpertApp;