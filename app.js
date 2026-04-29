"use strict";

const STORE_KEY = "tttTrainerLabState.v1";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const SOURCES = [
  "TTT_Facilitator_Handbook.docx：成人学习、教练九步、案例诊断、开放问题、ASA 反馈、行动卡",
  "成为合格培训师_TTT技能全攻略.pptx：培训师定位、准备、开场、互动、控场、收尾、五星教学法",
  "AACTP 项目萃取文章：把偶然成功转成可复制 SOP",
  "my-training-assistant-SKILL.md：零售一线课程输出规范、可检核目标、场景化考核",
  "原线上 TTT-app：业务方需求诊断、面试与向上汇报演练"
];

const MODULES = [
  {
    id: "adult-learning",
    no: "01",
    title: "成人学习不是灌输",
    subtitle: "相关、马上用、尊重经验",
    source: "TTT Facilitator Handbook",
    minutes: 18,
    level: "基础",
    summary:
      "成人学习的入口不是内容，而是意义。培训师要先让学员看到这件事与自己当下工作、业绩、客户和成长有关。",
    bullets: [
      "先讲为什么：不是公司为什么要学，而是学员本人为什么值得投入注意力。",
      "让学员马上用：讲完关键点后立刻练，不把练习留到课后。",
      "尊重已有经验：先问学员做过什么、卡在哪里，再补方法。",
      "培训师最后说：复盘时先让学员、观察者发言，讲师只补关键缺口。"
    ],
    drill:
      "把你最近一节课的第一句话改写成：今天学 X，是因为我们本周发现 Y，如果做好它，你可以得到 Z。"
  },
  {
    id: "nine-steps",
    no: "02",
    title: "教练九步清单",
    subtitle: "Before / During / After",
    source: "TTT Facilitator Handbook",
    minutes: 24,
    level: "核心",
    summary:
      "好的带教不是临场发挥，而是一张可以反复使用的飞行前检查表。每一次辅导都要覆盖准备、互动、练习和跟进。",
    bullets: [
      "Before 1：先问门店这周最需要解决什么，不照搬总部材料。",
      "Before 2：确认员工起点，问他已经知道什么、以前哪里觉得难。",
      "During 3-7：先讲原因，缩小重点，互动提问，角色演练，用开放问题检核。",
      "After 8-9：1-2 天内现场观察，反馈前先判断是知识、技能还是意愿问题。"
    ],
    drill:
      "打开工具箱里的九步检查表，选一个你要带教的人，完成一次课前检查。"
  },
  {
    id: "diagnosis",
    no: "03",
    title: "需求诊断与绩效根因",
    subtitle: "不要接单，先定位真问题",
    source: "原平台 + TTT 诊断模型",
    minutes: 20,
    level: "核心",
    summary:
      "培训只能解决知识技能缺口。业务方说要培训时，真正的问题可能是目标不清、资源不足、激励缺失、流程问题或管理跟进不足。",
    bullets: [
      "先接住业务方：认可问题重要性，降低对抗感。",
      "再问期望结果：希望哪个指标、哪个行为、什么时候发生变化。",
      "继续问现状差距：数据、门店、岗位、环节分别差在哪里。",
      "最后判断介入方式：培训、工具、机制、管理跟进或组合方案。"
    ],
    drill:
      "用工具箱里的需求诊断卡，把一个真实培训需求拆成目标、差距、证据、根因和下一步。"
  },
  {
    id: "conversation",
    no: "04",
    title: "教练对话技术",
    subtitle: "开放问题 + Affirm / Suggest / Ask",
    source: "TTT Facilitator Handbook",
    minutes: 22,
    level: "核心",
    summary:
      "同样的问题，用不同问法会得到完全不同的信息。培训师要减少封闭式确认，多用开放问题得到真实状态。",
    bullets: [
      "把“懂了吗”换成“你会怎么向顾客解释”。",
      "把“有没有问题”换成“现在最不确定的是哪一步”。",
      "反馈先肯定一个具体行为，再建议一个具体动作，最后让对方自己说下一次怎么做。",
      "反馈只改一个重点，避免把学员压垮。"
    ],
    drill:
      "把你常用的三个封闭问题输入工具箱的提问转换器，改成可观察、可回答的开放问题。"
  },
  {
    id: "course-design",
    no: "05",
    title: "五星教学法与课程设计",
    subtitle: "从问题到练习，而不是从目录到讲解",
    source: "TTT技能全攻略",
    minutes: 26,
    level: "进阶",
    summary:
      "课程设计的起点不是“我要讲什么”，而是“学员回去要做出什么不同动作”。五星教学法能把内容变成行为训练。",
    bullets: [
      "一星聚焦问题：先呈现业务痛点或真实场景。",
      "二星激活旧知：让学员说出已有经验和常见做法。",
      "三星示证新知：讲方法、给标准、做示范。",
      "四星应用新知：用角色扮演、现场演示、案例改写来练。",
      "五星融会贯通：形成行动计划、检核标准和后续复盘。"
    ],
    drill:
      "用课程设计器生成一节 45 分钟微课，目标必须写成“学员能完成/能说清/能正确执行”。"
  },
  {
    id: "delivery",
    no: "06",
    title: "授课实施：开场、互动、控场、收尾",
    subtitle: "让学员抬头、动手、开口",
    source: "TTT技能全攻略",
    minutes: 20,
    level: "进阶",
    summary:
      "课堂表现不是表演欲，而是学习设计的一部分。开场建立注意力，互动制造加工，控场保护节奏，收尾推动行动。",
    bullets: [
      "开场可用提问、故事、数据、案例、互动或独特自我介绍。",
      "互动可用提问、讨论、案例、演练、游戏、演示、竞赛、反思。",
      "遇到刁钻问题时先尊重问题，再确认理解，必要时转给学员或课后处理。",
      "收尾优先行动计划法：让学员写下对象、动作、时间和验证方式。"
    ],
    drill:
      "为一节课写一个 3 分钟开场：一个真实问题、一个让学员举手的问题、一个今天可带走的动作。"
  },
  {
    id: "extraction",
    no: "07",
    title: "项目萃取与 SOP",
    subtitle: "把偶然成功变成可复制能力",
    source: "AACTP 项目萃取文章",
    minutes: 25,
    level: "进阶",
    summary:
      "项目总结告诉别人做成了什么，项目萃取告诉别人怎么复刻。培训管理者要把优秀经验拆到角色、动作、流程和工具。",
    bullets: [
      "先梳理项目背景、目标、周期、角色、难题和成果。",
      "再明确每个角色参与阶段、职责边界和关键动作。",
      "继续拆流程、节点、风险和应对方案。",
      "最后固化为一岗一指南：步骤、标准、工具、常见问题。"
    ],
    drill:
      "选一个成功门店案例，写出“店长、资深导购、新人、区域培训”四个角色各自做对了什么。"
  },
  {
    id: "value-report",
    no: "08",
    title: "培训价值汇报",
    subtitle: "用业务语言说清贡献",
    source: "原平台 + 逻辑思考框架",
    minutes: 18,
    level: "高阶",
    summary:
      "向上汇报不是罗列培训场次，而是建立业务问题、培训动作、行为变化、结果指标之间的证据链。",
    bullets: [
      "先讲业务问题：哪个指标、哪个群体、哪个环节需要改善。",
      "再讲培训介入：为什么培训是合适解，哪些问题需要非培训动作配合。",
      "用四层证据：业务结果、行为改变、学习结果、参与反馈。",
      "用 PREP 说话：结论、理由、例子、再回到结论。"
    ],
    drill:
      "准备一段 90 秒汇报：今年培训不是成本中心，因为它推动了哪一个行为变化，并如何影响业务指标。"
  }
];

