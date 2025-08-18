//import UserGrating from "./UserGrsting.jsx";
import List from "./List.jsx";
function App() {
  const fruits = [{id:1,name:"Apple",calories:95} ,
                    {id:2,name:"Orange",calories: 45},
                    {id:3,name:"Banana",calories: 105} ,
                    {id:4,name:"Coconut",calories:159} ,
                    {id:5,name:"Pinaple",calories:37} ];
    const vegetables = [{id:1,name:"Potato",calories:250} ,
                    {id:2,name:"Carrots",calories:   450},
                    {id:3,name:"Broccoli",calories:  320} ,
                    {id:4,name:"Celery",calories:    265} ,
                    {id:5,name:"Mushroom",calories:  150} ];
  return(
    <>
    {fruits.length > 0 ?<List items={fruits} category = "Fruits"></List>:null }
    
    <List items={vegetables} category = "Vegetables"></List>
    </>
  )  ;
  
  }

export default App
