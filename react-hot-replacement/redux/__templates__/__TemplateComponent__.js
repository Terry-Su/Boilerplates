import { connect } from "react-redux"

function Template() {
    return <div>Template</div>
}
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps)(Template)