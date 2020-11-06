import React from 'react'
import { connect } from 'react-redux'
import { setSmurfName, setSmurfAge, setSmurfHeight, setSmurf } from '../store/actions'



const SmurfForm = (props) => {
    const {smurfAge, smurfName, smurfHeight, dispatch} = props

    const handleNameChange = e => {
        dispatch(setSmurfName(e.target.value))
    }

    const handleAgeChange = e => {
        dispatch(setSmurfAge(e.target.value))
    }

    const handleHeightChange = e => {
        dispatch(setSmurfHeight(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newSmurf = {
            name: smurfName,
            age: smurfAge,
            height: smurfHeight,
            id: new Date()
        }
        console.log(newSmurf)
        dispatch(setSmurf(newSmurf))
    }

    return(
        <div>
            <h2>Create a new Smurf for your Village!</h2>
            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input
                    type='text'
                    name='smurfName'
                    placeholder="...your new smurf's name"
                    value={smurfName}
                    onChange={handleNameChange}
                    >
                    </input>
                </label>
                <label> Age:
                    <input
                    type='text'
                    name='smurfAge'
                    placeholder="...your new smurf's Height"
                    value={smurfAge}
                    onChange={handleAgeChange}
                    >
                    </input>
                </label>
                <label> Height:
                    <input
                    type='text'
                    name='smurfHeight'
                    placeholder="...your new smurf's height"
                    value={smurfHeight}
                    onChange={handleHeightChange}
                    >
                    </input>
                </label>
                <button>Transport your new Smurf!</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        smurfName: state.smurfName,
        smurfAge: state.smurfAge,
        smurfHeight: state.smurfHeight
    };
  };

export default connect(mapStateToProps)(SmurfForm)