<script>
  const events = [
    {
      title: "Art in Motion Exhibition",
      date: "2021-09-01",
      city: "New York City, NY",
      description:
        "This exhibition showcases the latest works from up-and-coming artists from around the world. The pieces will be displayed in motion, creating an immersive experience for visitors.",
    },
    {
      title: "Colors of the Wind",
      date: "2021-09-01",
      city: "Miami, FL",
      description:
        "This festival celebrates the beauty of nature and art through a series of vibrant and interactive exhibits. From street art to sculpture, visitors will be transported to a world of color and wonder.",
    },
    {
      title: "Modern Art in the Digital Age",
      date: "2021-09-01",
      city: "Los Angeles, CA",
      description:
        "This symposium brings together leading artists, curators, and thinkers to explore the intersection of art and technology. The event will feature a range of discussions and workshops on topics such as virtual reality, AI, and digital art.",
    },
    {
      title: "Surreal Visions Group Show",
      date: "2021-09-01",
      city: "London, UK",
      description:
        "This group show features works by some of the most innovative and thought-provoking surrealists of our time. The pieces on display challenge traditional notions of reality and perception, inviting visitors to question the boundaries of their own minds.",
    },
  ];
</script>

<!-- for each event -->
<main>
  {#each events as event}
    <div class="event-card p-3">
      <div class="heading-container flex flex-col">
        <h2 id="athiti" class="event-title text-lg text-[var(--accent)] mb-2">
          {event.title}
        </h2>
        <div class="flex flex-col items-end">
          <h3
            id="athiti"
            class="event-city drop-shadow-md bg-[var(--primary-3-alpha)] px-3 py-2 text-lg text-[var(--accent-secondary)] mb-3"
          >
            {event.city}
          </h3>
        </div>
      </div>
      <p
        class="text-[var(--accent-4)] text-md leading-7 text-left"
        style={{
          fontWeight: 200,
        }}
      >
        {event.description}
      </p>
    </div>
  {/each}
</main>

<style>
  #athiti {
    font-family: var(--athiti);
  }
</style>
