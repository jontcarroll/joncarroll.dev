<template>
  <div class="flex w-full flex-col">
    <div class="relative flex w-full bg-base-200 px-8 py-[4rem]">
      <div
        class="flex w-full flex-col items-center justify-center pb-5 md:flex-row md:justify-start"
      >
        <Svg name="avatar" class="bg-base shrink-0 scale-75 text-accent" />
        <div class="flex w-full flex-col gap-5 text-xl">
          <span class="text-lg"> Hey there, </span>
          <h1 class="text-5xl text-base-content">I'm Jon.</h1>
          <span class="prose"
            >Senior software engineer with 10 years of full-stack development experience,
            specializing in <strong class="text-lg text-accent">.NET</strong>,
            <strong class="text-lg text-accent">EF Core</strong> and
            <strong class="text-lg text-accent">Vue + Nuxt</strong>.<br /><br />
            Currently working remotely out of <strong>Greenville, SC</strong>.</span
          >
        </div>
      </div>
      <div
        class="absolute -bottom-[1.5rem] right-[38%] md:right-[10rem] lg:right-[15rem] xl:right-[20rem]"
      >
        <div class="social-links">
          <a href="#">
            <Icon name="entypo-social:linkedin-with-circle" size="3rem" />
          </a>
          <a href="#">
            <Icon name="entypo-social:github-with-circle" size="3rem" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="ml-[1.2rem] flex md:ml-[10rem]">
        <Timeline class="pt-8" :entries="entries" />
      </div>
    </div>
    <div class="relative flex w-full bg-base-200 p-8">
      <div class="card image-full w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">coTask</h2>
          <p>
            coTask is an open-source, self-hosted, collaborative platform for planning things with
            others - whether it's a check list for an upcoming event with friends, a to-do list for
            chores around the house, or a shopping list that your entire family can use. Built using
            <strong>Vue 3 + Nuxt</strong> and <strong>Supabase</strong>
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Live Demo</button>
          </div>
        </div>
      </div>
    </div>
    <!--    <DarkModeSelector />-->
  </div>
</template>

<script setup lang="ts">
  import type { TimelineEntry } from '~/models/timeline'

  const site = SiteStore.use()
  site.title = 'joncarroll.dev'

  const mounted = ref(false)

  onMounted(() => {
    mounted.value = true
  })

  const entries = ref<TimelineEntry[]>([
    {
      date: '2021 - Present',
      expired: false,
      title: 'Senior Engineer',
      logo: 'healthpilot-logo',
      location: 'Nashville, TN',
      description:
        ' Healthpilot is a startup specializing in Medicare plan selection through proprietary\n' +
        '        decision-support technology. I have played a major role in architecting and developing our\n' +
        '        primary user-facing web application from the ground up.'
    },
    {
      date: '2017 - 2021',
      expired: true,
      title: '.NET Developer',
      logo: 'ep-logo',
      location: 'Greenville, SC',
      description:
        ' Healthpilot is a startup specializing in Medicare plan selection through proprietary\n' +
        '        decision-support technology. I have played a major role in architecting and developing our\n' +
        '        primary user-facing web application from the ground up.'
    },
    {
      date: '2015 - 2017',
      expired: true,
      title: 'Software Engineer',
      logo: 'hpa-logo',
      logoClass: 'scale-125 ml-2',
      location: 'Nashville, TN',
      description:
        'HPA is a fast-growing Robotic Process Automation SaaS start-up in healthcare, known for its high-energy, fast-paced environment with strict deadlines. As a software engineer, I automated repetitive healthcare processes, maintained and enhanced software features, led internal applications, served as the technical lead for clients, interacted with clients daily, and supported the sales team as a technical specialist during on-site visits nationwide.'
    }
  ])
</script>

<style>
  .social-links {
    @apply flex gap-[2rem] text-base-content/80;

    a {
      @apply z-10;

      svg {
        @apply rounded-full border-0 bg-white dark:bg-base-200;

        transition: all 0.2s ease-in-out;
      }
    }
    a:hover {
      svg {
        @apply scale-[120%] border-2 border-primary;
      }
    }
  }
</style>
