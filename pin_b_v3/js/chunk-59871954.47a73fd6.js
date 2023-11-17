(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59871954"],{2307:function(e){e.exports=JSON.parse('{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"int256","name":"power","type":"int256"},{"indexed":false,"internalType":"enum PowerSource","name":"powerSource","type":"uint8"}],"name":"PowerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"takedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"power","type":"uint256"}],"name":"TakedReward","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DELEGATE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"accountPershare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"accountPershareLastupdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"basePowerPer100USD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"burnWeekAvgTimes","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayBurnPinWithTakeRewardOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayBurnTotalOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"dayWithdrawRewardTotalMaxLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayWithdrawRewardTotalOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"earnInfo","outputs":[{"internalType":"uint256","name":"earnedRawrd","type":"uint256"},{"internalType":"uint256","name":"lastUpdateDayTime","type":"uint256"},{"internalType":"uint256","name":"lastDecrementTime","type":"uint256"},{"internalType":"uint256","name":"dayIncrementValue","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"energyValueMinLimit","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlackUserOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"migrateTimeOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"networkPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pinkLock","outputs":[{"internalType":"contract IPinkLock","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pinkLockID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IPancakePair","name":"lpToken","type":"address"},{"internalType":"uint256","name":"powerTimes","type":"uint256"},{"internalType":"address","name":"feeMiner","type":"address"},{"internalType":"bool","name":"enable","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startMigrationFromV2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"swapBurnPowerTimes","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfoOf","outputs":[{"internalType":"uint256","name":"totalPower","type":"uint256"},{"internalType":"uint256","name":"totalTakedReward","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"contract IDestoryTo","name":"_communityModule","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_pinToken","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_usdToken","type":"address"},{"internalType":"contract IPancakeRouter","name":"_router","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_energyValue","outputs":[{"internalType":"uint256","name":"weeklyAverage","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"poolUserInfoOf","outputs":[{"internalType":"uint256","name":"totalPower","type":"uint256"},{"internalType":"uint256","name":"depositedAmount","type":"uint256"},{"internalType":"uint256","name":"depositedPower","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pendingEnergyValue","outputs":[{"internalType":"uint256","name":"weeklyAverage","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateEarnInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rewardMaxLimitOfDay","type":"uint256"}],"name":"setDayWithdrawRewardTotalMaxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"timese12","type":"uint64"}],"name":"setBurnWeekAvgTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addBlackUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delBlackUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"powerTimes","type":"uint256"}],"name":"setPoolTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IPancakePair","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_powerTimes","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"miner","type":"address"}],"name":"setPoolFeeMiner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"setPoolEnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"setPoolDisable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"energyValueMin","type":"uint64"}],"name":"setEnergyValueMinLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"power","type":"uint256"}],"name":"setBasePowerPer100USD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"times","type":"uint64"}],"name":"setSwapBurnPowerTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"usdWorth","type":"uint256"}],"name":"getStallPowerPerUSDTe18","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"pinAmount","type":"uint256"}],"name":"basePowerPerByPIN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeReward","outputs":[{"internalType":"uint256","name":"rewardTotalAmount","type":"uint256"},{"internalType":"uint256","name":"redepositedAmount","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateStackPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"pendingIncrementPowerByDepositLP","outputs":[{"internalType":"uint256","name":"originPower","type":"uint256"},{"internalType":"uint256","name":"currentPower","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"incrementPowerByDepositLP","outputs":[{"internalType":"uint256","name":"originPower","type":"uint256"},{"internalType":"uint256","name":"currentPower","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"decrementPowerByWithdrawLP","outputs":[{"internalType":"uint256","name":"originPower","type":"uint256"},{"internalType":"uint256","name":"currentPower","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balancePowerOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"power","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amountInputed","type":"uint256"}],"name":"swapBurnDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"power","type":"uint256"},{"internalType":"bool","name":"isAdd","type":"bool"},{"internalType":"uint256","name":"powerSource","type":"uint256"}],"name":"changePower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract iV3Migration","name":"community","type":"address"},{"internalType":"contract iV3Migration","name":"pledge","type":"address"},{"internalType":"contract iV3Migration","name":"shareHolders","type":"address"},{"internalType":"contract iV3MigrationAndLock","name":"mineV2","type":"address"},{"internalType":"contract iV3Migration","name":"pinGame","type":"address"},{"internalType":"contract IPinkLock","name":"pinkLock_","type":"address"},{"internalType":"uint256","name":"pinkLockAmount_","type":"uint256"}],"name":"startMigrationV3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationDataFromV2","outputs":[],"stateMutability":"nonpayable","type":"function"}],"address":"0x21f17180Ee0f7CF745D3565693B1b9497ad1969E"}')},"26f3":function(e,t,n){"use strict";n("e99a")},"50a9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set-convert-times"},[n("div",{staticClass:"box"},[n("span",[e._v("当前基础算力(100U)")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.oldBesePower,expression:"oldBesePower"}],attrs:{type:"number",readonly:""},domProps:{value:e.oldBesePower},on:{input:function(t){t.target.composing||(e.oldBesePower=t.target.value)}}})]),n("span",[e._v("设置基础算力(100U)")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newBesePower,expression:"newBesePower"}],attrs:{type:"number"},domProps:{value:e.newBesePower},on:{input:function(t){t.target.composing||(e.newBesePower=t.target.value)}}})]),n("van-button",{on:{click:e.setBasePowerPer100USD}},[e._v("确认")])],1)])},i=[],u=(n("e7e5"),n("d399")),p=(n("96cf"),n("1da1")),s=n("2307"),r={data:function(){return{oldBesePower:"",newBesePower:"",MineV3Example:null}},created:function(){this.$web3&&(this.MineV3Example=new this.$web3.eth.Contract(s.abi,s.address),this.init())},methods:{init:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.MineV3Example.methods.basePowerPer100USD().call({from:e.$address},(function(t,n){t||(e.oldBesePower=n)}));case 1:case"end":return t.stop()}}),t)})))()},setBasePowerPer100USD:function(){var e=this;this.MineV3Example.methods.setBasePowerPer100USD(this.newBesePower).send({from:this.$address}).on("transactionHash",(function(e){u["a"].loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(t){u["a"].clear(),e.init(),e.newBesePower="",u["a"].success("设置成功！")})).on("error",(function(e){u["a"].clear(),u["a"].fail("交易失败！")}))}}},o=r,y=o,l=(n("26f3"),n("2877")),m=Object(l["a"])(y,a,i,!1,null,"630d7dd8",null);t["default"]=m.exports},e99a:function(e,t,n){}}]);