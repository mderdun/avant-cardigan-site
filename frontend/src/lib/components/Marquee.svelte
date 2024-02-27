<script>
    import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck class="h-[5vh]" options={{ speed: 30, childStaggerDuration: 25 }}>
    <div class="flex items-end gap-2 leading-4">
        <span class="flex flex-col justify-center h-full">
            <p class="font-sans text-xs md:text-sm text-bluestone font-sansnormal">Ju Jeongyoeng</p>
            <p class="text-sm text-white md:text-lg font-decor font-decorlight">Fidel Castro Mobile Gaming</p>
        </span>
    </div>
    <svelte:fragment slot="separator"><div class="font-sans text-md md:text-lg text-bluestone">✱</div></svelte:fragment>
</Marqueeck>