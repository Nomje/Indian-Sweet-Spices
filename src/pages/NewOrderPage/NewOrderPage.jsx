import {useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api'; 
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewOrderPage() {

  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart , setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function(){
    async function fetchItems(){
      const items = await itemsAPI.fetchAll();
      categoriesRef.current = items.reduce((cats,item)=>{
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [... cats, cat];
      },[]);
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    fetchItems();

    async function getCart(){
      const cart = await ordersAPI.fetchCart();
      setCart(cart)
    }
    getCart();
  }, []);

  

  return (
    <h1>New Order Page</h1>
  );
}


