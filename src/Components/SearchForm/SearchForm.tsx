import React from 'react';
import { SearchFormView } from './SearchFormView/SearchFormView';


export class SearchForm extends React.Component {
    state: {text: string}
    constructor(props: any) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            text: e.currentTarget.value,
        })
    }
    handleSearch = async (e: React.MouseEvent) => {
        const response = await fetch(this.state.text);
        console.log(response)
    }
    render() {
        return (
            <SearchFormView change={this.handleChange} search={this.handleSearch}/>
        )
    }
}