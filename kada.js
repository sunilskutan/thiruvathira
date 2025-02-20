
                // Array of 15 custom tooltip messages
                const tooltipMessages = [
                    "Welcome to Thiruvathira!",
                    "Explore our traditions",
                    "Join the celebration",
                    "Learn about rituals",
                    "Experience the music",
                    "View dance performances",
                    "Discover our heritage",
                    "Special ceremonies",
                    "Festival highlights",
                    "Meet the community",
                    "Traditional attire",
                    "Festival foods",
                    "Historical significance",
                    "Photo gallery",
                    "Event schedule"
                ];
                
                for (let i = 2; i <= 16; i++) {
                    // Get appropriate message from array (adjust index to match button numbers)
                    const messageIndex = i - 2;
                    const message = tooltipMessages[messageIndex] || `Custom message ${i}`;
                    
                    document.write(`
                        <div style="position: relative;">
                            <div class="tooltip">
                                <a href="page${i}.html">
                                    <button class="small-round-button" 
                                        onmouseover="showTooltip(this)" 
                                        onmouseout="hideTooltip(this)"></button>
                                </a>
                                <span class="tooltiptext">${message}</span>
                            </div>
                            <button class="image-button" onclick="showImage('${i}b.jpg')">${i}</button>
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



          
/*

 for (let i = 2; i <= 16; i++) {
                    document.write(`
                        <div style="position: relative;">
                            <a href="page${i}.html">
                                <button class="small-round-button"></button>
                            </a>
                            <button class="image-button" onclick="showImage('${i}b.jpg')">${i}</button>
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
*/