document.addEventListener('DOMContentLoaded', () => {
    let city = 'Riyadh';
    let country = 'Saudi Arabia';
    let method = 2;

    //the API
    fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=${method}`)
        .then(response => response.json())
        .then(data => {
            let Container = document.getElementById('container');
            let dateElement = document.getElementById('date');
            let time = document.getElementById('times');
            let dateto = document.getElementById('dateto');

            let show = false;

            function Times() {
                const today = data.data[0];
                const Hdate = `${today.date.hijri.day} ${today.date.hijri.month.en} ${today.date.hijri.year}`;
                const graate = `${today.date.gregorian.day} ${today.date.gregorian.month.en} ${today.date.gregorian.year}`;

                dateElement.textContent = show ? Hdate : graate;
                time.innerHTML = `
                    <p>Fajr: ${today.timings.Fajr}</p>
                    <p>Dhuhr: ${today.timings.Dhuhr}</p>
                    <p>Asr: ${today.timings.Asr}</p>
                    <p>Maghrib: ${today.timings.Maghrib}</p>
                    <p>Isha: ${today.timings.Isha}</p>
                `;
            }

            dateto.addEventListener('click', () => {
                show = !show;
                dateto.textContent = show ? 'هجري' : ' ميلادي';
                Times();
            });

            Times();
        })
});