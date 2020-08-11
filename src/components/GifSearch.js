import React from 'react'

const GifSearch = ({handleSearchChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Enter a Search Term</label>
            <input type='text' className="form-control-sm" onChange={(e) => handleSearchChange(e)}/>
            <button type='submit'className="btn">Find Gifs</button>
            </div>
        </form>
    )
}

export default GifSearch