const SCENES = [
  {
    id: "op-attach",
    cat: "运营",
    level: "入门",
    role: "运营总监",
    title: "连带率培训需求",
    desc: "强势业务方直接要课，你要先接住再诊断。",
    opening: "小郭，你来一下。连带率的问题你得给我搞个培训，下个月必须见效。",
    clues: [
      "一线没有主动推荐意识，结账的时候完全不提。",
      "也不是所有人都不提，有些人提了，但话术很硬，顾客不买账。",
      "连带没有单独计提，店长平时也很少盯这个动作。",
      "问题集中在新员工和两个低客流门店，老员工不是完全不会。"
    ],
    targetSkills: ["ack", "target", "gap", "behavior", "root", "measure"],
    coachTip: "这个场景的关键不是马上答应排课，而是把“连带率低”拆到具体销售环节和管理机制。"
  },
  {
    id: "op-service",
    cat: "运营",
    level: "进阶",
    role: "运营总监",
    title: "业绩下滑要服务培训",
    desc: "把模糊归因拆成数据、人员、竞品、管理因素。",
    opening: "最近三家店业绩掉得很厉害，我觉得是服务的问题，你安排一下服务培训。",
    clues: [
      "那三家店差得最明显，其他店没有这么严重。",
      "其中两家店刚换了店长，团队稳定性也有点波动。",
      "有一家店旁边新开了竞品，客流被分走了一些。",
      "服务问题可能存在，但我也需要你告诉我培训能解决哪一部分。"
    ],
    targetSkills: ["ack", "gap", "root", "measure", "solution"],
    coachTip: "先把业绩下滑拆成客流、转化、客单、连带、人员稳定性，再判断培训是否是主解。"
  },
  {
    id: "op-season",
    cat: "运营",
    level: "进阶",
    role: "运营总监",
    title: "旺季前两周要话术培训",
    desc: "在时间压力下做优先级和试点方案。",
    opening: "旺季两周就到了，我需要你给全员做一个完整的销售话术培训，所有门店。",
    clues: [
      "我知道时间紧，但旺季不能等。",
      "问题主要集中在三个新开门店，老店其实熟悉度还可以。",
      "最缺的是新品利益点和价格异议处理，不是所有话术都要重来。",
      "如果你能给我一个快、准、可追踪的方案，我可以接受先重点门店。"
    ],
    targetSkills: ["ack", "gap", "behavior", "solution", "measure"],
    coachTip: "时间紧时不要追求大而全。用高影响人群、高频场景、短周期跟进建立可信方案。"
  },
  {
    id: "ceo-culture",
    cat: "高层",
    level: "进阶",
    role: "CEO",
    title: "新价值观文化培训",
    desc: "把抽象战略意图转成行为场景和衡量方式。",
    opening: "我们的新价值观已经发布了，但我感觉大家还是没有真正理解。培训部门要做一套培训让大家真心认同。",
    clues: [
      "我不希望只是念 PPT，也不希望变成口号考试。",
      "最担心中层理解不一致，传到一线就变味。",
      "我们需要员工知道在真实业务冲突里怎么选择。",
      "如果能把价值观和管理者行为、门店服务案例连起来，我会更放心。"
    ],
    targetSkills: ["target", "behavior", "solution", "measure"],
    coachTip: "文化培训要落到关键场景、管理者示范、案例讨论和行为标准，不能只做宣讲。"
  },
  {
    id: "ceo-report",
    cat: "高层",
    level: "高阶",
    role: "CEO",
    title: "半年培训价值汇报",
    desc: "老板追问投入产出，你要用业务证据链回应。",
    opening: "你给我说说，上半年培训都做了什么，花了多少，对业务有什么实质影响？",
    clues: [
      "我不太关心培训了多少场，我关心业务有没有变好。",
      "有没有和没培训门店的对比，或者培训前后的行为变化？",
      "如果只能证明满意度，那还不够。",
      "下半年预算要看你能不能绑定关键业务目标。"
    ],
    targetSkills: ["ack", "measure", "solution"],
    coachTip: "汇报顺序要从业务结果出发，再回到培训动作，不要从课程清单讲起。"
  },
  {
    id: "sm-resist",
    cat: "门店",
    level: "入门",
    role: "老店长",
    title: "员工不配合培训",
    desc: "面对抵触，先找时间、内容、管理者态度的根因。",
    opening: "培训这个事，我们店员工都不想参加，你们设计得太脱离实际了。",
    clues: [
      "你们老安排下班后，大家已经很累了。",
      "内容很多我们以前学过，员工觉得重复。",
      "说实话，我自己也不确定培训完到底要他们改变什么。",
      "如果内容更短、更贴本周问题，我愿意配合试一下。"
    ],
    targetSkills: ["ack", "root", "behavior", "solution"],
    coachTip: "不要急着证明培训有用。先承认阻力，再共创更贴近门店节奏的方案。"
  },
  {
    id: "sm-new-store",
    cat: "门店",
    level: "入门",
    role: "新店长",
    title: "新店新人培训方案",
    desc: "把“快点能上手”拆成一周训练目标。",
    opening: "我们新店三周后开业，希望你们帮我设计一套新人培训，要快一点能上手的那种。",
    clues: [
      "一共 20 名新人，大部分没有零售经验。",
      "我们只有一周集中培训，后面就要边开业边带。",
      "最担心他们不会接待顾客，也说不清产品分类。",
      "如果能给店长一个带教清单，我可以每天跟进。"
    ],
    targetSkills: ["target", "gap", "behavior", "solution", "measure"],
    coachTip: "新人培训要从岗位任务倒推：接待、产品分类、服务流程、演练、每日检核。"
  },
  {
    id: "sm-complaint",
    cat: "门店",
    level: "进阶",
    role: "店长",
    title: "店长投诉培训没用",
    desc: "处理防御性反馈，避免进入互相甩锅。",
    opening: "你们这个培训，我们花了整整三天，员工业绩一点没变，搞这个有什么意义？",
    clues: [
      "我不是针对你，就是门店时间真的很宝贵。",
      "员工说学到了一些，但回来以后没什么机会练。",
      "那段时间旁边新竞品开业，客流也受影响。",
      "如果你能帮我设计培训后的三周跟进，我愿意再试。"
    ],
    targetSkills: ["ack", "measure", "root", "solution"],
    coachTip: "培训效果有滞后期，也受外部变量影响。先接住情绪，再把学习、行为、结果分层复盘。"
  },
  {
    id: "hr-career",
    cat: "HR",
    level: "进阶",
    role: "HR 同事",
    title: "全员职业规划课程",
    desc: "友好但资源不足的跨部门协作需求。",
    opening: "今年人才发展项目有一块职业规划培训，我觉得你们培训部门来做最合适，你帮我们一起做吧？",
    clues: [
      "涉及全员 500 人，我们希望下季度启动。",
      "不同岗位差异很大，但目前没有额外预算。",
      "我们还没想清楚是通识课、工作坊还是管理者辅导。",
      "如果你能帮我拆角色和优先级，我们可以一起向上争取资源。"
    ],
    targetSkills: ["ack", "target", "gap", "solution"],
    coachTip: "边界谈判不是拒绝，而是把范围、对象、产出、资源摆上桌。"
  },
  {
    id: "hr-roi",
    cat: "HR",
    level: "高阶",
    role: "HR 总监",
    title: "培训 ROI 被质疑",
    desc: "用证据链证明价值，也承认因果边界。",
    opening: "今年培训花了不少钱，但我在数据上看不到明显影响。你怎么看这个投入产出的问题？",
    clues: [
      "我不是要砍培训，我要知道哪些投入值得保留。",
      "满意度高不代表业务有效。",
      "如果你能把关键项目和业务指标挂钩，我会更容易支持。",
      "下半年我希望看到控制组、前后对比或行为观察数据。"
    ],
    targetSkills: ["ack", "measure", "solution"],
    coachTip: "ROI 对话里要有诚实边界：培训不是唯一变量，但可以设计更好的评估证据。"
  },
  {
    id: "interview-limits",
    cat: "面试",
    level: "入门",
    role: "面试官",
    title: "培训能解决所有问题吗",
    desc: "表达培训边界和绩效根因判断。",
    opening: "你怎么理解培训的作用？培训能解决所有绩效问题吗？",
    clues: [
      "如果业务方坚持说就是员工不会，你会怎么验证？",
      "能不能举一个你拒绝或改写培训需求的例子？",
      "培训、机制、管理、流程之间你怎么区分？",
      "我更想听你如何判断，而不只是背理论。"
    ],
    targetSkills: ["root", "solution", "measure"],
    coachTip: "面试回答要有框架、有例子、有边界，不要把培训说成万能药。"
  },
  {
    id: "interview-design",
    cat: "面试",
    level: "进阶",
    role: "面试官",
    title: "课程设计思路",
    desc: "区分“讲完了”和“学会了”。",
    opening: "给我说说你设计过的一门课，你是怎么确保这门课有效的？",
    clues: [
      "你如何写学习目标？",
      "怎么让学员从知道变成会用？",
      "有没有真实场景演练和反馈？",
      "效果评估你做到哪一层？"
    ],
    targetSkills: ["target", "behavior", "solution", "measure"],
    coachTip: "课程设计回答要从行为目标开始，再讲练习、反馈和评估。"
  },
  {
    id: "coach-sku",
    cat: "带教",
    level: "入门",
    role: "店长 Rina",
    title: "新人记不住 SKU",
    desc: "用 Know / Know How / Want 诊断员工表现。",
    opening: "我把新品 PDF 发给大家了，但新人还是记不住 SKU。我真的没时间一个个教。",
    clues: [
      "他们可能看过 PDF，但没有练过怎么介绍。",
      "新人不敢开口，怕说错。",
      "我平时只是问他们懂了吗，他们都说懂了。",
      "如果有一个 10 分钟演练方法，我可以每天带两个人练。"
    ],
    targetSkills: ["root", "behavior", "solution"],
    coachTip: "发材料不是培训完成。要检查员工会不会用自己的话介绍，并安排短练习。"
  },
  {
    id: "coach-feedback",
    cat: "带教",
    level: "进阶",
    role: "资深导购",
    title: "会介绍但不会成交",
    desc: "练习 ASA 反馈，不打击对方积极性。",
    opening: "我产品知识都会背，但顾客一说贵我就不知道怎么接。是不是我不适合卖这个系列？",
    clues: [
      "我可以讲面料和功能，但不知道怎么接住价格异议。",
      "以前店长只说我再自信一点，但我不知道具体怎么做。",
      "如果有人示范一句话，我可以马上练。",
      "我希望反馈不要太笼统，告诉我哪一句能改。"
    ],
    targetSkills: ["ack", "behavior", "solution"],
    coachTip: "先肯定具体做对的行为，再建议一个可替换句，最后让对方现场试说。"
  },
  {
    id: "class-silence",
    cat: "授课",
    level: "进阶",
    role: "沉默学员",
    title: "课堂没人回应",
    desc: "从讲师独白切到低压力互动。",
    opening: "老师你问得太大了，我们也不知道说什么。你继续讲吧。",
    clues: [
      "不是不想参与，是问题太开放，怕答错。",
      "如果先给选项或让我们两人讨论，会容易很多。",
      "案例离我们门店有点远，所以不知道怎么接。",
      "你点名太快了，大家会紧张。"
    ],
    targetSkills: ["ack", "behavior", "solution"],
    coachTip: "沉默不是学员没兴趣，可能是问题设计压力太高。先降低参与门槛。"
  },
  {
    id: "extract-store",
    cat: "萃取",
    level: "高阶",
    role: "区域经理",
    title: "复刻成功门店经验",
    desc: "把成功案例拆到角色、动作、流程和工具。",
    opening: "A 店最近会员复购做得特别好，你能不能把他们的方法总结一下，给其他门店复制？",
    clues: [
      "我不想要一篇表扬稿，我要其他店真的能照着做。",
      "A 店店长、资深导购、新人都有不同动作。",
      "他们有一个每日复盘表，但还没有标准化。",
      "如果能变成一岗一指南和检查表，区域会推动。"
    ],
    targetSkills: ["target", "behavior", "solution", "measure"],
    coachTip: "项目萃取要从“谁在什么时候做了什么”开始，最后形成可执行手册。"
  }
];

