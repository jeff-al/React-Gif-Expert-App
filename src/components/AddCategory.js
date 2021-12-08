import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories } ) => {

    const [value, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim() !== ""){
            setCategories( categories => [value, ...categories])
            setInputValue("");
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Agregar Categoría"
                    value={ value }
                    onChange={ handleInputChange }
                ></input>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
