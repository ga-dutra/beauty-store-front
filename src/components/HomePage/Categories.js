import { useContext } from "react";
import styled from "styled-components";
import makeupIcon from "../../assets/img/cosmetics.svg";
import hairIcon from "../../assets/img/hair.svg";
import nailsIcon from "../../assets/img/nails.svg";
import perfumeIcon from "../../assets/img/perfume.svg";
import skincareIcon from "../../assets/img/skincare.svg";
import { ProductsContext } from "../../contexts/ProductsContext";

const categoriesList = [
  { name: "hair", img: hairIcon },
  { name: "nails", img: nailsIcon },
  { name: "perfume", img: perfumeIcon },
  { name: "makeup", img: makeupIcon },
  { name: "skincare", img: skincareIcon },
];

export default function Categories() {
  const { categorySelected, setCategorySelected, sideMenu } =
    useContext(ProductsContext);

  function selectCategory(categoryName) {
    if (categorySelected === "" || categoryName !== categorySelected) {
      setCategorySelected(categoryName);
    } else {
      setCategorySelected("");
    }
  }

  return (
    <Wrapper isSideMenu={sideMenu}>
      {categoriesList.map((item) => (
        <CategoryContainer
          onClick={() => selectCategory(item.name)}
          category={item.name}
          categorySelected={categorySelected}
          key={item.name}
        >
          <img src={item.img} alt={item.name} key={item.name} />
        </CategoryContainer>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding-top: 30px;
  justify-content: space-evenly;
  position: fixed;
  top: 90px;
  overflow: hidden;
  z-index: 3;
  background-color: #f5f5f5;
  opacity: ${(props) => (props.isSideMenu ? "0.5" : "1")};
`;

const CategoryContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${(props) =>
    props.categorySelected === props.category ? "#01214F" : "#ffaba6"};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 54px;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    top: 7px;
    left: 7px;
  }
`;
