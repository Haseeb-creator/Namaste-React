
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: 'child' }, React.createElement('h1', {}, "i am h1 tag")))

const heading = React.createElement(
	'h1',
	{
		className: 'greeting',
	},
	'hello world from React'
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)