import {MainPage} from '../../pages/main-page/main-page';

function App(props: {name:string;genre:string;year:number;poster:string;bg:string}): JSX.Element {
  return <MainPage {...props}/>;
}

export default App;
