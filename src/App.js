
// import { useState } from 'react';
// import './App.css';
// function App() {
//   const [task, setTask] = useState('')
//   const [todo, setTodo] =  useState([])
 
//   let globalID = 0

// function handleCreateTodo (event)  {
//   event.preventDefault()
//    setTodo(oldTodo => {
//     setTask('')
//     return [...oldTodo, { todo: task, id: globalID++   } ] 
//    })
// }

// function handleDeleteItem (itemID) {
//     const indexItems = todo.findIndex((item) => item.id === itemID)
//     if (indexItems !== -1 ) {
//       setTodo ((oldTodo) => {
//         const updateTodo = [...oldTodo]
//         updateTodo.splice(indexItems, 1)
//           return updateTodo
//       })
//     }
// }

//   return (
//     <div className="App">
//       <h1>Best To Do App Ever </h1>
//       <form onSubmit={handleCreateTodo}>
//         <input 
//           type="text"
//           value={task}
//           onChange={event =>{
//             setTask(event.target.value) 
//           }}
//         />
//         <button type='submit'>create ToDo</button>
//       </form>
//       <ul>
//         {
//           todo.map((item, index) =>{
//             return <div key={item.id}>
//               <li>{item.todo}</li> 
//               <button onClick={() => handleDeleteItem(item.id)}>Delete</button> 
//               </div>
             
//           })
//         }
//       </ul>
//     </div>
//   );
// }

// export default App;





// import MusicNoteIcon from './icons/MusicNote'

// export default function VideoFooter({ channel, description, song }) {
// 	return (
// 		<div className="footer-left">
// 			<div className="text">
// 				<h3>@{channel}</h3>
// 				<p>{description}</p>
// 				<div className="ticker">
// 					<MusicNoteIcon style={{ width: '30px' }} />
// 					<marquee direction="left" scrollamount="2">
// 						{song}
// 					</marquee>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }


// import React, { useState } from 'react'
// import FavoriteIcon from './icons/FavoriteIcon'
// import FavoriteBorderIcon from './icons/FavoriteIconBordered'
// import MessageIcon from './icons/Message'
// import ShareIcon from './icons/Share'
// import './FooterRight.css'

// function VideoSidebar({ likes, shares, messages }) {
// 	const [liked, setLiked] = useState(false)

// 	return (
// 		<div className="footer-right">
// 			<div className="sidebar-icon">
// 				{liked ? (
// 					<FavoriteIcon
// 						style={{ width: '40px', height: '40px' }}
// 						onClick={(e) => setLiked(false)}
// 					/>
// 				) : (
// 					<FavoriteBorderIcon
// 						style={{ width: '40px', height: '40px' }}
// 						onClick={(e) => setLiked(true)}
// 					/>
// 				)}
// 				<p>{liked ? likes + 1 : likes}</p>
// 			</div>
// 			<div className="sidebar-icon">
// 				<MessageIcon style={{ width: '40px', height: '40px' }} />
// 				<p>{messages}</p>
// 			</div>
// 			<div className="sidebar-icon record-below">
// 				<ShareIcon style={{ width: '40px', height: '40px' }} />
// 				<p>{shares}</p>
// 			</div>
// 			<div className="sidebar-icon record">
// 				<img src="https://static.thenounproject.com/png/934821-200.png" />
// 			</div>
// 		</div>
// 	)
// }

import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
	return (
		<main>
			<div className="container">
				<h3>FAQ</h3>
				<section className="info">
					{data.map((question) => {
						return (
							<SingleQuestion
								title={question.title}
								info={question.info}
								key={question.id}
							/>
						)
					})}
				</section>
			</div>
		</main>
	)
}

export default App
