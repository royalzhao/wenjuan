<template>
  <section class="container">
    <el-form :label-position="labelPosition" label-width="80px" :model="form">
      <el-form-item label="1、您的名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="2、您的性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男" value="1"></el-radio>
          <el-radio label="女" value="0"></el-radio>
          
        </el-radio-group>
      </el-form-item>

      <el-form-item label="3、您的年龄段">
        <el-radio-group v-model="form.age">
          <el-radio label="18岁以下" value="1"></el-radio> 
          <el-radio label="18~25" value="2"></el-radio>
          <el-radio label="26~30" value="3"></el-radio>
          <el-radio label="31~40" value="4"></el-radio>
          <el-radio label="41~50" value="5"></el-radio>
          <el-radio label="51~60" value="6"></el-radio>
          <el-radio label="60岁以上" value="7"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="5、您认为自己存在哪方面心理压力比较大？">
        <el-radio-group v-model="form.wherePressure">
          <el-radio label="A.工作压力大，体力透支、用脑过度、焦虑、烦躁" value="1"></el-radio>
          <el-radio label="B.产后抑郁，又得不到家人理解" value="2"></el-radio>
          <el-radio label="C.面临升学、就业的压力" value="3"></el-radio>
          <el-radio label="D.人际关系压力大，夫妻、同事、上下级或亲友关系紧张" value="4"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="6、您平时晚上几点睡觉？">
        <el-radio-group v-model="form.sleepTime">
          <el-radio label=" A.00:00—01:00" value="1"></el-radio>
          <el-radio label="B.23:00—24:00" value="2"></el-radio>
          <el-radio label="C.22:00—23:00" value="3"></el-radio>
          <el-radio label="D.22:00之前" value="4"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="7、您存在以下哪些睡眠问题？（多选）">
        <el-checkbox-group v-model="form.sleepProblems ">
          <el-checkbox label="A.睡眠欠佳，次日头晕、乏力、萎靡不振" name="sleepProblems"></el-checkbox>
          <el-checkbox label="B.睡眠时间短，少于6小时" name="sleepProblems"></el-checkbox>
          <el-checkbox label="C.入睡难，入睡时间超过30分钟" name="sleepProblems"></el-checkbox>
          <el-checkbox label="D.凌晨醒得早，夜间醒来次数超过2次" name="sleepProblems"></el-checkbox>
          <el-checkbox label="E.经常做恶梦，次日精神不振" name="sleepProblems"></el-checkbox>
          <el-checkbox label="F.睡眠一般，但基本不会影响正常生活" name="sleepProblems"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="8、最近三年您平时有适当的运动健身吗？">
        <el-radio-group v-model="form.sports">
          <el-radio label="A.几乎没有，不喜欢动" value="1"></el-radio>
          <el-radio label="B.一年偶尔锻炼几次，很少活动锻炼" value="2"></el-radio>
          <el-radio label="C.一个月3~5次，平时活动活动筋骨，走走楼梯，饭后散步" value="3"></el-radio>
          <el-radio label="D.一周1~2次，常去健身房；骑自行车、多走路；做有氧运动" value="4"></el-radio>
          <el-radio label="E.天天运动健身，一天不运动就浑身难受 " value="5"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="9、您知道以下几项缺乏蛋白质对身体的害处？（多选）">
        <el-checkbox-group v-model="form.harm">
          <el-checkbox label="A.蛋白质是维持生命活动的基础，缺乏后身体正常运转会有障碍" name="harm"></el-checkbox>
          <el-checkbox label="B.动物蛋白摄入过多会引起肥胖、脂肪肝、高血脂、心脑血管疾病，而植物蛋白营养价值高，有益健康" name="harm"></el-checkbox>
          <el-checkbox label="C.缺乏蛋白质会导致新陈代谢缓慢、加快氧化衰老、睡眠不好、疲倦、水肿肥胖、色斑、贫血" name="harm"></el-checkbox>
          <el-checkbox label="D.蛋白质缺乏使体力下降，精力不济，心脏病发病几率升高" name="harm"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="10、你更愿意通过以下哪种方式补充蛋白？（多选）">
        <el-checkbox-group v-model="form.supplementalProtein ">
          <el-checkbox label="A.鸡蛋、牛奶、豆浆" name="supplementalProtein"></el-checkbox>
          <el-checkbox label="B.蛋白粉" name="supplementalProtein"></el-checkbox>
          <el-checkbox label="C.蛋白肽（小分子，不用搅拌就能溶解，更易吸收）" name="supplementalProteins"></el-checkbox>
          <el-checkbox label="D.其他" name="supplementalProtein"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>


    </el-form>
  </section>
</template>

<script>

export default {
    data () {
      return {
        'question': [
            {'num': 'Q1', 'title': '单选题', 'type': 'radio', 'isNeed': true, 'options': ['选项一', '选项二']},
            {'num': 'Q2', 'title': '多选题', 'type': 'checkbox', 'isNeed': true, 'options': ['选项一', '选项二', '选项三', '选项四']},
            {'num': 'Q3', 'title': '文本题', 'type': 'textarea', 'isNeed': true}
          ],
        labelPosition: 'top',
        form: {
          name: '',
          sex: '',
          age: '',
          wherePressure: '',
          sleepTime: '',
          sleepProblems:  [],
          sports: '',
          harm:  [],
          supplementalProtein: [],
        }

      };
    }

}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;


}

</style>
