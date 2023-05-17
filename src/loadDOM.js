import navDiv from "./navbar";

export default function loadDOM() {
    const body = document.body;
    body.appendChild(navDiv());
}