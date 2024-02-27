<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';
    import PortraitCard from './portraitCard.svelte';

    let isPortrait;

    onMount(() => {
        isPortrait = window.innerHeight > window.innerWidth;
        window.addEventListener('resize', () => {
            isPortrait = window.innerHeight > window.innerWidth;
        });
    });
</script>

<div class="flex h-full">
    <div class="flex flex-col items-stretch w-3/5">
        <div class="bg-greystone h-3/5"><Card /></div>
        <div class="flex h-2/5">
            <div class="w-1/3 bg-bluestone2">{#if isPortrait}<PortraitCard />{:else}<Card />{/if}</div>
            <div class="w-1/3 bg-bluestone3">{#if isPortrait}<PortraitCard />{:else}<Card />{/if}</div>
            <div class="w-1/3 bg-bluestone2">{#if isPortrait}<PortraitCard />{:else}<Card />{/if}</div>
        </div>
    </div>
    <div class="flex flex-col items-stretch w-2/5">
        <div class="flex h-2/3">
            <div class="w-1/2 bg-bluestone3">{#if isPortrait}<PortraitCard />{:else}<Card />{/if}</div>
            <div class="w-1/2 bg-bluestone2">{#if isPortrait}<PortraitCard />{:else}<Card />{/if}</div>
        </div>
        <div class="bg-greystone h-1/3"><Card /></div>
    </div>
</div>