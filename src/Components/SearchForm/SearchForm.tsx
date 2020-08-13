import React from "react";
import { SearchFormView } from "./SearchFormView/SearchFormView";

export class SearchForm extends React.Component {
  state: { text: string };
  constructor(props: any) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      text: e.currentTarget.value,
    });
  };
  handleSearch = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const response = await fetch(this.state.text);
    console.log(response);
    this.setState({ text: "" });
  };
  render() {
    return (
      <SearchFormView
        change={this.handleChange}
        search={this.handleSearch}
        text={this.state.text}
      />
    );
  }
}
