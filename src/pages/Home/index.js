import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
          alt="Tenis"
        />
        <strong>Ténis muito Legal</strong>
        <span>1000$00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
