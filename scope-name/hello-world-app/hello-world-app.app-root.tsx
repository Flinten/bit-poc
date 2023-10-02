import ReactDOM from "react-dom/client";
import { HelloWorld } from "@flinten/privat-poc.ui.hello-world";

export const HelloWorldApp = () => <HelloWorld />;

const root = document!.getElementById('root');
ReactDOM.createRoot(root as HTMLElement).render(<HelloWorldApp />);

