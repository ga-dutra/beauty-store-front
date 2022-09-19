import { Item, ImgWrapper, Img, DescriptionWrapper, ItemTitle, ItemDescription, ItemPrice, ItemsQuantity, Minus, Quantity, Plus } from '../../styles/CartWrapper.js';

export default function ItemInCart () {
    return (
        <Item>
            <ImgWrapper>
                <Img></Img>
            </ImgWrapper>
            <DescriptionWrapper>
                <ItemTitle></ItemTitle>
                <ItemDescription></ItemDescription>
                <ItemPrice></ItemPrice>
            </DescriptionWrapper>
            <ItemsQuantity>
                <Minus></Minus>
                <Quantity></Quantity>
                <Plus></Plus>
            </ItemsQuantity>
        </Item>
    )
}