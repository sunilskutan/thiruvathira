
                // Array of 15 custom tooltip messages
                const tooltipMessages = [
                    "പള്ളിയറ നവീകരണം",
                    "മേള",
                    "ദീപാലങ്കാരം",
                    "അവാര്‍ഡുകള്‍",
                    "സംഭാവനകള്‍",
                    "അറിയിപ്പുകള്‍",
                    "കെട്ടുകാഴ്ചകള്‍",
                    "DJ with CHENDA & feel Good Comedy",
                    "Aloshi and Folk Music",
                    "Job Kurien and Kathakali",
                    "THIRUMALI",
                    "കനല്‍ & വിനീത് ശ്രീനിവാസന",
                    "MUSIC DROPS",
                    "വൈക്കം വിജയലക്ഷ്മി&സരയു-കൃഷ്ണപ്രഭ",
                    "ഫോട്ടോ ഗ്യാലറി"
                ];
                
               for (let i = 2; i <= 16; i++) {
    // Get appropriate message from array (adjust index to match button numbers)
    const messageIndex = i - 2;
    const message = tooltipMessages[messageIndex] || `Custom message ${i}`;
    
    // Set background color to red for i = 8
    const smallButtonStyle = (i === 8) ? 'background-color: red;' : '';
    const imageButtonStyle = (i === 8) ? 'background-color: red;' : '';
    
    document.write(`
        <div style="position: relative;">
            <div class="tooltip">
                <a href="page${i}.html">
                    <button class="small-round-button" 
                        onmouseover="showTooltip(this)" 
                        onmouseout="hideTooltip(this)"
                        style="${smallButtonStyle}"></button>
                </a>
                <span class="tooltiptext">${message}</span>
            </div>
            <button class="image-button" 
                onclick="${i === 6 ? "window.location.href='6b.html'" : `showImage('${i}b.jpg')`}" 
                style="${imageButtonStyle}">${i}</button>
        </div>
    `);
}

        function showImage(imageSrc) {
            document.getElementById("largeImage").src = imageSrc;
            document.getElementById("overlay").style.display = "flex";
        }
        
        function closeOverlay() {
            document.getElementById("overlay").style.display = "none";
        }
        
        function showTooltip(element) {
            // The tooltip is shown automatically through CSS
            // This function can be used for additional logic if needed
        }
        
        function hideTooltip(element) {
            // The tooltip is hidden automatically through CSS
            // This function can be used for additional logic if needed
        }

