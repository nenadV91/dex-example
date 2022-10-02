import { createTheme } from "@mui/material/styles";

// define custom colors: https://material-ui.com/customization/palette/
declare module "@mui/material/styles/createPalette" {
	interface Palette {
		bg1: string;
	}
	interface PaletteOptions {
		bg1: string;
	}
}

const theme = createTheme({
	palette: {
		text: {
			secondary: "#c3c5cb",
		},
		bg1: "#f5f5f5",
	},
	components: {
		MuiModal: {
			styleOverrides: {
				root: {
					"& .MuiBox-root": {
						borderRadius: "16px",
					},
				},
			},
		},
	},
});

export default theme;
