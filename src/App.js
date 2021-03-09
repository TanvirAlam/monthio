import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            components: [],
        }
    }
    componentDidMount() {
        this.getAllComponents();
    }

    getAllComponents = async () => {
        const response = await fetch('/api/components');
        const jsonResponse = await response.json();
        this.setState({components: jsonResponse.components});
    };

  render() {
      return (
          <div className="App">
              <h1>Loading Components</h1>
              {this.state.components.map((component) => (
                  {component}
              ))}
          </div>
      );
  }
}

export default App;
