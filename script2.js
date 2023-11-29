function analyzeIP() {
    const ipInput = document.getElementById('ipInput');
    const resultDiv = document.getElementById('result');
    const apikey = 'c420d4ff48b788';
    const apiurl = `https://ipinfo.io/${ipInput.value}?token=${apikey}`;

    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Threat level:</strong> ${data.threat}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
