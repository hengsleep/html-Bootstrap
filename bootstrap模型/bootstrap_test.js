document.addEventListener('DOMContentLoaded', function() {
    var qyjBtn = document.getElementById('qyj-btn');
    var ytBtn = document.getElementById('yt-btn');
    var wkBtn = document.getElementById('wk-btn');
    var lyhBtn = document.getElementById('lyh-btn');
    var pillsYear = document.getElementById('pills-year');
    var pillsMonth = document.getElementById('pills-month');
    var pillsDay = document.getElementById('pills-day');
    var pillsHour = document.getElementById('pills-hour');

    qyjBtn.addEventListener('click', function(event) {
        event.preventDefault();
        qyjBtn.classList.add('active');
        ytBtn.classList.remove('active');
        wkBtn.classList.remove('active');
        lyhBtn.classList.remove('active');
        pillsYear.classList.add('show', 'active');
        pillsMonth.classList.remove('show', 'active');
        pillsDay.classList.remove('show', 'active');
        pillsHour.classList.remove('show', 'active');
    });

    ytBtn.addEventListener('click', function(event) {
        event.preventDefault();
        ytBtn.classList.add('active');
        qyjBtn.classList.remove('active');
        wkBtn.classList.remove('active');
        lyhBtn.classList.remove('active');
        pillsYear.classList.remove('show', 'active');
        pillsMonth.classList.add('show', 'active');
        pillsDay.classList.remove('show', 'active');
        pillsHour.classList.remove('show', 'active');
    });

    wkBtn.addEventListener('click', function(event) {
        event.preventDefault();
        wkBtn.classList.add('active');
        qyjBtn.classList.remove('active');
        ytBtn.classList.remove('active');
        lyhBtn.classList.remove('active');
        pillsYear.classList.remove('show', 'active');
        pillsMonth.classList.remove('show', 'active');
        pillsDay.classList.add('show', 'active');
        pillsHour.classList.remove('show', 'active');
    });

    lyhBtn.addEventListener('click', function(event) {
        event.preventDefault();
        lyhBtn.classList.add('active');
        qyjBtn.classList.remove('active');
        ytBtn.classList.remove('active');
        wkBtn.classList.remove('active');
        pillsYear.classList.remove('show', 'active');
        pillsMonth.classList.remove('show', 'active');
        pillsDay.classList.remove('show', 'active');
        pillsHour.classList.add('show', 'active');
    });
});
