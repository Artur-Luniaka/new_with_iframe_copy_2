// Load header content
function loadHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  header.innerHTML = `
        <a href="./" class="logo">${websiteData.header.logo}</a>
        <nav class="desktop-nav">
            <ul>
                ${websiteData.header.navigation
                  .map((item) => {
                    // Handle root path for navigation
                    let url = item.url;
                    if (window.location.pathname === "/" && url === "./") {
                      url = "./";
                    }
                    return `<li><a href="${url}">${item.text}</a></li>`;
                  })
                  .join("")}
            </ul>
        </nav>
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </button>
        <div class="mobile-menu">
            <div class="mobile-menu-header">
                <a href="index.html" class="logo">${websiteData.header.logo}</a>
                <button class="mobile-menu-close" aria-label="Close mobile menu">✕</button>
            </div>
            <nav class="mobile-nav">
                <ul>
                    ${websiteData.header.navigation
                      .map(
                        (item) => `
                        <li><a href="${item.url}">${item.text}</a></li>
                    `
                      )
                      .join("")}
                </ul>
            </nav>
        </div>
        <div class="mobile-menu-overlay"></div>
    `;

  // Mobile menu functionality
  const mobileMenuToggle = header.querySelector(".mobile-menu-toggle");
  const mobileMenuClose = header.querySelector(".mobile-menu-close");
  const mobileMenu = header.querySelector(".mobile-menu");
  const mobileMenuOverlay = header.querySelector(".mobile-menu-overlay");
  const mobileMenuLinks = header.querySelectorAll(".mobile-nav a");

  function openMobileMenu() {
    document.body.style.overflow = "hidden";
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
  }

  function closeMobileMenu() {
    document.body.style.overflow = "";
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
  }

  mobileMenuToggle.addEventListener("click", openMobileMenu);
  mobileMenuClose.addEventListener("click", closeMobileMenu);
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// Load footer content
function loadFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-main">
                <div class="footer-links">
                    ${websiteData.footer.links
                      .map(
                        (link) => `
                        <a href="${link.url}">${link.text}</a>
                    `
                      )
                      .join("")}
                </div>
                <div class="contact-info">
                    <p>${websiteData.footer.contact.address}</p>
                    <p>Phone: ${websiteData.footer.contact.phone}</p>
                    <p>Email: ${websiteData.footer.contact.email}</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">${websiteData.footer.copyright}</p>
            </div>
        </div>
    `;
}

// Load home page content
function loadHomePage() {
  if (!document.getElementById("burrow-entrance")) return;

  // Load Burrow Entrance section
  const burrowEntrance = document.getElementById("burrow-entrance");
  burrowEntrance.style.backgroundImage = `url(${websiteData.home.burrowEntrance.backgroundImage})`;
  burrowEntrance.innerHTML = `
        <div class="hero-content">
            <h1 class="fade-in">${websiteData.home.burrowEntrance.title}</h1>
            <h2 class="fade-in-delay-1">${
              websiteData.home.burrowEntrance.subtitle
            }</h2>
            <p class="fade-in-delay-2">${
              websiteData.home.burrowEntrance.description
            }</p>
            
            <div class="features-grid fade-in-delay-3">
                ${websiteData.home.burrowEntrance.features
                  .map(
                    (feature) => `
                    <div class="feature-item">
                        <span class="feature-icon">🐇</span>
                        <span class="feature-text">${feature}</span>
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div class="stats-container fade-in-delay-4">
                ${websiteData.home.burrowEntrance.stats
                  .map(
                    (stat) => `
                    <div class="stat-item">
                        <span class="stat-number">${stat.number}</span>
                        <span class="stat-label">${stat.label}</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  // Load Carrot Review section
  const carrotReview = document.getElementById("carrot-review");
  carrotReview.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${
              websiteData.home.carrotReview.title
            }</h2>
            <h3 class="section-subtitle">${
              websiteData.home.carrotReview.subtitle
            }</h3>
            <p class="section-description">${
              websiteData.home.carrotReview.description
            }</p>
        </div>

        <div class="highlights-container">
            ${websiteData.home.carrotReview.highlights
              .map(
                (highlight) => `
                <div class="highlight-item">
                    <span class="highlight-icon">${highlight.icon}</span>
                    <span class="highlight-text">${highlight.text}</span>
                </div>
            `
              )
              .join("")}
        </div>

        <div class="reviews scroll-reveal">
            ${websiteData.home.carrotReview.reviews
              .map(
                (review) => `
                <div class="review-card">
                    <div class="review-header">
                        <img src="${review.avatar}" alt="${
                  review.author
                }" class="review-avatar">
                        <div class="review-meta">
                            <span class="review-author">${review.author}</span>
                            <div class="review-rating">
                                ${"⭐".repeat(review.rating)}
                            </div>
                            <span class="review-date">${review.date}</span>
                        </div>
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;

  // Load How to Hop section
  const howToHop = document.getElementById("how-to-hop");
  howToHop.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${websiteData.home.howToHop.title}</h2>
            <h3 class="section-subtitle">${
              websiteData.home.howToHop.subtitle
            }</h3>
            <p class="section-description">${
              websiteData.home.howToHop.description
            }</p>
        </div>

        <div class="steps-container scroll-reveal">
            ${websiteData.home.howToHop.steps
              .map(
                (step, index) => `
                <div class="step-card">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-icon">${step.icon}</span>
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-description">${step.description}</p>
                    <ul class="step-tips">
                        ${step.tips
                          .map(
                            (tip) => `
                            <li class="tip-item">${tip}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
            `
              )
              .join("")}
        </div>
    `;

  // Load Bunny Gear section
  const bunnyGear = document.getElementById("bunny-gear");
  bunnyGear.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${websiteData.home.bunnyGear.title}</h2>
            <h3 class="section-subtitle">${
              websiteData.home.bunnyGear.subtitle
            }</h3>
            <p class="section-description">${
              websiteData.home.bunnyGear.description
            }</p>
        </div>

        <div class="gear-categories">
            ${websiteData.home.bunnyGear.categories
              .map(
                (category) => `
                <div class="gear-category scroll-reveal">
                    <div class="category-header">
                        <span class="category-icon">${category.icon}</span>
                        <h3 class="category-name">${category.name}</h3>
                    </div>
                    <div class="gear-items">
                        ${category.items
                          .map(
                            (item) => `
                            <div class="gear-card">
                                <img src="${item.image}" alt="${item.name}" class="gear-image">
                                <div class="gear-info">
                                    <h4 class="gear-name">${item.name}</h4>
                                    <p class="gear-description">${item.description}</p>
                                    <div class="gear-stats">
                                        <span class="duration">⏱ ${item.duration}</span>
                                        <span class="cooldown">🔄 ${item.cooldown}</span>
                                    </div>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
              )
              .join("")}
        </div>

        <div class="unlock-info scroll-reveal">
            <h3 class="unlock-title">${
              websiteData.home.bunnyGear.unlockInfo.title
            }</h3>
            <ul class="unlock-methods">
                ${websiteData.home.bunnyGear.unlockInfo.methods
                  .map(
                    (method) => `
                    <li class="unlock-method">${method}</li>
                `
                  )
                  .join("")}
            </ul>
        </div>
    `;

  // Load Bunny Trails section
  const bunnyTrails = document.getElementById("bunny-trails");
  bunnyTrails.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${websiteData.home.bunnyTrails.title}</h2>
            <h3 class="section-subtitle">${
              websiteData.home.bunnyTrails.subtitle
            }</h3>
            <p class="section-description">${
              websiteData.home.bunnyTrails.description
            }</p>
        </div>

        ${websiteData.home.bunnyTrails.categories
          .map(
            (category) => `
            <div class="tips-category scroll-reveal">
                <h3 class="category-title">${category.title}</h3>
                <div class="tips-grid">
                    ${category.tips
                      .map(
                        (tip) => `
                        <div class="tip-card">
                            <div class="tip-media">
                                <img src="${tip.image}" alt="${
                          tip.title
                        }" class="tip-image">
                                <span class="difficulty-badge ${tip.difficulty.toLowerCase()}">${
                          tip.difficulty
                        }</span>
                            </div>
                            <div class="tip-content">
                                <h4 class="tip-title">${tip.title}</h4>
                                <p class="tip-description">${
                                  tip.description
                                }</p>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `
          )
          .join("")}

        <div class="fun-facts scroll-reveal">
            ${websiteData.home.bunnyTrails.funFacts
              .map(
                (section) => `
                <div class="facts-section">
                    <h3 class="facts-title">${section.title}</h3>
                    <ul class="facts-list">
                        ${section.facts
                          .map(
                            (fact) => `
                            <li class="fact-item">${fact}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

// Load news page content
function loadNewsPage() {
  loadLatestUpdates();
  loadCommunitySpotlight();
}

function loadLatestUpdates() {
  const section = document.getElementById("latest-updates");
  if (!section) return;

  const data = websiteData.news.latestUpdates;

  section.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${data.title}</h2>
            <h3 class="section-subtitle">${data.subtitle}</h3>
            <p class="section-description">${data.description}</p>
        </div>

        <div class="news-grid">
            ${data.articles
              .map(
                (article) => `
                <article class="news-card">
                    <div class="news-card-image">
                        <img src="${article.image}" alt="${article.title}">
                        ${
                          article.badge
                            ? `<span class="news-badge ${article.badge.toLowerCase()}">${
                                article.badge
                              }</span>`
                            : ""
                        }
                        <span class="news-category">${article.category}</span>
                    </div>
                    <div class="news-card-content">
                        <h3 class="news-card-title">${article.title}</h3>
                        <time class="news-date">${article.date}</time>
                        <p class="news-description">${article.content}</p>
                        ${
                          article.features
                            ? `
                            <div class="news-features">
                                <h4>New Features:</h4>
                                <ul>
                                    ${article.features
                                      .map((feature) => `<li>${feature}</li>`)
                                      .join("")}
                                </ul>
                            </div>
                        `
                            : ""
                        }
                        ${
                          article.rewards
                            ? `
                            <div class="news-rewards">
                                <h4>Rewards:</h4>
                                <ul>
                                    ${article.rewards
                                      .map((reward) => `<li>${reward}</li>`)
                                      .join("")}
                                </ul>
                            </div>
                        `
                            : ""
                        }
                        ${
                          article.improvements
                            ? `
                            <div class="news-improvements">
                                <h4>Improvements:</h4>
                                <ul>
                                    ${article.improvements
                                      .map(
                                        (improvement) =>
                                          `<li>${improvement}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        `
                            : ""
                        }
                    </div>
                </article>
            `
              )
              .join("")}
        </div>
    `;
}

function loadCommunitySpotlight() {
  const section = document.getElementById("community-spotlight");
  if (!section) return;

  const data = websiteData.news.communitySpotlight;

  section.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${data.title}</h2>
            <h3 class="section-subtitle">${data.subtitle}</h3>
            <p class="section-description">${data.description}</p>
        </div>

        <div class="spotlight-grid">
            ${data.highlights
              .map((highlight) => {
                if (highlight.player) {
                  return `
                        <div class="player-spotlight">
                            <div class="player-header">
                                <img src="${highlight.avatar}" alt="${highlight.player}" class="player-avatar">
                                <div class="player-info">
                                    <h3>${highlight.title}</h3>
                                    <span class="player-name">${highlight.player}</span>
                                    <span class="achievement">${highlight.achievement}</span>
                                </div>
                            </div>
                            <div class="player-stats">
                                <div class="stat">
                                    <span class="stat-label">Carrots</span>
                                    <span class="stat-value">${highlight.stats.carrots}</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-label">Levels</span>
                                    <span class="stat-value">${highlight.stats.levels}</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-label">Badges</span>
                                    <span class="stat-value">${highlight.stats.badges}</span>
                                </div>
                            </div>
                            <blockquote class="player-quote">${highlight.quote}</blockquote>
                        </div>
                    `;
                } else if (highlight.teams) {
                  return `
                        <div class="team-challenge">
                            <h3>${highlight.title}</h3>
                            <span class="challenge-type">${
                              highlight.type
                            }</span>
                            <img src="${
                              highlight.image
                            }" alt="Team Challenge" class="challenge-image">
                            <div class="team-rankings">
                                ${highlight.teams
                                  .map(
                                    (team) => `
                                    <div class="team-rank">
                                        <span class="team-position">${team.position}</span>
                                        <span class="team-name">${team.name}</span>
                                        <span class="team-score">${team.score}</span>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    `;
                } else if (highlight.submissions) {
                  return `
                        <div class="creative-corner">
                            <h3>${highlight.title}</h3>
                            <p>${highlight.description}</p>
                            <div class="fan-art-grid">
                                ${highlight.submissions
                                  .map(
                                    (submission) => `
                                    <div class="fan-art">
                                        <img src="${submission.image}" alt="${submission.title}">
                                        <div class="fan-art-info">
                                            <h4>${submission.title}</h4>
                                            <span class="artist">by ${submission.artist}</span>
                                            <span class="likes">❤ ${submission.likes}</span>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    `;
                }
              })
              .join("")}
        </div>
    `;
}

// Load contact page content
function loadContactPage() {
  const contactDetails = document.querySelector(".contact-details");
  if (!contactDetails) return;

  contactDetails.innerHTML = `
        <div class="contact-info-grid">
            <div class="contact-info-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                    <h4>Address</h4>
                    <p>${websiteData.footer.contact.address}</p>
                </div>
            </div>
            <div class="contact-info-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                    <h4>Phone</h4>
                    <p>${websiteData.footer.contact.phone}</p>
                </div>
            </div>
            <div class="contact-info-item">
                <div class="contact-icon">📧</div>
                <div class="contact-text">
                    <h4>Email</h4>
                    <p>${websiteData.footer.contact.email}</p>
                </div>
            </div>
            <div class="contact-info-item">
                <div class="contact-icon">⏰</div>
                <div class="contact-text">
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Weekend: Closed</p>
                </div>
            </div>
        </div>
    `;

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form-element");
  const formMessage = document.querySelector(".form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitButton = contactForm.querySelector(".submit-button");
      const buttonText = submitButton.querySelector(".button-text");
      const originalText = buttonText.textContent;

      // Show loading state
      buttonText.textContent = "Sending...";
      submitButton.disabled = true;

      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success message
        formMessage.textContent = "Message sent successfully!";
        formMessage.className = "form-message success";
        formMessage.style.display = "block";
        contactForm.reset();
      } catch (error) {
        // Show error message
        formMessage.textContent = "Failed to send message. Please try again.";
        formMessage.className = "form-message error";
        formMessage.style.display = "block";
      } finally {
        // Reset button state
        buttonText.textContent = originalText;
        submitButton.disabled = false;

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = "none";
        }, 5000);
      }
    });
  }
}

// Load rules page content
function loadRulesPage() {
  const rulesSection = document.getElementById("rules-section");
  if (!rulesSection) return;

  // Add scroll reveal animation to rules blocks
  const rulesBlocks = rulesSection.querySelectorAll(".rules-block");
  rulesBlocks.forEach((block, index) => {
    block.style.animationDelay = `${index * 0.1}s`;
  });
}

// Handle animations
function handleAnimations() {
  // Handle fade-in animations
  const fadeElements = document.querySelectorAll('[class*="fade-in"]');
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => fadeObserver.observe(element));

  // Handle scroll reveal animations
  const scrollElements = document.querySelectorAll(".scroll-reveal");
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          scrollObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.1 }
  );

  scrollElements.forEach((element) => scrollObserver.observe(element));
}

