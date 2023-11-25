import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Card } from './components/Card.tsx';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Card
			title="React Three Fiber Box"
			subtitle="For fun"
			body="Box created with React Three Fiber. Hover and Click to see it scale!"
			imageContent={
				<Canvas>
					<ambientLight intensity={0.5} />
					<spotLight
						position={[10, 10, 10]}
						angle={0.15}
						penumbra={1}
						decay={0}
						intensity={Math.PI}
					/>
					<Box position={[0, 0, 0]} />
				</Canvas>
			}
		/>
	</React.StrictMode>
);
