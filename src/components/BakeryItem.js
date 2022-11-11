// TODO: create a component that displays a single bakery item



export default function BakeryItem({item, handleClick}) {
    return (
        <div className='BakeryItem'>
            <img src={item.image}></img>
            <h1>
                <i>{item.name}</i>
            </h1>
            <p>
                {item.description}
            </p>
            <div>
                <p>
                    $<i>{item.price}</i>
                </p>
                <button onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
        </div>
    )
}