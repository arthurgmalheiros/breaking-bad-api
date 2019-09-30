<template>
    <div class="home">
        <div id="nav">
            <div class="header">
                <img alt="Breaking Bad logo" class="logo" src="../assets/logo.png">

                <div class="search__container">
                    <input type="text" v-model="searchString" v-on:keyup="search(searchString)" class="search__input" placeholder="Pesquise os personagens">
                </div>
            </div>
        </div>

        <p class="title" v-if="!searchString">
            Personagens
        </p>
        
        <p class="title" v-else>
            Você pesquisou por "{{searchString}}"
        </p>        

        <div class="row">
            <div class="section card" v-for="info in infos" :key="info.char_id">
                <div class="wrapper" :style="{ 'background': 'url(' + info.img + ')  center / cover no-repeat' }">
                    <div class="status">
                        <span class="statusText">{{info.status}}</span>
                    </div>
                    <div class="data">
                        <div class="content">
                            <h1 class="titleCard">
                                <a href="#">{{info.name}}</a>
                            </h1>
                            <p class="textCard">
                                <ul class="menu-content">
                                    <li>
                                        <a href="#" class="fa fa-star"></a>
                                        <span>{{info.birthday}}</span>
                                    </li><br>
                                    <li>
                                        <a href="#" class="fa fa-suitcase"></a>
                                        <span>{{info.occupation.join(', ')}}</span>
                                    </li>
                                </ul>
                            </p>
                            <label for="show-menu" class="menu-button"><span></span></label>
                        </div>
                        <input type="checkbox" id="show-menu" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src='../controllers/Home.ts'></script>