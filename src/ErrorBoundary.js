import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      // setTimeout(() => this.setState({ redirect: true }), 5000);
      console.log("Component did update caught an error");
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here</Link> to go back to the home page or wait 5
          seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
