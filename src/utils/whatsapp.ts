import { LINKS } from "../content/links";

const openWhatsapp = (e: React.MouseEvent) => {
  e.preventDefault();

  const url = LINKS.social.whatsapp;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default openWhatsapp;
