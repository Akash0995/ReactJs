function List()
{
    const fruits = [{id:1,name:"Apple",calories:95} ,
                    {id:2,name:"Orange",calories: 45},
                    {id:3,name:"Banana",calories: 105} ,
                    {id:4,name:"Coconut",calories:159} ,
                    {id:5,name:"Pinaple",calories:37} ];
    fruits.sort((a,b) => b.calories - a.calories);
    const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);

    const listItem = lowCalFruits.map(lowCalFruits => <li key = {lowCalFruits.id}>
                                  {lowCalFruits.name}: &nbsp;
                               <b>{lowCalFruits.calories}</b></li> );

    return (<ol>{listItem}</ol>);
}
export default List 