function customerRender(reactElement,container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children  //apka child konsa ha
    for(const prop in reactElement.props){
        if(prop===children) continue
        domElement.setAttribute(reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'CLick me to visit google'
}

const anotherElement =(
    <a href="https://google.com" target="_blank">Visit</a>
)


const mainContainer = document.querySelector('#root');
customerRender(reactElement,mainContainer)   //kisko inject karu,kha pe inject karu