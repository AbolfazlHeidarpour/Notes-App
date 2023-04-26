import { blue, blueGrey, yellow, green, red } from "@mui/material/colors";

export default function useRandomBg() {
  const cards = [
    blue[300],
    blue[700],
    blueGrey[600],
    blueGrey.A400,
    'dodgerblue',
    yellow[700],
    green[300],
    green.A100,
    red[300],
    red[500],
    red[700],
    blue[100],
    blueGrey[300]
  ];

  return () => {
    const random = Math.floor(Math.random() * cards.length);

    return cards[random];
  };
}