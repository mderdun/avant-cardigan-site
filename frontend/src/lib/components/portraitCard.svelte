<script>
    export let author;
    export let title;
    export let slug;
    export let issueno;
    export let categories;
    export let readingtime;
</script>

<div class="flex h-full portraitCard">
    <a href="/{issueno}/{slug}" class="w-full">
        <div class="flex flex-row h-full p-1">
            <div style="writing-mode: vertical-rl; transform: rotate(180deg);">
                <div class="font-sans text-sm font-normal text-naval">
                    <slot name="author">{author || 'No Author'}</slot>
                </div>
            </div>
            <div style="writing-mode: vertical-rl; transform: rotate(180deg);">
                <div class="text-base font-light text-white font-decor">
                    <slot name="title">{title || 'Untitled'}</slot>
                </div>
            </div>
            <div class="flex flex-col-reverse items-end justify-between w-full font-serif font-seriflight text-naval">
                <div style="writing-mode: vertical-rl; transform: rotate(180deg);">
                    <div>
                        <slot name="categories">{categories ? categories.toLowerCase() : 'uncategorised'}</slot>
                    </div>
                </div>
                <div style="writing-mode: vertical-rl; transform: rotate(180deg);">
                    <div>
                        <slot name="readingtime">{readingtime ? `${readingtime} mins` : '0 mins'}</slot>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>