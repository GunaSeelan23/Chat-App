import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hiii . . .',
		trigger: '1',
	}, {
		id: '1',
		message: 'Please Enter your name',
		trigger: '2'
	}, {
		id: '2',
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " Hi {previousValue}",
		trigger: 4
	}, {
		id: '4',
		options: [
			{ value: 1, label: 'Have a Great Day' },
			{ value: 2, label: 'Friend' },

		],
		end: true
	}
];

const theme = {
	background: '#ed8e7b',
	headerBgColor: '#e81f10',
	headerFontSize: '20px',
	botBubbleColor: '#e81f10',
	headerFontColor: 'Black',
	botFontColor: 'white',
	userBubbleColor: '#e8104a',
	userFontColor: 'white',
};

const config = {
	botAvatar: "img.png",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="Chat Box"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
