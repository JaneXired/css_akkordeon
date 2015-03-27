<?php snippet('header') ?>

<main role="content">
    <?php
    for ($x = 0; $x <= 10; $x++) {
        echo '<div class="square"></div>';
    }
    ?>

    <div class="parallax">
        <div class="parallax__group">
            <div class="wrapper">
                <?php snippet('svg-menu') ?>
                <section class="intro">
                    <div>
                        <svg viewBox="0 0 375 80">
                            <defs>
                                <filter id="shadow">
                                    <feGaussianBlur in='SourceAlpha' stdDeviation='2.5' result='blur' />
                                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .35 0" result="blur"/>
                                    <feMerge>
                                        <feMergeNode in='blur'/>
                                        <feMergeNode in='SourceGraphic'/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g>
                                <g fill="#f2f2f2" filter="url(#shadow)">
                                    <rect width="335" height="80" rx="5" ry="5"/>
                                    <path d="M -20 20 l 21 -10 0 20 z" transform="translate(335,0) scale(-1,1)"/>
                                </g>
                                <text y="65%">
                                    <tspan x="15%">CSS you must.</tspan>
                                </text>
                            </g>
                        </svg>
                        <?php snippet('yoda') ?>
                    </div>
                </section>
            </div>
        </div>
        <div class="parallax__group">
            <div class="wrapper">
                <?php snippet('accordion') ?>
                <?php snippet('zoom') ?>
            </div>
        </div>
        <div class="parallax__group">
            <div class="wrapper">
                <?php snippet('slider') ?>
                <?php snippet('fader') ?>
                <?php snippet('accordion_2') ?>
                <?php snippet('hoverbox') ?>
            </div>
        </div>
    </div>
</main>
<?php snippet('footer') ?>
