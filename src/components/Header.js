import React from "react"
const Header = (props) => {
    const{search, onInputChange, onSearchClick } = props
    return(
        <div className="jumbotron">
            <h1 className="display-1"><span className="material-icons brand__icon">
fastfood
</span>Food Recipes </h1>
<div className="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Seacrh Your Recipe..." 
  aria-label="Recipient's username" 
  value={search} onChange={onInputChange} />

  <div className="input-group-append">
    <button className="btn btn-dark" onClick={ onSearchClick } >Search Recipe</button>
  </div>
</div>
 </div>





    )
}
export default Header;