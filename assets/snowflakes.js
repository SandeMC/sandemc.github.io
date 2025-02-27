document.addEventListener("DOMContentLoaded", function () {
    const currentMonth = new Date().getMonth();
    // Winter months: December (11), January (0), February (1)
    if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
        const snowflakesContainer = document.createElement("div");
        snowflakesContainer.classList.add("snowflakes");
        snowflakesContainer.setAttribute("aria-hidden", "true");

        for (let i = 0; i < 10; i++) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.textContent = "❅";
            snowflakesContainer.appendChild(snowflake);
        }

        document.body.appendChild(snowflakesContainer);
    }
});
