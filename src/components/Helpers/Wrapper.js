const Wrapper = props => {
    return props.children
}

export default Wrapper


// this is an empty container that replaces <div> in AddUser. It's a custom way to create one root element.
// this is how <React.Fragment> or <> works.