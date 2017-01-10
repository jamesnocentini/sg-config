import React, { Component } from 'react';
import './App.css';
import config from './output.json';
import MapObject from './MapObject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keys: [],
      props: {},
    };
  }
  componentWillMount() {
    const props = config.definitions.ConfigurationFile.properties;
    this.setState({keys: Object.keys(props), props: props});
    this.mapPropsToComponents(props);
  }
  onClick(key) {
    this.setState({selected: key});
  }
  mapPropsToComponents(props) {
    return Object.keys(props).map((key, index) => {
      const type = props[key].type;
      switch(type) {
        case 'object':
          return (
            <li key={key}>
              <MapObject mykey={key} type={type} description={props[key].description}>
                {this.mapPropsToComponents(props[key].properties)}
              </MapObject>
            </li>
          );
        default:
          return (
            <li key={key}>
              <strong>{key}</strong>
              ({props[key].type}): <span className="description">{props[key].description}</span>
            </li>
          );
      }
    })
  }
  render() {
    const items = this.mapPropsToComponents(this.state.props);
    return (
      <div className="App swagger-ui">
        {'{'}<ul className="list">
          {items}
        </ul>{'}'}
      </div>
    );
  }
}

export default App;
