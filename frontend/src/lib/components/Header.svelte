<script>
    let magazineTitle = "AVANT CARDIGAN";
    let aboutLink = "about";
    let shopLink = "shop";
    let submissionsLink = "submissions";
    let home = "/"
</script>

<header class="flex items-center justify-between p-1 h-[2.5vh] md:justify-normal bg-babyblue">
    <h1 class="pl-2 pr-3 text-xs break-normal text-brown tracking-[0.4em] font-avant avant leading-none whitespace-nowrap"><a href={home}>{magazineTitle}</a></h1>
    <nav>
        <ul class="flex gap-4 font-sans text-xs font-sanslight">
            <li><a href={aboutLink} class="text-naval">about</a></li>
            <li><a href={shopLink} class="text-naval">shop</a></li>
            <li><a href={submissionsLink} class="text-naval">submissions</a></li>
        </ul>
    </nav>
</header>

<style>
    .avant {
        font-feature-settings: 'cpsp' on, 'ss01' on, 'salt' on;
    }
</style>
