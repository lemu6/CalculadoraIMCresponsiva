const form = document.getElementById('form');

form.getEventListener('submit', function(event) {
    event.preventDefault();

    const weigth = document.getElementById('weight').value;
    const height = document.getElementById('heigth').value;

    const bmi = (weigth / (height * height)).toFixed(2);

    const value = document.getElementById('value')
});