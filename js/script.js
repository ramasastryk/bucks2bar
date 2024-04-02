window.onload = function () {

document.getElementById('download').addEventListener('click', function() {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('myChart').toDataURL();
    link.click();
});

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.querySelector('a[data-bs-toggle="tab"][href="#chart"]').addEventListener('click', function () {

        let janIncome = document.getElementById('jan-income').value;
        let janExpenses = document.getElementById('jan-expenses').value;

        let febIncome = document.getElementById('feb-income').value;
        let febExpenses = document.getElementById('feb-expenses').value;

        let marIncome = document.getElementById('mar-income').value;
        let marExpenses = document.getElementById('mar-expenses').value;

        let aprIncome = document.getElementById('apr-income').value;
        let aprExpenses = document.getElementById('apr-expenses').value;

        let mayIncome = document.getElementById('may-income').value;
        let mayExpenses = document.getElementById('may-expenses').value;

        let junIncome = document.getElementById('jun-income').value;
        let junExpenses = document.getElementById('jun-expenses').value;

        let julIncome = document.getElementById('jul-income').value;
        let julExpenses = document.getElementById('jul-expenses').value;

        let augIncome = document.getElementById('aug-income').value;
        let augExpenses = document.getElementById('aug-expenses').value;

        let sepIncome = document.getElementById('sep-income').value;
        let sepExpenses = document.getElementById('sep-expenses').value;

        let octIncome = document.getElementById('oct-income').value;
        let octExpenses = document.getElementById('oct-expenses').value;

        let novIncome = document.getElementById('nov-income').value;
        let novExpenses = document.getElementById('nov-expenses').value;

        let decIncome = document.getElementById('dec-income').value;
        let decExpenses = document.getElementById('dec-expenses').value;

        var incomeData = [janIncome, febIncome, marIncome, aprIncome, mayIncome, junIncome, julIncome, augIncome, sepIncome, octIncome, novIncome, decIncome];
        var expensesData = [janExpenses, febExpenses, marExpenses, aprExpenses, mayExpenses, junExpenses, julExpenses, augExpenses, sepExpenses, octExpenses, novExpenses, decExpenses];


        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();

    });
}