<template>
  <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
      <AppFace />
      <p>Copyleft © {{ new Date().getFullYear() }} - All right reversed</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <ul class="menu menu-horizontal rounded-box">
        <li>
          <a>
            <Icon name="uil:linkedin" class="text-3xl" />
          </a>
        </li>
        <li>
          <a>
            <Icon name="uil:github" class="text-3xl" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
