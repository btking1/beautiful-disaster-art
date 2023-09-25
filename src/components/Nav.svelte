<script>
  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "gallery" },
    { href: "/events", label: "info" },
    { href: "/contact", label: "contact" },
    { href: "/shop", label: "shop (comming soon!)" },
  ];
  const toggleMenu = () => {
    const menuButton = document.getElementById("menu-button");
    const close = document.getElementById("close-button");
    const overlay = document.getElementById("menu-overlay");
    const menu = document.getElementById("menu");
    menuButton.classList.toggle("opacity-0");
    menuButton.classList.toggle("translate-x-4");

    close.classList.toggle("opacity-0");
    overlay.classList.toggle("translate-y-[-60rem]");
    menu.classList.toggle("translate-y-[-60rem]");
  };
</script>

<nav
  class="container sm:mx-auto sm:flex w-full
sm:flex-row
  sm:align-middle
  sm:justify-between py-2 sm:py-4
 sm:items-center"
>
  <div class="flex justify-between items-center sm:flex-1">
    <h1 class="">
      <a
        href={links[0].href}
        class="hover:no-underline flex flex-row text-lg sm:text-lg gap-x-1"
      >
        Beautiful <span class="text-[var(--primary)] whitespace-nowrap"
          >Disaster Art</span
        ></a
      >
    </h1>
    <button id="button" class="relative z-[70] sm:hidden" on:click={toggleMenu}>
      <div
        id="menu-button"
        class=" transition ease-out delay-225 duration-200 sticky top-0 right-0"
      >
        <svg
          class="stroke-zinc-400 hover:stroke-teal-500"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g fill="none" stroke-width="2">
            <line x1="5" y1="7" x2="25" y2="7" />
            <line x1="5" y1="15" x2="25" y2="15" />
            <line x1="5" y1="23" x2="25" y2="23" />
          </g>
        </svg>
      </div>

      <div
        id="close-button"
        class=" opacity-0 translate-5 transition ease-out delay-225 duration-200 fixed top-3 right-4"
      >
        <svg
          class=" stroke-white
          mix-blend-difference
          hover:stroke-teal-500"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g fill="none" stroke-width="2">
            <line x1="5" y1="5" x2="25" y2="25" />
            <line x1="25" y1="5" x2="5" y2="25" />
          </g>
        </svg>
      </div>
    </button>
  </div>
  <div
    id="menu-overlay"
    class="z-30 w-full h-screen bg-zinc-400 inset-0 opacity-60 shadow-inner translate-y-[-60rem] delay-150 duration-200 ease-out fixed mix-blend-darken"
  />
  <ul
    id="menu"
    class="
    sm: flex-[2]
    lg:flex-[2]
  sm:flex-shrink
fixed sm:top-0 sm:right-0
    z-[100] sm:relative flex flex-col sm:flex-row sm:justify-between
    justify-center py-3 items-center sm:translate-y-0 translate-y-[-60rem] delay-150 duration-200 ease-out w-full sm:mt-0 mt-12 sm:gap-y-0 gap-y-6"
  >
    {#each links as { href, label }, i}
      <li key={i} class="sm:px-3">
        <a
          class="text-center sm:text-lg text-2xl
          text-white

          sm:text-[var(--accent-secondary)]
          sm:translate-y-0
          hover:text-[var(--accent-4)] hover:no-underline"
          {href}
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  h1 {
    color: var(--accent-4);
    font-family: var(--inconsolata);
    font-weight: 400;
    font-size: var(--h1);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  /* #button {
    display: none;
  } */

  /* li {
    font-family: var(--athiti);
    color: var(--accent-white);
  } */

  li {
    font-family: var(--athiti);
  }
</style>
