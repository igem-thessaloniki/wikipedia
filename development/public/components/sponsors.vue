<template>
    <div>
        <div class="flex flex-center q-mb-md q-mt-md" :class="rM('text-dark', 'text-light')">
            <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 q-pa-md">
                <h3>Our Golden Sponsors</h3>
                <div class="row gutter-xs">
                    <div class="col">
                        <a href="https://www.auth.gr/en">
                            <div class="row justify-center">
                                <img class="responsive-image bg-white" src="http://2018.igem.org/wiki/images/e/e1/T--Thessaloniki--sponsos-auth.png"
                                    alt="Aristotle University Of Thessaloniki">
                            </div>
                        </a>
                    </div>
                    <div class="col" v-for="sponsor in goldSponsors" :key="sponsor.name">
                        <a :href="sponsor.site">
                            <div class="row justify-center">
                                <img class="responsive-image" :src="sponsor.img" :alt="sponsor.name">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-center q-mb-md q-mt-md" :class="rM('text-dark', 'text-light')">
            <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 q-pa-md">
                <h4>Our Silver Sponsors</h4>
                <div class="row gutter-xs">
                    <div class="col" v-for="sponsor in sponsors" :key="sponsor.name">
                        <a :href="sponsor.site">
                            <div class="row justify-center">
                                <img class="responsive-image" :src="sponsor.img" :alt="sponsor.name">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    (function (Vue, template) {
        Vue.component('sponsors', {
            template,
            methods: {
                rM: window.resolveMode
            },
            data() {
                return {
                    goldSponsors: [
                        {
                            img: 'http://2018.igem.org/wiki/images/2/2f/T--Thessaloniki--sponsos-antisel.png',
                            name: 'ANTISEL',
                            site: 'http://antisel.gr/antwpr/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/9/9d/T--Thessaloniki--sponsors-elpen.png',
                            name: 'ELPEN',
                            site: 'https://www.elpen.gr/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/c/cc/T--Thessaloniki--sponsors-ls.png',
                            name: 'Lab Supplies',
                            site: 'http://www.labsupplies.gr/',
                        },
                    ],
                    sponsors: [{
                            img: 'http://2018.igem.org/wiki/images/d/d0/T--Thessaloniki--sponsos-promega.png',
                            name: 'Promega',
                            site: 'https://worldwide.promega.com/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/7/78/T--Thessaloniki--sponsos-idt.png',
                            name: 'IDT',
                            site: 'https://eu.idtdna.com/pages',
                        },

                        {
                            img: 'http://2018.igem.org/wiki/images/5/5c/T--Thessaloniki--sponsors-biolabs.png',
                            name: 'Biolabs',
                            site: 'https://www.neb.com/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/b/b0/T--Thessaloniki--sponsors-mathworks.png',
                            name: 'Mathworks',
                            site: 'https://www.mathworks.com/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/b/bb/T--Thessaloniki--sponsors-genscript.png',
                            name: 'Genscript',
                            site: 'https://www.genscript.com/',
                        },
                        {
                            img: 'http://2018.igem.org/wiki/images/5/52/T--Thessaloniki--sponsors-snapgene.png',
                            name: 'Snapgene',
                            site: 'http://www.snapgene.com/',
                        }
                    ]
                }
            }
        })
    })(Vue, template)
</script>

<style>
</style>