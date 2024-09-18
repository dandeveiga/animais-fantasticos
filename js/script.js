import ScrollSuave from "./modules/scroll-suave.js";
import initAccordionList from "./modules/scroll-accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initMenuDropDown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/date-object.js";
import initFetchAnimais from "./modules/fetch-animais.js";
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

initAccordionList();
initTabNav();
initModal();
initTooltip();
initMenuDropDown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
