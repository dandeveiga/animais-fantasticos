import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/scroll-accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initMenuDropDown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/date-object.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// se estivesse colocando options aqui, ficaria:
// const option = {
// behavior: 'smooth',
// block: 'start'
// } >> depois escreveria ,options como segundo argumento da const scrollSuave, ficaria assim:

// const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', options);
// scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initMenuDropDown();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
initAnimacaoScroll();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
