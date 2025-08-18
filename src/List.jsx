function List(props)
{

    const itemList = props.items ;
    const categories = props.category;
    const listItem = itemList.map(item => <li key = {item.id}>
                                  {item.name}: &nbsp;
                               <b>{item.calories}</b></li> );

    return (
        <>
            <h3 className="list-category">{categories}</h3>
            <ol className="list-item">{listItem}</ol>
        </>
);
}
export default List 