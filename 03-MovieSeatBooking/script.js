const seats = document.querySelectorAll('.seat');
const tickets = document.getElementById('tickets');
const total = document.getElementById('total');
const select = document.getElementById('select');

var totalSeats = document.getElementById('totalSeats');

populateUI();

// Save selected move index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovie', movieIndex);
    localStorage.setItem('selectedPrice', moviePrice);
}

// Update count & total
function update() {

    var selectedSeats = document.querySelectorAll('.selected');

    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat)
    );

    // Local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    tickets.innerText = seatsIndex.length - 1;

    var ticketsValue = tickets.innerText;

    var ticketsNumber = parseInt(ticketsValue,10);

    totalValue = ticketsNumber * select.value;

    total.innerText = `R$ ${totalValue}`;
    totalSeats.innerText = 49 - ticketsNumber;
}

// Populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        }); 
    }

    const selectedMovieIndex = localStorage.getItem('SelectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Selecionar Seat
seats.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.contains('available')) {
            e.target.classList.toggle('selected');
        } 

        update();
        
    });
});

// Selecionar Filme
select.addEventListener('change', (e) => {

    // Local storage
    setMovieData(e.target.selectedIndex, +e.target.value);

    update();   
});

update();







