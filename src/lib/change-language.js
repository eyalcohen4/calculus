export default function changeLanguage(language) {
  document.getElementsByTagName('html')[0].setAttribute('lang', language);
}
