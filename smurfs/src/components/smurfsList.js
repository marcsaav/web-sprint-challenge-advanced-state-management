import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../store/actions'

const SmurfsList = (props) => {
    const { getSmurfs, isLoading, error, smurfs } = props


    useEffect(() => {
        getSmurfs()
    }, [])


    return(
        <div>
            <h1>Here are your Smurfs!</h1>
            {isLoading ? <p>Retrieving your smurfs...</p> : null}
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            {smurfs.map((smurf) => {
                return(
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <h4>Age: {smurf.age}</h4>
                        <h4>Height: {smurf.height}</h4>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
  };

export default connect(mapStateToProps, { getSmurfs })(SmurfsList)