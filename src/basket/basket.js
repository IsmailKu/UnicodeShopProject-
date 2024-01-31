import './basket.css'

function Basket ({item, deleteFromBasket}) {
    return (
        <div className="basket">
            {
                item.map((i) => {
                    return (
                        <div className="product-name">  
                            <div className="image">
                                <img src={i.image} alt=""/>
                            </div>
                            <div className="nime">
                                <p>{i.name}</p>
                            </div>
                            <div className="price">
                                <p>{i.price} рублей</p>
                            </div>
                            <div className="button" id={i.id} onClick={() => deleteFromBasket(i)}>Удалить из корзины</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Basket;