// Initialize page content
function initializePage() {
  loadHeader();
  loadFooter();
  loadHomePage();
  loadNewsPage();
  loadContactPage();
  loadRulesPage();
  handleAnimations(); // Replace handleScrollReveal with handleAnimations
}

// Add smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    // Check if the link is to the how-to-hop section from another page
    if (
      e.target.href.includes("/#how-to-hop") ||
      e.target.href.includes("/index.html#how-to-hop")
    ) {
      const currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath !== "/index.html") {
        // Store the target section in sessionStorage
        sessionStorage.setItem("scrollToSection", "how-to-hop");
      }
    }
    // Handle same-page anchor links
    else if (e.target.hash) {
      e.preventDefault();
      const element = document.querySelector(e.target.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
});

// Check for stored scroll target on page load
window.addEventListener("load", () => {
  const scrollToSection = sessionStorage.getItem("scrollToSection");
  if (scrollToSection) {
    sessionStorage.removeItem("scrollToSection");
    const element = document.getElementById(scrollToSection);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage);

document.querySelector(".cookie-bar__button").addEventListener("click", () => {
  const cookieBar = document.querySelector(".cookie-bar");
  cookieBar.style.transition = `opacity var(--animation-speed) ease`;
  cookieBar.style.opacity = "0";
  setTimeout(() => {
    cookieBar.style.display = "none";
  }, 300); // соответствует --animation-speed 0.3s
});
