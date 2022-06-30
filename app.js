let reset = document.querySelector('.reset')


document.querySelectorAll('.grid').forEach(
    grid => {
         grid.addEventListener('mouseover', ()=>{
            grid.style.backgroundColor = "crimson"
         })
    }
)

reset.addEventListener('click', ()=>{
    document.querySelectorAll('.grid').forEach(
        grid => {
                grid.style.backgroundColor = "black"
        }
    )
})