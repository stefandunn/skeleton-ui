const { Children, useMemo } = require('react')

const UseReveal = ({ children, props: { showWhen, hideWhen } }) =>
  useMemo(() => {
    if (showWhen === true || hideWhen === null) {
      return true
    }
    if (showWhen === null || hideWhen === true) {
      return false
    }
    return Children.count(children) > 0
  }, [children, hideWhen, showWhen])

export default UseReveal
