import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { UaEventOptions } from "react-ga4/types/ga4";
import { useRouter } from "next/router";
import { isMobile } from "utils/userAgent";
import { getCLS, getFCP, getFID, getLCP, Metric } from "web-vitals";

import GoogleAnalyticsProvider from "./GoogleAnalyticsProvider";
import { useWalletInfo } from "hooks/useWalletInfo";

export const GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY = "ga_client_id";

const googleAnalytics = new GoogleAnalyticsProvider();

export function sendEvent(event: string | UaEventOptions, params?: any) {
	return googleAnalytics.sendEvent(event, params);
}

export function outboundLink(
	{
		label,
	}: {
		label: string;
	},
	hitCallback: () => unknown
) {
	return googleAnalytics.outboundLink({ label }, hitCallback);
}

export function sendTiming(
	timingCategory: any,
	timingVar: any,
	timingValue: any,
	timingLabel: any
) {
	return googleAnalytics.gaCommandSendTiming(
		timingCategory,
		timingVar,
		timingValue,
		timingLabel
	);
}

if (typeof window !== "undefined") {
	const GOOGLE_ANALYTICS_ID: string | undefined =
		process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

	const storedClientId = window.localStorage.getItem(
		GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY
	);

	if (typeof GOOGLE_ANALYTICS_ID === "string") {
		googleAnalytics.initialize(GOOGLE_ANALYTICS_ID, {
			gaOptions: {
				debug: true,
				storage: "none",
				storeGac: false,
				clientId: storedClientId ?? undefined,
				legacyDimensionMetric: true,
				custom_map: {
					dimension1: "chainId",
					dimension2: "walletName",
				},
			},
		});
		googleAnalytics.set({
			anonymizeIp: true,
			customBrowserType: !isMobile
				? "desktop"
				: "web3" in window || "ethereum" in window
				? "mobileWeb3"
				: "mobileRegular",
		});
	} else {
		googleAnalytics.initialize("test", { gtagOptions: { debug_mode: true } });
	}
}

// const installed = Boolean(window.navigator.serviceWorker?.controller);
// const hit = Boolean((window as any).__isDocumentCached);
// const action = installed ? (hit ? "Cache hit" : "Cache miss") : "Not installed";
// sendEvent({ category: "Service Worker", action, nonInteraction: true });

function reportWebVitals({ name, delta, id }: Metric) {
	sendTiming(
		"Web Vitals",
		name,
		Math.round(name === "CLS" ? delta * 1000 : delta),
		id
	);
}

// tracks web vitals and pageviews
export function useAnalyticsReporter() {
	const { asPath } = useRouter();
	const { chainId } = useWeb3React();
	const walletName = useWalletInfo();

	useEffect(() => {
		getFCP(reportWebVitals);
		getFID(reportWebVitals);
		getLCP(reportWebVitals);
		getCLS(reportWebVitals);
	}, []);

	useEffect(() => {
		// custom dimension 1 - chainId
		googleAnalytics.set({ cd1: chainId ?? 0 });
		googleAnalytics.set({ dimension1: chainId ?? 0 });
		googleAnalytics.set({ chainId: chainId ?? 0 });
	}, [chainId]);

	useEffect(() => {
		// custom dimension 2 - walletName
		googleAnalytics.set({ walletName });
	}, [walletName]);

	useEffect(() => {
		googleAnalytics.pageview(asPath);
	}, [asPath]);

	useEffect(() => {
		// typed as 'any' in react-ga4 -.-
		googleAnalytics.ga((tracker: any) => {
			if (!tracker) return;

			const clientId = tracker.get("clientId");
			window.localStorage.setItem(
				GOOGLE_ANALYTICS_CLIENT_ID_STORAGE_KEY,
				clientId
			);
		});
	}, []);
}
