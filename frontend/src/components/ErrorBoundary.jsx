// import React from 'react'

// export default class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { hasError: false }
//     }

//     static getDerivedStateFromError() {
//         return { hasError: true }
//     }

//     componentDidCatch(error, info) {
//         console.error('ErrorBoundary caught: ', error, info)
//     }

//     render() {
//         if (this.state.hasError) {
//             return (
//                 <div style={{ padding: 12, border: '1px solid #f5c6cb', background: '#fff0f0'}}>
//                     <h3>Something went wrong</h3>
//                     <button onClick={() => this.setState({ hasError: false })}>Try again</button>
//                 </div>
//             )
//         }
//         return this.props.childern
//     }
// }
import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 text-center mt-6">
          <h2>Something went wrong. Please refresh the page.</h2>
        </div>
      )
    }

    return this.props.children
  }
}
