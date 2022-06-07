import PropTypes from 'prop-types'

const Button = ({ text,onClick }) => {
    
    return (
        <button onClick={onClick} style={{ color: 'white' }} className="btn btn-outline-success" >{text}</button>

    )
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}
Button.defaultProps = {
    text: 'Add'
}
export default Button