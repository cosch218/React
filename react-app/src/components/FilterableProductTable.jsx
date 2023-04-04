import productData from "../data/product.json";

import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

// 1. 하향식으로 작성 (부모부터 작성)
// 2. 정적데이터를 이용해서 작성
// 정적데이터 : 메모리에 데이터를 올려놓은 상태(로드)에서 필요할 때마다, 데이터를 호출하여 사용하는 데이터 (Static Data)
// 3. state와 props 구분해서 작성
export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isOnlyStock: false,
    };
  }

  // toggle 메소드를 실행할 때마다 this.state.isOnlyStock 이 T/F 로 바뀜
  toggleStock = () => {
    this.setState({ isOnlyStock: !this.state.isOnlyStock });
    console.log("toggleStock 메소드 실행");
  };

  render() {
    console.log(productData);

    // isOnlyStock이 true일 때 productData의 stock이 true인 것만 배열로 만들기
    const checkedProducts = productData.filter((product) => product.stocked);

    return (
      <div>
        <SearchBar
          isOnlyStock={this.state.isOnlyStock}
          // props 값으로 메소드를 작성해서 전달 가능
          toggleStock={this.toggleStock}
        />
        {/** 가져온 데이터 값을 보여줄 공간 */}
        <ProductTable
          products={this.state.isOnlyStock ? checkedProducts : productData}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
