import checked from '../../assets/img/checked.png';
import { Body, Icon, Text } from '../../styles/CheckoutWrapper.js';

export default function CheckoutPage () {
    return (
        <Body>
            <Icon src={checked}></Icon>
            <Text>Seu pedido foi confirmado e chegará em breve na sua residência!</Text>
        </Body>
    )
}