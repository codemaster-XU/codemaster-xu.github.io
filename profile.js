/* Public academic profile. Update research status here as it changes. */
const profile = {
  "name": "Zongqi Xu",
  "nameZh": "许宗琦",
  "email": "202330827102@stu.swun.edu.cn",
  "socials": [],
  "intro": {
    "zh": "我在香港科技大学（广州）人工智能学域从事科研助理与科研实习工作，本科就读于西南民族大学计算机与人工智能学院。研究关注医学影像、临床风险预测与生物分子设计，目标是直接攻读博士。",
    "en": "I am a Research Assistant / Research Intern at the AI Thrust, HKUST(GZ), and an undergraduate at Southwest Minzu University. My interests span medical imaging, clinical risk prediction, and biomolecular design. I aim to pursue direct-entry PhD study."
  },
  "researchNote": {
    "zh": "从医学影像与结构化临床数据，到多模态学习和生物分子设计，探索人工智能在健康与生命科学中的应用。",
    "en": "Exploring AI for health and life sciences across medical images, clinical data, multimodal learning, and biomolecular design."
  },
  "about": {
    "zh": "本科在读，预计2027年6月毕业。GPA 3.74/4.0，专业排名前10%。我也参与全栈AI应用与组件库开发，希望把研究想法转化为可用的系统。",
    "en": "Undergraduate, expected graduation in June 2027. GPA: 3.74/4.0, top 10% in my major. Alongside research, I build full-stack AI applications and reusable UI components."
  },
  "interests": [
    {
      "title": {
        "zh": "医学影像分析",
        "en": "Medical image analysis"
      },
      "description": {
        "zh": "低剂量CT多器官分割；多尺度感受野、跨层特征复用与边界感知学习。",
        "en": "Low-dose CT multi-organ segmentation with multi-scale receptive fields, cross-layer features, and boundary-aware learning."
      }
    },
    {
      "title": {
        "zh": "临床风险预测",
        "en": "Clinical risk prediction"
      },
      "description": {
        "zh": "利用结构化临床数据预测压力性损伤风险，研究通道注意力与循环丢弃机制。",
        "en": "Predicting pressure injury risk from tabular clinical data through channel attention and cyclical dropout."
      }
    },
    {
      "title": {
        "zh": "多模态医疗AI",
        "en": "Multimodal medical AI"
      },
      "description": {
        "zh": "面向慢阻肺筛查与分级，探索CT、影像组学、临床信息及蛋白组学的融合。",
        "en": "Exploring the fusion of CT, radiomics, clinical information, and proteomics for COPD screening and severity assessment."
      }
    },
    {
      "title": {
        "zh": "生物分子设计",
        "en": "Biomolecular design"
      },
      "description": {
        "zh": "参与跨蛋白质构象景观的生物分子复合体稳健设计研究。",
        "en": "Contributing to research on robust biomolecular complex design across protein conformational landscapes."
      }
    }
  ],
  "work": [
    {
      "title": "FlexEvo · Robust biomolecular design",
      "paperTitle": "Robust Biomolecular Complex Design Across Protein Conformational Landscapes",
      "description": {
        "zh": "通过推理期演化适配，探索生物分子结合物在不同蛋白质构象下的稳健设计。",
        "en": "Inference-time evolutionary adaptation for robust binder design across protein conformations."
      },
      "detail": {
        "zh": "FlexEvo在单一目标构象上进行推理期演化适配，无需重训练。通过几何约束的双目标优化与Pareto选择，平衡原始构象的相互作用和跨构象鲁棒性。合作作者：Qingyuan Zeng, Zongqi Xu, Anglin Liu, Ziqi Gong, Pengxiang Cai, Zixin Guan, Yunan Chen, SEN GAO, Min Zhou, Jintai Chen。",
        "en": "FlexEvo adapts binders at inference time from a single target conformation without retraining. Geometry-constrained, bi-objective optimization and Pareto selection balance input-state interactions with cross-conformation robustness. Co-authors: Qingyuan Zeng, Zongqi Xu, Anglin Liu, Ziqi Gong, Pengxiang Cai, Zixin Guan, Yunan Chen, SEN GAO, Min Zhou, Jintai Chen."
      },
      "authorship": {
        "zh": "合作作者",
        "en": "Co-author"
      },
      "status": {
        "zh": "投稿",
        "en": "Submitted"
      },
      "venue": "ICLR 2027",
      "tags": [
        "Biomolecular design",
        "Protein flexibility",
        "Inference-time adaptation"
      ],
      "url": "https://openreview.net/forum?id=oPkskKCc3H"
    },
    {
      "title": "LDCT-MOSNet",
      "paperTitle": "LDCT-MOSNet: A Lightweight Multi-Organ Segmentation Model for Low-Dose CT via Cascaded DenseASPP and Dynamic Boundary-Aware Learning",
      "description": {
        "zh": "轻量级低剂量CT多器官分割，聚焦器官尺度差异、模糊边界与噪声鲁棒性。",
        "en": "Lightweight multi-organ segmentation in low-dose CT, addressing scale variation, ambiguous boundaries, and noise."
      },
      "detail": {
        "zh": "通过级联DenseASPP覆盖多尺度感受野，结合跨层特征复用与动态边界感知复合损失，改善不同尺度器官的特征表达。",
        "en": "Combines cascaded DenseASPP, cross-layer feature reuse, and a dynamic boundary-aware composite loss for multi-scale organ representations."
      },
      "authorship": {
        "zh": "共同第一作者",
        "en": "Co-first author"
      },
      "status": {
        "zh": "已录用",
        "en": "Accepted"
      },
      "venue": "IEEE BIBM 2025",
      "tags": [
        "Low-dose CT",
        "Segmentation",
        "DenseASPP"
      ]
    },
    {
      "title": "Continuous receptive field learning",
      "paperTitle": "Hierarchical Continuous Receptive Field Learning with Adaptive Boundary Refinement for Clinical-Grade Multi-Organ Segmentation in Low-Dose CT",
      "description": {
        "zh": "围绕连续感受野学习与自适应边界细化，进一步研究低剂量CT多器官分割。",
        "en": "Investigating hierarchical continuous receptive fields and adaptive boundary refinement for low-dose CT multi-organ segmentation."
      },
      "detail": {
        "zh": "LDCT多器官分割方向的后续期刊稿件，关注多尺度表示与边界细化。",
        "en": "A follow-up journal manuscript on low-dose CT multi-organ segmentation, focusing on multi-scale representations and boundary refinement."
      },
      "authorship": {
        "zh": "共同第一作者",
        "en": "Co-first author"
      },
      "status": {
        "zh": "在投",
        "en": "Submitted"
      },
      "venue": "IEEE Transactions on Medical Imaging",
      "tags": [
        "Medical imaging",
        "Receptive fields",
        "Boundary refinement"
      ]
    },
    {
      "title": "PInet",
      "paperTitle": "PInet: A Cyclical Dropout-Driven Channel Attention Framework for Early Prediction of Intraoperative Pressure Injuries with Tabular Clinical Data",
      "description": {
        "zh": "基于表格临床数据预测术中压力性损伤风险，建模不同层面的特征组合与交互。",
        "en": "Early prediction of intraoperative pressure injury risk through feature combinations and interactions in tabular clinical data."
      },
      "detail": {
        "zh": "通过循环丢弃构建数据混合通道，以注意力机制自适应计算通道权重，研究模型的预测能力与泛化表现。",
        "en": "Uses cyclical dropout to construct mixed feature channels and attention to adapt channel weights, studying predictive performance and generalization."
      },
      "authorship": {
        "zh": "共同第一作者",
        "en": "Co-first author"
      },
      "status": {
        "zh": "二审修回阶段",
        "en": "Second-round revision"
      },
      "venue": "iScience",
      "tags": [
        "Clinical prediction",
        "Tabular data",
        "Attention"
      ]
    }
  ],
  "workNote": {
    "zh": "4项研究工作，覆盖医疗AI与生物分子设计；录用、投稿和返修状态分别标注。",
    "en": "Four research works in medical AI and biomolecular design, with acceptance, submission, and revision status shown individually."
  },
  "timeline": [
    {
      "time": {
        "zh": "2025 — 至今",
        "en": "2025 — Present"
      },
      "institution": {
        "zh": "香港科技大学（广州）",
        "en": "HKUST (Guangzhou)"
      },
      "role": {
        "zh": "人工智能学域 · 科研助理 / 科研实习",
        "en": "AI Thrust · Research Assistant / Research Intern"
      },
      "description": {
        "zh": "从事人工智能相关科研工作，继续积累研究经验。",
        "en": "Building research experience in artificial intelligence."
      },
      "current": true
    },
    {
      "time": {
        "zh": "2023 — 2027（预计）",
        "en": "2023 — 2027 (expected)"
      },
      "institution": {
        "zh": "西南民族大学",
        "en": "Southwest Minzu University"
      },
      "role": {
        "zh": "计算机与人工智能学院 · 本科在读",
        "en": "College of Computer and Artificial Intelligence · Undergraduate"
      },
      "description": {
        "zh": "预计2027年6月毕业 · GPA 3.74/4.0 · 专业排名前10%。",
        "en": "Expected graduation: June 2027 · GPA 3.74/4.0 · Top 10%."
      }
    },
    {
      "time": {
        "zh": "未来目标",
        "en": "Next goal"
      },
      "institution": {
        "zh": "直接攻读博士",
        "en": "Direct-entry PhD study"
      },
      "role": {
        "zh": "深化人工智能与生命科学研究",
        "en": "Further research in AI and life sciences"
      },
      "description": {
        "zh": "继续深化当前研究，探索未来的博士研究机会。",
        "en": "Deepening my current work and exploring future doctoral research opportunities."
      }
    }
  ],
  "engineering": [
    {
      "title": "Linums-Chat",
      "time": "2025.10 — Present",
      "description": {
        "zh": "全栈多模型AI聊天应用，支持流式对话、工具调用、语音交互、会话管理与分享。",
        "en": "A full-stack, multi-model AI chat application with streaming, tool calls, voice interaction, and conversation sharing."
      },
      "points": [
        {
          "zh": "Fetch + ReadableStream封装SSE，有限状态机协调多轮工具调用与消息状态。",
          "en": "Fetch + ReadableStream SSE parsing with a finite-state machine for tool calls and message state."
        },
        {
          "zh": "缓冲队列与requestAnimationFrame批量刷新，结合虚拟滚动处理长会话。",
          "en": "Buffered updates via requestAnimationFrame and virtual scrolling for long conversations."
        },
        {
          "zh": "服务端AgentLoop捕获工具请求，将执行结果送回模型上下文。",
          "en": "A server-side agent loop executes tool requests and returns results to the model context."
        }
      ],
      "stack": [
        "TypeScript",
        "Next.js",
        "Zustand",
        "Prisma",
        "PostgreSQL"
      ]
    },
    {
      "title": "SMU Design",
      "time": "2025.12 — Present",
      "description": {
        "zh": "企业级React组件库，参与架构与核心组件开发，累计沉淀30+组件，包含AI应用组件。",
        "en": "An enterprise React component library. Contributed to its architecture and core components, with 30+ components including AI interfaces."
      },
      "points": [
        {
          "zh": "pnpm workspace管理Monorepo中的多包依赖与发布。",
          "en": "A pnpm-workspace monorepo for package dependencies and release workflows."
        },
        {
          "zh": "基于Design Token构建多主题、暗黑模式与品牌色体系。",
          "en": "Design tokens support multiple themes, dark mode, and brand colors."
        },
        {
          "zh": "完善按需加载、文档示例、类型约束与本地调试流程。",
          "en": "On-demand loading, documentation, type constraints, and local development workflows."
        }
      ],
      "stack": [
        "React",
        "TypeScript",
        "Monorepo",
        "Tsup",
        "Design tokens"
      ]
    }
  ],
  "awards": [
    {
      "title": {
        "zh": "川渝大学生人工智能大赛 · 三等奖",
        "en": "Sichuan–Chongqing AI Competition · Third prize"
      },
      "year": "2024",
      "detail": {
        "zh": "腾讯开悟智能体博弈赛道 · 团队队长",
        "en": "Tencent Kaiwu agent-game track · Team captain"
      }
    },
    {
      "title": {
        "zh": "全国大学生软件创新大赛 · 西南区域三等奖",
        "en": "National Software Innovation Competition · Regional third prize"
      },
      "year": "2025",
      "detail": {
        "zh": "“情非得语”LSTM情绪识别助手 · 团队队长",
        "en": "LSTM emotion recognition assistant · Team captain"
      }
    }
  ],
  "skills": [
    "Python",
    "PyTorch",
    "TensorFlow",
    "R",
    "SPSS",
    "MMCV",
    "MMSegmentation",
    "MMEngine",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL"
  ],
  "collaborations": [
    {
      "time": "2024–2026",
      "institution": {
        "zh": "成都市第三人民医院 · 全科医学科",
        "en": "Chengdu Third People's Hospital · General Medicine"
      },
      "type": {
        "zh": "校外导师",
        "en": "External mentorship"
      },
      "person": "钟文"
    },
    {
      "time": "2024–Present",
      "institution": {
        "zh": "西安交通大学 · 公共卫生学院",
        "en": "Xi'an Jiaotong University · School of Public Health"
      },
      "type": {
        "zh": "项目合作",
        "en": "Project collaboration"
      },
      "person": "陈涛"
    },
    {
      "time": "2024–Present",
      "institution": {
        "zh": "河南中医药大学附属医院 · 呼吸科 / 科技处",
        "en": "An affiliated hospital of Henan University of Chinese Medicine · Respiratory Medicine / Research Administration"
      },
      "type": {
        "zh": "项目合作",
        "en": "Project collaboration"
      },
      "person": "谢洋"
    },
    {
      "time": "2024–Present",
      "institution": {
        "zh": "电子科技大学 · 计算机科学与工程学院",
        "en": "University of Electronic Science and Technology of China · School of Computer Science and Engineering"
      },
      "type": {
        "zh": "长期学术指导",
        "en": "Ongoing academic guidance"
      },
      "person": "李文"
    },
    {
      "time": "2026–Present",
      "institution": {
        "zh": "沈阳药科大学 / 中国药科大学",
        "en": "Shenyang Pharmaceutical University / China Pharmaceutical University"
      },
      "type": {
        "zh": "校外导师",
        "en": "External mentorship"
      },
      "person": "齐练文"
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "高危人群筛查与补肺方降低慢阻肺发病率研究",
        "en": "High-risk screening and Bufeifang intervention to reduce COPD incidence"
      },
      "context": {
        "zh": "参与国家重点研发计划项目",
        "en": "Contributor to a National Key R&D Program project"
      },
      "code": "2023YFC3502601"
    },
    {
      "title": {
        "zh": "河南省科技创新领军人才支持项目",
        "en": "Henan Province Science and Technology Innovation Leading Talent Support Project"
      },
      "context": {
        "zh": "参与合作方的省级领军人才项目",
        "en": "Participation in a collaborator-led provincial talent project"
      },
      "code": "254000510041"
    },
    {
      "title": {
        "zh": "深度学习 CT 多模态融合用于慢阻肺多中心筛查",
        "en": "Deep-learning CT multimodal fusion for multicenter COPD screening"
      },
      "context": {
        "zh": "高校创新基金项目 · 2025",
        "en": "University innovation fund project · 2025"
      },
      "code": "2025GXCX0415"
    },
    {
      "title": {
        "zh": "多组学慢阻肺分级与合并症分析",
        "en": "Multiomics analysis of COPD grading and comorbidities"
      },
      "context": {
        "zh": "高校创新基金项目 · 2025",
        "en": "University innovation fund project · 2025"
      },
      "code": "2025GXCX930"
    }
  ],
  "patents": [
    {
      "title": {
        "zh": "低剂量 CT 轻量多器官分割模型",
        "en": "Lightweight multi-organ segmentation model for low-dose CT"
      },
      "status": {
        "zh": "发明专利申请",
        "en": "Invention patent application"
      },
      "code": "CN202511649803.4"
    },
    {
      "title": {
        "zh": "一种用于药材种植的移动式拍照装置",
        "en": "Mobile imaging device for medicinal plant cultivation"
      },
      "status": {
        "zh": "实用新型申请 · 已受理",
        "en": "Utility model application · accepted for processing"
      },
      "code": ""
    }
  ],
  "service": {
    "zh": "《Biomedical Signal Processing and Control》审稿人；审稿方向：序列信号处理与可解释分析。",
    "en": "Reviewer for Biomedical Signal Processing and Control, covering time-series signal processing and interpretable analysis."
  }
};
