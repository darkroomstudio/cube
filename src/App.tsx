import styled from 'styled-components';
import './App.css'

function App() {
	return (
		<PageContainer>
			<AppHeader>🏝️ Sandbox</AppHeader>
		</PageContainer>
	);
}

export default App;

const PageContainer = styled.div`
	display: flex;
`;

const AppHeader = styled.h1`
	font-size: 48px;
`;
