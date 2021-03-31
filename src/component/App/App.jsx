import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/searchBox';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            HeaderTitle: 'Name It!',
            HeaderExtende: true,
        };
    }
    HandleInputChange = (InputText) => {
        this.setState({ HeaderExtende: InputText.length > 0 ? false : true });
    };

    render() {
        return (
            <div>
                <Header
                    HeaderExtende={this.state.HeaderExtende}
                    HeaderTitle={this.state.HeaderTitle}
                />
                <SearchBox onInputChange={this.HandleInputChange} />
            </div>
        );
    }
}

export default App;
