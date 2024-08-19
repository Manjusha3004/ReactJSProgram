const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'

    },
    childern: 'Click me to visit gooogle'

}

const mainConatainer = document.querySelector("#root");

customRender(reactElement, mainConatainer);