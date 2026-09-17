import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 覆盖透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否启用背景视频播放，配置后将在导航栏显示视频播放按钮
	playerEnable: true,
	/**
	 * 背景图片配置
	 * 图片路径支持三种格式：
	 * 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
	 * 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
	 * 3. 远程 URL："https://example.com/banner.jpg"
	 * 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
	 *
	 * 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
	 * 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
	 * 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
	 *
	 * 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
	 * desktop: "https://t.alcy.cc/pc",   // 随机图API
	 * desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
	 *
	 * mobile: "https://t.alcy.cc/mp", // 随机图API
	 * mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
	 *
	 * 支持配置多张图片（数组），每次刷新页面随机显示一张：
	 * desktop: [
	 * "assets/images/DesktopWallpaper/d1.avif",
	 * "assets/images/DesktopWallpaper/d2.avif",
	 * ],
	 *
	 * mobile:[
	 *   "assets/images/MobileWallpaper/m1.avif",
	 *   "assets/images/MobileWallpaper/m2.avif",
	 * ],
	 */
	src: {
		// 桌面背景图片（支持单张或多张随机）
		// desktop: "assets/images/DesktopWallpaper/d1.avif",
		desktop: [
			"assets/images/DesktopWallpaper/d1.avif",
			"assets/images/DesktopWallpaper/d2.avif",
			"assets/images/DesktopWallpaper/d3.avif",
			"assets/images/DesktopWallpaper/d4.avif",
			"assets/images/DesktopWallpaper/d5.avif",
			"assets/images/DesktopWallpaper/d6.avif",
		],
		// 移动背景图片（支持单张或多张随机）
		// mobile: "assets/images/MobileWallpaper/m1.avif",
		mobile: [
			"assets/images/MobileWallpaper/m1.avif",
			"assets/images/MobileWallpaper/m2.avif",
			"assets/images/MobileWallpaper/m3.avif",
			"assets/images/MobileWallpaper/m4.avif",
			"assets/images/MobileWallpaper/m5.avif",
			"assets/images/MobileWallpaper/m6.avif",
		],
		// 背景视频播放地址
		// 支持单个视频路径（字符串）或多个视频循环（数组，参考上面壁纸配置）
		// 支持远程视频URL，本地视频请放在 public/assets/videos/ 目录下
		// playerUrl: "/assets/videos/firefly.mp4",
		playerUrl: "https://bed.twoleaf.cn/file/1785658612716_firefly.mp4",
	},
	// 横幅壁纸和全屏壁纸共享配置
	common: {
		// 壁纸遮罩暗度，让横幅文字显示更清晰，0-1之间，值越大越暗
		dimOpacity: 0.2,
		// 多视频播放模式："order" 顺序循环，"random" 随机切换（仅当 playerUrl 为数组时生效）
		playerMode: "random",
		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 主页横幅主标题
			title: "哈基米",
			// 主页横幅主标题字体大小
			titleSize: "4.5rem",
			// 主页横幅副标题
			subtitle: [
				"哈基米曼波，曼波哈基米，总之先转一圈。",
				"啊？这是什么？摸一下。哦，是哈基米。",
				"别问，问就是哈基米曼波。",
				"今天精神状态：哈基米，但曼波。",
				"脑子说别想了，哈基米说曼波。",
				"生活给我一巴掌，我说哈基米曼波。",
				"如果不知道说什么，那就哈基米曼波。",
				"哈基米是猫，曼波是舞，我是卡住的土豆。",
				"早上好，除了哈基米、曼波和我。",
				"这个世界是一个巨大的哈基米，而我负责曼波。",
				"我不是抽象，我只是哈基米曼波。",
				"一得阁拉米，阿米诺斯，哈基米曼波。",
				"这是什么？点一下。开始曼波了。",
				"我的人生没有草稿，全是哈基米曼波。",
				"你说得对，但是哈基米曼波。",
				"我思故我在，我哈基米故我曼波。",
				"今天也是被哈基米曼波硬控的一天。",
				"我不是懒，我是在进行哈基米曼波。",
				"我的计划：哈基米。我的执行：曼波。",
				"开会呢，别哈基米。收到，曼波。",
				"老板问我进度，我说哈基米曼波。",
				"老师问我未来，我说哈基米曼波。",
				"亲戚问我工资，我说哈基米曼波。",
				"爱情太复杂，哈基米曼波刚刚好。",
				"我不谈恋爱，我和哈基米曼波过日子。",
				"别看我，我在和哈基米曼波对话。",
				"哈基米曼波，烦恼全部打包。",
				"哈基米曼波，今天也要好好旋转。",
				"哈基米曼波，明天的事明天再哈基米。",
				"我不是哈基米，我只是被曼波选中的人。",
				"当哈基米开始曼波，人类就负责鼓掌。",
				"我的脑内小剧场：哈基米大战曼波。",
				"哈基米在左，曼波在右，我在中间当空气。",
				"如果生活是谜语，那答案就是哈基米曼波。",
				"不要温和地走进那个良夜，要哈基米曼波。",
				"人类一思考，哈基米就曼波。",
				"我打了三百个字，最后只剩哈基米曼波。",
				"哈基米曼波，不是所有问题都需要答案。",
				"今天状态：半哈基米，半曼波。",
				"我这个人很简单，你给我哈基米，我就曼波。",
				"哈基米曼波，启动！",
				"哈基米曼波，关机。",
				"哈基米曼波，重启。",
				"哈基米曼波，蓝屏。",
				"哈基米曼波，已读不回。",
				"哈基米曼波，正在输入……",
				"哈基米曼波，对方正在哈基米。",
				"哈基米曼波，已曼波。",
				"哈基米曼波，禁止哈基米。",
				"哈基米曼波，禁止曼波。",
				"哈基米曼波，禁止禁止。",
				"检测到哈基米，正在曼波……",
				"系统错误：曼波过多，请稍后再哈基米。",
				"您的哈基米已到账，请及时曼波。",
				"哈基米余额不足，请充值曼波。",
				"正在加载哈基米……99%……曼波失败。",
				"该哈基米已被曼波。",
				"该曼波已被哈基米。",
				"前方高能：哈基米曼波出没。",
				"人不能至少不应该，但哈基米曼波可以。",
				"我这一生如履薄冰，你说哈基米曼波。",
				"十年哈基米，百年曼波，千年抽象。",
				"哈基米是过程，曼波是结果，我是意外。",
				"哈基米曼波，抽象永存。",
				"哈基米曼波，人类补完计划。",
				"哈基米曼波，宇宙的尽头。",
				"哈基米曼波，比宇宙更抽象。",
				"哈基米曼波，禁止套娃。",
				"哈基米曼波，我套我自己。",
				"哈基米曼波，无限哈基米。",
				"哈基米曼波，无限曼波。",
				"哈基米曼波，开始抽象。",
				"哈基米曼波，结束抽象。",
				"哈基米曼波，抽象失败。",
				"哈基米曼波，抽象成功。",
				"卡皮巴拉在泡澡，我在哈基米曼波。",
				"多邻国猫头鹰在窗外，我在哈基米曼波。",
				"鼠鼠我啊，今天也在哈基米曼波。",
				"猫猫虫，猫猫虫，哈基米曼波。",
				"修勾修勾，哈基米曼波。",
				"电子哈基米，赛博曼波。",
				"赛博哈基米，电子曼波。",
				"二进制哈基米，十进制曼波。",
				"哈基米.exe 已停止运行，是否启动曼波？",
				"曼波.dll 缺失，请重新安装哈基米。",
				"上班：哈基米。下班：曼波。工资：没有。",
				"早八：哈基米。午休：曼波。晚八：还是哈基米。",
				"考试：哈基米。查分：曼波。补考：哈基米曼波。",
				"恋爱：哈基米。分手：曼波。复合：哈基米曼波。",
				"减肥：哈基米。夜宵：曼波。体重：哈基米曼波。",
				"存钱：哈基米。购物车：曼波。余额：哈基米曼波。",
				"早睡：哈基米。熬夜：曼波。黑眼圈：哈基米曼波。",
				"计划：哈基米。拖延：曼波。截止日期：哈基米曼波。",
				"健身：哈基米。奶茶：曼波。肚子：哈基米曼波。",
				"学习：哈基米。手机：曼波。成绩：哈基米曼波。"
			],
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				// 是否启用打字机效果
				// 打字机开启 → 循环显示所有副标题
				// 打字机关闭 → 每次刷新随机显示一条副标题
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
			// 是否显示标题下方的链接图标
			linksEnable: true,
			// 首页横幅标题下方的链接图标（可选，支持 showName 显示文字）
			// 图标支持 Iconify 格式：fa7-brands:github、fa7-solid:envelope、mdi:rss 等
			links: [
				// {
				// 	name: "GitHub",
				// 	icon: "fa7-brands:github",
				// 	url: "https://github.com/CuteLeaf/Firefly",
				// 	showName: true,
				// },
				// {
				// 	name: "Email",
				// 	icon: "fa7-solid:envelope",
				// 	url: "mailto:xiaye@msn.com",
				// },
				// {
				// 	name: "Sponsor",
				// 	icon: "material-symbols:favorite",
				// 	url: "https://blog.cuteleaf.cn/sponsor/",
				// },
				// {
				// 	name: "RSS",
				// 	icon: "fa7-solid:rss",
				// 	url: "/rss/",
				// },
			],
		},
		// 壁纸轮播配置，横幅壁纸和全屏壁纸共享，仅在配置多张图片时生效
		carousel: {
			// 是否启用壁纸轮播；关闭时保持每次刷新随机显示一张
			enable: false,
			// 轮播切换间隔（毫秒）
			interval: 5000,
			// 过渡效果: 'fade' 渐变 | 'zoom' 缩放 | 'slide' 滑动 | 'kenburns' 旋转木马
			transitionEffect: "zoom",
		},
		// 水波纹动画效果配置，开启会影响页面性能，增加内存占用，请根据自己的喜好开启
		waves: {
			enable: {
				// 桌面端是否启用水波纹动画效果
				desktop: true,
				// 移动端是否启用水波纹动画效果
				mobile: true,
			},
		},
		// 渐变过渡效果配置，当水波纹关闭时自动启用，提供壁纸底部到背景色的平滑过渡
		gradient: {
			enable: {
				// 桌面端是否启用渐变过渡
				desktop: true,
				// 移动端是否启用渐变过渡
				mobile: true,
			},
			// 渐变高度
			height: "10%",
		},
	},
	// Banner模式特有配置
	banner: {
		// 图片位置
		// 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
		// 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
		position: "0% 20%",
		// 文章横幅信息："description" 显示描述，"meta" 显示日期、字数和阅读时长
		postInfo: {
			mode: "description",
		},
		// 导航栏配置
		navbar: {
			// 导航栏透明模式："semi" 半透明，"semifull" 动态透明，"none" 纯色不透明
			transparentMode: "semi",
			// 毛玻璃模糊度，0 即关闭导航栏的毛玻璃
			// 注意：导航栏子菜单与浮动面板始终保留毛玻璃，模糊度跟随此项但有最小值
			blur: 12,
		},
	},
	// 覆盖透明覆盖模式特有配置
	overlay: {
		// 层级，确保壁纸在背景层
		zIndex: -1,
		// 壁纸透明度
		opacity: 0.8,
		// 背景模糊度
		blur: 10,
		// 卡片透明度，0-1之间，值越小越透明
		cardOpacity: 0.6,
	},
	// 全屏壁纸模式特有配置
	// 壁纸模糊度(blur)、卡片透明度(cardOpacity)、层级(zIndex) 复用上方 overlay 模式的配置；
	// 背景透明度(opacity)不适用（全屏壁纸不透明）；导航栏透明模式由 fullscreen.navbar.transparentMode 控制，脱离 banner 的 navbar 配置
	fullscreen: {
		// 布局模式："classic" 经典文档流全屏壁纸，"hero" 固定全屏首屏壁纸
		layout: "classic",
		// 图片位置
		position: "center",
		// 全屏壁纸模式的导航栏配置
		navbar: {
			// 导航栏透明模式："semi" 半透明，"semifull" 动态透明（仅首页顶部透明、下滑玻璃化；非首页均跟卡片半透明）
			transparentMode: "semifull",
			// 导航栏毛玻璃模糊度，0 即关闭（玻璃态生效）
			blur: 12,
		},
		// 首页下滑时壁纸模糊渐变开关（从 0 渐变为 overlay.blur 的最大模糊）
		// 关闭后该设备上全屏壁纸保持清晰（首页与非首页都不模糊），设置面板的模糊度滑块也会隐藏
		blurRamp: {
			enable: {
				// 桌面端是否启用模糊渐变
				desktop: true,
				// 移动端是否启用模糊渐变
				mobile: true,
			},
		},
	},
};
