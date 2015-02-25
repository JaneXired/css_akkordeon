<div class="menu-wrapper">
    <nav class="menu-left-down">
        <input type="checkbox" href="#" class="menu-open-down" name="menu-open-down" id="menu-open-down"/>
        <label class="menu-open-button-down" for="menu-open-down">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </label>

        <a href="#" class="menu-item-down"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item-down"><?php snippet('svg-cart') ?></a>
        <a href="#" class="menu-item-down"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item-down"><?php snippet('svg-cart') ?></a>
        <a href="#" class="menu-item-down"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item-down"><?php snippet('svg-cart') ?></a>

    </nav>

    <nav class="menu-right">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
        <label class="menu-open-button" for="menu-open">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </label>

        <a href="#" class="menu-item"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item"><?php snippet('svg-cart') ?></a>
        <a href="#" class="menu-item"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item"><?php snippet('svg-cart') ?></a>
        <a href="#" class="menu-item"><?php snippet('svg-coin') ?></a>
        <a href="#" class="menu-item"><?php snippet('svg-cart') ?></a>

    </nav>


    <!-- filters -->
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="shadowed-goo">

                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feComposite in2="shadow" in="goo" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
        </defs>
    </svg>
</div>