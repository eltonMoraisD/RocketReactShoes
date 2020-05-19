import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
						<th />
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<img
								src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
								alt="Tenis"
							/>
						</td>

						<td>
							<strong>Ténis muito massa</strong>
							<span>129,90$00</span>
						</td>

						<td>
							<div>
								<button type="button">
									<MdRemoveCircleOutline size={20} color="#7159c1" />
								</button>

								<input type="number" readOnly value={2} />

								<button type="button">
									<MdAddCircleOutline size={20} color="#7159c1" />
								</button>
							</div>
						</td>

						<td>
							<strong>258,80$00</strong>
						</td>

						<td>
							<button type="button">
								<MdDelete size={20} color="#7159c1" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>1990$00</strong>
				</Total>
			</footer>
		</Container>
	);
}
