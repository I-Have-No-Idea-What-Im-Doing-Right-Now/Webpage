import './App.css'
import MenuButtons from './MenuButtons.jsx'
import Title from './Title.jsx'

export default function TopBar() {
	return (
		<>
			<div id='top-bar'>
				<Title />
				<MenuButtons />
			</div>
		</>
	)
}