const QUIZ = [
  {
    id: "q1",
    question: "业务方说“马上做一场服务培训”，培训经理第一步最应该做什么？",
    options: ["确认培训教室和时间", "先认可问题重要性，再诊断现状和期望结果", "直接找课件模板", "告诉业务方培训没用"],
    answer: 1,
    explain: "先接住需求，再问目标、差距、证据和根因，才能判断培训是否是正确解法。"
  },
  {
    id: "q2",
    question: "成人学习三原则里，“Useful Now”最强调什么？",
    options: ["课后自己慢慢消化", "讲师知识必须丰富", "学完后尽快练习和应用", "PPT 必须漂亮"],
    answer: 2,
    explain: "成人需要看到内容能立刻用于工作。练习不是附加项，而是学习本身。"
  },
  {
    id: "q3",
    question: "以下哪一个问题更适合检查员工是否真的学会？",
    options: ["懂了吗？", "还有问题吗？", "你听清楚了吧？", "如果顾客说太贵，你会怎么回应？"],
    answer: 3,
    explain: "开放问题能让员工展示真实行为，封闭问题只会带来虚假的安全感。"
  },
  {
    id: "q4",
    question: "项目萃取和项目总结最大的区别是什么？",
    options: ["萃取更适合做宣传", "总结更关注复制", "萃取要下沉到角色、动作、流程和工具", "二者没有区别"],
    answer: 2,
    explain: "项目萃取的目标是可复制、可执行、可传承，而不只是复盘结果。"
  },
  {
    id: "q5",
    question: "ASA 反馈结构的正确顺序是？",
    options: ["Ask / Suggest / Affirm", "Affirm / Suggest / Ask", "Suggest / Ask / Affirm", "Affirm / Ask / Suggest"],
    answer: 1,
    explain: "先肯定具体行为，再给一个具体建议，最后用问题让对方形成自己的下一步。"
  }
];

