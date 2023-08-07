# Bad disaster Art

This project is a commission to develop an art portfolio website to showcase the artist's work, share the latest event dates, and display merchandise. The website consists of four pages: Home, Gallery, Events, and Contact.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Todos](#todos)
- [Contributing](#contributing)
- [License](#license)

## Setup and Installation

_Instructions on how to set up and install your project, including dependencies and environment variables, if any._

## Todos

- [ ] Design a responsive layout for both mobile and desktop devices
- [ ] Get signature for design on front of site
- [ ] Create clear and easy-to-use navigation menus
- [x] Implement consistent branding (colors, typography, logo)
- [x] Add subtle animations and transitions (e.g., hover effects, scrolling effects)
- [ ] Create an interactive image gallery with a lightbox for larger images
- [ ] Implement a filterable gallery for users to sort and view specific artwork categories
- [ ] Add a carousel or slider for featured artwork, event promotions, or testimonials
- [x] Implement lazy loading for images to improve page load times
- [ ] Organize content in collapsible sections or accordions where appropriate
- [ ] Ensure smooth scrolling navigation for in-page links
```
<script>
  const menuButton = document.querySelector(
    "#menu-button"
  ) as HTMLButtonElement;
  const menu = document.querySelector("#menu") as HTMLElement;

  function toggleMenu() {
    menu.classList.toggle("hidden");
  }

  menuButton.addEventListener("click", toggleMenu);
</script>
<style is:global>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    color: var(--accent-4);
    font-family: var(--inconsolata);
    font-weight: 400;
    font-size: var(--h1);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  h1 > span {
    color: var(--primary);
  }

  #menu-button {
    z-index: 1001;
    width: 2rem;
    aspect-ratio: 1;
    border: 0;
    background: url("/public/assets/icons/menu-outline.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .mobile-menu {
    z-index: 1000;
    justify-content: center;
  }

  li {
    font-family: var(--athiti);
    color: var(--accent-white);
  }

  @media (min-width: 400px) {
    #menu-button {
      display: none;
    }

    li {
      color: var(--accent-4);
    }

    .mobile-menu {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      position: static;
      background-color: transparent;
    }
  }
</style>

```
## Contributing

_Add instructions for potential contributors or collaborators, if applicable._

## License

_Include information about the license for your project, if applicable._
