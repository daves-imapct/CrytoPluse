// document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2b22343ff37b17981dee571fc899d0d83852be1764967300bf1f1a152dfc3b7b';
    // const apiUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${apiKey}`;
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const resultDisplay = document.getElementById('result');
    const convertBtn = document.getElementById('convertBtn');


    // Handle conversion
    convertBtn.addEventListener('click', () => {
        const amount = amountInput.value;
        const from_value = fromCurrency.value;
        const to_value = toCurrency.value;

        if (amount === '' || isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }

        const conversionUrl = `https://min-api.cryptocompare.com/data/price?fsym=${from_value}&tsyms=${to_value}&api_key=${apiKey}`;

        fetch(conversionUrl)
            .then(response => response.json())
            .then(data => {
                if (data[to_value]) {
                    const convertedAmount = amount * data[to_value];
                    console.log(convertedAmount);
                    resultDisplay.value = convertedAmount;
                } else {
                    resultDisplay.value = 'Conversion failed.';
                }
            })
            .catch(error => {
                console.error('Error fetching conversion rate:', error);
                resultDisplay.value = 'An error occurred. Please try again.';
            });
    });
// });
