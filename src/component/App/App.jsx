import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/searchBox';
import ResulContainer from '../ResulContainer/ResulContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            HeaderTitle: 'Name It!',
            HeaderExtende: true,
            SuggestNames: [],
        };
    }
    HandleInputChange = (InputText) => {
        this.setState({
            HeaderExtende: InputText.length > 0 ? false : true,
            SuggestNames: name(InputText),
        });
    };

    render() {
        return (
            <div>
                <Header
                    HeaderExtende={this.state.HeaderExtende}
                    HeaderTitle={this.state.HeaderTitle}
                />
                <SearchBox onInputChange={this.HandleInputChange} />
                <ResulContainer SuggestNames={this.state.SuggestNames} />
            </div>
        );
    }
}

export default App;
