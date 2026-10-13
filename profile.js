/* Public academic profile. Update research status here as it changes. */
const profile = {
  "name": "Zongqi Xu",
  "nameZh": "许宗琦",
  "email": "202330827102@stu.swun.edu.cn",
  "socials": [
    {
      "name": "GitHub",
      "url": "https://github.com/codemaster-XU"
    }
  ],
  "intro": {
    "zh": "我在香港科技大学（广州）人工智能学域从事科研助理与科研实习工作，本科就读于西南民族大学计算机与人工智能学院。研究关注医学影像、临床风险预测与生物分子设计，目标是直接攻读博士。",
    "en": "I am a Research Assistant / Research Intern at the AI Thrust, HKUST(GZ), and an undergraduate at Southwest Minzu University. My interests span medical imaging, clinical risk prediction, and biomolecular design. I aim to pursue direct-entry PhD study."
  },
  "researchNote": {
    "zh": "从医学影像与结构化临床数据，到多模态学习和生物分子设计，探索人工智能在健康与生命科学中的应用。",
    "en": "Exploring AI for health and life sciences across medical images, clinical data, multimodal learning, and biomolecular design."
  },
  "about": {
    "zh": "本科在读，预计2027年6月毕业。GPA 3.74/4.0，专业排名前10%。我积极学习跨领域知识，关注技术迁移与人工智能的融合应用，也参与科研申报、团队协作与全栈产品开发，持续把研究想法转化为可用的系统。",
    "en": "Undergraduate, expected graduation in June 2027. GPA: 3.74/4.0, top 10% in my major. I explore interdisciplinary knowledge, technology transfer, and applied AI while contributing to research proposals, team collaboration, and full-stack product development."
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
      "url": "https://openreview.net/forum?id=oPkskKCc3H",
      "id": "flexevo",
      "authors": [
        "Qingyuan Zeng",
        "Zongqi Xu",
        "Anglin Liu",
        "Ziqi Gong",
        "Pengxiang Cai",
        "Zixin Guan",
        "Yunan Chen",
        "SEN GAO",
        "Min Zhou",
        "Jintai Chen"
      ],
      "authorDetails": {
        "zh": "合作作者；作者顺序据本人提供的OpenReview资料。",
        "en": "Co-author; author order follows the OpenReview profile supplied by me."
      },
      "details": [
        {
          "title": {
            "zh": "推理期适配",
            "en": "Inference-time adaptation"
          },
          "text": {
            "zh": "在单一目标构象上进行演化适配，无需重训练。",
            "en": "Evolutionary adaptation from a single target conformation without retraining."
          }
        },
        {
          "title": {
            "zh": "稳健设计",
            "en": "Robust design"
          },
          "text": {
            "zh": "通过几何约束的双目标优化与Pareto选择，平衡输入构象的相互作用和跨构象鲁棒性。",
            "en": "Geometry-constrained bi-objective optimization and Pareto selection balance input-state interactions with cross-conformation robustness."
          }
        }
      ],
      "category": "biomolecular"
    },
    {
      "title": "LDCT-MOSNet",
      "paperTitle": "LDCT-MOSNet: A Lightweight Multi-Organ Segmentation Model for Low-Dose CT via Cascaded DenseASPP and Dynamic Boundary-Aware Learning",
      "description": {
        "zh": "轻量级低剂量CT多器官分割，聚焦器官尺度差异、模糊边界与噪声鲁棒性。",
        "en": "Lightweight multi-organ segmentation in low-dose CT, addressing scale variation, ambiguous boundaries, and noise."
      },
      "detail": {
        "zh": "针对低剂量胸部CT中的器官尺度差异、模糊边界和尺度盲区，使用级联DenseASPP及密集大、中、小膨胀率空洞卷积实现连续感受野覆盖；通过跨层特征复用整合浅层边缘纹理、中层解剖结构与深层语义；LDCT-loss结合动态边界感知与多尺度置信加权，平衡类别梯度和边界惩罚。多器官分割是慢阻肺诊断的上游任务，后续计划融合胸部CT、放射组学、临床组学与蛋白组学进行普筛型分类。已发表于BIBM 2025。共同第一作者，合作方列第一作者（共一信息据简历）。",
        "en": "Addresses organ-scale variation, ambiguous boundaries, and scale gaps in low-dose chest CT using cascaded DenseASPP with dense dilation rates, cross-layer reuse of edge textures, anatomy and semantics, and an LDCT-loss combining dynamic boundary awareness with multi-scale confidence weighting. Segmentation supports subsequent COPD screening research that plans to fuse CT, radiomics, clinical omics, and proteomics. Published at BIBM 2025. Co-first author; a collaborator is listed first (equal contribution stated in my CV)."
      },
      "authorship": {
        "zh": "共同第一作者",
        "en": "Co-first author"
      },
      "status": {
        "zh": "已发表",
        "en": "Published"
      },
      "venue": "IEEE BIBM 2025",
      "tags": [
        "Low-dose CT",
        "Segmentation",
        "DenseASPP"
      ],
      "id": "ldct-mosnet",
      "authorDetails": {
        "zh": "共同第一作者；合作方列第一作者（共一信息据简历）。完整作者顺序依据IEEE/Crossref发表记录。",
        "en": "Co-first author; a collaborator is listed first (equal contribution stated in my CV). Full author order follows the IEEE/Crossref publication record."
      },
      "details": [
        {
          "title": {
            "zh": "临床问题",
            "en": "Clinical motivation"
          },
          "text": {
            "zh": "针对临床低剂量胸部CT多器官分割中的器官尺度差异、边界模糊、特征尺度盲区与噪声问题，构建LDCT-MOSNet。",
            "en": "LDCT-MOSNet addresses organ-scale variation, ambiguous boundaries, feature-scale gaps, and noise in clinical low-dose chest CT multi-organ segmentation."
          }
        },
        {
          "title": {
            "zh": "连续感受野",
            "en": "Continuous receptive fields"
          },
          "text": {
            "zh": "使用级联DenseASPP与密集的大、中、小膨胀率空洞卷积，实现连续感受野覆盖，减少传统ASPP的尺度盲区。",
            "en": "Cascaded DenseASPP uses dense large, medium, and small dilation rates to cover continuous receptive fields and reduce scale gaps in conventional ASPP."
          }
        },
        {
          "title": {
            "zh": "跨层特征复用",
            "en": "Cross-layer feature reuse"
          },
          "text": {
            "zh": "整合浅层边缘纹理、中层解剖结构与深层语义，构建兼顾高分辨率与高语义的特征表示，抑制语义漂移。",
            "en": "Reuses shallow edge textures, intermediate anatomical structures, and deep semantics to combine spatial resolution with semantic representation and limit semantic drift."
          }
        },
        {
          "title": {
            "zh": "LDCT-loss",
            "en": "LDCT-loss"
          },
          "text": {
            "zh": "复合损失函数结合动态边界感知与多尺度置信加权，平衡类别梯度和边界惩罚，提升噪声下的鲁棒性。",
            "en": "A composite loss combines dynamic boundary awareness and multi-scale confidence weighting to balance class gradients and boundary penalties under noise."
          }
        },
        {
          "title": {
            "zh": "后续研究",
            "en": "Next research step"
          },
          "text": {
            "zh": "将多器官分割作为慢阻肺诊断的上游任务，计划融合胸部CT、放射组学、临床组学与蛋白组学，构建普筛型分类模型。",
            "en": "Uses multi-organ segmentation as an upstream task for COPD diagnosis, with planned fusion of chest CT, radiomics, clinical omics, and proteomics for broad screening."
          }
        }
      ],
      "resumeMetadata": {
        "zh": "BIBM · CCF-B（CCF推荐国际学术会议目录）",
        "en": "BIBM · CCF-B (CCF recommended international conference list)"
      },
      "authors": [
        "Yanglin Wang",
        "Zongqi Xu",
        "Fuge Yang",
        "Yang Xie",
        "Chengjie Li",
        "Tao Chen",
        "Zhuoxuan An",
        "Chongyang Wang"
      ],
      "links": [
        {
          "name": "Paper · DOI",
          "url": "https://doi.org/10.1109/bibm66473.2025.11357154"
        },
        {
          "name": "IEEE Xplore",
          "url": "https://ieeexplore.ieee.org/document/11357154"
        },
        {
          "name": "Code · GitHub",
          "url": "https://github.com/codemaster-XU/LDCT-MOSNet"
        }
      ],
      "url": "https://doi.org/10.1109/bibm66473.2025.11357154",
      "sourceURL": "https://www.ccf.org.cn/Academic_Evaluation/AI/",
      "publicationDate": "2025-12-15",
      "bibtex": "@inproceedings{wang2025ldctmosnet,\n  author = {Wang, Yanglin and Xu, Zongqi and Yang, Fuge and Xie, Yang and Li, Chengjie and Chen, Tao and An, Zhuoxuan and Wang, Chongyang},\n  title = {LDCT-MOSNet: A Lightweight Multi-Organ Segmentation Model for Low-Dose CT via Cascaded DenseASPP and Dynamic Boundary-Aware Learning},\n  booktitle = {2025 IEEE International Conference on Bioinformatics and Biomedicine (BIBM)},\n  year = {2025},\n  pages = {5603--5610},\n  publisher = {IEEE},\n  doi = {10.1109/BIBM66473.2025.11357154}\n}",
      "category": "clinical"
    },
    {
      "title": "Continuous receptive field learning",
      "paperTitle": "Hierarchical Continuous Receptive Field Learning with Adaptive Boundary Refinement for Clinical-Grade Multi-Organ Segmentation in Low-Dose CT",
      "description": {
        "zh": "围绕连续感受野学习与自适应边界细化，进一步研究低剂量CT多器官分割。",
        "en": "Investigating hierarchical continuous receptive fields and adaptive boundary refinement for low-dose CT multi-organ segmentation."
      },
      "detail": {
        "zh": "低剂量CT多器官分割会议成果的期刊延伸，关注层次化连续感受野学习和自适应边界细化。稿件在投。共同第一作者，导师列第一作者（据简历）。",
        "en": "A journal extension of the low-dose CT multi-organ segmentation work, focusing on hierarchical continuous receptive fields and adaptive boundary refinement. Submitted manuscript. Co-first author; my advisor is listed first, as stated in my CV."
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
      ],
      "id": "continuous-receptive-fields",
      "authorDetails": {
        "zh": "共同第一作者；导师列第一作者（据简历）。",
        "en": "Co-first author; my advisor is listed first, as stated in my CV."
      },
      "details": [
        {
          "title": {
            "zh": "会议成果的期刊延伸",
            "en": "Journal extension"
          },
          "text": {
            "zh": "在低剂量CT多器官分割方向延续会议研究，关注层次化连续感受野学习与自适应边界细化，目前稿件在投。",
            "en": "Extends the conference work on low-dose CT multi-organ segmentation through hierarchical continuous receptive fields and adaptive boundary refinement. The manuscript is submitted."
          }
        }
      ],
      "resumeMetadata": {
        "zh": "期刊2024年Journal Impact Factor：9.8。",
        "en": "Journal Impact Factor (2024): 9.8."
      },
      "sourceURL": "https://ieeexplore.ieee.org/abstract/document/11224871",
      "category": "clinical"
    },
    {
      "title": "PInet",
      "paperTitle": "PInet: A Cyclical Dropout-Driven Channel Attention Framework for Early Prediction of Intraoperative Pressure Injuries with Tabular Clinical Data",
      "description": {
        "zh": "基于表格临床数据预测术中压力性损伤风险，建模不同层面的特征组合与交互。",
        "en": "Early prediction of intraoperative pressure injury risk through feature combinations and interactions in tabular clinical data."
      },
      "detail": {
        "zh": "针对压力性损伤风险预测中的特征覆盖与交互不足、泛化能力问题，通过皮尔森相关热图和t-SNE进行数据分析；循环丢弃构建数据混合通道，纳入不同层面的特征组合；使用自注意力机制自适应计算通道间权重。该框架用于表型结构化数据分类，稿件处于二审修回阶段。共同第一作者，导师列第一作者（据简历）。",
        "en": "Analyzes feature coverage, interaction, and generalization in pressure injury risk prediction with Pearson correlation heatmaps and t-SNE. Cyclical dropout creates mixed data channels with feature combinations at different levels, and self-attention adaptively weights channel interactions. The framework classifies phenotypic structured data; the manuscript is in second-round revision. Co-first author; my advisor is listed first, as stated in my CV."
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
      ],
      "id": "pinet",
      "authorDetails": {
        "zh": "共同第一作者；导师列第一作者（据简历）。",
        "en": "Co-first author; my advisor is listed first, as stated in my CV."
      },
      "details": [
        {
          "title": {
            "zh": "临床问题与分析",
            "en": "Clinical problem and analysis"
          },
          "text": {
            "zh": "针对压力性损伤风险预测中的特征覆盖、特征交互与模型泛化问题，使用皮尔森相关热图和t-SNE可视化分析数据；关注传统机器学习对强相关特征的依赖及表格非欧数据的非线性依赖建模。",
            "en": "Investigates limited feature coverage, feature interaction, and generalization in pressure injury risk prediction. Pearson correlation heatmaps and t-SNE visualize the data, with attention to reliance on strongly correlated features and nonlinear dependencies in non-Euclidean tabular data."
          }
        },
        {
          "title": {
            "zh": "循环丢弃",
            "en": "Cyclical dropout"
          },
          "text": {
            "zh": "通过循环丢弃构建数据混合通道，纳入不同层面的特征组合，形成面向表型结构化数据的分类框架。",
            "en": "Cyclical dropout constructs mixed data channels and includes feature combinations at different levels for phenotypic structured-data classification."
          }
        },
        {
          "title": {
            "zh": "自注意力交互",
            "en": "Self-attention interactions"
          },
          "text": {
            "zh": "通过自注意力自适应计算通道间权重，研究特征交互、预测性能与泛化表现。",
            "en": "Self-attention adaptively weights interactions across channels to study predictive performance and generalization."
          }
        }
      ],
      "resumeMetadata": {
        "zh": "简历所列IF：4.1；统计年份未注明。",
        "en": "IF listed in the CV: 4.1; reporting year unspecified."
      },
      "category": "clinical"
    }
  ],
  "workNote": {
    "zh": "4项研究工作，覆盖医疗AI与生物分子设计；发表、投稿和返修状态分别标注。",
    "en": "Four research works in medical AI and biomolecular design, with publication, submission, and revision status shown individually."
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
        "zh": "全栈多模型AI聊天应用，支持流式对话、推理过程可视化、联网搜索与图片生成工具调用、语音输入输出，以及会话管理和分享，兼顾端到端性能与一致体验。",
        "en": "A full-stack multi-model AI chat application with streaming, reasoning visualization, web-search and image-generation tools, voice input/output, conversation management, and sharing, designed around performance and a consistent end-to-end experience."
      },
      "points": [
        {
          "zh": "针对EventSource不能携带POST Body与自定义Header的限制，基于Fetch + ReadableStream封装SSE解析层。",
          "en": "Builds an SSE parsing layer with Fetch + ReadableStream to support POST bodies and custom headers beyond EventSource limitations."
        },
        {
          "zh": "设计有限状态机管理thinking → tool_calling → answering消息生命周期，通过SSE事件驱动转换，协调多轮Function Calling中的UI和流式消息状态。",
          "en": "An SSE-driven finite-state machine manages thinking → tool_calling → answering, coordinating UI and streamed-message state across multiple rounds of function calls."
        },
        {
          "zh": "使用buffer缓冲队列和requestAnimationFrame批量刷新，减少流式chunk频繁setState引发的冗余重渲染；简历记录渲染频次由峰值120次/秒降到40次/秒以下。",
          "en": "Buffers streamed chunks and batches updates with requestAnimationFrame to reduce redundant renders. My CV reports a drop from a peak of 120 renders/second to fewer than 40."
        },
        {
          "zh": "通过预留骨架高度、overflow-anchor滚动锚定与未闭合Markdown块自动补全，处理富文本块高度变化导致的布局偏移和抖动。",
          "en": "Reserved skeleton height, overflow-anchor scroll anchoring, and completion of unfinished Markdown blocks address layout shifts as rich-text blocks change height."
        },
        {
          "zh": "结合TanStack Virtual虚拟滚动与游标分页，支持长会话下的流畅渲染。",
          "en": "Combines TanStack Virtual with cursor pagination for smooth rendering in long conversations."
        },
        {
          "zh": "服务端AgentLoop捕获模型流中的工具调用请求，执行后把结果作为工具消息追加回上下文，再次请求模型继续生成，形成多轮工具调用闭环。",
          "en": "A server-side AgentLoop captures tool requests during model streaming, executes them, appends results as tool messages, and requests continued generation for multi-step reasoning."
        }
      ],
      "stack": [
        "TypeScript",
        "Next.js",
        "Zustand",
        "Prisma",
        "PostgreSQL",
        "SSE",
        "TanStack Virtual"
      ]
    },
    {
      "title": "SMU Design",
      "time": "2025.12 — Present",
      "description": {
        "zh": "面向高校客户端、Web门户与后台系统的企业级React组件库，解决UI风格不一致、组件重复开发及维护成本问题。作为核心成员参与架构与核心组件研发，累计沉淀30+组件，包含可即插即用的AI应用组件。",
        "en": "An enterprise React component library for university clients, web portals, and administration systems, addressing inconsistent UI, duplicated components, and maintenance costs. As a core member, I contribute to architecture and core components, with 30+ components including plug-in AI interfaces."
      },
      "points": [
        {
          "zh": "负责组件库架构设计与核心组件研发；采用pnpm + workspace的Monorepo管理多包依赖与发布。",
          "en": "Responsible for component-library architecture and core components, using a pnpm-workspace monorepo to manage dependencies and package releases."
        },
        {
          "zh": "基于Design Token构建多主题、暗黑模式与品牌色体系，完善样式隔离和按需加载策略。",
          "en": "A design-token system supports multiple themes, dark mode, and brand colors, with style isolation and on-demand loading."
        },
        {
          "zh": "架构设计理念参考Shadcn UI；累计沉淀30+组件，包含多种AI组件，支持即插即用的AI应用构建。",
          "en": "The architecture draws on Shadcn UI. More than 30 components, including AI components, support plug-in AI application development."
        },
        {
          "zh": "建设组件开发与质量工具链，完善本地调试、文档示例、类型约束及规范化流程，提升一致性与可维护性。",
          "en": "Develops component and quality tooling, local debugging, documentation examples, type constraints, and standardized workflows for consistency and maintainability."
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
        "zh": "2024年川渝大学生人工智能大赛暨腾讯开悟人工智能公开赛 · 川渝地区优秀团队三等奖",
        "en": "2024 Sichuan–Chongqing College Student AI Competition & Tencent Kaiwu AI Open Competition · Regional outstanding-team third prize"
      },
      "year": "2024",
      "detail": {
        "zh": "智能体博弈赛道 · 众智成城队 · 队长，团队成员顺位第一。",
        "en": "Agent-game track · 众智成城 team · Captain, listed first among team members."
      }
    },
    {
      "title": {
        "zh": "第十八届全国大学生软件创新大赛区域赛 · 西南地区三等奖",
        "en": "18th National College Student Software Innovation Competition · Southwest regional third prize"
      },
      "year": "2025",
      "detail": {
        "zh": "“情非得语”——基于LSTM的情绪识别助手 · 维舟梦码队 · 队长，团队成员顺位第一。",
        "en": "“情非得语” LSTM emotion-recognition assistant · 维舟梦码 team · Captain, listed first among team members."
      }
    },
    {
      "title": {
        "zh": "中国国际大学生创新创业大赛 · 连续两次参赛获奖",
        "en": "China International College Students’ Innovation Competition · Awards in two consecutive participations"
      },
      "year": {
        "zh": "两届",
        "en": "Two editions"
      },
      "detail": {
        "zh": "简历记录连续两次参加并获奖；具体年份与奖项等级未列明。",
        "en": "My CV records awards in two consecutive participations; the years and award levels are unspecified."
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
    "PostgreSQL",
    "U-Net",
    "nnU-Net",
    "U-Net++",
    "Swin Transformer-T",
    "SAC-net",
    "AgileFormer",
    "ParaTransCNN",
    "ARU-net",
    "Mamba-sea",
    "Claude Code",
    "Trae"
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
      "person": "钟文",
      "resumeLabel": {
        "zh": "钟文：主任（简历所载）",
        "en": "钟文: director, as stated in the CV"
      }
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
      "person": "陈涛",
      "resumeLabel": {
        "zh": "陈涛：教授、优青（简历所载）",
        "en": "陈涛: professor; 优青 designation, as stated in the CV"
      }
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
      "person": "谢洋",
      "resumeLabel": {
        "zh": "谢洋：主任、处长、青拔（简历所载）",
        "en": "谢洋: director; research-administration head; 青拔 designation, as stated in the CV"
      }
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
      "person": "李文",
      "resumeLabel": {
        "zh": "李文：教授、优青（简历所载）",
        "en": "李文: professor; 优青 designation, as stated in the CV"
      }
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
      "person": "齐练文",
      "resumeLabel": {
        "zh": "齐练文：校长、教授、杰青（简历所载）",
        "en": "齐练文: university president; professor; 杰青 designation, as stated in the CV"
      }
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "基于前期高危人群筛查的补肺方降低慢阻肺发病率研究",
        "en": "Bufeifang intervention to reduce COPD incidence following preliminary screening of high-risk populations"
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
      "code": "254000510041",
      "ethics": {
        "zh": "简历所列伦理号：2025HL-435",
        "en": "Ethics reference listed in the CV: 2025HL-435"
      }
    },
    {
      "title": {
        "zh": "基于深度学习CT图像多模态融合模型构建在慢阻肺多中心筛查中的应用价值研究",
        "en": "Application of a deep-learning CT multimodal-fusion model in multicenter COPD screening"
      },
      "context": {
        "zh": "高校创新基金项目 · 2025",
        "en": "University innovation fund project · 2025"
      },
      "code": "2025GXCX0415"
    },
    {
      "title": {
        "zh": "基于多组学的慢阻肺分级与合并症分析研究",
        "en": "Multiomics-based study of COPD grading and comorbidity analysis"
      },
      "context": {
        "zh": "高校创新基金项目 · 2025",
        "en": "University innovation fund project · 2025"
      },
      "code": "2025GXCX930"
    },
    {
      "title": {
        "zh": "基于智能技术的压力性损伤风险预测",
        "en": "Intelligent-technology-based pressure injury risk prediction"
      },
      "context": {
        "zh": "参与利物浦大学与江苏省人民医院合作项目 · 2024",
        "en": "Participant in a collaboration between the University of Liverpool and Jiangsu Province Hospital · 2024"
      },
      "code": "",
      "time": "2024"
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
  },
  "educationDetails": {
    "courses": [
      {
        "title": {
          "zh": "数据结构",
          "en": "Data Structures"
        },
        "score": "90+",
        "category": {
          "zh": "核心课程",
          "en": "Core coursework"
        }
      },
      {
        "title": {
          "zh": "概率论与数理统计",
          "en": "Probability and Mathematical Statistics"
        },
        "score": "95+",
        "category": {
          "zh": "核心课程",
          "en": "Core coursework"
        }
      },
      {
        "title": {
          "zh": "物联网通信技术",
          "en": "Internet of Things Communication Technologies"
        },
        "score": "95+",
        "category": {
          "zh": "其他课程",
          "en": "Additional coursework"
        }
      },
      {
        "title": {
          "zh": "RFID系统原理",
          "en": "Principles of RFID Systems"
        },
        "score": "90+",
        "category": {
          "zh": "其他课程",
          "en": "Additional coursework"
        }
      }
    ],
    "english": [
      {
        "title": {
          "zh": "大学英语四级 · CET-4",
          "en": "College English Test Band 4 · CET-4"
        },
        "score": "482"
      },
      {
        "title": {
          "zh": "大学英语六级 · CET-6",
          "en": "College English Test Band 6 · CET-6"
        },
        "score": "474"
      }
    ],
    "gpa": "3.74/4.0",
    "ranking": {
      "zh": "专业前10%",
      "en": "Top 10% in my major"
    },
    "expectedGraduation": "2027.06"
  },
  "skillGroups": [
    {
      "title": {
        "zh": "医学影像与分割模型",
        "en": "Medical imaging and segmentation models"
      },
      "description": {
        "zh": "有使用经验的医学影像与分割模型。",
        "en": "Medical imaging and segmentation architectures I have used."
      },
      "items": [
        "U-Net",
        "nnU-Net",
        "U-Net++",
        "Swin Transformer-T",
        "SAC-net",
        "AgileFormer",
        "ParaTransCNN",
        "ARU-net",
        "Mamba-sea"
      ]
    },
    {
      "title": {
        "zh": "深度学习与计算机视觉",
        "en": "Deep learning and computer vision"
      },
      "description": {
        "zh": "模型开发、视觉框架与训练实验。",
        "en": "Model development, vision frameworks, and training experiments."
      },
      "items": [
        "Python",
        "PyTorch",
        "TensorFlow",
        "MMCV",
        "MMSegmentation",
        "MMEngine"
      ]
    },
    {
      "title": {
        "zh": "统计分析与数据探索",
        "en": "Statistical analysis and data exploration"
      },
      "description": {
        "zh": "临床数据处理、相关性分析与可视化。",
        "en": "Clinical data processing, correlation analysis, and visualization."
      },
      "items": [
        "R",
        "SPSS",
        "Pearson correlation",
        "t-SNE",
        "Radiomics",
        "Multimodal fusion"
      ]
    },
    {
      "title": {
        "zh": "全栈开发与UI工程",
        "en": "Full-stack development and UI engineering"
      },
      "description": {
        "zh": "AI应用、组件体系与流式交互。",
        "en": "AI applications, component systems, and streamed interactions."
      },
      "items": [
        "React",
        "TypeScript",
        "Next.js",
        "Zustand",
        "Prisma",
        "PostgreSQL",
        "pnpm workspace",
        "Tsup",
        "Design Tokens",
        "SSE",
        "TanStack Virtual"
      ]
    },
    {
      "title": {
        "zh": "AI辅助开发与科研协作",
        "en": "AI-assisted development and research collaboration"
      },
      "description": {
        "zh": "利用AI开发工具处理Python平台任务，结合科研申报与团队协作经验。",
        "en": "Uses AI development tools for Python-platform tasks, alongside research-proposal and team-collaboration experience."
      },
      "items": [
        "Claude Code",
        "Trae",
        "Research proposals",
        "Interdisciplinary collaboration",
        "Team coordination"
      ]
    }
  ],
  "serviceMetadata": {
    "zh": "简历所列期刊IF：4.9；统计年份未注明。",
    "en": "Journal IF listed in the CV: 4.9; reporting year unspecified."
  },
  "leadership": [
    {
      "title": {
        "zh": "科研项目申报与跨学科协作",
        "en": "Research proposals and interdisciplinary collaboration"
      },
      "time": {
        "zh": "本科期间",
        "en": "During undergraduate study"
      },
      "role": {
        "zh": "科研申报支持 / 团队协作",
        "en": "Research-proposal support / Team collaboration"
      },
      "description": {
        "zh": "协助导师、同门与合作方撰写科研项目申报，将跨领域知识与技术积累用于人工智能融合和应用创新。",
        "en": "Assists advisors, peers, and collaborators with research proposals, applying interdisciplinary knowledge and technical experience to AI integration and innovation."
      },
      "points": [
        {
          "zh": "参与国家自然科学基金、中央引导地方项目、中央高校项目等申报材料撰写。",
          "en": "Contributes to proposal writing for the National Natural Science Foundation of China, central funding guiding local development, and central-university projects."
        },
        {
          "zh": "简历记录：所主导申报累计获得资金支持50万元以上；该金额为申报项目支持额。",
          "en": "My CV states that proposals I led received more than RMB 500,000 in total project support."
        },
        {
          "zh": "积极学习跨领域前沿知识，擅长跨学科与跨技术迁移，持续支持团队科研进展。",
          "en": "Studies emerging interdisciplinary topics and applies knowledge across disciplines and technologies to support team research."
        }
      ],
      "sourceLabel": {
        "zh": "简历自述",
        "en": "As stated in my CV"
      }
    },
    {
      "title": {
        "zh": "实验室管理与科研指导",
        "en": "Laboratory coordination and research mentoring"
      },
      "time": {
        "zh": "本科期间",
        "en": "During undergraduate study"
      },
      "role": {
        "zh": "本科实验室团队管理 / 合作牵头",
        "en": "Undergraduate laboratory coordination / Collaboration lead"
      },
      "description": {
        "zh": "在本科实验室团队中承担管理角色，牵头多个合作，指导不同方向的师弟师妹与本科生，积累跨学科团队管理经验。",
        "en": "Takes a management role in my undergraduate laboratory, initiates collaborations, and supports junior students across research directions."
      },
      "points": [
        {
          "zh": "善于利用已有资源开拓研究方向，协调跨学科研究与团队合作。",
          "en": "Uses existing resources to develop research directions and coordinate interdisciplinary work."
        },
        {
          "zh": "简历记录：指导3名以上硕士研究生开展科研产出，并帮助其达到毕业条件。",
          "en": "My CV states that I guided at least three master’s students in research outputs and supported them toward graduation requirements."
        },
        {
          "zh": "以持续学习、坚韧与科研投入推进长期研究积累。",
          "en": "Builds long-term research experience through continued learning, persistence, and research commitment."
        }
      ],
      "sourceLabel": {
        "zh": "简历自述",
        "en": "As stated in my CV"
      }
    },
    {
      "title": {
        "zh": "科研与产品之间的协作支持",
        "en": "Collaboration connecting research and products"
      },
      "time": {
        "zh": "本科期间",
        "en": "During undergraduate study"
      },
      "role": {
        "zh": "全栈开发协作支持",
        "en": "Full-stack development collaboration support"
      },
      "description": {
        "zh": "帮助一名研究生牵头“好宠粮”宠物食品社区平台的全栈开发，该项目来自成都理工大学一名博士生合作伙伴的创业实践。",
        "en": "Helped a graduate student lead full-stack development of “好宠粮,” a pet-food community platform from an entrepreneurial project with a doctoral-student collaborator at Chengdu University of Technology."
      },
      "points": [
        {
          "zh": "连接研究生协作、全栈产品开发与创业项目需求。",
          "en": "Connects graduate-student collaboration, full-stack product development, and startup requirements."
        },
        {
          "zh": "简历记录该合作创业项目最终获得100万元融资；该金额为项目融资结果。",
          "en": "My CV records RMB 1 million in financing for the collaborating startup project."
        }
      ],
      "sourceLabel": {
        "zh": "简历自述",
        "en": "As stated in my CV"
      }
    }
  ],
  "academicActivities": [
    {
      "title": {
        "zh": "四川省计算机学会高性能计算专委会年会",
        "en": "Annual Meeting of the High-Performance Computing Committee, Sichuan Computer Federation"
      },
      "time": "",
      "location": {
        "zh": "成都",
        "en": "Chengdu"
      },
      "description": {
        "zh": "参加学术交流活动，了解高性能计算方向的研究与应用。",
        "en": "Participated in academic exchange around high-performance computing research and applications."
      }
    },
    {
      "title": {
        "zh": "第九届空间光通信与组网技术及应用大会",
        "en": "9th Conference on Space Optical Communication and Networking Technologies and Applications"
      },
      "time": {
        "zh": "第九届",
        "en": "9th edition"
      },
      "location": {
        "zh": "成都",
        "en": "Chengdu"
      },
      "description": {
        "zh": "参加跨领域学术交流，了解通信与组网技术。",
        "en": "Participated in interdisciplinary exchange on communication and networking technologies."
      }
    },
    {
      "title": {
        "zh": "第十二届医学图像计算青年研讨会（MICS）",
        "en": "12th Medical Image Computing Seminar for Young Researchers (MICS)"
      },
      "time": {
        "zh": "第十二届",
        "en": "12th edition"
      },
      "location": {
        "zh": "浙江慈溪",
        "en": "Cixi, Zhejiang"
      },
      "description": {
        "zh": "参加医学图像计算方向的研究交流。",
        "en": "Participated in research exchange on medical image computing."
      }
    },
    {
      "title": {
        "zh": "人工智能、虚拟现实与可视化国际学术会议（AIVRV 2025）",
        "en": "International Conference on Artificial Intelligence, Virtual Reality and Visualization (AIVRV 2025)"
      },
      "time": "2025",
      "location": {
        "zh": "成都",
        "en": "Chengdu"
      },
      "description": {
        "zh": "参加人工智能、虚拟现实与可视化学术交流。",
        "en": "Participated in academic exchange on AI, virtual reality, and visualization."
      }
    },
    {
      "title": {
        "zh": "IEEE生物信息学和生物医学国际会议（BIBM 2025）",
        "en": "IEEE International Conference on Bioinformatics and Biomedicine (BIBM 2025)"
      },
      "time": "2025",
      "location": {
        "zh": "武汉",
        "en": "Wuhan"
      },
      "description": {
        "zh": "参加生物信息学与生物医学领域的学术交流；LDCT-MOSNet已发表于该会议。",
        "en": "Participated in bioinformatics and biomedicine exchange; LDCT-MOSNet was published at this conference."
      }
    }
  ],
  "academicExchange": {
    "title": {
      "zh": "学术与产学研交流",
      "en": "Academic and industry–research exchange"
    },
    "description": {
      "zh": "在学术活动中与团队外的学者和研究人员交流，关注产业创投、发展趋势与技术落地。",
      "en": "Exchanges ideas with scholars and researchers outside my team, exploring industrial investment, development trends, and technology deployment."
    },
    "points": [
      {
        "zh": "简历列举交流对象包括清华大学、杭州电子科技大学、中国科学院大学等机构的教授、学者或研究人员。",
        "en": "My CV lists exchanges with professors, scholars, or researchers from institutions including Tsinghua University, Hangzhou Dianzi University, and the University of Chinese Academy of Sciences."
      }
    ],
    "sourceLabel": {
      "zh": "简历自述",
      "en": "As stated in my CV"
    }
  },
  "additionalExperience": [
    {
      "title": {
        "zh": "南昌若水网络传媒有限公司",
        "en": "Nanchang Ruoshui Network Media Co., Ltd."
      },
      "time": {
        "zh": "本科期间 · 公司存续4个月",
        "en": "During undergraduate study · Company operated for four months"
      },
      "role": {
        "zh": "经理 · 创始团队成员",
        "en": "Manager · Founding-team member"
      },
      "description": {
        "zh": "参与创始团队，负责创意开发与落地、业务对接和完整宣传推广规划，积累互联网业务与实践经验。",
        "en": "Worked with the founding team on creative development, execution, business coordination, and integrated promotional planning."
      },
      "points": [
        {
          "zh": "对接酒吧、养殖场、智能洗鞋柜企业与MCN机构等不同业务场景。",
          "en": "Coordinated with bars, farms, smart shoe-cleaning locker companies, and MCN organizations."
        },
        {
          "zh": "简历记录：公司获得10万元融资，存续4个月。",
          "en": "My CV records RMB 100,000 in financing and a four-month company lifespan."
        }
      ],
      "sourceLabel": {
        "zh": "简历自述",
        "en": "As stated in my CV"
      }
    },
    {
      "title": {
        "zh": "企业实地调研与产学研视野",
        "en": "Industry field research and applied-research perspective"
      },
      "time": {
        "zh": "本科期间",
        "en": "During undergraduate study"
      },
      "role": {
        "zh": "课题组合作调研参与",
        "en": "Research-group field-study participant"
      },
      "description": {
        "zh": "通过课题组合作开展企业实地考察，了解政企业务、部分运作模式及技术落地需求。",
        "en": "Participates in industry visits through research-group collaborations to understand business operations, public-sector and enterprise needs, and technology deployment."
      },
      "points": [
        {
          "zh": "实地考察四川科道芯国智能技术股份有限公司、中国电子科技集团、中国航天科技集团等。",
          "en": "Visited Sichuan Kedao Xinguo Intelligent Technology Co., Ltd., China Electronics Technology Group, China Aerospace Science and Technology Corporation, and other organizations."
        },
        {
          "zh": "结合学术交流与企业调研，积累人工智能产学研融合与应用落地视野。",
          "en": "Combines academic exchange and field research to develop a perspective on AI collaboration and practical deployment."
        }
      ],
      "sourceLabel": {
        "zh": "简历自述",
        "en": "As stated in my CV"
      }
    }
  ]
};
