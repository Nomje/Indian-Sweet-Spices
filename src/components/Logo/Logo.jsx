import './Logo.css';
import logo from './logo.png'
export default function Logo() {
  return (
    <div className="Logo text-3xl font-bold underline">
    <img src = {logo}></img>
    </div>
  );
}