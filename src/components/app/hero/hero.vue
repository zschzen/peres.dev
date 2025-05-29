<template>
  <div class="hero py-4 px-4">
    <div class="hero-content flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <div class="text-center w-full">
        <!-- Profile Picture -->
        <div class="flex justify-center mb-4">
          <UiProfilePicture />
        </div>

        <!-- Name & Tagline -->
        <div class="pb-4 mb-6">
          <!-- Main Name -->
          <h1
            class="text-4xl lg:text-5xl font-black text-base-content leading-tight tracking-wide mb-2"
          >
            Leandro Peres
          </h1>

          <!-- Tagline -->
          <p
            class="text-lg lg:text-xl font-light text-base-content opacity-70 leading-snug mb-4"
          >
            Generalist Game Developer
          </p>

          <!-- Decorative Divider -->
          <div class="w-1/12 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <!-- Menu -->
        <div class="w-full max-w-2xl mx-auto">
          <AppHeroLinks />
        </div>

        <!-- Other links -->
        <div class="mt-1 w-full max-w-2xl mx-auto space-y-1">
          <a
            href="https://portfolio.peres.dev"
            class="block flex items-center justify-center text-lg sm:text-xl text-gray-50 hover:text-gray-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio.peres.dev
          </a>
          <a
            href="mailto:leandro@peres.dev"
            class="block flex items-center justify-center text-lg sm:text-xl text-gray-50 hover:text-gray-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            leandro@peres.dev
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
