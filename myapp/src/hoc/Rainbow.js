const Rainbow = (WrappedComponent) => {
    return (props) => (
        <div>
        <WrappedComponent {...props} rainbow_color='#311b92' />
        </div>)
}

export default Rainbow;