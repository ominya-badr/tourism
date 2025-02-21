document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;
            const inputs = form.querySelectorAll("input");
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            });
            if (valid) {
                alert("Thank you! Your request has been submitted successfully.");
                form.reset();
            } else {
                alert("Please fill in all fields correctly before submitting.");
            }
        });
    });

    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = "<i class='fa fa-arrow-up'></i>";
    scrollTopBtn.classList.add("scroll-top");
    document.body.appendChild(scrollTopBtn);
    scrollTopBtn.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; padding:12px; font-size:20px; background:#ff5722; color:white; border:none; cursor:pointer; border-radius:5px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transition: all 0.3s ease;";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
    scrollTopBtn.addEventListener("mouseover", () => {
        scrollTopBtn.style.transform = "scale(1.1)";
    });
    scrollTopBtn.addEventListener("mouseout", () => {
        scrollTopBtn.style.transform = "scale(1)";
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateY(50px)";
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = "translateY(50px)";
        img.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(img);
    });
});
