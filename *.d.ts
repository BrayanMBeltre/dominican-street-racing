import * as p5Global from "p5/global";
import module from "p5";
export = module;
export as namespace p5;

declare global {
	interface Window {
		p5: typeof module;
	}
	const p5: typeof module;
}
