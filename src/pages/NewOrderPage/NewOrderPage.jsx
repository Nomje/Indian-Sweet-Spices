import {useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api'; 
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewOrderPage({user , setUser}) {

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

  async function handleAddToOrder(itemid){
    const updateCart = await ordersAPI.itemInCart(itemid);
    setCart(updateCart);
  }

  async function handleChangeQty (itemid, newQty){
    const updateCart = await ordersAPI.itemQtyCart(itemid, newQty);
    setCart(updateCart);
  }

  async function handleCheckout(){
    await ordersAPI.checkout();
    navigate('/orders')
  }

  return (
    <div className='NewOrderPage'>
      <aside>
        <CategoryList 
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}/>

        <Link to='/orders' className='button tn-sm'> previous orders</Link>
        <UserLogOut user={user} setUser={setUser}/>
      </aside>
      <MenuList 
      menuItems={menuItems.filter(item => item.category.name === activeCat)}
      handleAddToOrder ={handleAddToOrder}/>
      <OrderDetail 
      order={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}/>
    </div>
  );
}


