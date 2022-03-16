window.onload = function() {

    let body = document.getElementsByClassName('body-container')[0];
    let clear_button = document.getElementById('clear');
    let party_button = document.getElementById('party');

    body.addEventListener('click', (event) => {
        let x = event.clientX;
        let y = event.clientY;

        let new_toad = create_toad(x, y);
        body.appendChild(new_toad)

    });

    function create_toad(x, y) {
        const toad = document.createElement("img");

        toad.style.position = "absolute";
        toad.style.left = x+'px';
        toad.style.top = y+'px';
        toad.src = "media/toad.png";

        toad.style.height = "45px";
        toad.style.width = "45px";

        return toad;
    }

    

    clear_button.addEventListener('click', (event) => {
        body.innerHTML = "";
    });

    party_button.addEventListener('click', (event) => {
        jump();
        setTimeout(jump_down, 50)
        
    });

    function jump() {
        Array.from(body.children).forEach(child => {
            child.style.top = (Number((child.style.top).slice(0, -2))-35).toString()+"px";
        })
    }

    function jump_down() {
        Array.from(body.children).forEach(child => {
            child.style.top = (Number((child.style.top).slice(0, -2))+10).toString()+"px";
        })
    }
}

