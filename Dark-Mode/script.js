const btn=document.getElementsByClassName("circle")[0]
btn.addEventListener('click', () => {
        setTimeout(() => {
                btn.classList.toggle('left');
                btn.classList.toggle('right');
                document.getElementById('id').classList.toggle('bg-black');
                document.getElementById('title').classList.toggle('bg-title');
            }, 100);
});