const CHECKLIST = [
  { id: "c1", group: "Before", text: "我知道这次辅导对应门店本周哪个真实问题。" },
  { id: "c2", group: "Before", text: "我知道员工已经会什么、不会什么，而不是从零假设。" },
  { id: "c3", group: "During", text: "我第一句话讲清楚为什么这件事对员工本人有用。" },
  { id: "c4", group: "During", text: "我只选 1-3 个重点，不一次塞满所有内容。" },
  { id: "c5", group: "During", text: "每个关键点后都有提问、讨论或复述。" },
  { id: "c6", group: "During", text: "我安排了角色演练或现场示范，不只讲知识。" },
  { id: "c7", group: "During", text: "我用开放问题检查理解，而不是只问“懂了吗”。" },
  { id: "c8", group: "After", text: "我安排了 1-2 天内的现场观察或复盘。" },
  { id: "c9", group: "After", text: "反馈前先判断是知识、技能还是意愿问题。" }
];

function createDefaultState() {
  return {
    readModules: [],
    completedScenes: [],
    conversations: {},
    checklist: {},
    toolOutputs: {},
    actions: [],
    quizAnswers: {},
    lastPracticeDate: "",
    streakDates: []
  };
}

let state = loadState();
let route = getRoute();
let activeSceneId = SCENES[0].id;
let activePracticeCat = "全部";
let activeTool = "diagnosis";
let activeModuleId = MODULES[0].id;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    return { ...createDefaultState(), ...stored };
  } catch {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

function nl2br(value = "") {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatDateTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function unique(list) {
  return Array.from(new Set(list));
}

function todayIndex(length) {
  return new Date().getDate() % length;
}

function getDailyModule() {
  return MODULES[todayIndex(MODULES.length)];
}

function getDailyScene() {
  return SCENES[todayIndex(SCENES.length)];
}

function nextUnreadModule() {
  return MODULES.find((item) => !state.readModules.includes(item.id)) || MODULES[0];
}

function getRoute() {
  return (location.hash || "#dashboard").replace("#", "") || "dashboard";
}

function setActiveLinks() {
  $$("[data-route-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.routeLink === route);
  });
}

function progressPercent() {
  const total = MODULES.length + SCENES.length + QUIZ.length;
  const quizDone = Object.keys(state.quizAnswers).length;
  const done = state.readModules.length + state.completedScenes.length + quizDone;
  return Math.round((done / total) * 100);
}

function render() {
  route = getRoute();
  setActiveLinks();
  const app = $("#app");
  const views = {
    dashboard: renderDashboard,
    learn: renderLearn,
    practice: renderPractice,
    tools: renderTools,
    progress: renderProgress
  };
  app.innerHTML = (views[route] || renderDashboard)();
  app.focus({ preventScroll: true });
}

function renderDashboard() {
  const pct = progressPercent();
  const dailyModule = nextUnreadModule() || getDailyModule();
  const dailyScene = getDailyScene();
  activeModuleId = MODULES.some((item) => item.id === activeModuleId) ? activeModuleId : dailyModule.id;
  return `
    <section class="home-stack">
      <article class="today-card">
        <div class="eyebrow">今天只练一件事</div>
        <h1>先练：${escapeHtml(dailyScene.title)}</h1>
        <p>${escapeHtml(dailyScene.desc)} ${escapeHtml(dailyScene.coachTip)}</p>
        <div class="hero-actions">
          <a class="btn" href="#practice" data-action="jump-scene" data-id="${dailyScene.id}">开始演练</a>
          <a class="ghost-btn" href="#learn" data-action="select-module" data-id="${dailyModule.id}">看相关知识</a>
        </div>
      </article>

      <section class="quick-grid" aria-label="快捷入口">
        ${renderQuickAction("学习", dailyModule.title, `${dailyModule.minutes} 分钟`, "#learn", dailyModule.id)}
        ${renderQuickAction("工具", "需求诊断卡", "马上填写", "#tools")}
        ${renderQuickAction("我的", `${pct}% 完成`, nextSuggestion(), "#progress")}
      </section>

      <article class="next-card">
        <div>
          <span class="tag">下一张知识卡</span>
          <h2>${escapeHtml(dailyModule.no)} ${escapeHtml(dailyModule.title)}</h2>
          <p>${escapeHtml(dailyModule.summary)}</p>
        </div>
        <a class="text-btn" href="#learn" data-action="select-module" data-id="${dailyModule.id}">去学习</a>
      </article>
    </section>
  `;
}

function renderStat(value, label) {
  return `<div class="stat"><strong>${value}</strong><span>${escapeHtml(label)}</span></div>`;
}

function renderQuickAction(label, title, meta, href, moduleId = "") {
  const moduleAttr = moduleId ? ` data-action="select-module" data-id="${escapeHtml(moduleId)}"` : "";
  return `
    <a class="quick-card" href="${href}"${moduleAttr}>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(meta)}</small>
    </a>
  `;
}

function renderPathCard(title, text, tags) {
  return `
    <article class="card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      <div class="tag-row">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function renderLearn() {
  const current = MODULES.find((item) => item.id === activeModuleId) || nextUnreadModule();
  activeModuleId = current.id;
  return `
    <header class="page-header compact-page-header">
      <div class="page-kicker">Learn</div>
      <h1 class="page-title">一次只学一张卡</h1>
      <p class="page-subtitle">内容已经压成“结论、动作、练习”。手机上不用滚完整本资料，先把一张卡用起来。</p>
    </header>
    <div class="module-picker" aria-label="选择知识卡">
      ${MODULES.map(renderModulePickerButton).join("")}
    </div>
    ${renderActiveModule(current)}
    <section class="module-checklist" aria-label="完整学习路径">
      ${MODULES.map(renderModuleRow).join("")}
    </section>
  `;
}

function renderModulePickerButton(module) {
  const read = state.readModules.includes(module.id);
  return `
    <button class="module-chip ${module.id === activeModuleId ? "active" : ""} ${read ? "done" : ""}" data-action="select-module" data-id="${module.id}">
      <span>${module.no}</span>
      <strong>${escapeHtml(module.title)}</strong>
    </button>
  `;
}

function renderActiveModule(module) {
  const read = state.readModules.includes(module.id);
  return `
    <article class="module-focus">
      <div class="module-top">
        <div>
          <span class="tag">${escapeHtml(module.level)} · ${module.minutes} 分钟</span>
          <h2>${escapeHtml(module.title)}</h2>
          <p>${escapeHtml(module.subtitle)}</p>
        </div>
        <button class="small-btn ${read ? "active" : ""}" data-action="toggle-module" data-id="${module.id}">
          ${read ? "已读" : "标记"}
        </button>
      </div>
      <div class="quote-card">${escapeHtml(module.summary)}</div>
      <details class="module-detail">
        <summary>展开 3 个关键动作</summary>
        <ul class="bullet-list">
          ${module.bullets.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </details>
      <div class="practice-card">
        <strong>今天练一下</strong>
        <p>${escapeHtml(module.drill)}</p>
      </div>
    </article>
  `;
}

function renderModuleRow(module) {
  const read = state.readModules.includes(module.id);
  return `
    <button class="module-row ${read ? "done" : ""}" data-action="select-module" data-id="${module.id}">
      <span>${read ? "✓" : module.no}</span>
      <strong>${escapeHtml(module.title)}</strong>
      <small>${escapeHtml(module.level)}</small>
    </button>
  `;
}

function renderPractice() {
  const cats = ["全部", ...unique(SCENES.map((scene) => scene.cat))];
  const filtered = activePracticeCat === "全部" ? SCENES : SCENES.filter((scene) => scene.cat === activePracticeCat);
  if (!SCENES.some((scene) => scene.id === activeSceneId)) activeSceneId = SCENES[0].id;
  const activeScene = SCENES.find((scene) => scene.id === activeSceneId) || filtered[0] || SCENES[0];
  activeSceneId = activeScene.id;
  ensureConversation(activeSceneId);
  return `
    <header class="page-header compact-page-header">
      <div class="page-kicker">Practice</div>
      <h1 class="page-title">开口练一轮</h1>
      <p class="page-subtitle">先接住对方，再问一个诊断问题。系统会给你简短反馈。</p>
    </header>
    <div class="filter-row">
      ${cats
        .map(
          (cat) =>
            `<button class="small-btn ${cat === activePracticeCat ? "active" : ""}" data-action="filter-practice" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
        )
        .join("")}
    </div>
    <section class="scene-layout">
      <div class="scene-list">
        ${filtered.map((scene) => renderSceneCard(scene, scene.id === activeSceneId)).join("")}
      </div>
      ${renderChatPanel(activeScene)}
    </section>
  `;
}

function renderSceneCard(scene, active) {
  const done = state.completedScenes.includes(scene.id);
  return `
    <button class="scene-card ${active ? "active" : ""}" data-action="select-scene" data-id="${scene.id}">
      <div class="scene-top">
        <div>
          <h3>${escapeHtml(scene.title)}</h3>
          <p>${escapeHtml(scene.desc)}</p>
        </div>
        <span class="number-pill">${done ? "✓" : scene.cat.slice(0, 1)}</span>
      </div>
      <div class="scene-meta">
        <span class="tag">${escapeHtml(scene.cat)}</span>
        <span class="tag">${escapeHtml(scene.level)}</span>
        <span class="source-tag">AI 扮演：${escapeHtml(scene.role)}</span>
      </div>
    </button>
  `;
}

function renderChatPanel(scene) {
  const conversation = ensureConversation(scene.id);
  return `
    <aside class="chat-panel">
      <div class="chat-head">
        <div>
          <p class="hint">当前角色：${escapeHtml(scene.role)} · ${escapeHtml(scene.level)}</p>
          <h2 class="chat-title">${escapeHtml(scene.title)}</h2>
        </div>
        <button class="small-btn" data-action="reset-conversation" data-id="${scene.id}">重置</button>
      </div>
      <div class="chat-scroll" id="chat-scroll">
        ${conversation.map(renderMessage).join("")}
      </div>
      <form class="chat-form" data-form="chat">
        <label class="sr-only" for="chat-input">输入你的回应</label>
        <textarea id="chat-input" name="message" placeholder="例如：我理解这个问题很急。你希望哪个指标在什么时候改善？"></textarea>
        <div class="row-actions">
          <button class="btn" type="submit">发送回应</button>
          <button class="ghost-btn" type="button" data-action="coach-now" data-id="${scene.id}">要反馈</button>
        </div>
        <p class="hint">小提示：一句认可 + 一个开放问题，已经比直接接单好很多。</p>
      </form>
    </aside>
  `;
}

function renderMessage(message) {
  return `
    <div class="message ${escapeHtml(message.type)}">
      <div class="message-label">${escapeHtml(message.label)}</div>
      <div class="bubble">${nl2br(message.text)}</div>
    </div>
  `;
}

function ensureConversation(sceneId) {
  if (!state.conversations[sceneId]) {
    const scene = SCENES.find((item) => item.id === sceneId);
    state.conversations[sceneId] = [
      {
        type: "ai",
        label: scene.role,
        text: scene.opening,
        at: new Date().toISOString()
      }
    ];
    saveState();
  }
  return state.conversations[sceneId];
}

function renderTools() {
  return `
    <header class="page-header compact-page-header">
      <div class="page-kicker">Tools</div>
      <h1 class="page-title">要用时再打开</h1>
      <p class="page-subtitle">工具只保留可填写的工作卡，适合在手机上临时记录。</p>
    </header>
    <section class="tool-grid">
      <aside class="tool-card">
        <div class="tool-tabs">
          ${renderToolTab("diagnosis", "需求诊断卡", "把业务需求拆成目标、差距、证据和根因")}
          ${renderToolTab("checklist", "教练九步检查表", "课前、课中、课后的带教飞行清单")}
          ${renderToolTab("question", "提问转换器", "把“懂了吗”改成能看见行为的问题")}
          ${renderToolTab("course", "课程设计器", "用五星教学法生成一节微课结构")}
          ${renderToolTab("action", "行动卡", "把学习变成本周具体动作")}
          ${renderToolTab("quiz", "小测验", "检查 TTT 核心概念")}
        </div>
      </aside>
      <div class="tool-card">
        ${renderActiveTool()}
      </div>
    </section>
  `;
}

function renderToolTab(id, title, desc) {
  return `
    <button class="tool-tab ${activeTool === id ? "active" : ""}" data-action="select-tool" data-id="${id}">
      <strong>${escapeHtml(title)}</strong>
      <span class="hint">${escapeHtml(desc)}</span>
    </button>
  `;
}

function renderActiveTool() {
  const views = {
    diagnosis: renderDiagnosisTool,
    checklist: renderChecklistTool,
    question: renderQuestionTool,
    course: renderCourseTool,
    action: renderActionTool,
    quiz: renderQuizTool
  };
  return (views[activeTool] || renderDiagnosisTool)();
}

function renderDiagnosisTool() {
  return `
    <div class="tool-top">
      <div>
        <h2>需求诊断卡</h2>
        <p class="hint">适合在业务方提出“做个培训”时使用。</p>
      </div>
    </div>
    <form class="form-grid" data-form="diagnosis">
      ${field("业务方原始需求", "raw", "例如：运营希望下个月做连带率培训")}
      ${field("期望业务结果", "target", "希望哪个指标、行为、时间点发生变化？")}
      ${field("现状差距与证据", "gap", "现在差多少？哪些门店/人群/环节最明显？")}
      ${field("可能根因", "cause", "知识、技能、意愿、资源、激励、流程、管理跟进？")}
      ${field("建议介入方式", "solution", "培训、带教、工具、机制、试点、复盘如何组合？")}
      ${field("衡量方式", "measure", "怎么证明有效？看什么数据或行为？")}
      <div class="field full">
        <button class="btn" type="submit">生成诊断简报</button>
      </div>
    </form>
    ${state.toolOutputs.diagnosis ? `<div class="output-box">${nl2br(state.toolOutputs.diagnosis)}</div>` : ""}
  `;
}

function field(label, name, placeholder) {
  return `
    <div class="field full">
      <label for="${name}">${escapeHtml(label)}</label>
      <textarea id="${name}" name="${name}" placeholder="${escapeHtml(placeholder)}"></textarea>
    </div>
  `;
}

function renderChecklistTool() {
  return `
    <h2>教练九步检查表</h2>
    <p class="hint">来自 TTT Facilitator Handbook。每次门店带教前都可以过一遍。</p>
    <div class="checklist">
      ${CHECKLIST.map(
        (item) => `
          <label class="check-item">
            <input type="checkbox" data-action="toggle-check" data-id="${item.id}" ${state.checklist[item.id] ? "checked" : ""} />
            <span><strong>${escapeHtml(item.group)}</strong><br />${escapeHtml(item.text)}</span>
          </label>
        `
      ).join("")}
    </div>
    <div class="row-actions">
      <button class="ghost-btn" data-action="reset-checklist" type="button">清空检查表</button>
    </div>
  `;
}

function renderQuestionTool() {
  return `
    <h2>提问转换器</h2>
    <p class="hint">把封闭确认改成能暴露真实状态的开放问题。</p>
    <form class="form-grid" data-form="question">
      <div class="field full">
        <label for="closed-question">你原本想问的问题</label>
        <textarea id="closed-question" name="question" placeholder="例如：懂了吗？有没有问题？你会了吗？"></textarea>
      </div>
      <div class="field full">
        <button class="btn" type="submit">转换成开放问题</button>
      </div>
    </form>
    ${state.toolOutputs.question ? `<div class="output-box">${nl2br(state.toolOutputs.question)}</div>` : ""}
  `;
}

function renderCourseTool() {
  return `
    <h2>课程设计器</h2>
    <p class="hint">按“聚焦问题、激活旧知、示证新知、应用新知、融会贯通”生成微课结构。</p>
    <form class="form-grid" data-form="course">
      <div class="field">
        <label for="course-topic">课程主题</label>
        <input id="course-topic" name="topic" placeholder="例如：新人产品介绍" />
      </div>
      <div class="field">
        <label for="course-audience">学员对象</label>
        <input id="course-audience" name="audience" placeholder="例如：0 基础新导购" />
      </div>
      <div class="field full">
        <label for="course-problem">业务问题</label>
        <textarea id="course-problem" name="problem" placeholder="现在业务上卡在哪里？"></textarea>
      </div>
      <div class="field full">
        <label for="course-behavior">课后行为目标</label>
        <textarea id="course-behavior" name="behavior" placeholder="学完后，学员要能做出什么可观察动作？"></textarea>
      </div>
      <div class="field full">
        <button class="btn" type="submit">生成微课结构</button>
      </div>
    </form>
    ${state.toolOutputs.course ? `<div class="output-box">${nl2br(state.toolOutputs.course)}</div>` : ""}
  `;
}

function renderActionTool() {
  return `
    <h2>行动卡</h2>
    <p class="hint">训练结束如果没有具体行动，很容易只停留在“觉得有用”。</p>
    <form class="form-grid" data-form="action">
      <div class="field">
        <label for="action-person">我要支持的人</label>
        <input id="action-person" name="person" placeholder="例如：A 店新人小王" />
      </div>
      <div class="field">
        <label for="action-date">完成日期</label>
        <input id="action-date" name="date" type="date" />
      </div>
      <div class="field full">
        <label for="action-thing">我要做的一个动作</label>
        <textarea id="action-thing" name="thing" placeholder="例如：用 10 分钟让他练习介绍 3 个重点 SKU"></textarea>
      </div>
      <div class="field full">
        <label for="action-proof">我如何知道它有效</label>
        <textarea id="action-proof" name="proof" placeholder="例如：他能独立向顾客介绍，并在两天内完成一次真实推荐"></textarea>
      </div>
      <div class="field full">
        <button class="btn" type="submit">保存行动卡</button>
      </div>
    </form>
    <div class="journal-list">
      ${state.actions.length ? state.actions.slice().reverse().map(renderActionItem).join("") : `<div class="empty">还没有行动卡。写下一张，平台就开始像一个很温柔但不放水的教练。</div>`}
    </div>
  `;
}

function renderActionItem(item) {
  return `
    <div class="journal-item">
      <strong>${escapeHtml(item.person || "未命名对象")} · ${escapeHtml(item.date || "未定日期")}</strong>
      <div>${escapeHtml(item.thing)}</div>
      <div class="hint">验证方式：${escapeHtml(item.proof)}</div>
    </div>
  `;
}

function renderQuizTool() {
  const score = Object.entries(state.quizAnswers).filter(([id, value]) => {
    const q = QUIZ.find((item) => item.id === id);
    return q && q.answer === value;
  }).length;
  return `
    <h2>TTT 小测验</h2>
    <p class="hint">已答 ${Object.keys(state.quizAnswers).length}/${QUIZ.length}，正确 ${score}/${QUIZ.length}</p>
    <div class="journal-list">
      ${QUIZ.map(renderQuizCard).join("")}
    </div>
  `;
}

function renderQuizCard(q, index) {
  const selected = state.quizAnswers[q.id];
  return `
    <article class="quiz-card">
      <h3>${index + 1}. ${escapeHtml(q.question)}</h3>
      <div class="quiz-options">
        ${q.options
          .map((option, optionIndex) => {
            let cls = "";
            if (selected !== undefined) {
              if (optionIndex === q.answer) cls = "correct";
              else if (optionIndex === selected) cls = "wrong";
            }
            return `<button class="quiz-option ${cls}" data-action="answer-quiz" data-id="${q.id}" data-answer="${optionIndex}">${escapeHtml(option)}</button>`;
          })
          .join("")}
      </div>
      ${selected !== undefined ? `<p class="hint">${escapeHtml(q.explain)}</p>` : ""}
    </article>
  `;
}

function renderProgress() {
  const pct = progressPercent();
  const journals = buildJournal();
  return `
    <header class="page-header compact-page-header">
      <div class="page-kicker">Progress</div>
      <h1 class="page-title">我的练习</h1>
      <p class="page-subtitle">只记录真正做过的学习、演练和行动卡。</p>
    </header>
    <section class="progress-grid">
      <article class="progress-card">
        <h3>总体完成度</h3>
        <div class="meter">
          <div class="meter-top"><span>学习 + 演练 + 测验</span><strong>${pct}%</strong></div>
          <div class="meter-track"><div class="meter-fill" style="width:${pct}%"></div></div>
        </div>
      </article>
      <article class="progress-card">
        <h3>连续练习</h3>
        <p><strong>${state.streakDates.length}</strong> 天有练习记录</p>
        <p class="hint">完成任意场景演练后会自动记录当天。</p>
      </article>
      <article class="progress-card">
        <h3>下一步建议</h3>
        <p>${escapeHtml(nextSuggestion())}</p>
      </article>
    </section>

    <section>
      <div class="section-head">
        <div>
          <h2>成长时间线</h2>
          <p>这里收集你完成过的模块、演练和行动卡。</p>
        </div>
        <button class="danger-btn" data-action="reset-all" type="button">清空本地进度</button>
      </div>
      <div class="timeline">
        ${journals.length ? journals.map(renderTimelineItem).join("") : `<div class="empty">还没有记录。去完成一张知识卡或一个演练，我们就能开始追踪。</div>`}
      </div>
    </section>
  `;
}

function buildJournal() {
  const items = [];
  state.readModules.forEach((id) => {
    const module = MODULES.find((item) => item.id === id);
    if (module) items.push({ type: "学", title: `读完：${module.title}`, text: module.drill });
  });
  state.completedScenes.forEach((id) => {
    const scene = SCENES.find((item) => item.id === id);
    if (scene) items.push({ type: "练", title: `完成演练：${scene.title}`, text: scene.coachTip });
  });
  state.actions.forEach((action) => {
    items.push({ type: "行", title: `行动卡：${action.person || "未命名对象"}`, text: action.thing });
  });
  return items.slice(-18).reverse();
}

function renderTimelineItem(item) {
  return `
    <div class="timeline-item">
      <div class="timeline-dot">${escapeHtml(item.type)}</div>
      <div class="journal-item">
        <strong>${escapeHtml(item.title)}</strong>
        <div>${escapeHtml(item.text)}</div>
      </div>
    </div>
  `;
}

function nextSuggestion() {
  if (state.readModules.length < 2) return "先读完 01 成人学习和 02 教练九步，建立底层框架。";
  if (state.completedScenes.length < 3) return "完成至少 3 个场景演练，重点练“先接住，再诊断”。";
  if (!state.actions.length) return "写一张行动卡，把平台里的方法用到一个真实员工或真实业务方身上。";
  return "进入高阶：练 CEO 汇报、ROI 质疑和项目萃取场景。";
}

function analyzeReply(text, scene) {
  const all = text.toLowerCase();
  const has = (words) => words.some((word) => all.includes(word.toLowerCase()));
  const signals = {
    ack: has(["理解", "确实", "明白", "同意", "重要", "接住", "认可", "我知道", "能理解", "辛苦"]),
    target: has(["目标", "结果", "希望", "指标", "达成", "见效", "成功", "变化", "做到什么"]),
    gap: has(["现在", "目前", "差距", "数据", "多少", "趋势", "哪家", "哪个", "环节", "人群"]),
    behavior: has(["具体", "动作", "行为", "现场", "观察", "怎么做", "说什么", "流程", "演示", "练"]),
    root: has(["原因", "为什么", "阻碍", "卡", "资源", "激励", "意愿", "不会", "不愿", "流程", "机制", "店长", "时间"]),
    solution: has(["建议", "方案", "试点", "先", "安排", "练习", "观察", "复盘", "跟进", "计划", "行动", "工具"]),
    measure: has(["衡量", "验证", "对比", "追踪", "指标", "结果", "roi", "复盘", "数据", "证明"]),
    open: /[？?]/.test(text) || has(["什么", "如何", "怎么", "哪里", "哪些", "能不能", "是否"])
  };
  const score = scene.targetSkills.reduce((sum, key) => sum + (signals[key] ? 1 : 0), 0) + (signals.open ? 1 : 0);
  return { signals, score };
}

function conversationSignals(sceneId) {
  const scene = SCENES.find((item) => item.id === sceneId);
  const conversation = ensureConversation(sceneId);
  const text = conversation.filter((msg) => msg.type === "user").map((msg) => msg.text).join("\n");
  return analyzeReply(text, scene);
}

function buildRoleResponse(scene, userText) {
  const conversation = ensureConversation(scene.id);
  const userTurns = conversation.filter((msg) => msg.type === "user").length;
  const { signals } = analyzeReply(userText, scene);
  const clue = scene.clues[Math.min(Math.max(userTurns - 1, 0), scene.clues.length - 1)];

  if (!signals.ack && userTurns === 1) {
    return `我现在比较急，确实希望你别绕太久。${clue}`;
  }

  if (signals.root || signals.behavior || signals.gap) {
    return `${clue} 你如果要继续问，我希望你能帮我判断：到底是人不会、不会用，还是机制没有推着他们做。`;
  }

  if (signals.solution && !signals.measure) {
    return `方向听起来可以，但我会追问效果。${clue} 你准备怎么证明这不是又做了一场热闹的培训？`;
  }

  if (signals.measure) {
    return `这个我能接受。${clue} 如果你能把观察动作和业务指标一起追，我愿意配合你做一个小范围试点。`;
  }

  if (signals.target) {
    return `可以，先把目标说清楚是对的。${clue} 但你还得继续帮我拆，具体卡在哪个动作？`;
  }

  return `${clue} 你可以再具体一点：你现在想先确认目标、现状，还是直接判断根因？`;
}

function buildCoachFeedback(sceneId, forced = false) {
  const scene = SCENES.find((item) => item.id === sceneId);
  const conversation = ensureConversation(sceneId);
  const userTurns = conversation.filter((msg) => msg.type === "user").length;
  const { signals, score } = conversationSignals(sceneId);
  const strengths = [];
  const improvements = [];

  if (signals.ack) strengths.push("你有先接住对方的压力，没有一上来反驳需求。");
  if (signals.target || signals.gap) strengths.push("你开始把需求拆成目标和现状差距，这是从接单转向诊断的关键。");
  if (signals.behavior || signals.root) strengths.push("你追问了具体行为或根因，有机会找到培训之外的关键变量。");
  if (signals.solution || signals.measure) strengths.push("你开始考虑方案和衡量方式，能提升业务方信任。");

  if (!signals.ack) improvements.push("开头可以先说“我理解这件事很急，也确实影响业务”，先降低对抗感。");
  if (!signals.target) improvements.push("补问期望结果：希望哪个指标、哪个人群、什么时候发生什么变化。");
  if (!signals.gap) improvements.push("补问现状证据：目前差距在哪里，哪些门店、岗位或销售环节最明显。");
  if (!signals.behavior) improvements.push("补问具体行为：员工现在实际怎么做、怎么说，现场观察到了什么。");
  if (!signals.root) improvements.push("补问非培训因素：资源、激励、流程、店长跟进是否影响表现。");
  if (!signals.measure) improvements.push("补上衡量：用行为观察和业务指标证明试点是否有效。");

  const level =
    score >= scene.targetSkills.length ? "优秀" : score >= Math.ceil(scene.targetSkills.length / 2) ? "合格" : "还需要练";
  const shouldComplete = forced || userTurns >= 4 || score >= scene.targetSkills.length;
  if (shouldComplete && !state.completedScenes.includes(sceneId)) {
    state.completedScenes.push(sceneId);
    markPracticeDay();
  }

  const bestStrengths = strengths.length ? strengths.slice(0, 2) : ["你愿意进入对话，而不是停留在旁观，这已经是练习的开始。"];
  const bestImprovements = improvements.slice(0, 3);

  return `教练反馈｜${level}

做得好的地方：
${bestStrengths.map((item) => `- ${item}`).join("\n")}

可以改进的地方：
${bestImprovements.length ? bestImprovements.map((item) => `- ${item}`).join("\n") : "- 这一轮已经覆盖核心动作。下一步可以把话术压得更短、更像真实业务对话。"}

更好的下一句话示例：
“我理解这件事很急，也想让培训真的对业务有用。我先确认两个点：你希望哪个指标在什么时候改善？现在最卡的是员工不会说、不会用，还是门店没有持续跟进？”

核心提醒：
${scene.coachTip}`;
}

function markPracticeDay() {
  const key = todayKey();
  state.lastPracticeDate = key;
  state.streakDates = unique([...(state.streakDates || []), key]).slice(-60);
}

function handleChatSubmit(form) {
  const scene = SCENES.find((item) => item.id === activeSceneId);
  const textarea = form.elements.message;
  const text = textarea.value.trim();
  if (!text) return;
  const conversation = ensureConversation(scene.id);
  conversation.push({ type: "user", label: "我", text, at: new Date().toISOString() });
  const roleResponse = buildRoleResponse(scene, text);
  conversation.push({ type: "ai", label: scene.role, text: roleResponse, at: new Date().toISOString() });

  const userTurns = conversation.filter((msg) => msg.type === "user").length;
  const { score } = conversationSignals(scene.id);
  if (userTurns >= 4 || score >= scene.targetSkills.length + 1) {
    conversation.push({
      type: "coach",
      label: "训练教练",
      text: buildCoachFeedback(scene.id),
      at: new Date().toISOString()
    });
  }
  textarea.value = "";
  saveState();
  render();
  setTimeout(() => {
    const scroll = $("#chat-scroll");
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  }, 0);
}

function handleDiagnosis(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  state.toolOutputs.diagnosis = `培训需求诊断简报

1. 原始需求
${data.raw || "未填写"}

2. 期望结果
${data.target || "需要继续向业务方确认：哪个指标、哪个行为、什么时候变化。"}

3. 现状差距与证据
${data.gap || "需要补充数据：门店、岗位、人群、环节、时间趋势。"}

4. 初步根因判断
${data.cause || "先不要假设是培训问题。建议按知识、技能、意愿、资源、激励、流程、管理跟进逐项排查。"}

5. 建议介入方式
${data.solution || "建议先做小范围诊断访谈 + 现场观察，再决定是否培训。"}

6. 衡量方式
${data.measure || "建议设置行为观察指标 + 业务结果指标，至少做培训前后对比。"}

下一步话术：
“我理解这个需求很重要。为了让培训不是走形式，我想先用 1-2 天把目标、差距和根因摸清，再给你一个更准的方案。”`;
  saveState();
  toast("已生成诊断简报");
  render();
}

function handleQuestion(form) {
  const question = new FormData(form).get("question").trim();
  const base = question || "懂了吗？";
  state.toolOutputs.question = `原问题：
${base}

可以改成：
- 你会怎么用自己的话向顾客解释这件事？
- 如果现在让你现场做一遍，第一步会做什么？
- 哪一步你最不确定？为什么？
- 如果顾客提出一个反对意见，你会怎么回应？
- 你今天回到门店后，准备在哪个场景先试一次？

使用提醒：
开放问题不是为了显得高级，而是为了看见真实行为。能让对方说出步骤、例子、选择或下一步的问题，才是好问题。`;
  saveState();
  toast("已转换为开放问题");
  render();
}

function handleCourse(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const topic = data.topic || "未命名课程";
  const audience = data.audience || "目标学员";
  const problem = data.problem || "需要补充业务问题";
  const behavior = data.behavior || "需要写成可观察行为目标";
  state.toolOutputs.course = `微课设计｜${topic}

学员对象：
${audience}

业务问题：
${problem}

课后行为目标：
学员能够${behavior}

五星教学法结构：
1. 聚焦问题（5 分钟）
- 用一个真实门店场景开场，让学员看到“不学会会造成什么影响”。

2. 激活旧知（5 分钟）
- 请学员说出自己现在的做法、常见困难和成功经验。

3. 示证新知（12 分钟）
- 讲 1 个核心方法，配 1 个标准示范，避免一次讲太多。

4. 应用新知（18 分钟）
- 设计角色演练或现场任务，让学员当场做出目标行为。
- 用 ASA 反馈：肯定一个具体动作，建议一个改法，再问下一次怎么做。

5. 融会贯通（5 分钟）
- 每人写一张行动卡：对象、动作、时间、验证方式。

检核方式：
- 现场演示是否完成目标行为。
- 同伴能否说出一个做得好的动作和一个改进建议。
- 1-2 天后由店长观察一次真实应用。`;
  saveState();
  toast("已生成课程结构");
  render();
}

function handleAction(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  state.actions.push({
    id:
      globalThis.crypto && typeof globalThis.crypto.randomUUID === "function"
        ? globalThis.crypto.randomUUID()
        : String(Date.now()),
    person: data.person,
    date: data.date,
    thing: data.thing,
    proof: data.proof,
    at: new Date().toISOString()
  });
  saveState();
  toast("行动卡已保存");
  render();
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "toggle-module") {
    const id = target.dataset.id;
    state.readModules = state.readModules.includes(id)
      ? state.readModules.filter((item) => item !== id)
      : [...state.readModules, id];
    saveState();
    render();
  }

  if (action === "select-module") {
    activeModuleId = target.dataset.id;
    render();
  }

  if (action === "filter-practice") {
    activePracticeCat = target.dataset.cat;
    const first = activePracticeCat === "全部" ? SCENES[0] : SCENES.find((scene) => scene.cat === activePracticeCat);
    if (first) activeSceneId = first.id;
    render();
  }

  if (action === "select-scene") {
    activeSceneId = target.dataset.id;
    render();
  }

  if (action === "jump-scene") {
    activeSceneId = target.dataset.id;
  }

  if (action === "reset-conversation") {
    delete state.conversations[target.dataset.id];
    saveState();
    render();
  }

  if (action === "coach-now") {
    const sceneId = target.dataset.id;
    const conversation = ensureConversation(sceneId);
    conversation.push({
      type: "coach",
      label: "训练教练",
      text: buildCoachFeedback(sceneId, true),
      at: new Date().toISOString()
    });
    saveState();
    render();
  }

  if (action === "select-tool") {
    activeTool = target.dataset.id;
    render();
  }

  if (action === "toggle-check") {
    state.checklist[target.dataset.id] = target.checked;
    saveState();
  }

  if (action === "reset-checklist") {
    state.checklist = {};
    saveState();
    render();
  }

  if (action === "answer-quiz") {
    state.quizAnswers[target.dataset.id] = Number(target.dataset.answer);
    saveState();
    render();
  }

  if (action === "reset-all") {
    if (confirm("确定清空本地进度吗？这个操作只影响当前浏览器的 localStorage。")) {
      state = createDefaultState();
      saveState();
      render();
    }
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  const type = form.dataset.form;
  if (!type) return;
  event.preventDefault();
  if (type === "chat") handleChatSubmit(form);
  if (type === "diagnosis") handleDiagnosis(form);
  if (type === "question") handleQuestion(form);
  if (type === "course") handleCourse(form);
  if (type === "action") handleAction(form);
});

window.addEventListener("hashchange", render);
render();
