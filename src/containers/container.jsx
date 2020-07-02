import React from "react"
import { connect } from "react-redux"
import { increment, decrement } from "./actions.js"
import Counter from "../components/counter"

export function CountContainer({ ...props }) {
    return (<Counter {...props} />)
}

function mapStateToProps({ count: { counter } }) {
    return { counter }
}
function mapDispatchToProps(dispatch) {
    return {

        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)