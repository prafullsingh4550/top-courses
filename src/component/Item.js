import './Item.css';

function Item(props)
{
    const name=props.name ;
    return(<p>{name}</p>);
}

export default Item;