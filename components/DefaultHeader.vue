<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
        </div>
        <div class="navbar-center">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ heading }}</NuxtLink>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import config from '~/nuxt.config'

export default {
    data() {
        return {
            heading: config.head.title
        }
    }
}
</script>
