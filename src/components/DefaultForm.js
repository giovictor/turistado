import React from 'react'

const DefaultForm = (props) => {
    const {name,placeholder,buttonText,style} = props
    return (
        <form>
            <input type="text" className="defaultTextBox" name={name} placeholder={placeholder} style={style}/>
            <button type="button" className="defaultBtn">{buttonText}</button> 
        </form>
    )
}

export default DefaultForm
