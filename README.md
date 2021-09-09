# GPPMall

商城的初步设计是采用 Vue 搭建的一个 H5 页面，在企业微信中通过应用进入商城页面。商城主要包含首页、店铺页、商品页、购物车页和用户页五个部分。

## Project Deconstruction

### ❌ 1、首页

#### ❌ 1.1 搜索

- [ ] 输入搜索

  通过输入搜索关键字来进行模糊搜索及匹配排序。用户可搜索商品名称、店铺名称、热门关键字。

- [ ] 历史记录

  系统记录用户的搜索历史，用户可删除历史搜索记录或点击搜索记录。

- [ ] 扫一扫二维码支持

  用户可通过扫描线下二维码，直接进入对应的商品详情页或商铺首页。

#### ❌ 1.2 推荐商品

- [ ] 商品列表

  展示运营后台推荐的上架商品列表，用户可查看购买商品。

#### ❌ 1.3 分类入口

- [ ] 商品分类

- [ ] 活动分类

  展示平台主要的商品分类、活动分类，用户可快速查看对应的商品及活动信息，并可点击进入具体的页面查看。

#### ❌ 1.4 滚动图片轮播\*

- [ ] 轮播图

  展示运营后台审核后的各类商家的广告图片，可点击链接进入具体的活动信息页面。

### ❌ 2、店铺页

#### ❌ 2.1 店铺基本信息

- [ ] 店铺名称和头像

  包括店铺名称和头像，由平台管理员创建，店铺管理员做日常维护。

#### ❌ 2.2 店铺公告

- [ ] 公告栏

  店铺人员在后台创建公告，公告包括标题、详情及发布时间。

### ❌ 3、商品页

#### ❌ 3.1 分类导航

- [ ] 三级分类

  商品可按照分类导航查找，三级分类。

#### ❌ 3.2 商品列表

- [ ] 商品列表

  从后台拿取商品数据，形成商品列表。

#### ❌ 3.3 商品页

- [ ] 商品页

  商品页展示商品轮播图、商品名称、商品售价、商品划线价、商品详情、运费等商品基本信息，商品由商家在后台进行录入或批量导入。

  - [ ] 分享功能

    用户可直接将商品详情页分享给好友，或选择生成商品二维码，将二维码分享出去。其他用户扫码通过认证后，可进入商品详情页查看商品。

  - [ ] 购买功能

    商品购买支持微信支付、支付宝和餐卡支付。

### ❌ 4、购物车页

#### ❌ 4.1 购物车

- [ ] 购物车

  购物车按照店铺展示用户加入购物车的商品，展示参数包括商品的缩略图、名称、销售价格、购买数量、商品规格。用户可以修改数量、删除商品、勾选商品提交结算。

#### ❌ 4.2 提交订单

- [ ] 提交订单

- [ ] 收货地址

- [ ] 备注信息

  用户可以进行收货地址确认（修改），填写给商家的备注信息。

#### ❌ 4.3 结算支付

- [ ] 结算支付

  用户可以选择餐卡支付、支付宝、微信支付等对订单进行付款操作。不支付跨商铺产品合并付款。

### ❌ 5、用户页

#### ❌ 5.1 个人资料

- [ ] 用户资料相关

- [ ] 餐卡信息

  用户头像、昵称可自定义，人员要绑定公司才能显示餐卡信息，用户餐卡余额通过 API 接口获取。生成个人支付码用于结算。

#### ❌ 5.2 我的订单

- [ ] 订单状态

  根据订单操作节点，系统将订单划分为 5 个订单状态，分别是:待付款、待发货、待收货、已完成、已关闭。

* - [ ] 待付款:用户在客户端提交订单后，但是没有完成支付的订单，该类订单根据订单设置保留一定时间，超时后订单自动关闭。

* - [ ] 待发货:用户完成支付后的订单，该类订单会自动进入待发货列表，等待商家操作发货。

* - [ ] 待收货:商家后台点击发货，录入快递单号，订单状态更新，该状态的订单，用户可查询物流轨迹和确认收货操作。

* - [ ] 已完成:当用户收到商品手动确认收货，或根据发货时间和后台设置满足自动确认收货时限，已经确认收货的订单为已完成。

* - [ ] 已关闭:因各种原因未付款关闭的订单为已关闭订单。

- [ ] 订单操作

  不同订单可进行的操作，根据订单状态有所不同。

* - [ ] 待付款：取消订单、去支付

* - [ ] 待发货：申请退款

* - [ ] 待收货：确认收货、查看物流

* - [ ] 已完成：删除订单（逻辑删除，后台数据库能查询）

* - [ ] 查看订单评论，商品评价为先审后发形式，平台审核通过后，评论可显示在前端

#### ❌ 5.3 维权（退换货）

- [ ] 维权（退换货）

  用户申请维权，生成新的维权订单。用户申请维权以 SKU 为单位，维权订单分为维权中、维权完成两种状态，维权订单可选择退款退货、仅退款。 退货退款同意后，买家需要寄回商品，上传物流信息，后台可查。；仅退款维权订单，商家同意后，维权完成。 所有维权订单，如订单如未确认收货，退款可原路返回。

#### ❌ 5.4 地址管理

- [ ] 地址相关管理

  地址为用户购买发货商品时使用的收货地址，包括联系人姓名、联系方式、收货详细地址。用户可添加、编辑收货地址，默认地址排在列表最前。如用户设置新的地址为默认地址，则原默认地址的标签自动清空。

#### ❌ 5.5 我的收藏\*

- [ ] 收藏夹

  收藏夹中可以收藏展示用户选择收藏的商品，便于用户快速浏览关注的商品。用户可收藏和取消收藏。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
