<script>
    export let author;
    export let title;
    export let excerpt;
    export let slug;
    export let issueno;
    export let categories;
    export let readingtime;
    export let image_src = 'https://res.cloudinary.com/dvhpk5kxt/image/upload/v1706134569/acker1.png';
</script>

<div class="flex flex-col h-full p-1 card">
    <a href="/{issueno}/{slug}" class="flex flex-col h-full">
        <div class="flex items-center justify-center flex-grow overflow-hidden rounded-sm cardimage">
            <slot name="image">
                {#if image_src}
                    <img class="object-cover w-full h-full" src={image_src} />
                {:else}
                    <div class="bg-gray-300"></div>
                {/if}
            </slot>
        </div>
        <div class="flex flex-col self-start w-full cardtext">
            <div>
                <div class="font-sans text-sm font-normal md:text-base text-naval">
                    <slot name="author">
                        {#if author}
                            {author}
                        {:else}
                            No Author
                        {/if}
                    </slot>
                </div>
                <div class="text-base font-light text-white md:text-2xl font-decor">
                    <slot name="title">
                        {#if title}
                            {title}
                        {:else}
                            Untitled
                        {/if}
                    </slot>
                </div>
            </div>
            <div class="flex items-center justify-between w-full font-serif font-seriflight text-naval">
                <div>
                    <slot name="categories">
                        {#if categories}
                            {categories.toLowerCase()}
                        {:else}
                            uncategorised
                        {/if}
                    </slot>
                </div>
                <div>
                    <slot name="readingtime">
                        {#if readingtime}
                            {readingtime} mins
                        {:else}
                            0 mins
                        {/if}
                    </slot>
                </div>
            </div>
        </div>
    </a>
</div>

<!-- <style>
@media (orientation: portrait) {
    .card {
        flex-direction: row;
    }
    .card .cardimage {
        display: none;
    }
    .card .cardtext {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
}
</style> -->