<template>
 <div 
    class="cart" 
    :class="currentTheme"
 >
    <div class="header">
        <p class="identification-number" :class="currentTheme">XX.XX.XXXX<br>XX.XX</p>
        <div class="exit" :class="currentTheme">
            <a class="exit__text" href="#" :class="currentTheme">Выход</a>
        </div>
    </div>
    <div class="checkbox">
        <div class="theme-switcher-wrap">
        <div 
            class="theme-switcher"
            :class="{'active':currentTheme === 'theme-light'}"
            @click="switchTheme"
        >
            <div class="switch-path">
                <div class="switch-handle">

                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="my-data" :class="currentTheme">
        <h2 class="my-data__name" :class="currentTheme">Фамилия Имя Отчество</h2>
        <p class="my-data__number" :class="currentTheme">XX.XX.XXXX</p>
        <p class="my-data__text" :class="currentTheme">Таб №: ГОКИ 0000</p>
        <p class="my-data__text" :class="currentTheme">Проходчик IV разряда</p>
    </div>
    <div class="tasks">
        <div class="wrapper-tasks">
            <div class="tasks-item" :class="currentTheme">
                <h3 :class="currentTheme">Инструктаж</h3>
                <div class="briefing" :class="currentTheme">
                    <radial-progress-bar
                        class="rpb"
                        :diameter="125"
                        :completed-steps="completedSteps=10"
                        :total-steps="totalSteps">
                    </radial-progress-bar>
                </div>
            </div>
            <div class="tasks-item" :class="currentTheme">
                <h3 class="tasks-test" :class="currentTheme">Предсменный<br> экзаменатор</h3>
                <div class="pre-shift-examiner" :class="currentTheme">
                    <radial-progress-bar
                        class="rpb"
                        :diameter="125"
                        :completed-steps="completedSteps=10"
                        :total-steps="totalSteps">
                    </radial-progress-bar>
                </div>
            </div>
        </div>
        <div class="wrapper-tasks">
            <div class="tasks-item" :class="currentTheme">
                <h3 class="tasks-complete" :class="currentTheme">Тестов<br>выполнено</h3>
                <div class="test-complete">
                    <radial-progress-bar
                        class="rpb"
                        :diameter="125"
                        :inner-stroke-color="innerStrokeColor"
                        :completed-steps="completedSteps=2.5"
                        :total-steps="totalSteps">
                        <p class="tasks-description" :class="currentTheme">12</p>
                    </radial-progress-bar>
                </div>
            </div>
            <div class="tasks-item" :class="currentTheme">
                <h3 class="certification-through" :class="currentTheme">Аттестация<br>через</h3>
                <div class="certification">
                    <radial-progress-bar
                        class="rpb"
                        :inner-stroke-color="innerStrokeColor"
                        :diameter="125"
                        :completed-steps="completedSteps=1.25"
                        :total-steps="totalSteps">
                        <p class="tasks-description" :class="currentTheme">3</p><p class="tasks-description-text" :class="currentTheme"> дня</p>
                    </radial-progress-bar>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import RadialProgressBar from 'vue-radial-progress'

    export default {
        data () {
            return {
            completedSteps: 0,
            totalSteps: 10,
            startColor: "#ef7f1b",
            stopColor: "#d76e00",
            innerStrokeColor: "#353d54",
            currentTheme: localStorage.getItem('theme-color')
            };
        },
        methods: {
            switchTheme() {
                const storedTheme = localStorage.getItem('theme-color');
                if(storedTheme === 'theme-light') {
                    localStorage.setItem('theme-color', 'theme-dark');
                    this.currentTheme = localStorage.getItem('theme-color');
                } else {
                    localStorage.setItem('theme-color', 'theme-light');
                    this.currentTheme = localStorage.getItem('theme-color');
                }
            }
        },
        components: {
            RadialProgressBar
        }
}
</script>

<style lang="scss" scoped>
.cart {
    display: block;
    width: 35%;
    height: 100%;
    background-color: #353d54;
    border-radius: 0 15px 15px 0;
}

.header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    height: 180px;
    width: 100%;
}

.identification-number {
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
}

.exit {
    width: 140px;
    background-image: url('@/assets/images/exit.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 100%;
    height: 40px;
    line-height: 40px;
}

.exit:hover {
    background-image: url('@/assets/images/exit_hover.png');
}
.exit__text {
    padding-bottom: 5px;
    padding-right: 50px;
    width: 110px;
    font-size: 25px;
    font-weight: 600;
    color: #FFFFFF;
    text-decoration: none;
    line-height: 10px;
}

.exit__text:hover {
    color: #bbff42;
}

.checkbox {
    height: 120px;
}

.my-data {
    margin: 0 30px 7px 30px;
    padding: 10px 0 15px 25px;
    height: 170px;
    background-color: #576a90;
    border-radius: 5px;
    box-shadow: 0px 7px 10px -6px #292f40;
}

.my-data__name {
    padding-bottom: 5px;
    font-size: 35px;
    font-weight: 600;
    color: #FFFFFF;
}

.my-data__number {
    padding-bottom: 3px;
    font-size: 25px;
    font-weight: 500;
    color: #FFFFFF;
}

.my-data__text {
    padding-bottom: 3px;
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF;
}

.tasks {
    margin-bottom: 55px;
    display: block;
    width: 100%;
}

.wrapper-tasks {
    margin-right: 23px;
    margin-left: 23px;
    display:  flex;
}

.tasks-item {
    padding-top: 15px;
    margin: 7px;
    display: inline-block;
    text-align: center;
    width: 50%;
    height: 250px;
    background-color: #576a90;
    box-shadow: 0px 7px 10px -6px #292f40;
    border-radius: 5px;
}

.tasks-item:hover, .my-data:hover {
    cursor: pointer;
    border: 3px solid #413f3f;
}

h3 {
    padding-bottom: 35px;
    color: #FFFFFF;
    font-weight: 600;
}

.tasks-test, .tasks-complete, .certification-through {
    padding-bottom: 10px;
}

.rpb {
    margin: auto;
    width: 100%;
}

.briefing {
    height: 120px;
    background-size: 25%;
    background-repeat: no-repeat;
    background-image: url("../assets/images/briefing.png");
    background-position: center;
    background-position-x: 52% ;
    z-index: 1000;
}

.pre-shift-examiner {
    height: 120px;
    background-size: 21.5%;
    background-repeat: no-repeat;
    background-image: url("../assets/images/test.png");
    background-position: center;
    background-position-x: 51% ;
    z-index: 1000;
}

.tasks-description {
    color: #FFFFFF;
    font-size: 50px;
    font-weight: 600;
}

.tasks-description-text {
    padding-bottom: 20px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    line-height: 10px;
}

@import "@/components/UI/index.scss";
</style>