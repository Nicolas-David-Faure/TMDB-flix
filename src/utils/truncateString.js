export default function (string,n, bolean){
  return `${string.slice(0,n)}${bolean ? '...': ''}`
}