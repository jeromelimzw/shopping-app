import React, { Component } from "react";
import ProductCardList from "./ProductCardList";
import productInfo from "./productInfo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productinfo: [],
      wallet: "",
      searchfield: "",
      shoppingCart: []
    };
  }

  componentDidMount() {
    this.setState({ productinfo: productInfo, wallet: 400 });
  }

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, productinfo, wallet } = this.state;
    const filteredItems = productinfo
      .filter(a => a.productQty > 0)
      .filter(a =>
        a.productName.toLowerCase().includes(searchfield.toLowerCase())
      );

    return (
      <div className="f2 center">
        <NavBar wallet={wallet} />
        <SearchBar onSearchChange={this.onSearchChange} />
        <ProductCardList
          productinfo={filteredItems}
          searchfield={searchfield}
        />
      </div>
    );
  }
}

export default App;
