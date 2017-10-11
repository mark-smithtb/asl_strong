class App extends Component {
  render() {
    return (
      <div id="baycare-app">
        <Header/>
        <SideMenu authenticated={this.state.authenticated} />
        <div id="content" style={{height: this.state.contentHeight + 'px'}}>
          {React.cloneElement(this.props.children)}
        </div>
        <Footer/>
      </div>
    )
  }
}

var routes = (
  <Route path="/" component={App}>
  </Route>
);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
