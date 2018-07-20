<template>
  <div>
    <Select v-model="model1"
            style="width:200px"
            @on-change="clickSelect">
      <Option v-for="item in cityList"
              :value="item.value"
              :key="item.value">{{ item.label }}</Option>
    </Select>
    <Button @click="model1 = ''">点击</Button>
    <Input style="width: 200px"
           placeholder="请输入"
           v-model="pwd"
           @on-enter="lalala" />
    <Button @click="lalala">搜索</Button>
    <p name="ppp"
       title="这是一个段落">
      在4月15日首个全民国家安全教育日到来之际，中共中央总书记、国家主席、中央军委主席、中央国安委主席习近平作出重要指示。 他强调，国泰民安是人民群众最基本、最普遍的愿望。实现中华民族伟大复兴的中国梦，保证人民安居乐业，国家安全是头等大事。 要以设立全民国家安全教育日为契机，以总体国家安全观为指导，全面实施国家安全法，深入开展国家安全宣传教育，切实增强全 民国家安全意识。要坚持国家安全一切为了人民、一切依靠人民，动员全党全社会共同努力，汇聚起维护国家安全的强大力量， 夯实国家安全的社会基础，防范化解各类安全风险，不断提高人民群众的安全感、幸福感。
    </p>
    <img src="https://7nsts.w3cschool.cn/images/w3c/header-logo.png"
         alt="w3cschool的logo"
         title="这是一个logo"
         @click="logoClick">
    <div>
      <input onkeyup="value=value.replace(/[\W]/g,'') "
             onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"
             ID="Text1"
             NAME="Text1">
    </div>
    <div>
      <Table border
             :columns="columns"
             :data="dataTable"></Table>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  name: 'selectIpt',
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: 'Paris',
      pwd: '',
      passWard: '',
      dsa: document.getElementsByName('ppp'),
      columns: [
        {
          title: '资源名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '资源描述',
          key: 'description',
          align: 'center'
        },
        {
          title: '属性1',
          align: 'center',
          children: [
            {
              title: '名称',
              key: 'property1Key',
              align: 'center'
            },
            {
              title: '值',
              key: 'property1Value',
              align: 'center',
              render: (h, params) => {
                let type = 'div'
                return h(
                  type,
                  {
                    attrs: {
                      contenteditable: 'true'
                    },
                    on: {
                      dblclick: () => {
                        console.log('双击值1')
                      },
                      click: () => {
                        // console.log('单击值1')
                      }
                    }
                  },
                  params.row.property1Value
                )
              }
            }
          ]
        },
        {
          title: '属性2',
          align: 'center',
          children: [
            {
              title: '名称',
              key: 'property2Key',
              align: 'center'
            },
            {
              title: '值',
              key: 'property2Value',
              align: 'center'
            }
          ]
        },
        {
          title: '创建时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '创建人',
          key: 'writer',
          align: 'center'
        }
      ],
      dataTable: [
        {
          name: '资源名称一',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        },
        {
          name: '资源名称二',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        },
        {
          name: '资源名称三',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        },
        {
          name: '资源名称四',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        },
        {
          name: '资源名称五',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        },
        {
          name: '资源名称六',
          description: '这是描述一',
          property1Key: '属性一key',
          property1Value: '属性一value',
          property2Key: '属性二key',
          property2Value: '属性二value',
          time: '2018-06-06 12:12:12',
          writer: '丽丽'
        }
      ]
    }
  },
  // computed: {
  //   passWard() {
  //     if (this.pwd && this.pwd.length === 11) {
  //       // console.log(this.pwd.length)
  //       return this.pwd.replace(this.pwd.slice(3, 7), '****')
  //     }
  //   }
  // },
  methods: {
    showPosition(position) {
      this.passWard =
        'Latitude: ' +
        position.coords.latitude +
        '<br />Longitude: ' +
        position.coords.longitude
    },
    lalala() {
      console.log('输入框keydown事件')
      var array = []
      array = this.pwd.split('') //分割
      //获取全部商品
      console.log('dsa', this.dsa, typeof this.dsa)
      for (var t = 0; t < this.dsa.length; t++) {
        for (var i = 0; i < array.length; i++) {
          //创建表达式，匹配替换
          var reg = new RegExp(
            '([^<font color="red">]' + array[i] + '[^</font>])',
            'g'
          ) //"(>[^<]*?)"+"{{ keywords }}"+"([^>]*?<)"
          console.log('reg', reg)
          console.log('array[i]', i, array[i])
          console.log('exec', reg.exec())
          //替换重新写入商品名， 匹配结果中对应的分组匹配结果
          // if (this.dsa[t].innerHTML.exec(reg)) {
          this.dsa[t].innerHTML = this.dsa[t].innerHTML.replace(
            reg,
            '<font color="red">$1</font>'
          )
          console.log('$1', RegExp.$1)
          console.log('$2', RegExp.$21)
          console.log('$3', RegExp.$3)
          // }
        }
      }
    },
    logoClick() {
      console.log('点击了logoW3C')
      this.reload()
    },
    clickSelect (item, index) {
      console.log('item', item)
      console.log('index', index)
    }
  },
  created() {
    console.log(
      'navigator.geolocation',
      navigator.geolocation.getCurrentPosition(this.showPosition)
    ) //.getCurrentPosition(showPosition)
  },
  mounted() {
    const data = []
    for (let i = 0; i < 20; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        door: 2035,
        caddress: 'Lake Street 42',
        cname: 'SoftLake Co',
        gender: 'M'
      })
    }
    // this.data10 = data
  },
  beforeRouteEnter(to, from, next) {
    if (from.name !== 'asyncChart') {
      next(vm => {
        // vm.reload()
        vm.pwd = ''
      })
    } else {
      next()
    }
  }
}
</script>
<style>
</style>
