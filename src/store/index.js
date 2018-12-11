import Vue from 'vue'
import Vuex from 'vuex'

import { mediaGetters } from './getters'
import { mediaMutations } from './mutations'
import { mediaActions } from './actions'
Vue.use(Vuex)

// const mediaList = [
//   {
//     _id: 0,
//     image: 'https://img3.doubanio.com/view/photo/l/public/p2536124100.webp',
//     title: '蚁人2',
//     description: '来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题。'
//   },
//   {
//     _id: 1,
//     image: 'https://img1.doubanio.com/view/photo/l/public/p557081809.webp',
//     title: '超人总动员',
//     description: '超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。'
//   },
//   {
//     _id: 2,
//     image: 'https://img3.doubanio.com/view/photo/l/public/p2536124100.webp',
//     title: '蚁人2',
//     description: '来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题。'
//   },
//   {
//     _id: 3,
//     image: 'https://img1.doubanio.com/view/photo/l/public/p557081809.webp',
//     title: '超人总动员',
//     description: '超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。'
//   },
//   {
//     _id: 4,
//     image: 'https://img3.doubanio.com/view/photo/l/public/p2536124100.webp',
//     title: '蚁人2',
//     description: '来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题。'
//   },
//   {
//     _id: 5,
//     image: 'https://img1.doubanio.com/view/photo/l/public/p557081809.webp',
//     title: '超人总动员',
//     description: '超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。'
//   },
// ]

export default new Vuex.Store({
  strict: true,
  state: {
    showAnimation: false,
    favorite: [],
    mediaList: []
  },
  getters: Object.assign({}, mediaGetters),
  mutations: Object.assign({}, mediaMutations),
  actions: Object.assign({}, mediaActions)
})