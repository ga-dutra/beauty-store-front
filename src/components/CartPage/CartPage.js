import Item from "./Item";

export default function CartPage() {
    const paymentOptions = [
        { text: "Dinheiro" },
        { text: "Pix" },
        { text: "Cartão de crédito" },
        { text: "Cartão de débito" }
    ];

    return (
        <>
            <Navbar>
                <Back></Back>
                <Title></Title>
                <CartsItems></CartsItems>
            </Navbar>
            <Item></Item>
            <Input 
                name='address'
                type='text'
                placeholder='Endereço de entrega'
                onChange={handleForm}
            />
            <Input>
                <select>

                </select>
            </Input>
        </>
    )
}