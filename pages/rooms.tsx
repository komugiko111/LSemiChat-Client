import Layout from "../components/layout/layout";
import {RoomService} from "../services/room";
import React from 'react';
import styles from "../components/form/form.module.scss";


export default function Rooms() {	
	return (
		<Layout requiredAuth={true}>
			<h3>
				Room一覧
			</h3>
			<Blog threadData={deleted_datas} />
    </Layout>
	)
}


export function getdata() {
	let threadData : Array<object>;
	RoomService.getInstance().getAll().then((res)=>{
	  threadData = res.threads;
	}).catch((e) => {
	  console.log(e);
	});
	return threadData
}


//要素の配列
const datas = [
	{ id: 1, username: "佐藤", title: 'room1', member: 1, public: 1, content: '仮' },
	{ id: 2, username: "佐藤", title: 'room2', member: 2, public: 1, content: '仮' },
	{ id: 3, username: "佐藤", title: 'room3', member: 3, public: 1, content: '仮' },
];

//要素のpublicを参照し、0だったら表示しないプログラム
export const deleted_datas = datas.filter(data => {
	return data.public !== 0;
  });


//CSSで文字の配置を調整すること！
export function Blog(props) {
	const thread = props.threadData;
	const content = thread.map((deleted_datas) =>
		<tr className = {styles.content} key={deleted_datas.id}>
			<td>{deleted_datas.username}</td>
			<td className = {styles.roomdata}>{deleted_datas.title}</td>
			<td className = {styles.tablecontents}>{deleted_datas.member}</td>
			<td className = {styles.center}>{deleted_datas.content}</td>
		</tr>
	);
	return (
		<table border ="2" width="100%">
			<thead>
				<tr>
					<th>創設者</th>
					<th>部屋名</th>
					<th>説明</th>
					<th>参加者</th>
				</tr>
			</thead>
			<tbody>
				{content}
			</tbody>
		</table>
	);
}



/*テーブルタグにサーバー情報を入れたいとき
<td>{data.name}</td>
<td className = {styles.roomdata}>{data.is_public}</td>
<td className = {styles.tablecontents}>{data.description}</td>
<td className = {styles.center}>{data.limit_users}</td>
*/