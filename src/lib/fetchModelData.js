export default function fetchModel(url) {
  return fetch(`http://localhost:3000${url}`).then((res) => res.json());
}