import { useState } from 'react';
import Plus from '../../assets/icons/plus.svg?react';
import Minus from '../../assets/icons/minus.svg?react';
import './dropdown.css';

const Dropdown = ({label, children}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">

      <button
        className="dropdown__button"
        onClick = {() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="username-desc"
      >

        <p className={`dropdown__text ${open && "dropdown__text--open"}`}>
          {label}
        </p>

        { !open 
          ? <Plus className="dropdown__button__icon" />
          : <Minus className="dropdown__button__icon" />
        }
        
      </button>

      { open ?

        <div className="dropdown__content" id="username-desc">
          { children }
        </div>

      : null }

    </div>
  )
};

export default Dropdown;