const color = {
	withe: "#e9ecef",
	black: "#343a40",
	gray: "#495057",
	hovergray: "#ced4da",
	green: "#21c897",
	apricot: "#FEF7E5",
	lightgray: "#F2F4F4",
};

const line = {
	gray: "#e9ecef",
};

const size = {
	laptopS: "566px",
	mobileS: "375px",
	tabletS: "1023px",
	laptopXs: "503px",
	tabletL: "1023px",
	laptop: "710px",
	desktop: "1023px",
	desktopL: "930px",
};

export const theme = {
	color,
	line,
	mobileS: `(max-width: ${size.mobileS})`,
	laptopXs: `(max-width: ${size.laptopXs})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopS: `(max-width: ${size.laptopS})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};