<template>
    <div class="menu" :class="currentTheme">
        <div class="logo" :class="currentTheme"><a href="#"></a></div>
        <div class="wrapper-menu">
            <div class="menu-item">
                <h3 class="menu-item__text">Начать работу</h3>
                <img class="menu-item__img" src="@/assets/images/work.png" alt="work">
            </div>
            <div class="menu-item">
                <h3 class="menu-item__text">Уведомление</h3>
                <img class="menu-item__img" src="@/assets/images/notification.png" alt="notification">
                <div class="notification" role="status">{{notifications}}</div>
            </div>
        </div>
        <div class="wrapper-menu">
            <div class="menu-item">
                <h3 class="menu-item__text">Обучение</h3>
                <img class="menu-item__img" src="@/assets/images/education.png" alt="education">
            </div>
            <div class="menu-item">
                <h3 class="menu-item__text">Достижения</h3>
                <img class="menu-item__img" src="@/assets/images/achievement.png" alt="achievement">
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeProfile from './EmployeeProfile.vue';

    export default {
        data() {
            return {
                notifications: 2
            }
        },
        components: {
            EmployeeProfile
        }
    }
</script>

<style>
.menu {
    padding: 30px;
    width: 65%;
}

.logo {
    background-image: url("@/assets/images/logo.jpg");
    background-repeat: no-repeat;
    background-position-x: 100%;
    height: 90px;
    margin-bottom: 125px;
    width: 100%;
}

.wrapper-menu {
    margin-right: 90px;
    margin-left: 90px;
    display:  flex;
}

.menu-item {
    padding-top: 15px;
    margin: 50px;
    display: inline-block;
    text-align: center;
    width: 50%;
    height: 290px;
    background-color: #576a90;
    box-shadow: 0px 7px 10px -6px #292f40;
    border-radius: 5px;
}

.menu-item:hover {
    cursor: pointer;
    border: 3px solid #413f3f;
}

.menu-item {
    background-color: #ef7f1b;
}

.menu-item__text {
    padding-top: 20px;
    padding-bottom: 25px;
    color: #FFFFFF;
    font-size: 38px;
    font-weight: 600;
}

.menu-item__img {
    height: 100px;
}

.notification {
    position: absolute;
    right: 4.7em;
    top: 8.2em;
    min-width: 60px; 
    height: 60px;
    border-radius: 5em; 
    box-shadow: 0px 3px 5px #576a90;
    background-color: #bbff42;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 2em;
    color: #292f40;
    }
</style>