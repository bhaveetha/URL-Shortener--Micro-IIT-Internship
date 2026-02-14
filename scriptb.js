async function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    if (!longUrl) {
        alert("Please enter a URL!");
        return;
    }

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
        const shortUrl = await response.text();

        document.getElementById("result").innerHTML = `
            <p>Shortened URL:</p>
            <a href="${shortUrl}" target="_blank">${shortUrl}</a>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Error shortening URL</p>";
    }
}
