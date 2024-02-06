export default function Gamemode({Text, Description, Selected}) {
    if (Selected === "True") {
        setTimeout(() => {
            document.getElementById("mode-description").innerHTML = Description;
        }, 10);
    }

    return (
        <button className="gamemode" id={Description} selected-mode={Selected} onClick={() => {
            const selectedButtons = document.querySelectorAll('[selected-mode = "True"]')
            const currentButton = document.getElementById(Description)

            selectedButtons.forEach((button) => {
                button.setAttribute("selected-mode", "False")
            })

            currentButton.setAttribute("selected-mode", "True")
            document.getElementById("mode-description").innerHTML = Description;
        }}>
            {Text}
        </button>
    )
}