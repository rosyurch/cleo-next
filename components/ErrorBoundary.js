import React from 'react'
import Div from 'generic/Div'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Div textAlign="center" fontSize="3em" color="coral" pt="30vh">
          Everything went wrong.
        </Div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
