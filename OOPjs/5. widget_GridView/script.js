const dataExample = [
	{
		company: 'Alfreds <b>Futterkiste</b>',
		chef: 'Maria Anders',
		country: 'Germany',
	},
	{
		company: 'Centro comercial Moctezuma',
		chef: 'Francisco Chang',
		country: 'Mexico',
	},
	{
		company: 'Ernst Handel',
		chef: 'Roland Mendel',
		country: 'Austria',
	},
	{
		company: 'Island Trading',
		chef: 'Helen Bennett',
		country: 'UK',
	},
	{
		company: 'Laughing Bacchus Winecellars',
		chef: 'Yoshi Tannamuri',
		country: 'Canada',
	},
];

let gridView = new GridView();

const data = {
	header: 'Example TableDTO',
	headerClass: ['header', 'site-header'],
	attribute: {
		company: {
			label: 'Компания',
			src: 'html',
		},
		chef: {
			label: 'Директор',
		},
		country: {
			label: 'Страна',
			value: data => {
				if (data['country'] === 'Germany') {
					return data['country'] + ' mapka';
				}
				return data['country'];
			},
		},
	},
	data: dataExample,
};

gridView.render(data);

// в общем подобная структура должна получиться

{
	/* <table>
<tr>
	<th>Заголовок 1</th>
	<th>Заголовок 2</th>
	<th>Заголовок 1</th>
	<th>Заголовок 2</th>
</tr>
<tr> 
	<td>Ячейка 1</td>
	<tr>
		<td>Ячейка 2</td>
	</tr>
	<td>Ячейка 1</td>
	<td>Ячейка 2</td>
</tr>
</table> */
}
