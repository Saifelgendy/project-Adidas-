document.getElementById("showAlert1").addEventListener("click", () => {
    const images = [
        "Shoes1.png",
        "add1.jpeg",
        "add2.avif",
        "grand-court.jpeg"
    ];
    let currentIndex = 0;

    const updatePopup = () => {
        Swal.fire({
            title: `Image ${currentIndex + 1} of ${images.length}`,
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" style="width: 150px; height: 150px; margin-bottom: 10px;">
                    <div style="display: flex;  ">
                        <button id="prevButton" style="padding: 5px 10px; cursor: pointer;">Previous</button>
                        <button id="nextButton" style="padding: 5px 10px; cursor: pointer;">Next</button>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            didRender: () => {
                document.getElementById("prevButton").addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updatePopup();
                });

                document.getElementById("nextButton").addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updatePopup();
                });
            }
        });
    };

    updatePopup();
});


////////////////////////////////////////////////////////////////////

document.getElementById("showAlert2").addEventListener("click", () => {
    const images = [
        "shirt1.jpeg",
         "shirt2.webp"           ,
        "shirt3.avif",
        "shirt4.jpeg"
    ];
    let currentIndex = 0;

    const updatePopup = () => {
        Swal.fire({
            title: `Image ${currentIndex + 1} of ${images.length}`,
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" style="width: 150px; height: 150px; margin-bottom: 10px;">
                    <div style="display: flex;  ">
                        <button id="prevButton" style="padding: 5px 10px; cursor: pointer;">Previous</button>
                        <button id="nextButton" style="padding: 5px 10px; cursor: pointer;">Next</button>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            didRender: () => {
                document.getElementById("prevButton").addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updatePopup();
                });

                document.getElementById("nextButton").addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updatePopup();
                });
            }
        });
    };

    updatePopup();
});

//////////////////////////////////////////////////////////////////////
document.getElementById("showAlert3").addEventListener("click", () => {
    const images = [
        "Shoes1.png",
        "add1.jpeg",
        "add2.avif",
        "grand-court.jpeg"
    ];
    let currentIndex = 0;

    const updatePopup = () => {
        Swal.fire({
            title: `Image ${currentIndex + 1} of ${images.length}`,
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}" style="width: 150px; height: 150px; margin-bottom: 10px;">
                    <div style="display: flex; gap: 2px;">
                        <button id="prevButton" style="padding: 5px 10px; cursor: pointer;">Previous</button>
                        <button id="nextButton" style="padding: 5px 10px; cursor: pointer;">Next</button>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            didRender: () => {
                document.getElementById("prevButton").addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updatePopup();
                });

                document.getElementById("nextButton").addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % images.length;
                    updatePopup();
                });
            }
        });
    };

    updatePopup();
});