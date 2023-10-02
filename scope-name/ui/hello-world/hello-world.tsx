import { getHelloWorld } from "@flinten/privat-poc.get-hello-world";

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
    return <div>{getHelloWorld()}</div>;
}

