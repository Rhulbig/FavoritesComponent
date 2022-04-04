import './App.css';
import { PostContainer } from './components/PostContainer';
import BackGroundContainer from './components/background/BackGroundContainer';

function App() {
	return (
		<div className='App'>
			<BackGroundContainer>
				<PostContainer />
			</BackGroundContainer>
		</div>
	);
}

export default App;
