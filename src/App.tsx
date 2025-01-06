import { Report } from "./pages/Report"

function App() {
	// const [activeTab, setActiveTab] = useState('expenses');
	// const navigate = useNavigate();

	return (
		<>
			<div className="p-8">
				This is the dashboard page and below you see the Report component rendered. That is also available to see at the
				link above.
			</div>
			<Report />
			<div>Hello World</div>
		</>
	)
}

export default App
