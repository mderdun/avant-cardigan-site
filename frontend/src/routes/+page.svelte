<script>
    import Marquee from '$lib/components/Marquee.svelte';
    import Articles from '$lib/components/Articles.svelte';
</script>

<div class="flex flex-col">
    <div class="h-[92.5vh]">
        <Articles />
    </div>
    <div class="h-full bg-brown marquee">
        <Marquee />
    </div>
</div>