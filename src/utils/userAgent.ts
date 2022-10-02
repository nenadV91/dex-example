import { UAParser } from "ua-parser-js";
import { isServer } from "./env";

const parser = new UAParser(
	!isServer() ? window.navigator.userAgent : undefined
);
const { type } = parser.getDevice();

export const userAgent = parser.getResult();

export const isMobile = type === "mobile" || type === "tablet";
