// ==========================================================================
// 1. DEFAULT AUTHENTIC B13 DATA & COLUMN SPACING HELPERS
// ==========================================================================
function getDefaultB13Config() {
  const raw = {
    layout: {
      mapPosition: 'left',          // 'left' (左邊路線圖+右邊資料) | 'right' (右邊路線圖+左邊資料)
      mapWidthPercent: 63,          // Route map width ratio (%)
      sheetPaddingMm: 5,            // Uniform outer margin in mm-equivalent (supports 0~15mm freely)
      mapOffsetX: 0,                // Flexible X offset (px)
      mapOffsetY: 0,                // Flexible Y offset (px)
      autoSplitMaxStops: 23,        // Automatically split to next column on the right if exceeded
      colTopSpaces: [0, 0, 0],      // Per-column custom top pull-down space (px)
      columnGapPx: 14,              // Gap between route map columns
      stopVerticalGapPx: 3.0,       // Customizable vertical spacing gap between stops (px)
      nodeToNameGapPx: 6.0,         // Customizable horizontal gap between stop marker and stop name (px)
      stopNameFontSizePx: 10.2,     // Stop Chinese font size
      stopEnFontSizePx: 8.0,        // Stop English font size
      lineThicknessPx: 4.5,         // Route line thickness
      normalNodeSizePx: 9.5,        // Normal stop circle diameter
      parallelLineSpacingPx: 14,    // Spacing between multiple parallel route lines (supports small values 6px~26px)
      variantDisplayMode: 'single_with_style', // 'single_with_style' | 'parallel_lines'
      showVariantLegend: true,      // Freely toggle route map top variant legend bar
      evenZoneCoverAllStops: true,  // Even section fare light background wraps all stops in that even fare zone as ONE container
      stickLastModuleToBottom: false,
      exportEngine: 'svg',
      exportScale: 2,
      exportTextOffsetY: 0
    },
    colors: {
      themePrimary: '#008837',
      routeLineColor: '#008837',
      originDestBg: '#008837',
      originDestText: 'white',
      districtBg: '#008837',
      districtText: 'white',
      fareBg: '#008837',
      fareText: 'white',
      originHeaderBg: '#008837',
      originHeaderText: 'white',
      headwayHeaderBg: '#008837',
      headwayHeaderText: 'white',
      evenZoneBgEnabled: true,
      evenZoneBg: '#dcedc8',
      landmarkBg: '#e5e7eb',
      landmarkText: '#111827',
      routeBoxBg: '#008837',
      routeBoxText: '#ffffff',
      destBoxBg: '#008837',
      destBoxText: '#ffffff',
      viaBoxBg: '#006829',
      viaBoxText: '#ffffff',
      introBannerBg: '#65b741',
      introBannerText: '#ffffff',
      infoSectionHeaderBg: '#f3f4f6',
      infoAccentColor: '#008837'
    },
    variants: [
      {
        id: 'v1',
        name: '常規班次 (全程)',
        code: '',
        routeNumber: '',
        routeBoxInnerWhiteLine: true,
        routeBoxPosition: 'left',
        routeBoxColor: '#008837',
        routeBoxTextColor: '#ffffff',
        color: '#008837',
        badgeText: 'white',
        lineStyle: 'solid'
      },
      {
        id: 'v2',
        name: '特別班次 (不經錦田公路#)',
        code: '#',
        routeNumber: '',
        routeBoxInnerWhiteLine: true,
        routeBoxPosition: 'left',
        routeBoxColor: '#008837',
        routeBoxTextColor: '#ffffff',
        color: '#0284c7',
        badgeText: 'white',
        lineStyle: 'dashed'
      }
    ],
    rightModulesOrder: [
      'route_header',
      'intro_banner',
      'timetable',
      'additional_info',
      'octopus_fare',
      'bbi_info',
      'effective_footer'
    ],
    rightData: {
      routeNumber: 'B13',
      routeNumberFontSizePx: 100,
      headerMentionedRouteFontSizePx: 13,
      headerMentionedRoutes: '',
      routeBoxInnerWhiteLine: true,
      headerMentionedInnerWhiteLine: false,
      headerTwoPerRow: false,
      routeBoxes: [
        {
          id: 'rb_1',
          routeNumber: 'B13',
          fontSizePx: 100,
          innerWhiteLine: true,
          bgColor: '',
          textColor: '',
          destZh: '',
          destEn: ''
        }
      ],
      destZh: '皇崗口岸',
      destEn: 'Huanggang Port',
      viaZh: '西隧、大欖隧道',
      viaEn: 'WHC, Tai Lam Tunnel',
      introEnabled: true,
      introZh: '一程直達深圳・北上更方便',
      introEn: 'Direct access to Shenzhen, easier than ever',
      timetable: {
        titleZh: '時間表',
        titleEn: 'Timetable',
        mentionedRouteFontSizePx: 9.2,
        mentionedRouteStyle: 'badge',
        mentionedRouteNumbers: '',
        originHeaderZh: '小西灣(藍灣半島)開出',
        originHeaderEn: 'From Siu Sai Wan (Island Resort)',
        headwayLabelZh: '班次(分鐘)',
        headwayLabelEn: 'Headway (min)',
        dateGroups: [
          {
            id: 'dg1',
            dateTitleZh: '每日',
            dateTitleEn: 'Daily',
            rows: [
              { time: '0600 - 0030', headway: '30' }
            ]
          }
        ],
        variantTables: [
          {
            variantId: 'v1',
            enabled: true,
            showVariantBadge: true,
            routeNumber: '',
            routeBoxInnerWhiteLine: true,
            routeBoxPosition: 'left',
            routeBoxColor: '#008837',
            routeBoxTextColor: '#ffffff',
            mentionedRouteNumbers: '',
            showHeadwayCol: true,
            showDateHeader: true,
            originHeaderZh: '小西灣(藍灣半島)開出',
            originHeaderEn: 'From Siu Sai Wan (Island Resort)',
            headwayLabelZh: '班次(分鐘)',
            headwayLabelEn: 'Headway (min)',
            topNoteZh: '',
            topNoteEn: '',
            bottomNoteZh: '',
            bottomNoteEn: '',
            dateGroups: [
              {
                id: 'dg_v1_1',
                dateTitleZh: '每日',
                dateTitleEn: 'Daily',
                rows: [
                  { time: '0600 - 0030', headway: '30' }
                ]
              }
            ]
          },
          {
            variantId: 'v2',
            enabled: true,
            showVariantBadge: true,
            routeNumber: '',
            routeBoxInnerWhiteLine: true,
            routeBoxPosition: 'left',
            routeBoxColor: '#008837',
            routeBoxTextColor: '#ffffff',
            mentionedRouteNumbers: '',
            showHeadwayCol: true,
            showDateHeader: true,
            originHeaderZh: '小西灣(藍灣半島)開出',
            originHeaderEn: 'From Siu Sai Wan (Island Resort)',
            headwayLabelZh: '班次(分鐘)',
            headwayLabelEn: 'Headway (min)',
            topNoteZh: '',
            topNoteEn: '',
            bottomNoteZh: '視乎乘客需求加開',
            bottomNoteEn: 'Operated subject to passenger demand',
            dateGroups: [
              {
                id: 'dg_v2_1',
                dateTitleZh: '每日',
                dateTitleEn: 'Daily',
                rows: [
                  { time: '0700 - 2200', headway: '30 - 60' }
                ]
              }
            ]
          }
        ]
      },
      additionalInfo: {
        enabled: true,
        notes: [
          {
            symbol: '#',
            zh: '視乎乘客需求，或會加開不經錦田公路至新田的特別班次。',
            en: 'Additional express journeys omitting Kam Tin Rd to San Tin may be operated subject to demand.'
          },
          {
            symbol: '*',
            zh: '往皇崗口岸方向，巴士於模範邨及大欖隧道轉乘站後直達新田（特別班次適用）。',
            en: ''
          }
        ],
        disclaimerZh: '本時間表只供參考之用。',
        disclaimerEn: 'This timetable is published as a guide to the general level of service only.'
      },
      octopusFare: {
        enabled: true,
        titleZh: '八達通及電子支付分段收費',
        titleEn: 'Octopus & e-payment Section Fare',
        items: [
          {
            sectionZh: '高埔村往新田',
            sectionEn: 'Ko Po Tsuen to San Tin',
            price: '$6.6'
          }
        ],
        noteZh: '乘客在上下車時，必須使用同一張八達通或同一個電子支付工具的帳戶在收費器上拍卡或掃描二維碼一次，方可享用分段收費優惠。',
        noteEn: 'To enjoy the section fare discount, passengers must present the same Octopus card or use the same e-payment account when boarding and alighting the bus.'
      },
      bbiInfo: {
        enabled: true,
        titleZh: '巴士轉乘計劃',
        titleEn: 'Bus-Bus Interchange',
        items: [],
        footerZh: '詳情請瀏覽城巴網頁',
        footerEn: 'Please refer to Citybus Website for details',
        showQrBox: true
      },
      effectiveFooter: {
        enabled: true,
        dateZh: '2026年10月12日',
        dateEn: '12 October 2026',
        concessionZh: '十二歲以下小童及六十五歲或以上長者可享半價優惠',
        concessionEn: 'Half fare for children under the age of 12 and seniors aged 65 or above',
        hotline: '2136 8888',
        website: 'www.citybus.com.hk',
        operatorZh: '城巴',
        operatorEn: 'Citybus',
        versionCode: 'B13_261012_V1'
      }
    },
    stops: [
      { id: 's1', type: 'origin', variantType: { v1: 'origin', v2: 'origin' }, zh: '小西灣(藍灣半島)', en: 'Siu Sai Wan (Island Resort)', districtZh: '', districtEn: '', districtWidth: '100%', fare: '$27.60', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's2', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '富景花園, 小西灣道', en: 'Fullview Garden, Siu Sai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's3', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '小西灣邨, 小西灣道', en: 'Siu Sai Wan Est, Siu Sai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's4', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '富城閣, 柴灣道', en: 'Fu Shing Court, Chai Wan Rd', districtZh: '柴灣', districtEn: 'Chai Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's5', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '樂軒臺, 柴灣道', en: 'Lok Hin Terrace, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's6', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '環翠商場, 柴灣道', en: 'Wan Tsui Shopping Centre, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's7', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '青年廣場, 柴灣道', en: 'Youth Sq, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's8', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '興華邨裕興樓, 柴灣道', en: 'Yu Hing Hse Hing Wah Est, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's9', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '天主教海星堂, 柴灣道', en: 'Star of the Sea Catholic Church, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's10', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '興民邨, 柴灣道', en: 'Hing Man Est, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's11', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '山翠苑, 柴灣道', en: 'Shan Tsui Court, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's12', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '筲箕灣官立中學, 柴灣道', en: 'Shau Kei Wan Gov Sec Sch, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's13', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '阿公岩道, 柴灣道', en: 'A Kung Ngam Rd, Chai Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's14', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '南安里, 筲箕灣道', en: 'Nam On Lane, Shau Kei Wan Rd', districtZh: '筲箕灣', districtEn: 'Shau Kei Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's15', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新成街, 筲箕灣道', en: 'Sun Sing St, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's16', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '海晏街, 筲箕灣道', en: 'Hoi An St, Shau Kei Wan Rd', districtZh: '西灣河', districtEn: 'Sai Wan Ho', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's17', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '西灣河文娛中心, 筲箕灣道', en: 'Sai Wan Ho Civic Centre, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's18', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '太富街, 筲箕灣道', en: 'Tai Foo St, Shau Kei Wan Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's19', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '康怡廣場, 康山道', en: 'Kornhill Plaza, Kornhill Rd', districtZh: '太古', districtEn: 'Taikoo', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's20', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新威園, 英皇道', en: "Sunway Gardens, King's Rd", districtZh: '鰂魚涌', districtEn: 'Quarry Bay', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's21', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '北角官立小學, 英皇道', en: "North Point Gov Pri Sch, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's22', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '模範邨, 英皇道', en: "Model Housing Est, King's Rd", districtZh: '北角', districtEn: 'North Point', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '*', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's23', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '健康村, 英皇道', en: "Healthy Village, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: true, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's24', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '健威花園, 英皇道', en: "Healthy Gardens, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's25', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '琴行街, 英皇道', en: "Kam Hong St, King's Rd", districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's26', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '皇后像廣場, 干諾道中', en: 'Statue Sq, Connaught Rd C', districtZh: '中環', districtEn: 'Central', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's27', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '砵典乍街, 干諾道中', en: 'Pottinger St, Connaught Rd C', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's28', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '租庇利街, 干諾道中', en: 'Jubilee St, Connaught Rd C', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's29', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '永安中心, 干諾道中', en: 'Wing On Centre, Connaught Rd C', districtZh: '上環', districtEn: 'Sheung Wan', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's30', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '西區海底隧道巴士轉乘站', en: 'Western Harbour Crossing Bus-Bus Interchange', districtZh: '西九龍', districtEn: 'West Kowloon', districtWidth: '100%', fare: '$19.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: true, symbol: '*', manualBreakAfter: false, landmarks: [{ zh: '圓方/西九文化區', en: 'Elements/West Kowloon Cultural District', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's31', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '大欖隧道巴士轉乘站', en: 'Tai Lam Tunnel Bus-Bus Interchange', districtZh: '錦田 / 元朗', districtEn: 'Kam Tin / Yuen Long', districtWidth: '100%', fare: '$11.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '#', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's32', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '高埔村, 錦田公路', en: 'Ko Po Tsuen, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '爾巒', en: 'Riva', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's33', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '下高埔村, 錦田公路', en: 'Ha Ko Po Tsuen, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '山水盈', en: 'Crescent Green', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's34', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '凹頭, 錦田公路', en: 'Au Tau, Kam Tin Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '峻巒', en: 'Park Yoho', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's35', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '紅毛橋, 青山公路', en: 'Hung Mo Kiu, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's36', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '沙埔村, 青山公路', en: 'Sha Po Tsuen, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's37', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '逢吉鄉, 青山公路', en: 'Fung Kat Heung, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's38', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '模範鄉, 青山公路', en: 'Mo Fan Heung, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's39', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '壆圍, 青山公路', en: 'Pok Wai, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's40', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '大生圍, 青山公路', en: 'Tai Sang Wai, Castle Peak Rd', districtZh: '', districtEn: '', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '邁爾豪園/錦綉花園', en: 'Meister Hse/Fairview Park', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'bypass' } },
      { id: 's41', type: 'normal', variantType: { v1: 'normal', v2: 'normal' }, zh: '新田交匯處 / 新田運輸交匯處', en: 'San Tin Interchange / San Tin PTI', districtZh: '新田', districtEn: 'San Tin', districtWidth: '100%', fare: '$10.50', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '#', manualBreakAfter: false, landmarks: [], variantStatus: { v1: 'stop', v2: 'stop' } },
      { id: 's42', type: 'destination', variantType: { v1: 'destination', v2: 'destination' }, zh: '皇崗口岸', en: 'Huanggang Port', districtZh: '皇崗口岸', districtEn: 'Huanggang Port', districtWidth: '100%', fare: '', fareLabelExtraPx: 0, fareLineWidth: '100%', coloredBoxWidth: '', ignoreLandmarkZh: false, ignoreLandmarkEn: false, hasMtr: false, symbol: '', manualBreakAfter: false, landmarks: [{ zh: '深圳地鐵', en: 'Shenzhen Metro', extraWidthPx: 0 }], variantStatus: { v1: 'stop', v2: 'stop' } }
    ]
  };
  return raw;
}

function ensureVariantTimetablesSynced() {
  const T = appConfig.rightData.timetable;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  if (!Array.isArray(T.variantTables)) {
    T.variantTables = [];
  }

  T.variantTables = variants.map((v, idx) => {
    const existing = T.variantTables.find(vt => vt.variantId === v.id) || T.variantTables[idx];
    const defaultBoxColor = v.routeBoxColor || C.routeBoxBg || '#008837';
    const defaultBoxText = v.routeBoxTextColor || C.routeBoxText || '#ffffff';

    if (existing) {
      const syncedRouteNo = existing.routeNumber !== undefined ? existing.routeNumber : (v.routeNumber || '');
      const syncedInnerLine = existing.routeBoxInnerWhiteLine !== undefined ? existing.routeBoxInnerWhiteLine : (v.routeBoxInnerWhiteLine !== false);
      const syncedBoxPos = existing.routeBoxPosition || v.routeBoxPosition || 'left';
      const syncedBoxColor = existing.routeBoxColor || defaultBoxColor;
      const syncedBoxText = existing.routeBoxTextColor || defaultBoxText;

      v.routeNumber = syncedRouteNo;
      v.routeBoxInnerWhiteLine = syncedInnerLine;
      v.routeBoxPosition = syncedBoxPos;
      v.routeBoxColor = syncedBoxColor;
      v.routeBoxTextColor = syncedBoxText;

      return {
        ...existing,
        variantId: v.id,
        enabled: existing.enabled !== false,
        showVariantBadge: existing.showVariantBadge !== false,
        routeNumber: syncedRouteNo,
        routeBoxInnerWhiteLine: syncedInnerLine,
        routeBoxPosition: syncedBoxPos,
        routeBoxColor: syncedBoxColor,
        routeBoxTextColor: syncedBoxText,
        mentionedRouteNumbers: existing.mentionedRouteNumbers ?? '',
        showHeadwayCol: existing.showHeadwayCol !== false,
        showDateHeader: existing.showDateHeader !== false,
        originHeaderZh: existing.originHeaderZh ?? T.originHeaderZh ?? '小西灣(藍灣半島)開出',
        originHeaderEn: existing.originHeaderEn ?? T.originHeaderEn ?? 'From Siu Sai Wan (Island Resort)',
        headwayLabelZh: existing.headwayLabelZh ?? T.headwayLabelZh ?? '班次(分鐘)',
        headwayLabelEn: existing.headwayLabelEn ?? T.headwayLabelEn ?? 'Headway (min)',
        topNoteZh: existing.topNoteZh ?? '',
        topNoteEn: existing.topNoteEn ?? '',
        bottomNoteZh: existing.bottomNoteZh ?? '',
        bottomNoteEn: existing.bottomNoteEn ?? '',
        dateGroups: Array.isArray(existing.dateGroups)
          ? existing.dateGroups
          : JSON.parse(JSON.stringify(T.dateGroups || [{ id: 'dg_' + Date.now(), dateTitleZh: '每日', dateTitleEn: 'Daily', rows: [{ time: '0600 - 0030', headway: '30' }] }]))
      };
    }

    return {
      variantId: v.id,
      enabled: true,
      showVariantBadge: true,
      routeNumber: v.routeNumber || '',
      routeBoxInnerWhiteLine: v.routeBoxInnerWhiteLine !== false,
      routeBoxPosition: v.routeBoxPosition || 'left',
      routeBoxColor: defaultBoxColor,
      routeBoxTextColor: defaultBoxText,
      mentionedRouteNumbers: '',
      showHeadwayCol: true,
      showDateHeader: true,
      originHeaderZh: T.originHeaderZh || '小西灣(藍灣半島)開出',
      originHeaderEn: T.originHeaderEn || 'From Siu Sai Wan (Island Resort)',
      headwayLabelZh: T.headwayLabelZh || '班次(分鐘)',
      headwayLabelEn: T.headwayLabelEn || 'Headway (min)',
      topNoteZh: '',
      topNoteEn: '',
      bottomNoteZh: '',
      bottomNoteEn: '',
      dateGroups: JSON.parse(JSON.stringify(T.dateGroups || [
        { id: 'dg_' + Date.now() + '_' + idx, dateTitleZh: '每日', dateTitleEn: 'Daily', rows: [{ time: '0600 - 0030', headway: '30' }] }
      ]))
    };
  });

  return T.variantTables;
}

function updateLayout(key, val) {
  if (typeof appConfig.layout[key] === 'boolean') {
    appConfig.layout[key] = Boolean(val);
  } else if (
    val !== '' &&
    !isNaN(Number(val)) &&
    !['mapPosition', 'variantDisplayMode', 'exportEngine'].includes(key)
  ) {
    appConfig.layout[key] = Number(val);
  } else {
    appConfig.layout[key] = val;
  }

  const liveLabel = document.getElementById(`label-${key}`);
  if (liveLabel) {
    if (key === 'mapWidthPercent') liveLabel.textContent = `${appConfig.layout[key]}%`;
    else if (key === 'autoSplitMaxStops') liveLabel.textContent = `${appConfig.layout[key]} 站`;
    else if (key === 'sheetPaddingMm') liveLabel.textContent = `${appConfig.layout[key]} mm`;
    else if (key === 'stopVerticalGapPx') liveLabel.textContent = `${appConfig.layout[key]} px`;
    else if (key === 'nodeToNameGapPx') liveLabel.textContent = `${appConfig.layout[key]} px`;
    else if (key === 'parallelLineSpacingPx') liveLabel.textContent = `${appConfig.layout[key]} px`;
  }

  const numInput = document.getElementById(`input-${key}`);
  if (numInput && document.activeElement !== numInput) {
    numInput.value = appConfig.layout[key];
  }
  const rangeInput = document.getElementById(`range-${key}`);
  if (rangeInput && document.activeElement !== rangeInput) {
    rangeInput.value = appConfig.layout[key];
  }

  renderA4Sheet();

  if (['mapPosition', 'variantDisplayMode', 'autoSplitMaxStops', 'stickLastModuleToBottom', 'showVariantLegend'].includes(key)) {
    renderEditorSidebar();
  }
}

// Format effective date string into "(日期)起生效,直至另行通告 | Effective from (date) until further notice."
function formatEffectiveDateText(F) {
  const rawZh = (F.dateZh || '').trim();
  const rawEn = (F.dateEn || '').trim();

  let zhFormatted = '';
  if (rawZh) {
    if (rawZh.includes('直至另行通告')) {
      zhFormatted = rawZh;
    } else {
      const cleanDateZh = rawZh.replace(/(起)?生效.*$/, '').trim();
      zhFormatted = `${cleanDateZh}起生效,直至另行通告`;
    }
  }

  let enFormatted = '';
  if (rawEn) {
    if (/until further notice/i.test(rawEn)) {
      enFormatted = rawEn;
    } else {
      const cleanDateEn = rawEn.replace(/^Effective\s*(from\s*)?/i, '').replace(/\.$/, '').trim();
      enFormatted = `Effective from ${cleanDateEn} until further notice.`;
    }
  }

  if (zhFormatted && enFormatted) return `${zhFormatted} | ${enFormatted}`;
  return zhFormatted || enFormatted;
}

// Track metrics: allows small parallelLineSpacingPx values (down to 6px) to work freely while scaling badges so they never overlap
function getTrackMetrics() {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const isParallel = L.variantDisplayMode === 'parallel_lines' && variants.length > 1;
  const normSize = Math.max(7, Number(L.normalNodeSizePx) || 9.5);
  const terminalSize = normSize + 2.8;

  if (isParallel) {
    // Respect small spacing values (6px ~ 26px) directly!
    const spacing = Math.max(6, Number(L.parallelLineSpacingPx) ?? 14);
    const parallelNormSize = Math.min(Math.max(6.5, normSize - 1.2), Math.max(6.5, spacing - 0.8));
    const parallelTerminalSize = Math.min(parallelNormSize + 2.2, Math.max(8, spacing + 0.5));
    // Keep badge large (up to 14.5px), but cap at (spacing - 1.5px) when spacing is small so adjacent badges never stick together
    const badgeSize = Math.min(14.5, Math.max(7.5, spacing - 1.5));
    const maxNode = Math.max(parallelTerminalSize, badgeSize);
    const leftPad = Math.ceil(maxNode / 2) + 2;
    const rightPad = 8;
    const trackWidth = leftPad + (variants.length - 1) * spacing + Math.ceil(maxNode / 2) + rightPad;

    const tracks = variants.map((v, idx) => ({
      variant: v,
      index: idx,
      label: String(idx + 1),
      x: leftPad + idx * spacing,
      color: v.color || C.routeLineColor,
      badgeText: v.badgeText === 'black' ? '#111827' : '#ffffff',
      lineStyle: v.lineStyle === 'dashed' ? 'dashed' : 'solid',
      normSize: parallelNormSize,
      terminalSize: parallelTerminalSize,
      badgeSize
    }));

    return {
      isParallel: true,
      trackWidth,
      centerX: tracks[0]?.x || 10,
      lineThickness: Math.min(Math.max(2.0, Number(L.lineThicknessPx) - 1.3), Math.max(1.8, spacing * 0.42)),
      normSize: parallelNormSize,
      terminalSize: parallelTerminalSize,
      badgeSize,
      tracks
    };
  }

  // Single main line mode
  const badgeSize = 14;
  const centerX = Math.max(10, Math.ceil(terminalSize / 2) + 2);
  const trackWidth = centerX + Math.ceil(terminalSize / 2) + 8;
  return {
    isParallel: false,
    trackWidth,
    centerX,
    lineThickness: Number(L.lineThicknessPx) || 4.5,
    normSize,
    terminalSize,
    badgeSize,
    tracks: [
      {
        variant: variants[0] || { id: 'v1', color: C.routeLineColor, badgeText: 'white', lineStyle: 'solid' },
        index: 0,
        label: '1',
        x: centerX,
        color: C.routeLineColor,
        badgeText: (variants[0]?.badgeText === 'black') ? '#111827' : '#ffffff',
        lineStyle: 'solid',
        normSize,
        terminalSize,
        badgeSize
      }
    ]
  };
}

// Pre-compute stop fare zones & inherit the section fare's fareLineWidth for the zone background width
function computeStopsWithFareZones(stops) {
  const variants = appConfig.variants || [];
  const total = stops.length;

  const variantStopIndicesMap = {};
  variants.forEach(v => {
    const activeIndices = [];
    stops.forEach((s, idx) => {
      const st = (s.variantStatus && s.variantStatus[v.id]) || 'stop';
      if (st === 'stop') {
        activeIndices.push(idx);
      }
    });
    variantStopIndicesMap[v.id] = activeIndices;
  });

  let fareCounter = 0;
  let currentZoneWidth = '100%';

  return stops.map((stop, idx) => {
    if (stop.hasCorridor && stop.corridorZh && (!stop.zh || stop.zh === '新巴士站, 道路名稱')) {
      stop.zh = stop.corridorZh;
      if (stop.corridorEn) stop.en = stop.corridorEn;
    }

    const hasNewFare = Boolean(stop.fare && stop.fare.trim() !== '');
    if (hasNewFare) {
      fareCounter++;
      currentZoneWidth = formatCssSize(stop.fareLineWidth, '100%');
    }

    const forceTopCont = Boolean(stop.contFromLeft);
    const forceBottomCont = Boolean(stop.contToRight) || (idx === total - 1 && Boolean(stop.manualBreakAfter));

    const variantLineState = {};
    let anyActiveOrigin = false;
    let anyActiveDest = false;
    let anyActiveColored = false;
    let anyActiveCorridor = Boolean(stop.hasCorridor || stop.isCorridor || stop.type === 'corridor');
    let anyActiveTunnel = Boolean(stop.hasTunnel || stop.isTunnel || stop.type === 'tunnel');

    variants.forEach(v => {
      const st = (stop.variantStatus && stop.variantStatus[v.id]) || 'stop';
      const vType = getStopVariantType(stop, v.id, idx, total);
      const activeIndices = variantStopIndicesMap[v.id] || [];
      const isOriginType = vType === 'origin' || vType === 'origin_number_only';
      const isTunnelType = Boolean(stop.hasTunnel || stop.isTunnel || stop.type === 'tunnel' || vType === 'tunnel');
      const isCorridorType = !isTunnelType && Boolean(stop.hasCorridor || stop.isCorridor || stop.type === 'corridor' || vType === 'corridor');
      const isSpecialPassType = isCorridorType || isTunnelType;

      let hasStopBefore = false;
      for (let k = idx - 1; k >= 0; k--) {
        const kSt = (stops[k].variantStatus && stops[k].variantStatus[v.id]) || 'stop';
        const kType = getStopVariantType(stops[k], v.id, k, total);
        if (kSt === 'stop') {
          if (kType === 'destination') break;
          hasStopBefore = true;
          break;
        }
      }

      let hasStopAfter = false;
      for (let k = idx + 1; k < total; k++) {
        const kSt = (stops[k].variantStatus && stops[k].variantStatus[v.id]) || 'stop';
        const kType = getStopVariantType(stops[k], v.id, k, total);
        if (kSt === 'stop') {
          if (kType === 'origin' || kType === 'origin_number_only') break;
          hasStopAfter = true;
          break;
        }
      }

      const showNode = st === 'stop';
      let showTopLine = false;
      let showBottomLine = false;

      if (st === 'stop') {
        showTopLine = (hasStopBefore && !isOriginType) || forceTopCont;
        showBottomLine = (hasStopAfter && vType !== 'destination') || forceBottomCont;
      } else if (st === 'bypass') {
        showTopLine = (hasStopBefore && hasStopAfter) || forceTopCont;
        showBottomLine = (hasStopBefore && hasStopAfter) || forceBottomCont;
      }

      const isVariantOrigin = showNode && isOriginType && !isSpecialPassType;
      const isVariantDest = showNode && vType === 'destination' && !isSpecialPassType;
      const isVariantColored = showNode && !isSpecialPassType && (vType === 'origin' || vType === 'colored' || vType === 'destination');
      const isVariantCorridor = st !== 'none' && isCorridorType;
      const isVariantTunnel = st !== 'none' && isTunnelType;

      if (isVariantOrigin) anyActiveOrigin = true;
      if (isVariantDest) anyActiveDest = true;
      if (isVariantColored) anyActiveColored = true;
      if (isVariantCorridor) anyActiveCorridor = true;
      if (isVariantTunnel) anyActiveTunnel = true;

      variantLineState[v.id] = {
        status: st,
        vType,
        showNode,
        showTopLine,
        showBottomLine,
        forceTopCont,
        forceBottomCont,
        isVariantOrigin,
        isVariantDest,
        isVariantColored,
        isVariantCorridor,
        isVariantTunnel,
        isTerminalNode: isVariantOrigin || isVariantDest,
        hasActiveStops: activeIndices.length > 0
      };
    });

    const isOrigin = anyActiveOrigin;
    const isDest = anyActiveDest;
    const isColoredBgStop = anyActiveColored;
    const isTunnelStop = anyActiveTunnel;
    const isCorridorStop = !isTunnelStop && anyActiveCorridor;

    const isEvenZoneStop = appConfig.colors.evenZoneBgEnabled &&
      fareCounter > 0 &&
      fareCounter % 2 === 0 &&
      (appConfig.layout.evenZoneCoverAllStops ? true : hasNewFare);

    return {
      ...stop,
      index: idx,
      fareZoneNumber: fareCounter,
      fareZoneWidth: currentZoneWidth,
      hasNewFare,
      isEvenZoneStop,
      isOrigin,
      isDest,
      isColoredBgStop,
      isCorridorStop,
      isTunnelStop,
      variantLineState
    };
  });
}

// Group contiguous stops within a column by Fare Zone and carry the zone's custom width
function groupColumnStopsByFareZone(colStops) {
  const groups = [];
  colStops.forEach(stop => {
    const prevGroup = groups[groups.length - 1];
    if (
      prevGroup &&
      prevGroup.isEvenZone === stop.isEvenZoneStop &&
      (!stop.isEvenZoneStop || prevGroup.fareZoneNumber === stop.fareZoneNumber)
    ) {
      prevGroup.stops.push(stop);
    } else {
      groups.push({
        isEvenZone: stop.isEvenZoneStop,
        fareZoneNumber: stop.fareZoneNumber,
        zoneWidth: stop.fareZoneWidth || '100%',
        stops: [stop]
      });
    }
  });
  return groups;
}

// Update per-column top pull-down space
function updateColSpace(kind, colIdx, val) {
  const L = appConfig.layout;
  const numVal = Math.max(0, Number(val) || 0);
  if (kind === 'top') {
    if (!Array.isArray(L.colTopSpaces)) L.colTopSpaces = [0, 0, 0];
    L.colTopSpaces[colIdx] = numVal;
  }
  const labelEl = document.getElementById(`col-space-label-${kind}-${colIdx}`);
  if (labelEl) labelEl.textContent = `${numVal} px`;
  renderA4Sheet();
}

// Format custom CSS width helper (automatically appends 'px' if pure number is entered)
function formatCssSize(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  const s = String(val).trim();
  if (!s) return fallback;
  if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`;
  return s;
}

// Get custom top pull-down padding (px) for a specific route map column
function getColTopSpacePx(colIdx) {
  const L = appConfig.layout;
  if (Array.isArray(L.colTopSpaces) && L.colTopSpaces[colIdx] !== undefined) {
    return Math.max(0, Number(L.colTopSpaces[colIdx]) || 0);
  }
  return 0;
}

// Get custom bottom lift padding (px) for a specific route map column
function getColBottomSpacePx(colIdx, totalCols) {
  const L = appConfig.layout;
  if (Array.isArray(L.colBottomSpaces) && L.colBottomSpaces[colIdx] !== undefined) {
    return Math.max(0, Number(L.colBottomSpaces[colIdx]) || 0);
  }
  return colIdx === totalCols - 1 ? Math.max(0, Number(L.lastColBottomSpacePx) || 96) : 0;
}

// Get stop type for a specific variant ('origin' | 'normal' | 'colored' | 'destination')
function getStopVariantType(stop, variantId, stopIdx = 0, totalStops = 1) {
  if (stop.variantType && stop.variantType[variantId]) {
    return stop.variantType[variantId];
  }
  if (stop.type) return stop.type;
  if (stopIdx === 0) return 'origin';
  if (stopIdx === totalStops - 1) return 'destination';
  return 'normal';
}

// Application State
let appConfig = getDefaultB13Config();
let currentTab = 'theme';
let currentZoom = 0.82;
let expandedStopId = 's30';
let stopSearchQuery = '';
let cachedFontEmbedCSS = null; // Cache webfont CSS so exports are near-instant

// HTML Escape helper
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 border-emerald-400' :
             type === 'info' ? 'bg-sky-600 border-sky-400' : 'bg-rose-600 border-rose-400';
  el.className = `px-4 py-2.5 rounded-lg border text-white text-xs font-medium shadow-xl flex items-center gap-2 transition-all duration-300 ${bg}`;
  el.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i><span>${esc(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// ==========================================================================
// 2. TRACK METRICS & SVG STOP NODE RENDERERS (PERFECT CIRCLES, ZERO SQUASH)
// ==========================================================================
// 站點圓圈 SVG 生成器（支援自定義邊框色 primaryColor 與圓心填充色 fillColor）
function createSvgStopNode({ kind, size, primaryColor, fillColor, secondaryColor }) {
  const s = Math.round(size * 10) / 10;
  const half = s / 2;
  const defaultInnerFill = appConfig?.colors?.nodeFillColor || '#ffffff';

  if (kind === 'solid_dot') {
    const r = Math.max(2.2, half - 0.8);
    return `
      <svg class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${primaryColor}" />
      </svg>
    `;
  }

  if (kind === 'partial') {
    const r = Math.max(2.5, half - 1.1);
    const dotR = Math.max(1.4, r * 0.42);
    return `
      <svg class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="1.9" stroke-dasharray="2.2 1.5" />
        <circle cx="${half}" cy="${half}" r="${dotR}" fill="${secondaryColor || primaryColor}" />
      </svg>
    `;
  }

  if (kind === 'terminal') {
    const strokeW = 3.1;
    const r = Math.max(2.6, half - strokeW / 2 - 0.2);
    return `
      <svg class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
        <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="${strokeW}" />
      </svg>
    `;
  }

  const r = Math.max(2.3, half - 1.15);
  return `
    <svg class="stop-node-svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="width:${s}px;height:${s}px;display:inline-block;vertical-align:middle;flex-shrink:0;">
      <circle cx="${half}" cy="${half}" r="${r}" fill="${fillColor || defaultInnerFill}" stroke="${primaryColor}" stroke-width="2.1" />
    </svg>
  `;
}

// 香港港鐵 MTR 標準比例 SVG 圖標（支援從顏色中心自定義底色與線條色）
function createMtrLogoSvg(heightPx = 12, customBg = null, customFg = null) {
  const C = appConfig?.colors || {};
  const bgColor = customBg || C.mtrSvgBg || '#A81428';
  const fgColor = customFg || C.mtrSvgFg || '#ffffff';
  const h = Math.round(heightPx * 10) / 10;
  const w = Math.round(h * 1.46 * 10) / 10;
  return `
    <svg width="${w}" height="${h}" viewBox="0 0 146 100" style="width:${w}px; height:${h}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <rect x="2" y="2" width="142" height="96" rx="48" ry="48" fill="${bgColor}" stroke="#ffffff" stroke-width="3.5" />
      <line x1="73" y1="14" x2="73" y2="86" stroke="${fgColor}" stroke-width="11.8" stroke-linecap="butt" />
      <path d="M 41 18 A 32 28.5 0 0 0 105 18" fill="none" stroke="${fgColor}" stroke-width="11.8" stroke-linecap="butt" />
      <path d="M 41 82 A 32 28.5 0 0 1 105 82" fill="none" stroke="${fgColor}" stroke-width="11.8" stroke-linecap="butt" />
    </svg>
  `;
}

// 途徑走廊標誌 (HK_traffic_sign_353.svg)：1:1 正方形背景，支援班次專屬底色與圖案色
function createHkTrafficSign353Svg(sizePx = 15.5, bgColor = null, fgColor = null) {
  const C = appConfig?.colors || {};
  const bg = bgColor || C.corridorSvgBg || C.routeLineColor || '#008837';
  const fg = fgColor || C.corridorSvgFg || '#ffffff';
  const s = Math.round(sizePx * 10) / 10;
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 100 100" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bg}" stroke="#ffffff" stroke-width="4" />
      <polygon points="37,15 46.5,15 46.5,44 26,44" fill="${fg}" />
      <polygon points="53.5,15 63,15 74,44 53.5,44" fill="${fg}" />
      <rect x="13" y="46.5" width="74" height="4.2" fill="${fg}" />
      <polygon points="24,54 46.5,54 46.5,85 14,85" fill="${fg}" />
      <polygon points="53.5,54 76,54 86,85 53.5,85" fill="${fg}" />
    </svg>
  `;
}

// 途徑隧道標誌 (HK_Tunnel.svg)：1:1 正方形背景，支援班次專屬底色與圖案色
function createHkTunnelSvg(sizePx = 15.5, bgColor = null, fgColor = null) {
  const C = appConfig?.colors || {};
  const bg = bgColor || C.tunnelSvgBg || C.routeLineColor || '#008837';
  const fg = fgColor || C.tunnelSvgFg || '#ffffff';
  const s = Math.round(sizePx * 10) / 10;
  return `
    <svg width="${s}" height="${s}" viewBox="0 0 100 100" style="width:${s}px; height:${s}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <rect x="2" y="2" width="96" height="96" rx="14" ry="14" fill="${bg}" stroke="#ffffff" stroke-width="4" />
      <path d="M 15 56 L 15 24 C 15 19.5, 18.5 16, 23 16 L 77 16 C 81.5 16, 85 19.5, 85 24 L 85 56 L 69 56 L 69 41 A 19 17.5 0 0 0 31 41 L 31 56 Z" fill="${fg}" />
      <polygon points="33.5,52 46.8,52 46.8,85 16,85" fill="${fg}" />
      <polygon points="53.2,52 66.5,52 84,85 53.2,85" fill="${fg}" />
    </svg>
  `;
}

// 動態速度線秒錶 SVG 圖標（支援自定義大小與顏色）
function createFastClockSvg(heightPx = 20, color = null) {
  const C = appConfig?.colors || {};
  const strokeColor = color || C.fastClockSvgColor || '#ffffff';
  const h = Math.round(heightPx * 10) / 10;
  const w = Math.round(h * 1.22 * 10) / 10;
  return `
    <svg width="${w}" height="${h}" viewBox="0 0 39 32" fill="none" style="width:${w}px; height:${h}px; display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
      <line x1="3.5" y1="10" x2="11" y2="10" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="0.8" y1="16" x2="2.4" y2="16" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="5.2" y1="16" x2="9.8" y2="16" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="2.5" y1="22" x2="11" y2="22" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" />
      <line x1="20.5" y1="2.2" x2="26.5" y2="2.2" stroke="${strokeColor}" stroke-width="2.7" stroke-linecap="round" />
      <line x1="23.5" y1="2.2" x2="23.5" y2="5.2" stroke="${strokeColor}" stroke-width="2.7" stroke-linecap="round" />
      <line x1="32" y1="6.5" x2="34.5" y2="4" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="23.5" cy="17.2" r="11.5" stroke="${strokeColor}" stroke-width="2.8" />
      <polyline points="23.5,10.5 23.5,17.2 28.4,19.8" stroke="${strokeColor}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

// Render Variant Numbers ('1', '2'...) inside a track cell (scales cleanly with spacing so badges never stick together)
function renderOriginParallelNumbersTrackCellHTML(stop, metrics) {
  const bSize = metrics.badgeSize || 13.5;
  const fontSize = Math.max(6.8, bSize - 4.0);
  const elementsHTML = metrics.tracks.map(t => {
    const vState = stop.variantLineState?.[t.variant.id];
    if (!vState) return '';

    if (vState.isVariantOrigin) {
      return `
        <div style="
          position:absolute;
          left:${t.x}px;
          bottom:1.5px;
          width:${bSize}px;
          height:${bSize}px;
          border-radius:9999px;
          background-color:${t.color};
          color:${t.badgeText};
          transform:translateX(-50%);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:${fontSize}px;
          font-weight:900;
          line-height:1;
          box-shadow:0 0 0 1.2px #ffffff;
          z-index:3;
        ">
          <span class="sheet-text-fix" style="line-height:1;">${esc(t.label)}</span>
        </div>
      `;
    }

    if (vState.showTopLine) {
      return `
        <div style="
          position:absolute;
          left:${t.x}px;
          top:0;
          bottom:0;
          border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
          transform:translateX(-50%);
          z-index:1;
        "></div>
      `;
    }

    return '';
  }).join('');

  return `
    <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; min-height:${Math.ceil(bSize) + 3}px; align-self:stretch; flex-shrink:0;">
      ${elementsHTML}
    </div>
  `;
}

// Standalone row for Origin Variant Numbers when the stop does NOT have a Section Fare badge
function renderOriginParallelNumbersRowHTML(stop, metrics) {
  if (!metrics.isParallel) return '';
  const hasAnyOriginHere = metrics.tracks.some(t => stop.variantLineState?.[t.variant.id]?.isVariantOrigin);
  if (!hasAnyOriginHere) return '';
  const bSize = metrics.badgeSize || 14;

  return `
    <div style="display:flex; align-items:stretch; width:100%; height:${Math.ceil(bSize) + 3}px; flex-shrink:0;">
      ${renderOriginParallelNumbersTrackCellHTML(stop, metrics)}
      <div style="flex:1;"></div>
    </div>
  `;
}

// Fixed-height continuous vertical route line spacer row (restored explicit height & min-height!)
function renderTrackSpacerRowHTML(stop, metrics, direction = 'top', heightPx = 5) {
  if (!stop || heightPx <= 0) return '';
  const prop = direction === 'bottom' ? 'showBottomLine' : 'showTopLine';

  if (metrics.isParallel) {
    const linesHTML = metrics.tracks.map(t => {
      const vState = stop.variantLineState?.[t.variant.id];
      if (!vState || !vState[prop]) return '';
      return `
        <div style="
          position:absolute;
          left:${t.x}px;
          top:0;
          bottom:0;
          border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
          transform:translateX(-50%);
        "></div>
      `;
    }).join('');
    return `
      <div style="display:flex; align-items:stretch; width:100%; height:${heightPx}px; min-height:${heightPx}px; flex-shrink:0; position:relative; z-index:1;">
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
          ${linesHTML}
        </div>
        <div style="flex:1;"></div>
      </div>
    `;
  }

  const anyShow = (appConfig.variants || []).some(v => stop.variantLineState?.[v.id]?.[prop]);
  return `
    <div style="display:flex; align-items:stretch; width:100%; height:${heightPx}px; min-height:${heightPx}px; flex-shrink:0; position:relative; z-index:1;">
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
        ${anyShow ? `
          <div style="
            position:absolute;
            left:${metrics.centerX}px;
            top:0;
            bottom:0;
            width:${metrics.lineThickness}px;
            background:${appConfig.colors.routeLineColor};
            transform:translateX(-50%);
          "></div>
        ` : ''}
      </div>
      <div style="flex:1;"></div>
    </div>
  `;
}

// Render column continuation top ("▲ 續左欄 Cont.") - 當勾選「無前站亦可用 (contFromLeft)」時不顯示文字
function renderColumnContinuationTopHTML(colIndex, targetStop, metrics) {
  const C = appConfig.colors;
  const nodeNameGapPx = Math.max(0, Number(appConfig.layout.nodeToNameGapPx) ?? 6);
  const forceShow = Boolean(targetStop?.contFromLeft);
  const hideText = forceShow;

  if (metrics.isParallel) {
    const linesAndArrowsHTML = metrics.tracks.map(t => {
      const vState = targetStop?.variantLineState?.[t.variant.id];
      const shouldDraw = vState && (vState.showTopLine || (forceShow && vState.status !== 'none'));
      if (!shouldDraw) return '';
      return `
        <svg width="8" height="22" viewBox="0 0 8 22" style="position:absolute; left:${t.x}px; top:0; transform:translateX(-50%); overflow:visible;">
          <line x1="4" y1="2" x2="4" y2="22" stroke="${t.color}" stroke-width="${metrics.lineThickness}" stroke-dasharray="3 2.2" />
          <polygon points="4,0 0.8,5.2 7.2,5.2" fill="${t.color}" />
        </svg>
      `;
    }).join('');

    if (!linesAndArrowsHTML && !forceShow) return '';

    return `
      <div style="display:flex; align-items:center; height:22px; width:100%; margin-bottom:1px; flex-shrink:0; position:relative; z-index:1;">
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
          ${linesAndArrowsHTML}
        </div>
        ${!hideText ? `
          <div style="font-size:7.6px; font-weight:700; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; opacity:0.92;">
            <span class="sheet-text-fix">▲ 續左欄 Cont.</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  const anyShowTop = forceShow || (appConfig.variants || []).some(v => targetStop?.variantLineState?.[v.id]?.showTopLine);
  if (!anyShowTop) return '';

  return `
    <div style="display:flex; align-items:center; height:22px; width:100%; margin-bottom:1px; flex-shrink:0; position:relative; z-index:1;">
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
        <svg width="10" height="22" viewBox="0 0 10 22" style="position:absolute; left:${metrics.centerX}px; top:0; transform:translateX(-50%); overflow:visible;">
          <line x1="5" y1="2" x2="5" y2="22" stroke="${C.routeLineColor}" stroke-width="${metrics.lineThickness}" stroke-dasharray="3.2 2.2" />
          <polygon points="5,0 1,6 9,6" fill="${C.routeLineColor}" />
        </svg>
      </div>
      ${!hideText ? `
        <div style="font-size:7.6px; font-weight:700; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; opacity:0.92;">
          <span class="sheet-text-fix">▲ 續左欄 Cont.</span>
        </div>
      ` : ''}
    </div>
  `;
}

// Render column continuation bottom ("接右欄 Cont. ➔") - 當勾選「無後站亦可用 (contToRight)」時不顯示文字
function renderColumnContinuationBottomHTML(colIndex, targetStop, metrics) {
  const C = appConfig.colors;
  const nodeNameGapPx = Math.max(0, Number(appConfig.layout.nodeToNameGapPx) ?? 6);
  const forceShow = Boolean(targetStop?.contToRight) || Boolean(targetStop?.manualBreakAfter);
  const hideText = Boolean(targetStop?.contToRight);

  if (metrics.isParallel) {
    const linesAndArrowsHTML = metrics.tracks.map(t => {
      const vState = targetStop?.variantLineState?.[t.variant.id];
      const shouldDraw = vState && (vState.showBottomLine || (forceShow && vState.status !== 'none'));
      if (!shouldDraw) return '';
      return `
        <svg width="8" height="22" viewBox="0 0 8 22" style="position:absolute; left:${t.x}px; top:0; transform:translateX(-50%); overflow:visible;">
          <line x1="4" y1="0" x2="4" y2="16" stroke="${t.color}" stroke-width="${metrics.lineThickness}" stroke-dasharray="3 2.2" />
          <polygon points="0.8,14.5 7.2,14.5 4,20.5" fill="${t.color}" />
        </svg>
      `;
    }).join('');

    if (!linesAndArrowsHTML && !forceShow) return '';

    return `
      <div style="display:flex; align-items:center; height:22px; width:100%; margin-top:1px; flex-shrink:0; position:relative; z-index:1;">
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
          ${linesAndArrowsHTML}
        </div>
        ${!hideText ? `
          <div style="font-size:7.6px; font-weight:700; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; opacity:0.92;">
            <span class="sheet-text-fix">接右欄 Cont. ➔</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  const anyShowBottom = forceShow || (appConfig.variants || []).some(v => targetStop?.variantLineState?.[v.id]?.showBottomLine);
  if (!anyShowBottom) return '';

  return `
    <div style="display:flex; align-items:center; height:22px; width:100%; margin-top:1px; flex-shrink:0; position:relative; z-index:1;">
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; height:100%; flex-shrink:0;">
        <svg width="10" height="22" viewBox="0 0 10 22" style="position:absolute; left:${metrics.centerX}px; top:0; transform:translateX(-50%); overflow:visible;">
          <line x1="5" y1="0" x2="5" y2="16" stroke="${C.routeLineColor}" stroke-width="${metrics.lineThickness}" stroke-dasharray="3.2 2.2" />
          <polygon points="1,14.5 9,14.5 5,21" fill="${C.routeLineColor}" />
        </svg>
      </div>
      ${!hideText ? `
        <div style="font-size:7.6px; font-weight:700; color:${C.routeLineColor}; padding-left:${nodeNameGapPx}px; opacity:0.92;">
          <span class="sheet-text-fix">接右欄 Cont. ➔</span>
        </div>
      ` : ''}
    </div>
  `;
}

// Master Render for the A4 Sheet (直接在 #a4-sheet 綁定字體與盒模型，確保導出時 100% 零字體偏差與零移位)
function renderA4Sheet() {
  const sheet = document.getElementById('a4-sheet');
  if (!sheet) return;

  const L = appConfig.layout;
  const fontStack = "'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif";
  sheet.style.setProperty('--export-text-offset', `${Number(L.exportTextOffsetY) || 0}px`);
  sheet.style.setProperty('--sheet-font', fontStack);
  sheet.style.fontFamily = fontStack;
  sheet.style.lineHeight = '1.5';

  const rawMm = L.sheetPaddingMm !== undefined && L.sheetPaddingMm !== '' ? Number(L.sheetPaddingMm) : 5;
  const padPx = Math.max(0, Math.round(rawMm * 3.78));
  const isMapLeft = L.mapPosition !== 'right';

  const mapHTML = renderRouteMapSectionHTML();
  const infoHTML = renderRightInfoColumnHTML();

  sheet.innerHTML = `
    <div style="
      width:100%;
      height:100%;
      padding:${padPx}px;
      box-sizing:border-box;
      display:flex;
      flex-direction:${isMapLeft ? 'row' : 'row-reverse'};
      align-items:stretch;
      justify-content:space-between;
      background:#ffffff;
      font-family:${fontStack};
    ">
      ${mapHTML}
      ${infoHTML}
    </div>
  `;
}

function renderStopItemHTML(stop, metrics) {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const effVar = getStopEffectiveVariant(stop) || {};
  const isTunnelStop = Boolean(stop.isTunnelStop || stop.hasTunnel || stop.type === 'tunnel');
  const isCorridorStop = !isTunnelStop && Boolean(stop.isCorridorStop || stop.hasCorridor || stop.type === 'corridor');
  const isSpecialPassStop = isCorridorStop || isTunnelStop;
  const isColoredStop = stop.isColoredBgStop && !isSpecialPassStop;

  const hasDistrict = Boolean((stop.districtZh && stop.districtZh.trim()) || (stop.districtEn && stop.districtEn.trim()));
  const hasFare = stop.hasNewFare;
  const hasAnyOriginHere = !isSpecialPassStop && metrics.isParallel && metrics.tracks.some(t => stop.variantLineState?.[t.variant.id]?.isVariantOrigin);

  const districtTextColor = C.districtText === 'black' ? '#111827' : '#ffffff';
  const fareTextColor = C.fareText === 'black' ? '#111827' : '#ffffff';
  const coloredStopBgColor = effVar.originDestBg || C.originDestBg || '#008837';
  const coloredStopTextColor = (effVar.originDestText || C.originDestText) === 'black' ? '#111827' : '#ffffff';

  const customDistrictWidth = formatCssSize(stop.districtWidth, '100%');
  const customFareLineWidth = formatCssSize(stop.fareLineWidth, '100%');
  const customColoredBoxWidth = formatCssSize(stop.coloredBoxWidth, '');
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 6);
  const fareExtraPx = Math.max(0, Number(stop.fareLabelExtraPx) || 0);

  const ignoreZh = Boolean(stop.ignoreLandmarkZh);
  const ignoreEn = Boolean(stop.ignoreLandmarkEn);
  const anyIgnoreLandmark = ignoreZh || ignoreEn;

  const mtrBadgeHTML = stop.hasMtr
    ? createMtrLogoSvg(Math.max(10.5, Number(L.stopNameFontSizePx) + 1.2), effVar.mtrSvgBg || C.mtrSvgBg, effVar.mtrSvgFg || C.mtrSvgFg)
    : '';
  const trailingBadgesHTML = mtrBadgeHTML;

  // 1. District Sub-Row
  const districtSubRowHTML = hasDistrict ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${renderTrackPassThroughHTML(stop, metrics)}
      <div style="flex:1; min-width:0; padding:0px 6px ${hasFare ? '2px' : '1.5px'} ${nodeNameGapPx}px; display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="line-height:0; width:100%;">
          <span class="sheet-badge" style="
            background-color:${effVar.districtBg || C.districtBg};
            color:${districtTextColor};
            padding:1.1px 4.5px 1.2px 4.5px;
            border-radius:2.5px;
            font-size:10px;
            font-weight:700;
            letter-spacing:0.01em;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
            width:${customDistrictWidth};
            max-width:100%;
          ">
            <span class="sheet-text-fix" style="display:block; line-height:1.05; text-align:center; transform:translateY(var(--export-text-offset, 0px));">${esc(stop.districtZh)}${stop.districtEn ? ' ' + esc(stop.districtEn) : ''}</span>
          </span>
        </div>
      </div>
    </div>
  ` : '';

  // 2. Section Fare Sub-Row
  const fareBgColor = effVar.fareBg || C.fareBg;
  const fareSubRowHTML = hasFare ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${hasAnyOriginHere ? renderOriginParallelNumbersTrackCellHTML(stop, metrics) : renderTrackPassThroughHTML(stop, metrics)}
      <div style="flex:1; min-width:0; padding:0px 6px 0px ${nodeNameGapPx}px; display:flex; flex-direction:column; justify-content:flex-end;">
        <div style="line-height:1; width:100%; display:flex; flex-direction:column; align-items:flex-start;">
          <span class="sheet-badge" style="
            background-color:${fareBgColor};
            color:${fareTextColor};
            padding:1.8px ${6.5 + fareExtraPx}px 1.4px 6.5px;
            max-width:100%;
            border-radius:3px;
            font-size:18px;
            font-weight:900;
            letter-spacing:0.01em;
            display:inline-flex;
            align-items:center;
            justify-content:flex-start;
            box-sizing:border-box;
          ">
            <span class="sheet-text-fix" style="display:block; line-height:1.05; text-align:left; transform:translateY(var(--export-text-offset, 0px));">${esc(stop.fare)}</span>
          </span>
          ${customFareLineWidth !== '0px' && customFareLineWidth !== '0%' ? `
            <div style="
              width:${customFareLineWidth};
              max-width:100%;
              height:1.5px;
              background-color:${fareBgColor};
              margin-top:2px;
              margin-bottom:1.5px;
              border-radius:1px;
            "></div>
          ` : `<div style="height:2px;"></div>`}
        </div>
      </div>
    </div>
  ` : (hasAnyOriginHere ? renderOriginParallelNumbersRowHTML(stop, metrics) : '');

  const destArrowLeadInHTML = (stop.isDest && !hasDistrict && !hasFare)
    ? renderTrackSpacerRowHTML(stop, metrics, 'top', 5)
    : '';

  // 3. Landmarks HTML (支援 4 種位置：middle | bottom_right | below_name | after_callouts)
  const defaultLmPos = stop.landmarkPosition || 'middle';
  const rawLandmarks = Array.isArray(stop.landmarks) ? stop.landmarks.filter(lm => lm.zh || lm.en) : [];

  const renderLandmarkBadgesGroup = (list) => list.map(lm => {
    const lmExtraPx = Math.max(0, Number(lm.extraWidthPx) || 0);
    const lmPadX = 5 + lmExtraPx / 2;
    return `
      <div style="
        background-color:${C.landmarkBg};
        color:${C.landmarkText};
        padding:1.5px ${lmPadX}px;
        border-radius:2.5px;
        font-size:7.5px;
        line-height:1.1;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border:0.5px solid rgba(0,0,0,0.08);
        box-sizing:border-box;
        flex-shrink:0;
      ">
        ${lm.zh ? `<div class="sheet-text-fix" style="font-weight:700; display:block; text-align:center;">${esc(lm.zh)}</div>` : ''}
        ${lm.en ? `<div class="sheet-text-fix" style="font-weight:500; font-size:6.8px; display:block; text-align:center;">${esc(lm.en)}</div>` : ''}
      </div>
    `;
  }).join('');

  const rightMiddleLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'middle');
  const rightBottomLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'bottom_right');
  const belowNameLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'below_name');
  const afterCalloutsLandmarks = rawLandmarks.filter(lm => (lm.position || defaultLmPos) === 'after_callouts');
  const hasRightLandmarks = rightMiddleLandmarks.length > 0 || rightBottomLandmarks.length > 0;

  const rightLandmarksHTML = hasRightLandmarks ? `
    <div style="
      margin-left:auto;
      padding-left:4px;
      max-width:58%;
      display:flex;
      flex-direction:column;
      gap:2px;
      justify-content:${rightBottomLandmarks.length > 0 && rightMiddleLandmarks.length === 0 ? 'flex-end' : 'center'};
      align-items:flex-end;
      align-self:${rightBottomLandmarks.length > 0 && rightMiddleLandmarks.length === 0 ? 'flex-end' : 'stretch'};
      flex-shrink:0;
      position:relative;
      z-index:1;
    ">
      ${rightMiddleLandmarks.length > 0 ? `
        <div style="display:flex; flex-wrap:wrap; gap:2px; justify-content:flex-end; align-items:center; margin:auto 0;">
          ${renderLandmarkBadgesGroup(rightMiddleLandmarks)}
        </div>
      ` : ''}
      ${rightBottomLandmarks.length > 0 ? `
        <div style="display:flex; flex-wrap:wrap; gap:2px; justify-content:flex-end; align-items:flex-end; margin-top:auto;">
          ${renderLandmarkBadgesGroup(rightBottomLandmarks)}
        </div>
      ` : ''}
    </div>
  ` : '';

  const belowNameLandmarksHTML = belowNameLandmarks.length > 0 ? `
    <div style="
      display:flex;
      flex-wrap:wrap;
      gap:2px;
      justify-content:flex-start;
      align-items:center;
      margin-top:2px;
    ">
      ${renderLandmarkBadgesGroup(belowNameLandmarks)}
    </div>
  ` : '';

  const afterCalloutsBadgesRawHTML = afterCalloutsLandmarks.length > 0 ? `
    <div style="
      display:inline-flex;
      flex-wrap:wrap;
      gap:2px;
      align-items:center;
      vertical-align:middle;
      flex-shrink:0;
    ">
      ${renderLandmarkBadgesGroup(afterCalloutsLandmarks)}
    </div>
  ` : '';

  // 4. 站名下方中英文注解（支援與站名一樣的左上內旁註符號 remarkSymbol）
  const hasStopRemark = Boolean((stop.remarkZh && stop.remarkZh.trim()) || (stop.remarkEn && stop.remarkEn.trim()));
  const hasRemarkSymbol = Boolean(stop.remarkSymbol && String(stop.remarkSymbol).trim() !== '');
  const remarkSymbolGutterPx = hasRemarkSymbol ? 5.5 : 0;
  const remarkTopLeftSymbolHTML = hasRemarkSymbol ? `
    <span class="sheet-text-fix" style="
      position:absolute;
      left:0px;
      top:-0.5px;
      font-size:7.2px;
      font-weight:900;
      color:#475569;
      line-height:1;
      z-index:6;
      pointer-events:none;
    ">${esc(stop.remarkSymbol)}</span>
  ` : '';

  const stopRemarkHTML = hasStopRemark ? `
    <div style="font-size:7.2px; color:#475569; line-height:1.15; margin-top:1.5px; position:relative; padding-left:${remarkSymbolGutterPx}px;">
      ${remarkTopLeftSymbolHTML}
      ${stop.remarkZh ? `<div class="sheet-text-fix" style="display:block;">${formatStopNameWithLineBreaks(stop.remarkZh, '')}</div>` : ''}
      ${stop.remarkEn ? `<div class="sheet-text-fix" style="display:block;">${formatStopNameWithLineBreaks(stop.remarkEn, '')}</div>` : ''}
    </div>
  ` : '';

  // 5. 站名旁註符號定位在「站名的左上角 + 分段收費淺色背景裏面」
  const hasSymbol = Boolean(stop.symbol && String(stop.symbol).trim() !== '');
  const symbolPrefixGutterPx = hasSymbol ? 6.5 : 0;
  const topLeftSymbolHTML = hasSymbol ? `
    <span class="sheet-text-fix" style="
      position:absolute;
      left:0px;
      top:-0.5px;
      font-size:${Math.max(8.2, Number(L.stopNameFontSizePx) - 1.2)}px;
      font-weight:900;
      color:#111827;
      line-height:1;
      z-index:6;
      pointer-events:none;
    ">${esc(stop.symbol)}</span>
  ` : '';

  // 6. 大字宣傳橫幅 & 「轉乘」圓角矩形框：
  // 若該站有「中間(右)/右下」地標 (hasRightLandmarks)，自動移至下方；若地標設為「放在宣傳/轉乘框最後面 (after_callouts)」，則保持同行並將地標排在最後面！
  const promoLayout = stop.timePromoLayout || 'side_by_side';
  const effectivePromoLayout = (promoLayout === 'side_by_side' && hasRightLandmarks) ? 'stacked' : promoLayout;
  const sideBySidePromoHTML = (stop.hasTimePromo && effectivePromoLayout === 'side_by_side')
    ? renderTimePromoBadgeHTML(stop, 'side_by_side')
    : '';
  const stackedPromoHTML = (stop.hasTimePromo && effectivePromoLayout === 'stacked')
    ? renderTimePromoBadgeHTML(stop, 'stacked')
    : '';

  const interchangeLayout = stop.interchangeLayout || 'side_by_side';
  const effectiveInterchangeLayout = (interchangeLayout === 'side_by_side' && hasRightLandmarks) ? 'stacked' : interchangeLayout;
  const sideBySideInterchangeHTML = (stop.hasInterchangeBox && effectiveInterchangeLayout === 'side_by_side')
    ? renderStopInterchangeBoxHTML(stop, 'side_by_side')
    : '';
  const stackedInterchangeHTML = (stop.hasInterchangeBox && effectiveInterchangeLayout === 'stacked')
    ? renderStopInterchangeBoxHTML(stop, 'stacked')
    : '';

  // 決定「宣傳/轉乘框最後面」地標的放置位置：
  // 若有下方排列的宣傳框/轉乘框且無同行宣傳框/轉乘框，則緊跟在下方宣傳框/轉乘框最後面；否則緊跟在同行宣傳框/轉乘框最後面
  const placeAfterCalloutsInStacked = Boolean((stackedPromoHTML || stackedInterchangeHTML) && !sideBySidePromoHTML && !sideBySideInterchangeHTML);
  const inlineAfterCalloutsLandmarksHTML = !placeAfterCalloutsInStacked ? afterCalloutsBadgesRawHTML : '';
  const stackedAfterCalloutsLandmarksHTML = placeAfterCalloutsInStacked ? `
    <div style="display:inline-flex; flex-wrap:wrap; gap:2px; align-items:center; margin-top:2px;">
      ${afterCalloutsBadgesRawHTML}
    </div>
  ` : '';

  const hasAnySideCallout = Boolean(sideBySidePromoHTML || sideBySideInterchangeHTML || inlineAfterCalloutsLandmarksHTML);

  // 7. 主站名行（只包含站名及同行元素，讓左側站點圓圈 100% 永遠對齊站名正中間！）
  const formattedZhHTML = formatStopNameWithLineBreaks(stop.zh, trailingBadgesHTML);
  const formattedEnHTML = stop.en ? formatStopNameWithLineBreaks(stop.en, '') : '';

  const stopNameMainRowHTML = isColoredStop ? `
    <div style="flex:1 1 0%; min-width:0; overflow:visible; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; position:relative; padding-left:${symbolPrefixGutterPx}px; z-index:2; container-type:inline-size;">
      ${topLeftSymbolHTML}
      <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px; max-width:100%;">
        <div style="
          background-color:${coloredStopBgColor};
          color:${coloredStopTextColor};
          padding:2px 6px;
          border-radius:3.5px;
          display:inline-flex;
          flex-direction:column;
          justify-content:center;
          box-sizing:border-box;
          ${customColoredBoxWidth ? `width:${customColoredBoxWidth};` : ''}
          ${anyIgnoreLandmark ? 'max-width:none; flex-shrink:0;' : 'max-width:100%;'}
        ">
          <div class="sheet-text-fix" style="
            font-size:${Number(L.stopNameFontSizePx) + 1.0}px;
            font-weight:900;
            display:block;
            line-height:1.14;
            ${ignoreZh ? 'white-space:nowrap; width:max-content;' : `white-space:normal; word-break:break-word; ${anyIgnoreLandmark ? 'max-width:calc(100cqw - 12px);' : 'width:100%;'}`}
          ">
            ${formattedZhHTML}
          </div>
          ${formattedEnHTML ? `
            <div class="sheet-text-fix" style="
              font-size:${Number(L.stopEnFontSizePx) + 0.5}px;
              font-weight:700;
              display:block;
              line-height:1.1;
              opacity:0.96;
              ${ignoreEn ? 'white-space:nowrap; width:max-content;' : `white-space:normal; word-break:break-word; ${anyIgnoreLandmark ? 'max-width:calc(100cqw - 12px);' : 'width:100%;'}`}
            ">
              ${formattedEnHTML}
            </div>
          ` : ''}
        </div>
        ${sideBySidePromoHTML}
        ${sideBySideInterchangeHTML}
        ${inlineAfterCalloutsLandmarksHTML}
      </div>
    </div>
  ` : `
    <div style="flex:1 1 0%; min-width:0; overflow:visible; display:flex; flex-direction:column; justify-content:center; position:relative; padding-left:${symbolPrefixGutterPx}px; z-index:2;">
      ${topLeftSymbolHTML}
      <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4.5px; width:100%;">
        <div style="${hasAnySideCallout ? 'flex:0 1 auto; min-width:0;' : 'flex:1 1 0%; min-width:0;'} display:flex; flex-direction:column; justify-content:center;">
          <div class="sheet-text-fix" style="
            font-size:${L.stopNameFontSizePx}px;
            font-weight:700;
            color:#111827;
            display:block;
            line-height:1.13;
            ${ignoreZh ? 'white-space:nowrap; width:max-content;' : 'white-space:normal; width:100%; word-break:break-word;'}
          ">
            ${formattedZhHTML}
          </div>
          ${formattedEnHTML ? `
            <div class="sheet-text-fix" style="
              font-size:${L.stopEnFontSizePx}px;
              font-weight:500;
              color:#1f2937;
              display:block;
              line-height:1.08;
              ${ignoreEn ? 'white-space:nowrap; width:max-content;' : 'white-space:normal; width:100%; word-break:break-word;'}
            ">
              ${formattedEnHTML}
            </div>
          ` : ''}
        </div>
        ${sideBySidePromoHTML}
        ${sideBySideInterchangeHTML}
        ${inlineAfterCalloutsLandmarksHTML}
      </div>
    </div>
  `;

  // 8. 站名與地標下方的獨立附屬子行（渲染下方大字宣傳框、下方轉乘框、排在宣傳/轉乘框最後面的地標、站名注解、站名下地標）
  const hasStackedCalloutsOrAfter = Boolean(stackedPromoHTML || stackedInterchangeHTML || stackedAfterCalloutsLandmarksHTML);
  const stackedCalloutsRowHTML = hasStackedCalloutsOrAfter ? `
    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:4px; max-width:100%;">
      ${stackedPromoHTML}
      ${stackedInterchangeHTML}
      ${stackedAfterCalloutsLandmarksHTML}
    </div>
  ` : '';

  const hasBelowSubRow = Boolean(stackedCalloutsRowHTML || stopRemarkHTML || belowNameLandmarksHTML);
  const belowStopSubRowHTML = hasBelowSubRow ? `
    <div style="display:flex; align-items:stretch; width:100%; flex-shrink:0;">
      ${renderTrackPassThroughBottomHTML(stop, metrics)}
      <div style="
        flex:1;
        min-width:0;
        padding:0px 6px 1.5px ${nodeNameGapPx + symbolPrefixGutterPx}px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
      ">
        ${stackedCalloutsRowHTML}
        ${stopRemarkHTML}
        ${belowNameLandmarksHTML}
      </div>
    </div>
  ` : '';

  const customSpecialHeight = isSpecialPassStop ? Math.max(18, Number(stop.corridorPipeHeightPx) || 24) : 0;
  const minRowHeight = Math.max(
    customSpecialHeight,
    (stop.isOrigin || stop.isDest ? metrics.terminalSize : metrics.normSize) + 3,
    15
  );

  return `
    <div onclick="jumpToStopEditor('${stop.id}')" class="preview-clickable" style="
      flex:0 0 auto;
      display:flex;
      flex-direction:column;
      width:100%;
      position:relative;
      z-index:1;
    ">
      ${districtSubRowHTML}
      ${fareSubRowHTML}
      ${destArrowLeadInHTML}
      <div style="
        flex:0 0 auto;
        display:flex;
        align-items:stretch;
        width:100%;
        min-height:${minRowHeight}px;
      ">
        ${renderTrackMarkerCenteredHTML(stop, metrics)}
        <div style="
          flex:1;
          min-width:0;
          position:relative;
          padding:${isSpecialPassStop ? '2px' : '1.5px'} 6px ${hasBelowSubRow ? '0.5px' : (isSpecialPassStop ? '2px' : '1.5px')} ${nodeNameGapPx}px;
          display:flex;
          flex-wrap:nowrap;
          align-items:center;
          justify-content:space-between;
          gap:4px;
        ">
          ${stopNameMainRowHTML}
          ${rightLandmarksHTML}
        </div>
      </div>
      ${belowStopSubRowHTML}
    </div>
  `;
}

// Render pure vertical pass-through route line(s) for Header Sub-Rows (District / Fare badges above stop name)
function renderTrackPassThroughHTML(stop, metrics) {
  if (metrics.isParallel) {
    const linesHTML = metrics.tracks.map(t => {
      const vState = stop.variantLineState?.[t.variant.id];
      if (!vState || !vState.showTopLine) return '';
      return `
        <div style="
          position:absolute;
          left:${t.x}px;
          top:0;
          bottom:0;
          border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
          transform:translateX(-50%);
        "></div>
      `;
    }).join('');
    return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">${linesHTML}</div>`;
  }

  // Single line mode: show top pass-through line if any variant has showTopLine
  const anyShowTop = (appConfig.variants || []).some(v => stop.variantLineState?.[v.id]?.showTopLine);
  if (!anyShowTop) {
    return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;"></div>`;
  }

  return `
    <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
      <div style="
        position:absolute;
        left:${metrics.centerX}px;
        top:0;
        bottom:0;
        width:${metrics.lineThickness}px;
        background:${appConfig.colors.routeLineColor};
        transform:translateX(-50%);
      "></div>
    </div>
  `;
}

function splitStopsIntoColumns(enrichedStops) {
  const maxPerCol = Math.max(5, Number(appConfig.layout.autoSplitMaxStops) || 23);
  const columns = [];
  let currentCol = [];

  enrichedStops.forEach((stop, idx) => {
    currentCol.push(stop);
    const isLastOverall = idx === enrichedStops.length - 1;
    if (!isLastOverall) {
      if (stop.manualBreakAfter || currentCol.length >= maxPerCol) {
        columns.push(currentCol);
        currentCol = [];
      }
    }
  });

  if (currentCol.length > 0) {
    columns.push(currentCol);
  }
  return columns;
}

// ==========================================================================
// 4. RIGHT SIDE MODULES RENDERER
// ==========================================================================
// Render effective date as "(日期)起生效,直至另行通告 | Effective from (date) until further notice."
// where ONLY (日期) and (date) are red (#dc2626) and all other words are grey (#475569)
function renderEffectiveDateRichHTML(F) {
  const rawZh = (F.dateZh || '').trim();
  const rawEn = (F.dateEn || '').trim();

  let zhPartHTML = '';
  if (rawZh) {
    const cleanDateZh = rawZh
      .replace(/起生效.*$/, '')
      .replace(/生效.*$/, '')
      .trim();
    zhPartHTML = `<span style="color:#dc2626; font-weight:700;">${esc(cleanDateZh)}</span><span style="color:#475569;">起生效,直至另行通告</span>`;
  }

  let enPartHTML = '';
  if (rawEn) {
    const cleanDateEn = rawEn
      .replace(/^Effective\s*(from\s*)?/i, '')
      .replace(/\s*until further notice\.?$/i, '')
      .replace(/\.$/, '')
      .trim();
    enPartHTML = `<span style="color:#475569;">Effective from </span><span style="color:#dc2626; font-weight:700;">${esc(cleanDateEn)}</span><span style="color:#475569;"> until further notice.</span>`;
  }

  if (zhPartHTML && enPartHTML) {
    return `${zhPartHTML}<span style="color:#475569;"> | </span>${enPartHTML}`;
  }
  return zhPartHTML || enPartHTML;
}

// 取得該站點所屬或指定套用的班次物件（讓不同班次可擁有不同站點、SVG、宣傳框及轉乘框顏色）
function getStopEffectiveVariant(stop) {
  const variants = appConfig.variants || [];
  if (!variants.length) return null;
  if (stop && stop.colorVariantId) {
    const explicitVar = variants.find(v => v.id === stop.colorVariantId);
    if (explicitVar) return explicitVar;
  }
  if (stop && stop.variantLineState) {
    for (const v of variants) {
      const st = stop.variantLineState[v.id];
      if (st && st.showNode) return v;
    }
    for (const v of variants) {
      const st = stop.variantLineState[v.id];
      if (st && st.status !== 'none') return v;
    }
  }
  return variants[0];
}

// ==========================================================================
// 3. CORE A4 ROUTE SHEET RENDERER (PER-VARIANT LINE TRIMMING & STOP TYPES)
// ==========================================================================
function renderTrackMarkerCenteredHTML(stop, metrics) {
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const isTunnelStop = Boolean(stop.isTunnelStop || stop.hasTunnel || stop.type === 'tunnel');
  const isCorridorStop = !isTunnelStop && Boolean(stop.isCorridorStop || stop.hasCorridor || stop.type === 'corridor');

  // 若此站點為「途徑走廊 (353)」或「途徑隧道 (Tunnel)」：使用各班次專屬的走廊/隧道 SVG 底色與圖案色
  if (isCorridorStop || isTunnelStop) {
    const signSize = Math.max(15.5, Number(appConfig.layout.normalNodeSizePx || 9.5) + 6.0);

    if (metrics.isParallel) {
      const tracksHTML = metrics.tracks.map(t => {
        const v = t.variant || {};
        const vState = stop.variantLineState?.[v.id];
        if (!vState) return '';
        const showSpecialIcon = Boolean((vState.isVariantCorridor || vState.isVariantTunnel) && vState.showNode);
        const parallelSignSize = Math.min(signSize, (appConfig.layout.parallelLineSpacingPx || 14) + 2.5);

        const corridorBg = v.corridorSvgBg || C.corridorSvgBg || t.color || C.routeLineColor || '#008837';
        const corridorFg = v.corridorSvgFg || C.corridorSvgFg || '#ffffff';
        const tunnelBg = v.tunnelSvgBg || C.tunnelSvgBg || t.color || C.routeLineColor || '#008837';
        const tunnelFg = v.tunnelSvgFg || C.tunnelSvgFg || '#ffffff';

        const signSvg = isTunnelStop
          ? createHkTunnelSvg(parallelSignSize, tunnelBg, tunnelFg)
          : createHkTrafficSign353Svg(parallelSignSize, corridorBg, corridorFg);

        return `
          ${vState.showTopLine ? `
            <div style="
              position:absolute;
              left:${t.x}px;
              top:0;
              height:50%;
              border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
              transform:translateX(-50%);
              z-index:1;
            "></div>
          ` : ''}
          ${vState.showBottomLine ? `
            <div style="
              position:absolute;
              left:${t.x}px;
              top:50%;
              bottom:0;
              border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
              transform:translateX(-50%);
              z-index:1;
            "></div>
          ` : ''}
          ${showSpecialIcon ? `
            <div style="
              position:absolute;
              left:${t.x}px;
              top:50%;
              transform:translate(-50%, -50%);
              z-index:4;
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              ${signSvg}
            </div>
          ` : ''}
        `;
      }).join('');

      return `
        <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
          ${tracksHTML}
        </div>
      `;
    }

    // 單主線模式：根據此站所屬班次決定走廊/隧道 SVG 的主題色與線條色
    const vStates = variants.map(v => ({ variant: v, state: stop.variantLineState?.[v.id] })).filter(x => x.state);
    const showTopLine = vStates.length > 0 ? vStates.some(x => x.state.showTopLine) : true;
    const showBottomLine = vStates.length > 0 ? vStates.some(x => x.state.showBottomLine) : true;
    const activeVariantObj = getStopEffectiveVariant(stop) || variants[0] || {};
    const activeLineColor = activeVariantObj.color || C.routeLineColor || C.themePrimary || '#008837';

    const corridorBg = activeVariantObj.corridorSvgBg || C.corridorSvgBg || activeLineColor;
    const corridorFg = activeVariantObj.corridorSvgFg || C.corridorSvgFg || '#ffffff';
    const tunnelBg = activeVariantObj.tunnelSvgBg || C.tunnelSvgBg || activeLineColor;
    const tunnelFg = activeVariantObj.tunnelSvgFg || C.tunnelSvgFg || '#ffffff';

    const signSvg = isTunnelStop
      ? createHkTunnelSvg(signSize, tunnelBg, tunnelFg)
      : createHkTrafficSign353Svg(signSize, corridorBg, corridorFg);

    return `
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
        ${showTopLine ? `
          <div style="
            position:absolute;
            left:${metrics.centerX}px;
            top:0;
            height:50%;
            width:${metrics.lineThickness}px;
            background:${activeLineColor};
            transform:translateX(-50%);
            z-index:1;
          "></div>
        ` : ''}
        ${showBottomLine ? `
          <div style="
            position:absolute;
            left:${metrics.centerX}px;
            top:50%;
            bottom:0;
            width:${metrics.lineThickness}px;
            background:${activeLineColor};
            transform:translateX(-50%);
            z-index:1;
          "></div>
        ` : ''}
        <div style="
          position:absolute;
          left:${metrics.centerX}px;
          top:50%;
          transform:translate(-50%, -50%);
          z-index:4;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          ${signSvg}
        </div>
      </div>
    `;
  }

  // Mode B: Parallel Multi-Variant Lines (一般站點)
  if (metrics.isParallel) {
    const tracksHTML = metrics.tracks.map(t => {
      const v = t.variant || {};
      const vState = stop.variantLineState?.[v.id];
      if (!vState) return '';
      const isTerm = Boolean(vState.isTerminalNode);
      const isDest = Boolean(vState.isVariantDest);
      const nodeSize = isTerm ? t.terminalSize : t.normSize;
      const nodeStrokeColor = v.nodeColor || t.color;
      const nodeInnerFill = v.nodeFillColor || C.nodeFillColor || '#ffffff';

      const nodeSvg = vState.showNode
        ? createSvgStopNode({
            kind: isTerm ? 'terminal' : 'normal',
            size: nodeSize,
            primaryColor: nodeStrokeColor,
            fillColor: nodeInnerFill
          })
        : '';

      const topLineHeight = (vState.showTopLine && isDest)
        ? `calc(50% - ${nodeSize / 2 + 3.5}px)`
        : '50%';

      const destArrowHTML = (vState.showTopLine && isDest) ? `
        <svg width="9" height="6.5" viewBox="0 0 9 6.5" style="
          position:absolute;
          left:${t.x}px;
          top:calc(50% - ${nodeSize / 2 + 0.3}px);
          transform:translate(-50%, -100%);
          z-index:4;
          overflow:visible;
        ">
          <polygon points="4.5,6.5 0.4,0 8.6,0" fill="${t.color}" />
        </svg>
      ` : '';

      return `
        ${vState.showTopLine ? `
          <div style="
            position:absolute;
            left:${t.x}px;
            top:0;
            height:${topLineHeight};
            border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
            transform:translateX(-50%);
            z-index:1;
          "></div>
        ` : ''}
        ${destArrowHTML}
        ${vState.showBottomLine ? `
          <div style="
            position:absolute;
            left:${t.x}px;
            top:50%;
            bottom:0;
            border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
            transform:translateX(-50%);
            z-index:1;
          "></div>
        ` : ''}
        ${vState.showNode ? `
          <div style="
            position:absolute;
            left:${t.x}px;
            top:50%;
            width:${nodeSize}px;
            height:${nodeSize}px;
            transform:translate(-50%, -50%);
            z-index:3;
            display:flex;
            align-items:center;
            justify-content:center;
          ">
            ${nodeSvg}
          </div>
        ` : ''}
      `;
    }).join('');

    return `
      <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
        ${tracksHTML}
      </div>
    `;
  }

  // Mode A: Single Main Line with Variant Stop Marker Styles (一般站點)
  const vStates = variants.map(v => ({
    variant: v,
    state: stop.variantLineState?.[v.id] || {
      status: 'stop',
      showNode: true,
      showTopLine: !stop.isOrigin,
      showBottomLine: !stop.isDest,
      isTerminalNode: stop.isOrigin || stop.isDest,
      isVariantDest: stop.isDest
    }
  }));

  const showTopLine = vStates.some(v => v.state.showTopLine);
  const showBottomLine = vStates.some(v => v.state.showBottomLine);

  const activeVariants = vStates.filter(v => v.state.hasActiveStops !== false);
  const allStop = activeVariants.length > 0 && activeVariants.every(v => v.state.showNode);
  const noneStop = vStates.every(v => !v.state.showNode);
  const primaryStops = vStates[0] ? vStates[0].state.showNode : true;
  const isTerminal = vStates.some(v => v.state.isTerminalNode);
  const isDestNode = vStates.some(v => v.state.isVariantDest) || stop.isDest;
  const nodeSize = isTerminal ? metrics.terminalSize : metrics.normSize;

  const effVar = getStopEffectiveVariant(stop) || variants[0] || {};
  const primaryNodeColor = effVar.nodeColor || effVar.color || C.routeLineColor;
  const primaryNodeFill = effVar.nodeFillColor || C.nodeFillColor || '#ffffff';

  let nodeInnerHTML = '';
  if (noneStop) {
    nodeInnerHTML = '';
  } else if (isTerminal) {
    nodeInnerHTML = createSvgStopNode({
      kind: 'terminal',
      size: nodeSize,
      primaryColor: primaryNodeColor,
      fillColor: primaryNodeFill
    });
  } else if (allStop) {
    nodeInnerHTML = createSvgStopNode({
      kind: 'normal',
      size: nodeSize,
      primaryColor: primaryNodeColor,
      fillColor: primaryNodeFill
    });
  } else {
    const specialColor = variants[1] ? (variants[1].nodeColor || variants[1].color) : C.routeLineColor;
    nodeInnerHTML = createSvgStopNode({
      kind: 'partial',
      size: nodeSize + 0.8,
      primaryColor: primaryNodeColor,
      fillColor: primaryStops ? primaryNodeFill : specialColor,
      secondaryColor: primaryNodeColor
    });
  }

  const topLineHeight = (showTopLine && isDestNode)
    ? `calc(50% - ${nodeSize / 2 + 4}px)`
    : '50%';

  const singleDestArrowHTML = (showTopLine && isDestNode) ? `
    <svg width="10.5" height="7.5" viewBox="0 0 10.5 7.5" style="
      position:absolute;
      left:${metrics.centerX}px;
      top:calc(50% - ${nodeSize / 2 + 0.3}px);
      transform:translate(-50%, -100%);
      z-index:4;
      overflow:visible;
    ">
      <polygon points="5.25,7.5 0.5,0 10,0" fill="${C.routeLineColor}" />
    </svg>
  ` : '';

  return `
    <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
      ${showTopLine ? `
        <div style="
          position:absolute;
          left:${metrics.centerX}px;
          top:0;
          height:${topLineHeight};
          width:${metrics.lineThickness}px;
          background:${C.routeLineColor};
          transform:translateX(-50%);
          z-index:1;
        "></div>
      ` : ''}
      ${singleDestArrowHTML}
      ${showBottomLine ? `
        <div style="
          position:absolute;
          left:${metrics.centerX}px;
          top:50%;
          bottom:0;
          width:${metrics.lineThickness}px;
          background:${C.routeLineColor};
          transform:translateX(-50%);
          z-index:1;
        "></div>
      ` : ''}
      ${nodeInnerHTML ? `
        <div style="
          position:absolute;
          left:${metrics.centerX}px;
          top:50%;
          width:${nodeSize}px;
          height:${nodeSize}px;
          transform:translate(-50%, -50%);
          z-index:3;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          ${nodeInnerHTML}
        </div>
      ` : ''}
    </div>
  `;
}

// Full-width (100% stretched) theme-colored label for right-side module headers:
// - mode === 'inline': "(中文) | (英文)" on one line (used for Timetable & Bus-Bus Interchange)
// - mode === 'pipe_break': "(中文) |" on line 1, "(英文)" on line 2 (used for Octopus & e-payment Section Fare)
function renderRightModuleTitleLabelHTML(titleZh, titleEn, C, mode = 'inline') {
  const bg = C.themePrimary || C.infoAccentColor || '#008837';

  if (mode === 'pipe_break') {
    return `
      <div style="margin-bottom:3px; width:100%; line-height:1;">
        <div style="
          background-color:${bg};
          color:#ffffff;
          padding:3.5px 8px;
          border-radius:3.5px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          box-sizing:border-box;
          width:100%;
        ">
          <div class="sheet-text-fix" style="font-size:9.8px; font-weight:900; color:#ffffff; display:block; line-height:1.16;">
            ${esc(titleZh)}${titleEn ? ' |' : ''}
          </div>
          ${titleEn ? `
            <div class="sheet-text-fix" style="font-size:8.2px; font-weight:700; color:#ffffff; opacity:0.96; display:block; line-height:1.14; margin-top:1px;">
              ${esc(titleEn)}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  return `
    <div style="margin-bottom:3px; width:100%; line-height:1;">
      <div style="
        background-color:${bg};
        color:#ffffff;
        padding:3.5px 8px;
        border-radius:3.5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        box-sizing:border-box;
        width:100%;
      ">
        <div class="sheet-text-fix" style="font-size:9.8px; font-weight:900; color:#ffffff; display:block; line-height:1.16;">
          ${esc(titleZh)}${titleEn ? ` | ${esc(titleEn)}` : ''}
        </div>
      </div>
    </div>
  `;
}

function formatTextWithRouteBadges(text, opts = {}) {
  if (text === null || text === undefined || text === '') return '';
  const raw = String(text);
  const fontSizePx = Number(opts.fontSizePx) || 9.2;
  const bgColor = opts.bgColor || '#008837';
  const textColor = opts.textColor || '#ffffff';
  const styleMode = opts.styleMode || 'badge'; // 'badge' | 'text'
  const extraRoutesRaw = opts.extraRoutes || '';
  const allowPureNumbers = Boolean(opts.allowPureNumbers);
  const contrastBorder = Boolean(opts.contrastBorder);
  const innerWhiteLine = opts.innerWhiteLine !== undefined ? Boolean(opts.innerWhiteLine) : false;

  const customList = String(extraRoutesRaw)
    .split(/[,，、\s/]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  const escapedCustom = customList.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // 支援用戶額外指定的純數字或自訂路線號碼：可獨立出現、在括號/中文旁，或緊貼於 4 位數時間後（如 0600968），但絕不誤判 $6.6 或 0600 內部數字
  const customPattern = escapedCustom.length > 0
    ? `|(?:(?<![A-Za-z0-9$.])|(?<=(?<![0-9])\\d{4}))(?:${escapedCustom.join('|')})(?![A-Za-z0-9.])`
    : '';

  // 僅當明確開啟 allowPureNumbers 時才自動識別任意純數字；預設關閉，讓純數字路線嚴格依照「額外指定識別的純數字路線號碼」或 [路線] 識別
  const pureNumberPattern = allowPureNumbers
    ? `|(?<![A-Za-z0-9$.])(\\d{1,3})(?![A-Za-z0-9.%歲分時日年])`
    : '';

  // 支援 [路線]、額外指定純數字路線清單、以及英數混合路線（如 B13P、A29、962X，含緊貼 4 位數時間後如 0600B13P）
  const regex = new RegExp(
    `\\[([^\\]]+)\\]${customPattern}|(?:(?<![A-Za-z0-9])|(?<=(?<![0-9])\\d{4}))([A-Za-z]{1,2}\\d{1,3}[A-Za-z]?|\\d{1,3}[A-HJ-Za-hj-z])(?![A-Za-z0-9])${pureNumberPattern}`,
    'g'
  );
  const ignoreWords = new Set(['AM', 'PM', 'MIN', 'HR', 'PX', 'MM', 'V1', 'V2', 'V3', 'V4', 'A4', 'QR', 'ID', 'TO', 'OR', 'IN', 'ON', 'AT', 'BY']);

  let result = '';
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(raw)) !== null) {
    const fullMatch = match[0];
    const bracketRoute = match[1];
    const token = bracketRoute !== undefined ? bracketRoute.trim() : fullMatch.trim();

    if (!bracketRoute && ignoreWords.has(token.toUpperCase()) && !customList.includes(token)) {
      continue;
    }

    result += esc(raw.slice(lastIdx, match.index));

    if (styleMode === 'text') {
      result += `<span style="
        color:${bgColor};
        font-size:${fontSizePx}px !important;
        font-weight:900;
        line-height:1;
        display:inline-block;
        vertical-align:baseline;
      ">${esc(token)}</span>`;
    } else if (innerWhiteLine) {
      result += `<span style="
        background-color:${bgColor};
        color:${textColor};
        padding:1.2px;
        border-radius:2.5px;
        ${contrastBorder ? 'border:0.8px solid rgba(255,255,255,0.65);' : ''}
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:baseline;
        margin:0 1px;
        box-sizing:border-box;
      "><span style="
        border:0.9px solid rgba(255,255,255,0.88);
        border-radius:1.8px;
        font-size:${fontSizePx}px !important;
        font-weight:900;
        padding:0.5px 3.2px;
        line-height:1.05;
        display:inline-flex;
        align-items:center;
        justify-content:center;
      ">${esc(token)}</span></span>`;
    } else {
      result += `<span style="
        background-color:${bgColor};
        color:${textColor};
        font-size:${fontSizePx}px !important;
        font-weight:900;
        padding:0.8px 3.8px;
        border-radius:2.5px;
        ${contrastBorder ? 'border:1px solid rgba(255,255,255,0.85);' : ''}
        line-height:1.05;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        vertical-align:baseline;
        margin:0 1px;
        box-sizing:border-box;
      ">${esc(token)}</span>`;
    }

    lastIdx = regex.lastIndex;
  }

  result += esc(raw.slice(lastIdx));
  return result;
}

// 同步「路線號碼及目的地 (獨立容器)」內的多個路線號碼框（支援 boundVariantId 捆綁班次時間表）
function ensureHeaderRouteBoxesSynced() {
  const R = appConfig.rightData;
  const defaultFontSize = Math.max(20, Number(R.routeNumberFontSizePx) || 100);
  if (!Array.isArray(R.routeBoxes) || R.routeBoxes.length === 0) {
    R.routeBoxes = [
      {
        id: 'rb_1',
        routeNumber: R.routeNumber ?? 'B13',
        fontSizePx: defaultFontSize,
        innerWhiteLine: R.routeBoxInnerWhiteLine !== false,
        bgColor: '',
        textColor: '',
        destZh: '',
        destEn: '',
        boundVariantId: ''
      }
    ];
  } else {
    R.routeBoxes = R.routeBoxes.map((box, idx) => ({
      id: box.id || `rb_${idx + 1}`,
      routeNumber: idx === 0 && box.routeNumber === undefined ? (R.routeNumber ?? 'B13') : (box.routeNumber ?? ''),
      fontSizePx: Math.max(16, Number(box.fontSizePx) || (idx === 0 ? defaultFontSize : 52)),
      innerWhiteLine: box.innerWhiteLine !== undefined ? Boolean(box.innerWhiteLine) : (idx === 0 ? R.routeBoxInnerWhiteLine !== false : true),
      bgColor: box.bgColor || '',
      textColor: box.textColor || '',
      destZh: box.destZh || '',
      destEn: box.destEn || '',
      boundVariantId: box.boundVariantId || ''
    }));
    R.routeNumber = R.routeBoxes[0].routeNumber;
    R.routeNumberFontSizePx = R.routeBoxes[0].fontSizePx;
    R.routeBoxInnerWhiteLine = R.routeBoxes[0].innerWhiteLine;
  }
  return R.routeBoxes;
}

// 同步已捆綁班次與頂部路線號碼框的主題顏色、路線號碼、字色與細白線設定
function syncBoundVariants() {
  const variants = appConfig.variants || [];
  const C = appConfig.colors;
  const R = appConfig.rightData;
  const T = R.timetable || {};
  const boxes = ensureHeaderRouteBoxesSynced();

  // 1. 若頂部路線號碼框捆綁了某個班次時間表 (boundVariantId)
  boxes.forEach((box, bIdx) => {
    if (!box.boundVariantId) return;
    const vIdx = variants.findIndex(v => v.id === box.boundVariantId);
    if (vIdx === -1) return;
    const targetV = variants[vIdx];
    const targetVt = Array.isArray(T.variantTables) ? T.variantTables[vIdx] : null;

    const syncedColor = box.bgColor || targetV.routeBoxColor || targetV.color || C.routeBoxBg || '#008837';
    const syncedText = box.textColor || targetV.routeBoxTextColor || C.routeBoxText || '#ffffff';
    const syncedInnerLine = box.innerWhiteLine !== false;
    const syncedRouteNo = box.routeNumber || targetV.routeNumber || '';

    box.bgColor = syncedColor;
    targetV.color = syncedColor;
    targetV.routeBoxColor = syncedColor;
    targetV.routeBoxTextColor = syncedText;
    targetV.routeBoxInnerWhiteLine = syncedInnerLine;
    if (syncedRouteNo) {
      targetV.routeNumber = syncedRouteNo;
    }

    if (targetVt) {
      targetVt.routeBoxColor = syncedColor;
      targetVt.routeBoxTextColor = syncedText;
      targetVt.routeBoxInnerWhiteLine = syncedInnerLine;
      if (syncedRouteNo) {
        targetVt.routeNumber = syncedRouteNo;
      }
    }
    if (bIdx === 0) {
      R.routeNumber = box.routeNumber;
      R.routeBoxInnerWhiteLine = box.innerWhiteLine;
    }
  });

  // 2. 若班次分支 / 班次時間表設定了 boundToId
  variants.forEach((v, idx) => {
    if (!v.boundToId) return;

    if (v.boundToId === '__theme__') {
      v.color = C.routeLineColor || C.themePrimary || '#008837';
      v.routeBoxColor = C.routeBoxBg || C.themePrimary || '#008837';
      v.routeBoxTextColor = C.routeBoxText || '#ffffff';
      v.routeBoxInnerWhiteLine = R.routeBoxInnerWhiteLine !== false;
    } else if (v.boundToId.startsWith('rb_')) {
      const targetBox = boxes.find(b => b.id === v.boundToId);
      if (targetBox) {
        const boxBg = targetBox.bgColor || C.routeBoxBg || '#008837';
        const boxText = targetBox.textColor || C.routeBoxText || '#ffffff';
        v.color = boxBg;
        v.routeBoxColor = boxBg;
        v.routeBoxTextColor = boxText;
        v.routeBoxInnerWhiteLine = targetBox.innerWhiteLine !== false;
        if (targetBox.routeNumber) {
          v.routeNumber = targetBox.routeNumber;
        }
      }
    } else {
      const targetV = variants.find(item => item.id === v.boundToId && item.id !== v.id);
      if (targetV) {
        v.color = targetV.color;
        v.badgeText = targetV.badgeText;
        v.routeBoxColor = targetV.routeBoxColor || targetV.color || C.routeBoxBg || '#008837';
        v.routeBoxTextColor = targetV.routeBoxTextColor || C.routeBoxText || '#ffffff';
        v.routeBoxInnerWhiteLine = targetV.routeBoxInnerWhiteLine !== false;
        if (!v.routeNumber && targetV.routeNumber) {
          v.routeNumber = targetV.routeNumber;
        }
      }
    }

    if (Array.isArray(T.variantTables) && T.variantTables[idx]) {
      T.variantTables[idx].routeBoxColor = v.routeBoxColor;
      T.variantTables[idx].routeBoxTextColor = v.routeBoxTextColor;
      T.variantTables[idx].routeBoxInnerWhiteLine = v.routeBoxInnerWhiteLine;
      if (v.routeNumber) {
        T.variantTables[idx].routeNumber = v.routeNumber;
      }
    }
  });
}

// 在頂部「路線號碼框 #N」直接捆綁指定的班次時間表
function bindHeaderRouteBoxToVariant(bIdx, variantId) {
  const boxes = ensureHeaderRouteBoxesSynced();
  const box = boxes[bIdx];
  if (!box) return;
  box.boundVariantId = variantId || '';

  if (variantId) {
    const vIdx = (appConfig.variants || []).findIndex(v => v.id === variantId);
    if (vIdx !== -1) {
      const v = appConfig.variants[vIdx];
      v.boundToId = box.id;
      if (box.routeNumber && !v.routeNumber) {
        v.routeNumber = box.routeNumber;
      }
      if (!box.bgColor && v.color) {
        box.bgColor = v.color;
      }
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  if (variantId) {
    showToast('已將此路線號碼框捆綁至班次時間表並同步設定');
  }
}

// 設定班次路線捆綁目標並即時同步顏色與狀態
function bindServiceVariant(vIdx, targetId) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  v.boundToId = targetId || '';

  if (targetId && targetId.startsWith('rb_')) {
    const boxes = ensureHeaderRouteBoxesSynced();
    const targetBox = boxes.find(b => b.id === targetId);
    if (targetBox) {
      targetBox.boundVariantId = v.id;
    }
  } else if (targetId && !targetId.startsWith('__')) {
    const targetV = appConfig.variants.find(item => item.id === targetId);
    if (targetV) {
      appConfig.stops.forEach(s => {
        if (s.variantStatus && s.variantStatus[targetV.id]) {
          s.variantStatus[v.id] = s.variantStatus[targetV.id];
        }
        if (s.variantType && s.variantType[targetV.id]) {
          s.variantType[v.id] = s.variantType[targetV.id];
        }
      });
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  if (targetId) {
    showToast('已捆綁班次時間表並同步主題顏色設定');
  }
}

// 處理站名自定義隔行（支援按 Enter 換行、輸入 \n 或 | 分行），並在最後一行尾端附上港鐵標誌與行內走廊標誌
function formatStopNameWithLineBreaks(text, trailingBadgesHTML = '') {
  if (text === null || text === undefined || text === '') {
    return trailingBadgesHTML || '';
  }
  const lines = String(text)
    .replace(/\\n/g, '\n')
    .split(/\r?\n|\|/);

  return lines.map((line, idx) => {
    const isLast = idx === lines.length - 1;
    return `<span style="display:block;">${esc(line)}${isLast && trailingBadgesHTML ? `<span style="display:inline-flex; align-items:center; gap:2.5px; vertical-align:middle; margin-left:3.5px;">${trailingBadgesHTML}</span>` : ''}</span>`;
  }).join('');
}

// 保留空函數以兼容舊有呼叫
function renderStopCorridorRowHTML() {
  return '';
}

// 渲染「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅（支援 timePromoScale 自定義大小比例及班次專屬配色）
function renderTimePromoBadgeHTML(stop, layoutMode = 'side_by_side') {
  if (!stop.hasTimePromo) return '';
  const minsStr = stop.timePromoMins !== undefined ? String(stop.timePromoMins).trim() : '8';
  if (minsStr === '') return '';

  const C = appConfig.colors;
  const effVar = getStopEffectiveVariant(stop) || {};
  const promoBg = stop.timePromoBg || effVar.promoBg || C.promoBannerBg || C.introBannerBg || '#65b741';
  const styleMode = stop.timePromoStyle || 'pointer'; // 'pointer' | 'flat' | 'text_only'
  const isTextOnly = styleMode === 'text_only';
  const hasPointer = styleMode === 'pointer';

  const baseTextColor = effVar.promoTextColor || C.promoBannerText || '#ffffff';
  const fgColor = isTextOnly ? promoBg : baseTextColor;
  const svgColor = isTextOnly ? promoBg : (effVar.fastClockSvgColor || C.fastClockSvgColor || fgColor);

  // 宣傳橫幅自定義大小 (支援百分比 50 ~ 200，預設 100)
  let rawScale = Number(stop.timePromoScale);
  if (!rawScale || isNaN(rawScale)) {
    const legacyNum = parseFloat(stop.timePromoWidth);
    rawScale = (!isNaN(legacyNum) && legacyNum >= 40 && legacyNum <= 250) ? legacyNum : 100;
  }
  const s = Math.min(2.2, Math.max(0.5, rawScale / 100));
  const r = (val) => Math.round(val * s * 10) / 10;

  const prefixZh = stop.timePromoPrefixZh !== undefined ? stop.timePromoPrefixZh : '約';
  const prefixEn = stop.timePromoPrefixEn !== undefined ? stop.timePromoPrefixEn : 'approx';
  const suffixZh = stop.timePromoSuffixZh !== undefined ? stop.timePromoSuffixZh : '分鐘直達';
  const suffixEn = stop.timePromoSuffixEn !== undefined ? stop.timePromoSuffixEn : 'mins direct to';

  const boxInnerHTML = `
    <div style="
      ${isTextOnly
        ? `background-color:transparent; padding:${r(1)}px ${r(2)}px;`
        : `background-color:${promoBg}; padding:${r(3)}px ${r(7.5)}px ${r(3)}px ${r(5.5)}px; border-radius:${r(4)}px;`}
      color:${fgColor};
      max-width:100%;
      display:inline-flex;
      align-items:center;
      gap:${r(4)}px;
      box-sizing:border-box;
    ">
      ${createFastClockSvg(r(19.5), svgColor)}
      ${(prefixZh || prefixEn) ? `
        <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:center; line-height:1.02;">
          ${prefixZh ? `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:800; color:${fgColor}; display:block; white-space:nowrap;">${esc(prefixZh)}</span>` : ''}
          ${prefixEn ? `<span class="sheet-text-fix" style="font-size:${r(6.8)}px; font-weight:700; color:${fgColor}; display:block; white-space:nowrap;">${esc(prefixEn)}</span>` : ''}
        </div>
      ` : ''}
      <div class="sheet-text-fix" style="
        font-size:${r(24.5)}px;
        font-weight:900;
        color:${fgColor};
        line-height:0.88;
        letter-spacing:-0.03em;
        padding:0 ${r(1.5)}px;
        display:flex;
        align-items:center;
      ">${esc(minsStr)}</div>
      ${(suffixZh || suffixEn) ? `
        <div style="display:flex; flex-direction:column; align-items:flex-start; justify-content:center; line-height:1.04;">
          ${suffixZh ? `<span class="sheet-text-fix" style="font-size:${r(9.6)}px; font-weight:900; color:${fgColor}; display:block; white-space:nowrap;">${esc(suffixZh)}</span>` : ''}
          ${suffixEn ? `<span class="sheet-text-fix" style="font-size:${r(7.2)}px; font-weight:700; color:${fgColor}; display:block; white-space:nowrap;">${esc(suffixEn)}</span>` : ''}
        </div>
      ` : ''}
    </div>
  `;

  if (layoutMode === 'stacked') {
    return `
      <div style="display:inline-flex; flex-direction:column; align-items:flex-start; margin-top:${r(2.5)}px; flex-shrink:0; max-width:100%;">
        ${hasPointer ? `
          <svg width="${r(10)}" height="${r(6)}" viewBox="0 0 10 6" style="margin-left:${r(16)}px; margin-bottom:-0.6px; display:block; flex-shrink:0;">
            <polygon points="5,0 0.5,6 9.5,6" fill="${promoBg}" />
          </svg>
        ` : ''}
        ${boxInnerHTML}
      </div>
    `;
  }

  return `
    <div style="display:inline-flex; align-items:center; flex-shrink:0; max-width:100%;">
      ${hasPointer ? `
        <svg width="${r(6)}" height="${r(10.5)}" viewBox="0 0 6 10.5" style="margin-right:-0.6px; display:block; flex-shrink:0;">
          <polygon points="0,5.25 6,0.5 6,10" fill="${promoBg}" />
        </svg>
      ` : ''}
      ${boxInnerHTML}
    </div>
  `;
}

// 渲染「轉乘」框內的自定義站點樣式圖標 (支援普通圓圈、起終點粗圓圈、雙環、實心圓點、353走廊、隧道、港鐵MTR)
function renderInterchangeStopNodeIconHTML(item, defaultColor, scaleRatio = 1) {
  const style = item.nodeStyle || (item.showDot ? 'solid_dot' : 'none');
  if (!style || style === 'none') return '';
  const color = item.nodeColor || item.bgColor || defaultColor || '#008837';
  const r = (v) => Math.round(v * scaleRatio * 10) / 10;

  if (style === 'solid_dot') {
    return createSvgStopNode({ kind: 'solid_dot', size: r(7.5), primaryColor: color });
  }
  if (style === 'normal') {
    return createSvgStopNode({ kind: 'normal', size: r(9.2), primaryColor: color });
  }
  if (style === 'terminal') {
    return createSvgStopNode({ kind: 'terminal', size: r(10.5), primaryColor: color });
  }
  if (style === 'partial') {
    return createSvgStopNode({ kind: 'partial', size: r(9.8), primaryColor: color, secondaryColor: color });
  }
  if (style === 'corridor') {
    return createHkTrafficSign353Svg(r(12.5), color);
  }
  if (style === 'tunnel') {
    return createHkTunnelSvg(r(12.5), color);
  }
  if (style === 'mtr') {
    return createMtrLogoSvg(r(11));
  }
  return '';
}

// 確保轉乘項目內的 routes 陣列已初始化（兼容舊版單一 route 字串）
function ensureInterchangeItemRoutesList(ir, defaultColor = '#008837') {
  if (!ir) return [];
  if (!Array.isArray(ir.routes)) {
    if (ir.route && String(ir.route).trim() !== '') {
      ir.routes = String(ir.route)
        .split(/[,，、]+/)
        .map(s => s.trim())
        .filter(Boolean)
        .map(token => ({
          route: token,
          bgColor: ir.bgColor || defaultColor,
          textColor: ir.textColor || '#ffffff'
        }));
    } else {
      ir.routes = [];
    }
    delete ir.route;
  }
  return ir.routes;
}

// 在站點的「轉乘」圓角矩形框內新增項目：
// itemType === 'route' (新增路線+目的地) | 'station' (新增站點樣式+自定義站名) | 'station_route' (同時含站點樣式+站名+路線+目的地)
function addStopInterchangeRoute(stopIdx, itemType = 'route') {
  const stop = appConfig.stops[stopIdx];
  if (!stop) return;
  if (!Array.isArray(stop.interchangeRoutes)) {
    stop.interchangeRoutes = [];
  }
  const defaultColor = appConfig.colors.routeBoxBg || appConfig.colors.themePrimary || '#008837';

  if (itemType === 'station') {
    stop.interchangeRoutes.push({
      nodeStyle: 'normal',
      nodeColor: defaultColor,
      stationZh: '廣福邨',
      stationEn: 'Kwong Fuk Est',
      routes: [],
      destZh: '',
      destEn: '',
      bgColor: defaultColor,
      textColor: '#ffffff'
    });
  } else if (itemType === 'station_route') {
    stop.interchangeRoutes.push({
      nodeStyle: 'terminal',
      nodeColor: defaultColor,
      stationZh: '禾輋邨',
      stationEn: 'Wo Che Est',
      routes: [
        { route: '798', bgColor: defaultColor, textColor: '#ffffff' }
      ],
      destZh: '將軍澳/火炭',
      destEn: 'Tseung Kwan O / Fo Tan',
      bgColor: defaultColor,
      textColor: '#ffffff'
    });
  } else {
    stop.interchangeRoutes.push({
      nodeStyle: 'none',
      nodeColor: defaultColor,
      stationZh: '',
      stationEn: '',
      routes: [
        { route: 'B8', bgColor: defaultColor, textColor: '#ffffff' }
      ],
      destZh: '石門、第一城',
      destEn: 'Shek Mun, City One',
      bgColor: defaultColor,
      textColor: '#ffffff'
    });
  }
  renderA4Sheet();
  renderEditorSidebar();
}

// 在同一個轉乘項目內「單獨加入」一條新路線號碼（共用同一個目的地與站名）
function addInterchangeSubRoute(stopIdx, rIdx) {
  const ir = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!ir) return;
  const defaultColor = ir.bgColor || appConfig.colors.routeBoxBg || appConfig.colors.themePrimary || '#008837';
  const list = ensureInterchangeItemRoutesList(ir, defaultColor);
  list.push({
    route: '798',
    bgColor: defaultColor,
    textColor: '#ffffff'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

// 更新同一轉乘項目內的指定單獨路線號碼或顏色
function updateInterchangeSubRoute(stopIdx, rIdx, subIdx, field, val, refreshSidebar = false) {
  const ir = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!ir) return;
  const list = ensureInterchangeItemRoutesList(ir);
  if (!list[subIdx]) return;
  list[subIdx][field] = val;
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

// 刪除同一轉乘項目內的指定單獨路線號碼
function removeInterchangeSubRoute(stopIdx, rIdx, subIdx) {
  const ir = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!ir) return;
  const list = ensureInterchangeItemRoutesList(ir);
  list.splice(subIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// 專供站名下方附屬子行（大字宣傳橫幅、轉乘框、站名下方注解、站名下地標）使用的底部路線穿過線，確保主站名行的站點圓圈永遠對齊站名正中間
function renderTrackPassThroughBottomHTML(stop, metrics) {
  if (metrics.isParallel) {
    const linesHTML = metrics.tracks.map(t => {
      const vState = stop.variantLineState?.[t.variant.id];
      if (!vState || !vState.showBottomLine) return '';
      return `
        <div style="
          position:absolute;
          left:${t.x}px;
          top:0;
          bottom:0;
          border-left:${metrics.lineThickness}px ${t.lineStyle} ${t.color};
          transform:translateX(-50%);
        "></div>
      `;
    }).join('');
    return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">${linesHTML}</div>`;
  }

  const anyShowBottom = (appConfig.variants || []).some(v => stop.variantLineState?.[v.id]?.showBottomLine);
  if (!anyShowBottom) {
    return `<div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;"></div>`;
  }

  const effVar = getStopEffectiveVariant(stop) || appConfig.variants?.[0] || {};
  const lineColor = (stop.isCorridorStop || stop.isTunnelStop)
    ? (effVar.color || appConfig.colors.routeLineColor)
    : appConfig.colors.routeLineColor;

  return `
    <div style="position:relative; width:${metrics.trackWidth}px; min-width:${metrics.trackWidth}px; align-self:stretch; flex-shrink:0;">
      <div style="
        position:absolute;
        left:${metrics.centerX}px;
        top:0;
        bottom:0;
        width:${metrics.lineThickness}px;
        background:${lineColor};
        transform:translateX(-50%);
      "></div>
    </div>
  `;
}

// 根據 sampleroute2.pdf 渲染指著站點的「轉乘 (Interchange)」圓角矩形框
// 支援：interchangeScale 自定義大小(%)、每條單獨路線自定義框底色與框字色、自定義站名與站點樣式
function renderStopInterchangeBoxHTML(stop, layoutMode = 'side_by_side') {
  if (!stop.hasInterchangeBox) return '';
  const C = appConfig.colors;
  const effVar = getStopEffectiveVariant(stop) || {};
  const defaultRouteColor = effVar.routeBoxColor || C.routeBoxBg || C.themePrimary || '#008837';

  const routes = Array.isArray(stop.interchangeRoutes)
    ? stop.interchangeRoutes.filter(r => {
        const subRoutes = ensureInterchangeItemRoutesList(r, defaultRouteColor);
        const hasValidSubRoute = subRoutes.some(sr => sr.route && String(sr.route).trim() !== '');
        return (
          hasValidSubRoute ||
          (r.stationZh && r.stationZh.trim()) ||
          (r.stationEn && r.stationEn.trim()) ||
          (r.destZh && r.destZh.trim()) ||
          (r.destEn && r.destEn.trim()) ||
          (r.nodeStyle && r.nodeStyle !== 'none')
        );
      })
    : [];

  const rawTitleZh = stop.interchangeTitleZh !== undefined ? stop.interchangeTitleZh : '轉乘';
  const rawTitleEn = stop.interchangeTitleEn !== undefined ? stop.interchangeTitleEn : 'Interchange';
  if (routes.length === 0 && !rawTitleZh && !rawTitleEn) return '';

  const boxBg = stop.interchangeBoxColor || effVar.interchangeBg || C.interchangeDefaultBg || C.introBannerBg || '#65b741';
  const boxText = stop.interchangeBoxTextColor || C.interchangeDefaultText || '#ffffff';
  const hasPointer = (stop.interchangePointerStyle || 'pointer') !== 'flat';
  const headerPos = stop.interchangeHeaderPos || 'top';

  const scaleVal = Math.min(2.2, Math.max(0.5, (Number(stop.interchangeScale) || 100) / 100));
  const r = (v) => Math.round(v * scaleVal * 10) / 10;

  const titleZhLines = String(rawTitleZh || '').replace(/\\n/g, '\n').split(/\r?\n|\|/).map(s => s.trim()).filter(Boolean);
  const titleEnLines = String(rawTitleEn || '').replace(/\\n/g, '\n').split(/\r?\n|\|/).map(s => s.trim()).filter(Boolean);
  const hasHeader = titleZhLines.length > 0 || titleEnLines.length > 0;

  const routesListHTML = routes.map((item, rIdx) => {
    const nodeDefaultColor = item.nodeColor || effVar.nodeColor || effVar.color || C.routeLineColor || '#008837';
    const nodeIconHTML = renderInterchangeStopNodeIconHTML(item, nodeDefaultColor, scaleVal);

    const subRoutes = ensureInterchangeItemRoutesList(item, defaultRouteColor).filter(
      sr => sr.route && String(sr.route).trim() !== ''
    );

    const routeBadgesHTML = subRoutes.map(sr => {
      const badgeBg = sr.bgColor || item.bgColor || defaultRouteColor;
      const badgeText = sr.textColor || item.textColor || '#ffffff';
      return `
        <span style="
          background-color:${badgeBg};
          color:${badgeText};
          font-size:${r(8.8)}px;
          font-weight:900;
          padding:${r(1)}px ${r(4)}px;
          border-radius:${r(2)}px;
          line-height:1.05;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        "><span class="sheet-text-fix" style="line-height:1; color:${badgeText};">${esc(sr.route.trim())}</span></span>
      `;
    }).join('');

    const hasStationName = Boolean((item.stationZh && item.stationZh.trim()) || (item.stationEn && item.stationEn.trim()));
    const hasDestName = Boolean((item.destZh && item.destZh.trim()) || (item.destEn && item.destEn.trim()));

    const stationBlockHTML = hasStationName ? `
      <div style="display:flex; flex-direction:column; justify-content:center; line-height:1.06; min-width:0;">
        ${item.stationZh ? `<span class="sheet-text-fix" style="font-size:${r(8.4)}px; font-weight:800; color:#111827; display:block; white-space:nowrap;">${esc(item.stationZh)}</span>` : ''}
        ${item.stationEn ? `<span class="sheet-text-fix" style="font-size:${r(6.6)}px; font-weight:600; color:#334155; display:block; white-space:nowrap;">${esc(item.stationEn)}</span>` : ''}
      </div>
    ` : '';

    const destBlockHTML = hasDestName ? `
      <div style="display:flex; flex-direction:column; justify-content:center; line-height:1.06; min-width:0;">
        ${item.destZh ? `<span class="sheet-text-fix" style="font-size:${r(8.2)}px; font-weight:800; color:#111827; display:block; white-space:nowrap;">${esc(item.destZh)}</span>` : ''}
        ${item.destEn ? `<span class="sheet-text-fix" style="font-size:${r(6.5)}px; font-weight:600; color:#334155; display:block; white-space:nowrap;">${esc(item.destEn)}</span>` : ''}
      </div>
    ` : '';

    return `
      <div style="
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:${r(3.5)}px;
        ${rIdx > 0 ? `padding-top:${r(2)}px; border-top:0.6px dashed rgba(0,0,0,0.14);` : ''}
      ">
        ${nodeIconHTML}
        ${stationBlockHTML}
        ${routeBadgesHTML ? `<div style="display:inline-flex; align-items:center; flex-wrap:wrap; gap:${r(2)}px; flex-shrink:0;">${routeBadgesHTML}</div>` : ''}
        ${destBlockHTML}
      </div>
    `;
  }).join('');

  const topHeaderInnerHTML = (titleZhLines.length <= 1 && titleEnLines.length <= 1)
    ? `<div style="display:flex; align-items:baseline; justify-content:center; gap:${r(3)}px; flex-wrap:wrap;">
         ${titleZhLines[0] ? `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:900; color:${boxText}; line-height:1.08; white-space:nowrap;">${esc(titleZhLines[0])}</span>` : ''}
         ${titleEnLines[0] ? `<span class="sheet-text-fix" style="font-size:${r(6.8)}px; font-weight:700; color:${boxText}; line-height:1.08; white-space:nowrap;">${esc(titleEnLines[0])}</span>` : ''}
       </div>`
    : `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;">
         ${titleZhLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(8.4)}px; font-weight:900; color:${boxText}; display:block; line-height:1.08; white-space:nowrap;">${esc(line)}</span>`).join('')}
         ${titleEnLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(6.5)}px; font-weight:700; color:${boxText}; display:block; line-height:1.06; white-space:nowrap;">${esc(line)}</span>`).join('')}
       </div>`;

  const leftHeaderInnerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px;">
      ${titleZhLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(8.6)}px; font-weight:900; color:${boxText}; display:block; line-height:1.06; white-space:nowrap;">${esc(line)}</span>`).join('')}
      ${titleEnLines.map(line => `<span class="sheet-text-fix" style="font-size:${r(6.0)}px; font-weight:700; color:${boxText}; display:block; line-height:1.04; white-space:nowrap;">${esc(line)}</span>`).join('')}
    </div>
  `;

  const mainContainerHTML = `
    <div style="
      display:inline-flex;
      flex-direction:${headerPos === 'top' ? 'column' : 'row'};
      align-items:stretch;
      border:${r(1.4)}px solid ${boxBg};
      border-radius:${r(4)}px;
      background-color:#ffffff;
      overflow:hidden;
      box-sizing:border-box;
      max-width:100%;
    ">
      ${hasHeader ? `
        <div style="
          background-color:${boxBg};
          color:${boxText};
          padding:${headerPos === 'top' ? `${r(1.8)}px ${r(6)}px` : `${r(2.5)}px ${r(5)}px`};
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          line-height:1.05;
          flex-shrink:0;
        ">
          ${headerPos === 'top' ? topHeaderInnerHTML : leftHeaderInnerHTML}
        </div>
      ` : ''}
      ${routes.length > 0 ? `
        <div style="
          padding:${r(2.5)}px ${r(5.5)}px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:${r(2)}px;
          background-color:#ffffff;
          flex:1;
        ">
          ${routesListHTML}
        </div>
      ` : ''}
    </div>
  `;

  if (layoutMode === 'stacked') {
    return `
      <div style="display:inline-flex; flex-direction:column; align-items:flex-start; margin-top:${r(2)}px; flex-shrink:0; max-width:100%;">
        ${hasPointer ? `
          <svg width="${r(9)}" height="${r(5.5)}" viewBox="0 0 9 5.5" style="margin-left:${r(12)}px; margin-bottom:-0.6px; display:block; flex-shrink:0;">
            <polygon points="4.5,0 0.5,5.5 8.5,5.5" fill="${boxBg}" />
          </svg>
        ` : ''}
        ${mainContainerHTML}
      </div>
    `;
  }

  return `
    <div style="display:inline-flex; align-items:center; flex-shrink:0; max-width:100%;">
      ${hasPointer ? `
        <svg width="${r(5.5)}" height="${r(9.5)}" viewBox="0 0 5.5 9.5" style="margin-right:-0.6px; display:block; flex-shrink:0;">
          <polygon points="0,4.75 5.5,0.5 5.5,9" fill="${boxBg}" />
        </svg>
      ` : ''}
      ${mainContainerHTML}
    </div>
  `;
}

function updateStopInterchangeRoute(stopIdx, rIdx, field, val, refreshSidebar = false) {
  const routeItem = appConfig.stops[stopIdx]?.interchangeRoutes?.[rIdx];
  if (!routeItem) return;
  routeItem[field] = val;
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

function removeStopInterchangeRoute(stopIdx, rIdx) {
  const list = appConfig.stops[stopIdx]?.interchangeRoutes;
  if (!Array.isArray(list)) return;
  list.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// Render the entire Route Map area (確保雙數分段收費淺色背景完整包覆左上旁註符號與站名)
function renderRouteMapSectionHTML() {
  syncBoundVariants();
  const L = appConfig.layout;
  const C = appConfig.colors;
  const metrics = getTrackMetrics();
  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const columns = splitStopsIntoColumns(enrichedStops);
  const totalCols = columns.length;
  const isMapLeft = L.mapPosition !== 'right';
  const interStopGapPx = Math.max(0, Math.round((Number(L.stopVerticalGapPx) ?? 3.0) * 1.6 * 10) / 10);
  const nodeNameGapPx = Math.max(0, Number(L.nodeToNameGapPx) ?? 6);

  const showVariantLegend = (L.showVariantLegend !== false) && appConfig.variants && appConfig.variants.length > 1;
  const legendHTML = showVariantLegend ? `
    <div style="
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      gap:8px;
      padding:3px 6px;
      margin-bottom:4px;
      background:#f8fafc;
      border:1px solid #e2e8f0;
      border-radius:4px;
      font-size:8px;
      color:#334155;
      flex-shrink:0;
    ">
      ${appConfig.variants.map((v, vIdx) => {
        const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
        return `
          <div style="display:flex; align-items:center; gap:4px; font-weight:700;">
            <span style="
              display:inline-flex;
              align-items:center;
              justify-content:center;
              width:14px;
              height:14px;
              border-radius:9999px;
              background-color:${v.color};
              color:${vBadgeTextColor};
              font-size:9.2px;
              font-weight:900;
              line-height:1;
            ">
              <span class="sheet-text-fix" style="line-height:1;">${vIdx + 1}</span>
            </span>
            <span style="
              display:inline-block;
              width:14px;
              height:0;
              border-top:3px ${v.lineStyle === 'dashed' ? 'dashed' : 'solid'}${v.color};
            "></span>
            <span class="sheet-text-fix">${esc(v.name)}${v.code ? ` (${esc(v.code)})` : ''}</span>
          </div>
        `;
      }).join('')}
    </div>
  ` : '';

  const columnsHTML = columns.map((colStops, colIdx) => {
    const isFirstCol = colIdx === 0;
    const isLastCol = colIdx === totalCols - 1;

    const fareGroups = groupColumnStopsByFareZone(colStops);
    const groupsHTML = fareGroups.map((group, gIdx) => {
      const isFirstGroupInCol = gIdx === 0;
      const isLastGroupInCol = gIdx === fareGroups.length - 1;
      const firstStopInGroup = group.stops[0];
      const lastStopInGroup = group.stops[group.stops.length - 1];

      const innerStopsHTML = group.stops.map((stop, sIdx) => {
        const isFirstStopInCol = isFirstGroupInCol && sIdx === 0;
        const isLastStopInCol = isLastGroupInCol && sIdx === group.stops.length - 1;

        const showTopCont = (!isFirstCol && isFirstStopInCol) || Boolean(stop.contFromLeft);
        const showBotCont = (!isLastCol && isLastStopInCol) || Boolean(stop.contToRight) || (isLastCol && isLastStopInCol && Boolean(stop.manualBreakAfter));

        const topContHTML = showTopCont ? renderColumnContinuationTopHTML(colIdx, stop, metrics) : '';
        const stopHTML = renderStopItemHTML(stop, metrics);
        const botContHTML = showBotCont ? renderColumnContinuationBottomHTML(colIdx, stop, metrics) : '';

        const betweenStopSpacer = (sIdx < group.stops.length - 1 && interStopGapPx > 0)
          ? renderTrackSpacerRowHTML(stop, metrics, 'bottom', interStopGapPx)
          : '';
        return topContHTML + stopHTML + botContHTML + betweenStopSpacer;
      }).join('');

      if (group.isEvenZone) {
        const outerTopSpacer = !isFirstGroupInCol ? renderTrackSpacerRowHTML(firstStopInGroup, metrics, 'top', 5) : '';
        const innerTopSpacer = renderTrackSpacerRowHTML(firstStopInGroup, metrics, 'top', 5);
        const innerBottomSpacer = renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', 5);
        const outerBottomSpacer = !isLastGroupInCol ? renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', 5) : '';

        const rawZoneW = group.zoneWidth || '100%';
        const bgWidthStyle = (rawZoneW === '100%')
          ? 'width:100%;'
          : `width:${rawZoneW}; max-width:100%;`;

        return `
          ${outerTopSpacer}
          <div style="position:relative; width:100%; flex:0 0 auto; display:flex; flex-direction:column;">
            <div style="
              position:absolute;
              left:${metrics.trackWidth + nodeNameGapPx}px;
              right:6px;
              top:0;
              bottom:0;
              pointer-events:none;
              z-index:0;
            ">
              <div style="
                ${bgWidthStyle}
                height:100%;
                background-color:${C.evenZoneBg};
                border-radius:4px;
                margin-left:-4.5px;
                padding:0 4.5px;
                box-sizing:content-box;
              "></div>
            </div>
            ${innerTopSpacer}
            ${innerStopsHTML}
            ${innerBottomSpacer}
          </div>
          ${outerBottomSpacer}
        `;
      }

      const nextGroup = fareGroups[gIdx + 1];
      const afterOddGroupSpacer = (!isLastGroupInCol && nextGroup && !nextGroup.isEvenZone && interStopGapPx > 0)
        ? renderTrackSpacerRowHTML(lastStopInGroup, metrics, 'bottom', interStopGapPx)
        : '';

      return `
        <div style="position:relative; width:100%; flex:0 0 auto; display:flex; flex-direction:column;">
          ${innerStopsHTML}
        </div>
        ${afterOddGroupSpacer}
      `;
    }).join('');

    const colTopPad = getColTopSpacePx(colIdx);

    return `
      <div style="
        flex:1;
        min-width:0;
        height:100%;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding-top:${colTopPad}px;
        ${!isLastCol ? `border-right:1px dashed #cbd5e1; padding-right:${Math.round(L.columnGapPx / 2)}px;` : ''}
      ">
        ${groupsHTML}
      </div>
    `;
  }).join('');

  return `
    <div style="
      width:${L.mapWidthPercent}%;
      height:100%;
      display:flex;
      flex-direction:column;
      box-sizing:border-box;
      ${isMapLeft ? 'padding-right:8px;' : 'padding-left:8px;'}
      transform:translate(${Number(L.mapOffsetX)}px, ${Number(L.mapOffsetY)}px);
    ">
      ${legendHTML}
      <div style="
        flex:1;
        min-height:0;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:stretch;
        gap:${Math.round(L.columnGapPx / 2)}px;
        width:100%;
      ">
        ${columnsHTML}
      </div>
    </div>
  `;
}

function isRightModuleEnabled(key) {
  const R = appConfig.rightData;
  if (key === 'intro_banner') return R.introEnabled !== false && Boolean(R.introZh || R.introEn);
  if (key === 'additional_info') return Boolean(R.additionalInfo?.enabled);
  if (key === 'octopus_fare') return Boolean(R.octopusFare?.enabled);
  if (key === 'bbi_info') return Boolean(R.bbiInfo?.enabled);
  if (key === 'effective_footer') return Boolean(R.effectiveFooter?.enabled);
  return true;
}

function updateRightField(field, val) {
  appConfig.rightData[field] = val;
  if (field === 'routeNumber' && Array.isArray(appConfig.rightData.routeBoxes) && appConfig.rightData.routeBoxes[0]) {
    appConfig.rightData.routeBoxes[0].routeNumber = val;
  }
  if (field === 'routeBoxInnerWhiteLine' && Array.isArray(appConfig.rightData.routeBoxes) && appConfig.rightData.routeBoxes[0]) {
    appConfig.rightData.routeBoxes[0].innerWhiteLine = Boolean(val);
  }
  renderA4Sheet();
  if (['introEnabled', 'routeBoxInnerWhiteLine', 'headerTwoPerRow', 'headerMentionedInnerWhiteLine', 'introIconType'].includes(field)) {
    renderEditorSidebar();
  }
}

// --------------------------------------------------------------------------
// TAB 3: RIGHT SIDE INFO MODULES (INCLUDES VARIANT ROUTE NUMBER BOX & 0 DATE GROUPS)
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// TAB 3: RIGHT SIDE INFO MODULES (路線號碼框 #X 與班次時間表顏色已統一歸納至 Tab 5)
// --------------------------------------------------------------------------
function renderInfoTabHTML() {
  const R = appConfig.rightData;
  const L = appConfig.layout;
  const C = appConfig.colors;
  const T = R.timetable;
  const O = R.octopusFare;
  const B = R.bbiInfo;
  const A = R.additionalInfo;
  const F = R.effectiveFooter;
  const variants = appConfig.variants || [];
  const routeBoxes = ensureHeaderRouteBoxesSynced();
  syncBoundVariants();
  const variantTables = ensureVariantTimetablesSynced();
  const primaryVariantColor = variants[0]?.color || C.routeLineColor || '#008837';

  const moduleMeta = {
    route_header: { label: '路線號碼及目的地 (獨立容器)', sectionId: 'sec-route', toggleable: false },
    intro_banner: { label: '路線中英文簡介橫幅', sectionId: 'sec-intro', toggleable: true, enabled: R.introEnabled !== false, toggleFn: "updateRightField('introEnabled', this.checked)" },
    timetable: { label: '時間表 (支援多班次獨立表與附註)', sectionId: 'sec-timetable', toggleable: false },
    additional_info: { label: '額外資訊與備註', sectionId: 'sec-additional', toggleable: true, enabled: A.enabled, toggleFn: "updateAdditionalMeta('enabled', this.checked)" },
    octopus_fare: { label: '八達通及電子支付分段收費', sectionId: 'sec-octopus', toggleable: true, enabled: O.enabled, toggleFn: "updateOctopusMeta('enabled', this.checked)" },
    bbi_info: { label: '巴士轉乘計劃資訊', sectionId: 'sec-bbi', toggleable: true, enabled: B.enabled, toggleFn: "updateBbiMeta('enabled', this.checked)" },
    effective_footer: { label: '生效日期與營運商資訊', sectionId: 'sec-footer', toggleable: true, enabled: F.enabled, toggleFn: "updateFooterMeta('enabled', this.checked)" }
  };

  const orderListHTML = (appConfig.rightModulesOrder || []).map((key, idx) => {
    const meta = moduleMeta[key] || { label: key, sectionId: '' };
    return `
      <div class="flex items-center justify-between bg-slate-900/85 px-2.5 py-1.5 rounded-lg border border-slate-700/80 text-[11px] gap-2">
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="w-5 h-5 rounded bg-slate-800 text-emerald-400 font-mono font-bold flex items-center justify-center text-[10px] shrink-0">${idx + 1}</span>
          ${meta.toggleable ? `
            <input type="checkbox" ${meta.enabled ? 'checked' : ''} onchange="${meta.toggleFn}" class="rounded accent-emerald-500 shrink-0" title="顯示/隱藏此模塊" />
          ` : ''}
          <span onclick="switchEditorTab('info', '${meta.sectionId}')" class="font-medium text-slate-200 truncate cursor-pointer hover:text-emerald-300">${meta.label}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button onclick="moveRightModule(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-800 hover:bg-emerald-600 disabled:opacity-30 text-slate-300 hover:text-white transition" title="上移此模塊"><i class="fa-solid fa-arrow-up text-[10px]"></i></button>
          <button onclick="moveRightModule(${idx}, 1)" ${idx === appConfig.rightModulesOrder.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-800 hover:bg-emerald-600 disabled:opacity-30 text-slate-300 hover:text-white transition" title="下移此模塊"><i class="fa-solid fa-arrow-down text-[10px]"></i></button>
        </div>
      </div>
    `;
  }).join('');

  const headerRouteBoxesEditorHTML = routeBoxes.map((box, bIdx) => {
    const boxBg = box.bgColor || C.routeBoxBg || '#008837';
    const boxText = box.textColor || C.routeBoxText || '#ffffff';
    const boxFontSize = Math.max(16, Number(box.fontSizePx) || 100);
    const boundVarId = box.boundVariantId || '';

    const variantBindOptionsHTML = variants.map((v, vIdx) => `
      <option value="${v.id}" ${boundVarId === v.id ? 'selected' : ''}>捆綁班次時間表 #${vIdx + 1}：${esc(v.name)}</option>
    `).join('');

    return `
      <div class="bg-slate-900/85 border ${boundVarId ? 'border-emerald-500/80' : 'border-slate-700/80'} rounded-lg p-2.5 space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-black shadow" style="background:${boxBg}; color:${boxText};">${esc(box.routeNumber || `#${bIdx + 1}`)}</span>
            <span class="text-[11px] font-bold text-emerald-300">路線號碼框 #${bIdx + 1}</span>
            ${boundVarId ? `<span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold">已捆綁時間表</span>` : ''}
          </div>
          <div class="flex items-center gap-2">
            <label class="flex items-center gap-1 text-[10px] text-slate-200 cursor-pointer">
              <input type="checkbox" ${box.innerWhiteLine !== false ? 'checked' : ''} onchange="updateHeaderRouteBox(${bIdx}, 'innerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
              <span>保留此路線框內細白線</span>
            </label>
            <button onclick="switchEditorTab('colors', 'sec-colors-header-boxes')" class="px-1.5 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[9px] font-bold transition" title="前往 5. 顏色與SVG 設定此框配色">
              <i class="fa-solid fa-palette mr-0.5"></i>配色
            </button>
            ${routeBoxes.length > 1 ? `
              <button onclick="removeHeaderRouteBox(${bIdx})" class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px]"><i class="fa-solid fa-trash"></i></button>
            ` : ''}
          </div>
        </div>

        <div class="bg-slate-950/75 px-2.5 py-1.5 rounded border border-slate-800 flex items-center justify-between gap-2">
          <label class="text-[10px] text-amber-300 font-bold shrink-0"><i class="fa-solid fa-link mr-1"></i>捆綁班次時間表</label>
          <select onchange="bindHeaderRouteBoxToVariant(${bIdx}, this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] text-slate-100">
            <option value="" ${!boundVarId ? 'selected' : ''}>不捆綁 (獨立路線框)</option>
            ${variantBindOptionsHTML}
          </select>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">路線號碼</label>
            <input type="text" value="${esc(box.routeNumber)}" oninput="updateHeaderRouteBox(${bIdx}, 'routeNumber', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm font-black text-emerald-400" />
          </div>
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此框專屬中文目的地 (選填)</label>
            <input type="text" placeholder="留空共用下方主目的地" value="${esc(box.destZh || '')}" oninput="updateHeaderRouteBox(${bIdx}, 'destZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100" />
          </div>
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此框專屬英文目的地 (選填)</label>
            <input type="text" placeholder="Optional Dest En" value="${esc(box.destEn || '')}" oninput="updateHeaderRouteBox(${bIdx}, 'destEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200" />
          </div>
        </div>

        <div class="bg-slate-950/70 px-2.5 py-1.5 rounded border border-slate-800 flex items-center justify-between gap-2">
          <label class="text-[10px] text-emerald-300 font-bold shrink-0"><i class="fa-solid fa-text-height mr-1"></i>此路線號碼框字體大小 (px)</label>
          <div class="flex items-center gap-1.5 flex-1 max-w-[200px]">
            <input type="range" min="20" max="130" step="1" value="${boxFontSize}" oninput="updateHeaderRouteBox(${bIdx}, 'fontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
            <input type="number" min="16" max="150" step="1" value="${boxFontSize}" oninput="updateHeaderRouteBox(${bIdx}, 'fontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono text-[11px]" />
          </div>
        </div>
      </div>
    `;
  }).join('');

  const variantTimetablesEditorHTML = variantTables.map((vt, vtIdx) => {
    const v = variants[vtIdx] || { name: `班次 #${vtIdx + 1}`, color: C.themePrimary, badgeText: 'white' };
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const boundToId = v.boundToId || '';

    const otherVariantOptionsHTML = variants
      .map((ov, oIdx) => {
        if (oIdx === vtIdx) return '';
        return `<option value="${ov.id}" ${boundToId === ov.id ? 'selected' : ''}>捆綁已有班次時間表 #${oIdx + 1}：${esc(ov.name)}</option>`;
      })
      .join('');

    const headerBoxOptionsHTML = routeBoxes
      .map((hb, hIdx) => `<option value="${hb.id}" ${boundToId === hb.id ? 'selected' : ''}>捆綁頂部路線號碼框 #${hIdx + 1} (${esc(hb.routeNumber || '路線')})</option>`)
      .join('');

    const dateGroupsEditorHTML = (vt.dateGroups || []).map((dg, dgIdx) => {
      const rowsEditorHTML = (dg.rows || []).map((row, rIdx) => `
        <div class="flex items-center gap-1.5">
          <input type="text" placeholder="開出時間 (如 0600 - 0030)" value="${esc(row.time)}" oninput="updateVariantTimetableRow(${vtIdx}, ${dgIdx}, ${rIdx}, 'time', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          ${vt.showHeadwayCol !== false ? `
            <input type="text" placeholder="班次分鐘 (如 30)" value="${esc(row.headway)}" oninput="updateVariantTimetableRow(${vtIdx}, ${dgIdx},${rIdx}, 'headway', this.value)" class="w-24 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-bold text-center" />
          ` : ''}
          <button onclick="removeVariantTimetableRow(${vtIdx}, ${dgIdx}, ${rIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `).join('');

      return `
        <div class="bg-slate-950/80 border border-slate-700/80 rounded-lg p-2 space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <div class="grid grid-cols-2 gap-1.5 flex-1">
              <input type="text" placeholder="日期中文 (如: 每日)" value="${esc(dg.dateTitleZh)}" oninput="updateVariantTimetableDateGroup(${vtIdx}, ${dgIdx}, 'dateTitleZh', this.value)" class="bg-slate-800 border border-slate-600 rounded px-2 py-1 font-bold text-slate-100" />
              <input type="text" placeholder="日期英文 (如: Daily)" value="${esc(dg.dateTitleEn)}" oninput="updateVariantTimetableDateGroup(${vtIdx}, ${dgIdx}, 'dateTitleEn', this.value)" class="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-slate-200" />
            </div>
            <button onclick="removeVariantTimetableDateGroup(${vtIdx}, ${dgIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px]" title="刪除此日期組 (可刪至0個)"><i class="fa-solid fa-trash"></i></button>
          </div>
          <div class="space-y-1.5 pl-2 border-l-2 border-emerald-500/50">
            <div class="flex items-center justify-between text-[10px] text-slate-400">
              <span>時段 (Time)${vt.showHeadwayCol !== false ? ' & 班次分鐘 (Headway)' : ''}</span>
              <button onclick="addVariantTimetableRow(${vtIdx}, ${dgIdx})" class="text-emerald-400 hover:text-emerald-300 font-bold">+ 新增時段行</button>
            </div>
            ${rowsEditorHTML}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="bg-slate-900/90 border ${boundToId ? 'border-emerald-500/80' : 'border-slate-700'} rounded-xl p-3 space-y-2.5">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shadow" style="background:${v.color}; color:${vBadgeTextColor};">${vtIdx + 1}</span>
            <span class="font-bold text-emerald-300 text-xs">${esc(v.name)} 獨立時間表</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="switchEditorTab('colors', 'sec-colors-variant-${vtIdx}')" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold transition">
              <i class="fa-solid fa-palette mr-1"></i>此班次配色
            </button>
            <button onclick="addVariantTimetableDateGroup(${vtIdx})" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold">+ 新增日期組</button>
            ${variants.length > 1 ? `
              <label class="flex items-center gap-1 text-[10px] text-slate-300 cursor-pointer">
                <input type="checkbox" ${vt.enabled !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'enabled', this.checked, true)" class="rounded accent-emerald-500" />
                <span>顯示此表</span>
              </label>
            ` : ''}
          </div>
        </div>

        <div class="bg-slate-950/75 p-2.5 rounded-lg border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-emerald-300"><i class="fa-solid fa-bus mr-1"></i>此班次路線號碼框設定</span>
            <label class="flex items-center gap-1 text-[10px] text-slate-300 cursor-pointer">
              <input type="checkbox" ${vt.routeBoxInnerWhiteLine !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'routeBoxInnerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
              <span>保留路線號碼框內細白線</span>
            </label>
          </div>

          <div class="flex items-center justify-between gap-2 bg-slate-900/90 px-2 py-1 rounded border border-slate-700/80">
            <label class="text-[9px] font-bold text-amber-300 shrink-0"><i class="fa-solid fa-link mr-1"></i>捆綁同步設定</label>
            <select onchange="bindServiceVariant(${vtIdx}, this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-100">
              <option value="" ${!boundToId ? 'selected' : ''}>不捆綁 (獨立路線框設定)</option>
              <option value="__theme__" ${boundToId === '__theme__' ? 'selected' : ''}>捆綁主路線主題色 (同步全局主題色)</option>
              ${headerBoxOptionsHTML}
              ${otherVariantOptionsHTML}
            </select>
          </div>

          <div class="grid grid-cols-3 gap-1.5">
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">路線號碼</label>
              <input type="text" placeholder="留空不顯示 (如 B13P)" value="${esc(vt.routeNumber || '')}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeNumber', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-black text-xs" />
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">路線框字體大小(px)</label>
              <input type="number" min="0" max="60" step="0.5" placeholder="0 = 自動縮放" title="設為 0 時自動按字符縮放" value="${Number(vt.routeBoxFontSizePx) || 0}" oninput="updateVariantTimetableMeta(${vtIdx}, 'routeBoxFontSizePx', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-mono text-xs text-center" />
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">路線框位置</label>
              <select onchange="updateVariantTimetableMeta(${vtIdx}, 'routeBoxPosition', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px] text-slate-200">
                <option value="left" ${(vt.routeBoxPosition || 'left') === 'left' ? 'selected' : ''}>並排於左方</option>
                <option value="top" ${vt.routeBoxPosition === 'top' ? 'selected' : ''}>置於頂部全寬</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
          <label class="flex items-center gap-1.5 text-[11px] text-emerald-300 cursor-pointer">
            <input type="checkbox" ${vt.showHeadwayCol !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showHeadwayCol', this.checked, true)" class="rounded accent-emerald-500" />
            <span>顯示「班次(分鐘)」欄</span>
          </label>
          <label class="flex items-center gap-1.5 text-[11px] text-sky-300 cursor-pointer">
            <input type="checkbox" ${vt.showDateHeader !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showDateHeader', this.checked, true)" class="rounded accent-sky-500" />
            <span>顯示「日期及時鐘標籤」</span>
          </label>
          ${variants.length > 1 ? `
            <label class="flex items-center gap-1.5 text-[11px] text-amber-300 cursor-pointer">
              <input type="checkbox" ${vt.showVariantBadge !== false ? 'checked' : ''} onchange="updateVariantTimetableMeta(${vtIdx}, 'showVariantBadge', this.checked)" class="rounded accent-amber-500" />
              <span>顯示圓圈班次號碼</span>
            </label>
          ` : ''}
        </div>

        <div class="grid grid-cols-2 gap-1.5">
          <div>
            <label class="block text-[10px] text-amber-300 mb-0.5">時間表開頭附註 (中文)</label>
            <input type="text" placeholder="選填，支援提及路線如 B13P 或 [968]" value="${esc(vt.topNoteZh)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'topNoteZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 text-[11px]" />
          </div>
          <div>
            <label class="block text-[10px] text-amber-300 mb-0.5">時間表開頭附註 (英文)</label>
            <input type="text" placeholder="Optional top note" value="${esc(vt.topNoteEn)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'topNoteEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-[11px]" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-1.5">
          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">中文起點開出標題</label>
            <input type="text" value="${esc(vt.originHeaderZh)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'originHeaderZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 font-bold" />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">英文起點開出標題</label>
            <input type="text" value="${esc(vt.originHeaderEn)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'originHeaderEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          </div>
        </div>

        ${vt.showHeadwayCol !== false ? `
          <div class="grid grid-cols-2 gap-1.5">
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">班次(分鐘)中文標題</label>
              <input type="text" value="${esc(vt.headwayLabelZh)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'headwayLabelZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">班次(分鐘)英文標題</label>
              <input type="text" value="${esc(vt.headwayLabelEn)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'headwayLabelEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
            </div>
          </div>
        ` : ''}

        <div class="space-y-1.5">
          ${dateGroupsEditorHTML || `<div class="text-[10px] text-slate-500 italic py-1">目前為 0 個日期組，點擊右上角「+ 新增日期組」即可加入。</div>`}
        </div>

        <div class="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-800">
          <div>
            <label class="block text-[10px] text-amber-300 mb-0.5">時間表結尾附註 (中文)</label>
            <input type="text" placeholder="選填，支援提及路線如 B13P 或 [968]" value="${esc(vt.bottomNoteZh)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'bottomNoteZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 text-[11px]" />
          </div>
          <div>
            <label class="block text-[10px] text-amber-300 mb-0.5">時間表結尾附註 (英文)</label>
            <input type="text" placeholder="Optional bottom note" value="${esc(vt.bottomNoteEn)}" oninput="updateVariantTimetableMeta(${vtIdx}, 'bottomNoteEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-[11px]" />
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Module Order -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-sort text-emerald-400"></i>
          <span>右側靈活模塊順序調配與顯示開關</span>
        </h3>
        <label class="flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer">
          <input type="checkbox" ${L.stickLastModuleToBottom ? 'checked' : ''} onchange="updateLayout('stickLastModuleToBottom', this.checked)" class="rounded accent-emerald-500" />
          <span>最後一項貼齊頁底</span>
        </label>
      </div>
      <div class="space-y-1">
        ${orderListHTML}
      </div>
    </div>

    <!-- 1. Route Number & Destination (獨立容器) -->
    <div id="sec-route" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-bus text-emerald-400"></i>
          <span>1. 路線號碼及目的地 (獨立容器)</span>
        </h3>
        <div class="flex items-center gap-2">
          <label class="flex items-center gap-1.5 text-[11px] text-amber-300 font-bold cursor-pointer bg-slate-900/80 px-2 py-1 rounded border border-amber-500/40">
            <input type="checkbox" ${R.headerTwoPerRow ? 'checked' : ''} onchange="updateRightField('headerTwoPerRow', this.checked)" class="rounded accent-amber-500" />
            <span>每兩個為一行顯示</span>
          </label>
          <button onclick="addHeaderRouteBox()" class="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">+ 新增路線號碼框</button>
        </div>
      </div>

      <div class="space-y-2">
        ${headerRouteBoxesEditorHTML}
      </div>

      <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-700/60">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">主中文目的地 (獨立容器)</label>
          <input type="text" value="${esc(R.destZh)}" oninput="updateRightField('destZh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 font-bold text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">主英文目的地 (獨立容器)</label>
          <input type="text" value="${esc(R.destEn)}" oninput="updateRightField('destEn', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-slate-100" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">中文途徑方向 <span class="text-emerald-400">(強制小字「經」前綴)</span></label>
          <div class="flex items-center bg-slate-900 border border-slate-700 rounded overflow-hidden">
            <span class="px-2 py-1 bg-slate-800 text-emerald-300 font-bold text-[10px] border-r border-slate-700 shrink-0">經</span>
            <input type="text" placeholder="如：西隧、大欖隧道" value="${esc(String(R.viaZh || '').replace(/^經\s*/, ''))}" oninput="updateRightField('viaZh', this.value)" class="w-full bg-transparent px-2 py-1 text-slate-100 focus:outline-none" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">英文途徑方向 <span class="text-emerald-400">(強制小字「VIA」前綴)</span></label>
          <div class="flex items-center bg-slate-900 border border-slate-700 rounded overflow-hidden">
            <span class="px-2 py-1 bg-slate-800 text-emerald-300 font-bold text-[10px] border-r border-slate-700 shrink-0">VIA</span>
            <input type="text" placeholder="e.g. WHC, Tai Lam Tunnel" value="${esc(String(R.viaEn || '').replace(/^via\s+/i, ''))}" oninput="updateRightField('viaEn', this.value)" class="w-full bg-transparent px-2 py-1 text-slate-100 focus:outline-none" />
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Route Intro Banner (新增選擇隧道與走廊 SVG 圖標) -->
    <div id="sec-intro" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-bullhorn text-amber-400"></i>
          <span>2. 路線中英文簡介橫幅</span>
        </h3>
        <label class="flex items-center gap-1.5 text-[11px] text-emerald-300 cursor-pointer">
          <input type="checkbox" ${R.introEnabled !== false ? 'checked' : ''} onchange="updateRightField('introEnabled', this.checked)" class="rounded accent-emerald-500" />
          <span>顯示簡介橫幅</span>
        </label>
      </div>

      <div class="bg-slate-900/85 p-2 rounded-lg border border-slate-700/80 grid grid-cols-3 gap-2 items-center">
        <div class="col-span-2">
          <label class="block text-[10px] text-emerald-300 font-bold mb-1">簡介橫幅配搭隧道 / 走廊 SVG 圖標</label>
          <select onchange="updateRightField('introIconType', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100">
            <option value="none" ${(R.introIconType || 'none') === 'none' ? 'selected' : ''}>不顯示圖標 (純文字橫幅)</option>
            <option value="corridor" ${R.introIconType === 'corridor' ? 'selected' : ''}>顯示途徑走廊 SVG (交通標誌 353)</option>
            <option value="tunnel" ${R.introIconType === 'tunnel' ? 'selected' : ''}>顯示途徑隧道 SVG (隧道標誌 HK_Tunnel)</option>
            <option value="both" ${R.introIconType === 'both' ? 'selected' : ''}>同時顯示走廊 + 隧道 SVG 圖標</option>
          </select>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">圖標大小 (px)</label>
          <div class="flex items-center gap-1.5">
            <input type="number" min="14" max="42" step="1" value="${Number(R.introIconSizePx) || 22}" oninput="updateRightField('introIconSizePx', Number(this.value))" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center text-emerald-300 font-mono text-[11px]" />
            <span class="inline-flex items-center gap-1 shrink-0">
              ${createHkTrafficSign353Svg(15, primaryVariantColor)}
              ${createHkTunnelSvg(15, primaryVariantColor)}
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-2">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線中文簡介</label>
          <input type="text" value="${esc(R.introZh)}" oninput="updateRightField('introZh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-100 font-bold" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線英文簡介</label>
          <input type="text" value="${esc(R.introEn)}" oninput="updateRightField('introEn', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-100" />
        </div>
      </div>
    </div>

    <!-- 3. Timetable -->
    <div id="sec-timetable" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-regular fa-clock text-sky-400"></i>
          <span>3. 時間表設定 (支援多班次獨立表與提及路線大小)</span>
        </h3>
      </div>

      <div>
        <label class="block text-[10px] text-slate-400 mb-1">時間表全寬 Label 主標題 (中 / 英)</label>
        <div class="flex gap-1.5">
          <input type="text" value="${esc(T.titleZh)}" oninput="updateTimetableMeta('titleZh', this.value)" class="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          <input type="text" value="${esc(T.titleEn)}" oninput="updateTimetableMeta('titleEn', this.value)" class="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
      </div>

      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-emerald-300">
            <i class="fa-solid fa-tags mr-1"></i>時間表提及的其他路線號碼自定義大小 (顏色與此班次路線號碼一致)
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] text-slate-300 mb-1">提及路線號碼大小 (px)</label>
            <div class="flex items-center gap-1.5">
              <input type="range" min="6" max="20" step="0.2" value="${Number(T.mentionedRouteFontSizePx) || 9.2}" oninput="updateTimetableMeta('mentionedRouteFontSizePx', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
              <input type="number" min="5" max="28" step="0.2" value="${Number(T.mentionedRouteFontSizePx) || 9.2}" oninput="updateTimetableMeta('mentionedRouteFontSizePx', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-emerald-300 font-mono" />
            </div>
          </div>
          <div>
            <label class="block text-[10px] text-slate-300 mb-1">提及路線顯示樣式</label>
            <select onchange="updateTimetableMeta('mentionedRouteStyle', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100">
              <option value="badge" ${(T.mentionedRouteStyle || 'badge') === 'badge' ? 'selected' : ''}>同色底框標籤 (Badge)</option>
              <option value="text" ${T.mentionedRouteStyle === 'text' ? 'selected' : ''}>同色粗體文字 (Text)</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-[9px] text-slate-400 mb-0.5">額外指定識別的純數字路線號碼 (選填，以逗號分隔如 968, 681；英數路線如 B13P 或 [路線] 會自動識別)</label>
          <input type="text" placeholder="例如：968, 681" value="${esc(T.mentionedRouteNumbers || '')}" oninput="updateTimetableMeta('mentionedRouteNumbers', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200" />
        </div>
      </div>

      <div class="space-y-3">
        ${variantTimetablesEditorHTML}
      </div>
    </div>

    <!-- 4. Additional Info -->
    <div id="sec-additional" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-circle-info text-purple-400"></i>
          <span>4. 額外資訊 / 班次備註</span>
        </h3>
        <div class="flex items-center gap-2">
          <button onclick="addAdditionalNote()" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 text-[10px]">+ 新增備註</button>
          <input type="checkbox" ${A.enabled ? 'checked' : ''} onchange="updateAdditionalMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
        </div>
      </div>

      <div class="space-y-2">
        ${(A.notes || []).map((n, nIdx) => `
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700 space-y-1.5">
            <div class="flex items-center gap-1.5">
              <input type="text" placeholder="符號 (#)" value="${esc(n.symbol)}" oninput="updateAdditionalNote(${nIdx}, 'symbol', this.value)" class="w-12 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center font-bold text-amber-300" />
              <input type="text" placeholder="中文備註內容" value="${esc(n.zh)}" oninput="updateAdditionalNote(${nIdx}, 'zh', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
              <button onclick="removeAdditionalNote(${nIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-trash"></i></button>
            </div>
            <input type="text" placeholder="英文備註內容 (選填)" value="${esc(n.en)}" oninput="updateAdditionalNote(${nIdx}, 'en', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300 text-[11px]" />
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 5. Octopus Section Fare -->
    <div id="sec-octopus" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-credit-card text-amber-400"></i>
          <span>5. 八達通及電子支付分段收費資訊</span>
        </h3>
        <div class="flex items-center gap-2">
          <button onclick="addOctopusItem()" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 text-[10px]">+ 新增分段項目</button>
          <input type="checkbox" ${O.enabled ? 'checked' : ''} onchange="updateOctopusMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
        </div>
      </div>

      <div class="space-y-2">
        ${(O.items || []).map((item, iIdx) => `
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700 space-y-1.5">
            <div class="flex items-center gap-1.5">
              <input type="text" placeholder="中文路段 (如: 高埔村往新田)" value="${esc(item.sectionZh)}" oninput="updateOctopusItem(${iIdx}, 'sectionZh', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 font-bold text-slate-100" />
              <input type="text" placeholder="價錢 ($6.6)" value="${esc(item.price)}" oninput="updateOctopusItem(${iIdx}, 'price', this.value)" class="w-20 bg-slate-800 border border-slate-700 rounded px-2 py-1 font-black text-emerald-300 text-right" />
              <button onclick="removeOctopusItem(${iIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-trash"></i></button>
            </div>
            <input type="text" placeholder="英文路段 (如: Ko Po Tsuen to San Tin)" value="${esc(item.sectionEn)}" oninput="updateOctopusItem(${iIdx}, 'sectionEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300" />
          </div>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 gap-1.5">
        <label class="text-[10px] text-slate-400">八達通分段收費拍卡條款 (中 / 英)</label>
        <textarea rows="2" oninput="updateOctopusMeta('noteZh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200">${esc(O.noteZh)}</textarea>
        <textarea rows="2" oninput="updateOctopusMeta('noteEn', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-300">${esc(O.noteEn)}</textarea>
      </div>
    </div>

    <!-- 6. Bus-Bus Interchange (BBI) -->
    <div id="sec-bbi" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-solid fa-shuffle text-emerald-400"></i>
          <span>6. 巴士轉乘計劃資訊</span>
        </h3>
        <div class="flex items-center gap-2">
          <button onclick="addBbiItem()" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 text-[10px]">+ 新增轉乘條目</button>
          <input type="checkbox" ${B.enabled ? 'checked' : ''} onchange="updateBbiMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
        </div>
      </div>

      <div class="space-y-1.5">
        ${(B.items || []).map((item, bIdx) => `
          <div class="flex items-center gap-1.5 bg-slate-900/80 p-1.5 rounded border border-slate-700">
            <input type="text" placeholder="中文轉乘內容" value="${esc(item.zh)}" oninput="updateBbiItem(${bIdx}, 'zh', this.value)" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
            <input type="text" placeholder="英文轉乘內容" value="${esc(item.en)}" oninput="updateBbiItem(${bIdx}, 'en', this.value)" class="w-1/2 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-300" />
            <button onclick="removeBbiItem(${bIdx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white"><i class="fa-solid fa-trash"></i></button>
          </div>
        `).join('')}
      </div>

      <div class="grid grid-cols-2 gap-2">
        <input type="text" value="${esc(B.footerZh)}" oninput="updateBbiMeta('footerZh', this.value)" class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        <input type="text" value="${esc(B.footerEn)}" oninput="updateBbiMeta('footerEn', this.value)" class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
      </div>
    </div>

    <!-- 7. Effective Date & Footer -->
    <div id="sec-footer" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 text-xs flex items-center gap-2">
          <i class="fa-regular fa-calendar-check text-sky-400"></i>
          <span>7. 生效日期與營運商資訊</span>
        </h3>
        <input type="checkbox" ${F.enabled ? 'checked' : ''} onchange="updateFooterMeta('enabled', this.checked)" class="rounded accent-emerald-500" />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">中文生效日期 (僅日期為紅字，其餘灰字)</label>
          <input type="text" placeholder="如 2026年10月12日" value="${esc(F.dateZh)}" oninput="updateFooterMeta('dateZh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100 font-bold" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">英文生效日期 (僅 date 為紅字，其餘灰字)</label>
          <input type="text" placeholder="如 12 October 2026" value="${esc(F.dateEn)}" oninput="updateFooterMeta('dateEn', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">查詢熱線 / 網址</label>
          <div class="flex gap-1">
            <input type="text" value="${esc(F.hotline)}" oninput="updateFooterMeta('hotline', this.value)" class="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
            <input type="text" value="${esc(F.website)}" oninput="updateFooterMeta('website', this.value)" class="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">營運商名稱 (中/英) 與編號</label>
          <div class="flex gap-1">
            <input type="text" value="${esc(F.operatorZh)}" oninput="updateFooterMeta('operatorZh', this.value)" class="w-1/3 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-slate-100" />
            <input type="text" value="${esc(F.operatorEn)}" oninput="updateFooterMeta('operatorEn', this.value)" class="w-1/3 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-slate-100" />
            <input type="text" value="${esc(F.versionCode)}" oninput="updateFooterMeta('versionCode', this.value)" class="w-1/3 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-slate-400 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// TAB 4: SERVICE VARIANTS & ZERO-SHIFT EXPORT SETTINGS (班次路線 #X 顏色已統一歸納至 Tab 5)
// --------------------------------------------------------------------------
function renderVariantsAndExportTabHTML() {
  const L = appConfig.layout;
  const variants = appConfig.variants || [];
  const headerBoxes = ensureHeaderRouteBoxesSynced();
  syncBoundVariants();
  ensureVariantTimetablesSynced();

  const variantsListHTML = variants.map((v, vIdx) => {
    const badgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
    const boundToId = v.boundToId || '';

    const otherVariantOptionsHTML = variants
      .map((ov, oIdx) => {
        if (oIdx === vIdx) return '';
        return `<option value="${ov.id}" ${boundToId === ov.id ? 'selected' : ''}>捆綁已有班次 #${oIdx + 1}：${esc(ov.name)}</option>`;
      })
      .join('');

    const headerBoxOptionsHTML = headerBoxes
      .map((hb, hIdx) => `<option value="${hb.id}" ${boundToId === hb.id ? 'selected' : ''}>捆綁頂部路線框 #${hIdx + 1} (${esc(hb.routeNumber || '路線')})</option>`)
      .join('');

    return `
      <div class="bg-slate-900/80 border ${boundToId ? 'border-emerald-500/80' : 'border-slate-700'} rounded-lg p-2.5 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shadow" style="background:${v.color}; color:${badgeTextColor};">${vIdx + 1}</span>
            <span class="font-bold text-emerald-300 text-xs">班次路線 #${vIdx + 1}</span>
            ${boundToId ? `<span class="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-bold">已捆綁同步</span>` : ''}
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="switchEditorTab('colors', 'sec-colors-variant-${vIdx}')" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold transition">
              <i class="fa-solid fa-palette mr-1"></i>設定此班次配色 ➔
            </button>
            ${variants.length > 1 ? `
              <button onclick="removeServiceVariant(${vIdx})" class="px-2 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px]">刪除此班次</button>
            ` : ''}
          </div>
        </div>

        <!-- 捆綁已有班次或主題顏色設定 -->
        <div class="bg-slate-950/80 p-2 rounded border border-slate-800 space-y-1">
          <label class="block text-[10px] font-bold text-amber-300">
            <i class="fa-solid fa-link mr-1"></i>捆綁目前的已有班次 / 主題配色 (自動同步主題顏色與路線框設定)
          </label>
          <select onchange="bindServiceVariant(${vIdx}, this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100">
            <option value="" ${!boundToId ? 'selected' : ''}>不捆綁 (獨立顏色與設定)</option>
            <option value="__theme__" ${boundToId === '__theme__' ? 'selected' : ''}>捆綁主路線主題色 (與全局主題色同步)</option>
            ${otherVariantOptionsHTML}
            ${headerBoxOptionsHTML}
          </select>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div class="col-span-2">
            <label class="block text-[10px] text-slate-400 mb-1">班次名稱</label>
            <input type="text" value="${esc(v.name)}" oninput="updateVariantField(${vIdx}, 'name', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">代表符號</label>
            <input type="text" placeholder="如 # 或 *" value="${esc(v.code)}" oninput="updateVariantField(${vIdx}, 'code', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center font-bold text-amber-300" />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">線條樣式</label>
            <select onchange="updateVariantField(${vIdx}, 'lineStyle', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="solid" ${v.lineStyle === 'solid' ? 'selected' : ''}>實線 (Solid)</option>
              <option value="dashed" ${v.lineStyle === 'dashed' ? 'selected' : ''}>虛線 (Dashed)</option>
            </select>
          </div>
        </div>

        <!-- Variant Route Number Box -->
        <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
          <div>
            <label class="block text-[10px] text-emerald-300 mb-1">時間表此班次路線號碼 (滿4字符縮小)</label>
            <input type="text" placeholder="留空不顯示 (如 B13 / B13P)" value="${esc(v.routeNumber || '')}" oninput="updateVariantField(${vIdx}, 'routeNumber', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-black" />
          </div>
          <div class="flex flex-col justify-end pb-1">
            <label class="flex items-center gap-1.5 text-[11px] text-slate-300 cursor-pointer">
              <input type="checkbox" ${v.routeBoxInnerWhiteLine !== false ? 'checked' : ''} onchange="updateVariantField(${vIdx}, 'routeBoxInnerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
              <span>保留路線號碼框內細白線</span>
            </label>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Service Variants Configuration -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-code-branch text-emerald-400"></i>
          <span>自定義班次數量與圓形編號設定</span>
        </h3>
        <button onclick="addServiceVariant()" class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px]">+ 新增班次分支</button>
      </div>

      <div class="flex items-center justify-between bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700/80">
        <span class="text-[11px] font-bold text-slate-200">顯示路線圖頂部班次圖例 (Legend)</span>
        <input type="checkbox" ${L.showVariantLegend !== false ? 'checked' : ''} onchange="updateLayout('showVariantLegend', this.checked)" class="rounded accent-emerald-500 cursor-pointer" />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button onclick="updateLayout('variantDisplayMode', 'single_with_style')" class="p-2 rounded-lg border text-left transition ${L.variantDisplayMode === 'single_with_style' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
          <div class="text-xs">單主線 + 站點停靠樣式區分</div>
          <div class="text-[10px] opacity-75">B13 原版風格（部分班次停靠顯示雙環/符號）</div>
        </button>
        <button onclick="updateLayout('variantDisplayMode', 'parallel_lines')" class="p-2 rounded-lg border text-left transition ${L.variantDisplayMode === 'parallel_lines' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
          <div class="text-xs">並排多條班次路線線條</div>
          <div class="text-[10px] opacity-75">起點上方圓形色底標示 '1', '2' 及多線換欄箭嘴</div>
        </button>
      </div>

      <div>
        <label class="block text-[11px] text-slate-300 mb-1">並排多條班次路線間距 (<span id="label-parallelLineSpacingPx" class="text-emerald-400 font-mono">${L.parallelLineSpacingPx} px</span>)</label>
        <input id="range-parallelLineSpacingPx" type="range" min="6" max="26" step="0.5" value="${L.parallelLineSpacingPx}" oninput="updateLayout('parallelLineSpacingPx', this.value)" class="w-full accent-emerald-500" />
      </div>

      <div class="space-y-2">
        ${variantsListHTML}
      </div>
    </div>

    <!-- Typography & Zero-Shift Fast Export Engine Settings -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
        <i class="fa-solid fa-bolt text-amber-400"></i>
        <span>極速導出 PNG / PDF 與零位置偏差設定</span>
      </h3>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[11px] text-slate-300 mb-1">導出渲染引擎</label>
          <select onchange="updateLayout('exportEngine', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100">
            <option value="svg" ${L.exportEngine === 'svg' ? 'selected' : ''}>SVG 原位精準渲染 (100% 與預覽一致)</option>
            <option value="canvas" ${L.exportEngine === 'canvas' ? 'selected' : ''}>Canvas 原位兼容渲染</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] text-slate-300 mb-1">導出解析度倍率 (DPI)</label>
          <select onchange="updateLayout('exportScale', Number(this.value))" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-100">
            <option value="2" ${Number(L.exportScale) === 2 ? 'selected' : ''}>2x 極速高清 (推薦・秒速導出)</option>
            <option value="3" ${Number(L.exportScale) === 3 ? 'selected' : ''}>3x 超高清印刷級 (2382 × 3369 px)</option>
            <option value="4" ${Number(L.exportScale) === 4 ? 'selected' : ''}>4x 極致印刷級 (3176 × 4492 px)</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2 pt-1">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">中文站名字體大小 (px)</label>
          <input type="number" step="0.2" min="7" max="16" value="${L.stopNameFontSizePx}" oninput="updateLayout('stopNameFontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">英文站名字體大小 (px)</label>
          <input type="number" step="0.2" min="6" max="14" value="${L.stopEnFontSizePx}" oninput="updateLayout('stopEnFontSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">文字垂直微調 (px)</label>
          <input type="number" step="0.5" min="-6" max="6" value="${L.exportTextOffsetY}" oninput="updateLayout('exportTextOffsetY', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-300 font-mono" />
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// TAB 5: 「5. 顏色與SVG」集中式配色管理中心 (完整歸納：主題與路線號碼框 #X、站點與分段色、全局 SVG 色、班次路線 #X 獨立配色)
// --------------------------------------------------------------------------
function renderColorsAndSvgTabHTML() {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const routeBoxes = ensureHeaderRouteBoxesSynced();

  const curCorridorBg = C.corridorSvgBg || C.routeLineColor || '#008837';
  const curCorridorFg = C.corridorSvgFg || '#ffffff';
  const curTunnelBg = C.tunnelSvgBg || C.routeLineColor || '#008837';
  const curTunnelFg = C.tunnelSvgFg || '#ffffff';
  const curMtrBg = C.mtrSvgBg || '#A81428';
  const curMtrFg = C.mtrSvgFg || '#ffffff';
  const curPromoBg = C.promoBannerBg || C.introBannerBg || '#65b741';
  const curClockFg = C.fastClockSvgColor || '#ffffff';
  const curInterchangeBg = C.interchangeDefaultBg || C.introBannerBg || '#65b741';
  const curNodeFill = C.nodeFillColor || '#ffffff';

  // 1B. 頂部「路線號碼框 #X」獨立配色列表
  const headerRouteBoxesColorsHTML = routeBoxes.map((box, bIdx) => {
    const boxBg = box.bgColor || C.routeBoxBg || '#008837';
    const boxText = box.textColor || C.routeBoxText || '#ffffff';
    return `
      <div class="bg-slate-900/85 p-2.5 rounded-lg border border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-black shadow" style="background:${boxBg}; color:${boxText};">${esc(box.routeNumber || `#${bIdx + 1}`)}</span>
            <span class="text-[11px] font-bold text-emerald-300">路線號碼框 #${bIdx + 1} (${esc(box.routeNumber || '主路線')})</span>
          </div>
          <label class="flex items-center gap-1 text-[10px] text-slate-300 cursor-pointer">
            <input type="checkbox" ${box.innerWhiteLine !== false ? 'checked' : ''} onchange="updateHeaderRouteBox(${bIdx}, 'innerWhiteLine', this.checked)" class="rounded accent-emerald-500" />
            <span>保留框內細白線</span>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此路線號碼框底色</label>
            <div class="flex items-center gap-1">
              <input type="color" value="${boxBg}" oninput="updateHeaderRouteBox(${bIdx}, 'bgColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
              <input type="text" placeholder="預設跟隨主框色" value="${esc(box.bgColor || '')}" onchange="updateHeaderRouteBox(${bIdx}, 'bgColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
            </div>
          </div>
          <div>
            <label class="block text-[9px] text-slate-400 mb-0.5">此路線號碼框字色</label>
            <div class="flex items-center gap-1">
              <input type="color" value="${boxText}" oninput="updateHeaderRouteBox(${bIdx}, 'textColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
              <input type="text" placeholder="預設白字 (#ffffff)" value="${esc(box.textColor || '')}" onchange="updateHeaderRouteBox(${bIdx}, 'textColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 4. 各「班次路線 #X」完整獨立配色列表
  const variantPalettesHTML = variants.map((v, vIdx) => {
    const vMain = v.color || C.routeLineColor || '#008837';
    const vNode = v.nodeColor || vMain;
    const vNodeFill = v.nodeFillColor || curNodeFill;
    const vCorridorBg = v.corridorSvgBg || vMain;
    const vCorridorFg = v.corridorSvgFg || curCorridorFg;
    const vTunnelBg = v.tunnelSvgBg || vMain;
    const vTunnelFg = v.tunnelSvgFg || curTunnelFg;
    const vPromoBg = v.promoBg || curPromoBg;
    const vInterchangeBg = v.interchangeBg || curInterchangeBg;
    const vRouteBoxBg = v.routeBoxColor || C.routeBoxBg || vMain;
    const vRouteBoxText = v.routeBoxTextColor || C.routeBoxText || '#ffffff';
    const vOriginDestBg = v.originDestBg || C.originDestBg || vMain;
    const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';

    const vOriginHeaderBg = v.originHeaderBg || C.originHeaderBg || vMain;
    const vOriginHeaderText = v.originHeaderText || C.originHeaderText || 'white';
    const vHeadwayHeaderBg = v.headwayHeaderBg || C.headwayHeaderBg || vMain;
    const vHeadwayHeaderText = v.headwayHeaderText || C.headwayHeaderText || 'white';
    const vThickLineColor = v.timetableThickLineColor || vMain;
    const vClockContainerBg = v.clockContainerBg || v.dateHeaderBg || C.evenZoneBg || '#dcedc8';
    const vDateHeaderBg = v.dateHeaderBg || vClockContainerBg;
    const vClockSvgColor = v.clockSvgColor || vMain;

    return `
      <div id="sec-colors-variant-${vIdx}" class="bg-slate-900/90 border border-slate-700 rounded-xl p-3 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2 gap-2">
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 shadow" style="background:${vMain}; color:${vBadgeTextColor};">${vIdx + 1}</span>
            <span class="font-bold text-emerald-300 text-xs truncate">班次路線 #${vIdx + 1}：${esc(v.name)}</span>
            <span class="inline-flex items-center gap-1 shrink-0">
              ${createHkTrafficSign353Svg(14, vCorridorBg, vCorridorFg)}
              ${createHkTunnelSvg(14, vTunnelBg, vTunnelFg)}
            </span>
          </div>
          <button onclick="syncVariantPaletteToMain(${vIdx})" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold shrink-0 transition">
            一鍵同步至此班次主色
          </button>
        </div>

        <!-- 子區塊 A：此班次路線圖、圓圈編號、站點與 SVG 圖標顏色 -->
        <div class="space-y-2">
          <div class="text-[10px] font-bold text-emerald-400">A. 班次路線 #${vIdx + 1}：路線圖線條、圓圈編號、站點與 SVG 圖標顏色</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">1. 班次線條及圓圈底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vMain}" oninput="updateVariantColorPalette(${vIdx}, 'color', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vMain}" onchange="updateVariantColorPalette(${vIdx}, 'color', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">2. 圓圈班次號碼字色</label>
              <select onchange="updateVariantColorPalette(${vIdx}, 'badgeText', this.value, true)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-100">
                <option value="white" ${v.badgeText !== 'black' ? 'selected' : ''}>白色字 (#ffffff)</option>
                <option value="black" ${v.badgeText === 'black' ? 'selected' : ''}>黑色字 (#111827)</option>
              </select>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">3. 站點圓圈邊框色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vNode}" oninput="updateVariantColorPalette(${vIdx}, 'nodeColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vNode}" onchange="updateVariantColorPalette(${vIdx}, 'nodeColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">4. 站點圓心填充色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vNodeFill}" oninput="updateVariantColorPalette(${vIdx}, 'nodeFillColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vNodeFill}" onchange="updateVariantColorPalette(${vIdx}, 'nodeFillColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">5. 純色底站點背景</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vOriginDestBg}" oninput="updateVariantColorPalette(${vIdx}, 'originDestBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vOriginDestBg}" onchange="updateVariantColorPalette(${vIdx}, 'originDestBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-emerald-300 mb-0.5">6. 走廊 353 SVG 底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vCorridorBg}" oninput="updateVariantColorPalette(${vIdx}, 'corridorSvgBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vCorridorBg}" onchange="updateVariantColorPalette(${vIdx}, 'corridorSvgBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-cyan-300 mb-0.5">7. 隧道 SVG 底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vTunnelBg}" oninput="updateVariantColorPalette(${vIdx}, 'tunnelSvgBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vTunnelBg}" onchange="updateVariantColorPalette(${vIdx}, 'tunnelSvgBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-lime-300 mb-0.5">8. 時間宣傳框底色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vPromoBg}" oninput="updateVariantColorPalette(${vIdx}, 'promoBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vPromoBg}" onchange="updateVariantColorPalette(${vIdx}, 'promoBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 mb-0.5">9. 轉乘圓角框主色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vInterchangeBg}" oninput="updateVariantColorPalette(${vIdx}, 'interchangeBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vInterchangeBg}" onchange="updateVariantColorPalette(${vIdx}, 'interchangeBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>
          </div>
        </div>

        <!-- 子區塊 B：此班次時間表路線框、標題、粗線與時鐘 SVG 配色 -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <div class="text-[10px] font-bold text-sky-400">B. 班次路線 #${vIdx + 1}：時間表路線號碼框、標題、粗線與時鐘 SVG 配色</div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-amber-300">時間表此班次路線號碼及提及路線底色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vRouteBoxBg}" oninput="updateVariantColorPalette(${vIdx}, 'routeBoxColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vRouteBoxBg}" onchange="updateVariantColorPalette(${vIdx}, 'routeBoxColor', this.value, true)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-amber-300">時間表此班次路線號碼及提及路線字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vRouteBoxText}" oninput="updateVariantColorPalette(${vIdx}, 'routeBoxTextColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vRouteBoxText}" onchange="updateVariantColorPalette(${vIdx}, 'routeBoxTextColor', this.value, true)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-emerald-300">「XX開出」顏色底與字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vOriginHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'originHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vOriginHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'originHeaderBg', this.value, true)" class="w-16 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
                <select onchange="updateVariantColorPalette(${vIdx}, 'originHeaderText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[10px]">
                  <option value="white" ${vOriginHeaderText !== 'black' ? 'selected' : ''}>白色字</option>
                  <option value="black" ${vOriginHeaderText === 'black' ? 'selected' : ''}>黑色字</option>
                </select>
              </div>
            </div>

            <div class="bg-slate-950/70 p-2 rounded border border-slate-800 space-y-1">
              <div class="text-[9px] font-bold text-emerald-300">「班次(分鐘)」標題背景與字色</div>
              <div class="flex items-center gap-1">
                <input type="color" value="${vHeadwayHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'headwayHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vHeadwayHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'headwayHeaderBg', this.value, true)" class="w-16 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
                <select onchange="updateVariantColorPalette(${vIdx}, 'headwayHeaderText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[10px]">
                  <option value="white" ${vHeadwayHeaderText !== 'black' ? 'selected' : ''}>白色字</option>
                  <option value="black" ${vHeadwayHeaderText === 'black' ? 'selected' : ''}>黑色字</option>
                </select>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <label class="block text-[9px] text-amber-300 font-bold mb-0.5">日期/時鐘上方粗線</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vThickLineColor}" oninput="updateVariantColorPalette(${vIdx}, 'timetableThickLineColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vThickLineColor}" onchange="updateVariantColorPalette(${vIdx}, 'timetableThickLineColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 font-bold mb-0.5">時鐘 SVG 背景顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vClockContainerBg}" oninput="updateVariantColorPalette(${vIdx}, 'clockContainerBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vClockContainerBg}" onchange="updateVariantColorPalette(${vIdx}, 'clockContainerBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-sky-300 mb-0.5">時鐘 SVG 圖標顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vClockSvgColor}" oninput="updateVariantColorPalette(${vIdx}, 'clockSvgColor', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vClockSvgColor}" onchange="updateVariantColorPalette(${vIdx}, 'clockSvgColor', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] text-slate-300 mb-0.5">日期列背景顏色</label>
              <div class="flex items-center gap-1">
                <input type="color" value="${vDateHeaderBg}" oninput="updateVariantColorPalette(${vIdx}, 'dateHeaderBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" value="${vDateHeaderBg}" onchange="updateVariantColorPalette(${vIdx}, 'dateHeaderBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- 第一區：路線主色調、右側標題／外框／橫線 及「路線號碼框 #X」配色 -->
    <div id="sec-colors-header-boxes" class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-fill-drip text-sky-400"></i>
          <span>1. 路線主色調、右側標題／外框 及「路線號碼框 #X」配色</span>
        </h3>
        <button onclick="syncAllColorsToPrimary()" class="px-2 py-1 rounded bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold transition">
          一鍵全部同步至主題底色
        </button>
      </div>
      <div class="text-[10px] text-slate-400">
        「主題底色」同時控制主路線、右側模塊標題、右側分隔橫線、八達通分段收費外框及巴士轉乘計劃外框。
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div>
          <label class="block text-[10px] text-emerald-300 font-bold mb-1">主題底色 (含橫線及外框)</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.routeLineColor}" oninput="updateColor('routeLineColor', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.routeLineColor}" onchange="updateColor('routeLineColor', this.value); renderEditorSidebar();" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線號碼大框預設底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.routeBoxBg}" oninput="updateColor('routeBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.routeBoxBg}" onchange="updateColor('routeBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">目的地獨立框底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.destBoxBg}" oninput="updateColor('destBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.destBoxBg}" onchange="updateColor('destBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">途徑方向框底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.viaBoxBg}" oninput="updateColor('viaBoxBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.viaBoxBg}" onchange="updateColor('viaBoxBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線簡介橫幅底色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.introBannerBg}" oninput="updateColor('introBannerBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent" />
            <input type="text" value="${C.introBannerBg}" onchange="updateColor('introBannerBg', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 font-mono text-[11px]" />
          </div>
        </div>
      </div>

      <!-- 1B: 頂部各「路線號碼框 #X」獨立顏色設定 -->
      <div class="pt-2.5 border-t border-slate-700/80 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-emerald-300"><i class="fa-solid fa-bus mr-1"></i>頂部各「路線號碼框 #X」獨立配色</span>
          <button onclick="addHeaderRouteBox()" class="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">+ 新增路線號碼框</button>
        </div>
        <div class="space-y-2">
          ${headerRouteBoxesColorsHTML}
        </div>
      </div>
    </div>

    <!-- 第二區：純色底站點、雙數分段底色與路線圖標籤顏色 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-layer-group text-amber-400"></i>
          <span>2. 純色底站點、雙數分段底色與站點標籤顏色</span>
        </h3>
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" ${C.evenZoneBgEnabled ? 'checked' : ''} onchange="updateColor('evenZoneBgEnabled', this.checked)" class="rounded accent-emerald-500" />
          <span class="text-[11px] text-emerald-300 font-medium">啟用雙數分段底色</span>
        </label>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70">
          <label class="block text-[11px] text-slate-300 font-medium mb-1.5">雙數分段收費淺色背景</label>
          <div class="flex items-center gap-2">
            <input type="color" value="${C.evenZoneBg}" oninput="updateColor('evenZoneBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" />
            <input type="text" value="${C.evenZoneBg}" onchange="updateColor('evenZoneBg', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs font-mono" />
          </div>
          <label class="flex items-center gap-1.5 mt-2 text-[10px] text-slate-300 cursor-pointer">
            <input type="checkbox" ${L.evenZoneCoverAllStops ? 'checked' : ''} onchange="updateLayout('evenZoneCoverAllStops', this.checked)" class="rounded accent-emerald-500" />
            <span>一整個 Container 包覆該分段所有站</span>
          </label>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70">
          <label class="block text-[11px] text-slate-300 font-medium mb-1.5">地標標籤 (淺灰底黑字)</label>
          <div class="flex items-center gap-2">
            <input type="color" value="${C.landmarkBg}" oninput="updateColor('landmarkBg', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" title="地標背景色" />
            <input type="color" value="${C.landmarkText}" oninput="updateColor('landmarkText', this.value)" class="w-8 h-7 rounded cursor-pointer bg-transparent border-0" title="地標文字色" />
            <span class="text-[10px] text-slate-400">背景 / 文字</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">純色底站點樣式</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.originDestBg}" oninput="updateColor('originDestBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('originDestText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.originDestText === 'white' ? 'selected' : ''}>白色字</option>
              <option value="black" ${C.originDestText === 'black' ? 'selected' : ''}>黑色字</option>
            </select>
          </div>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">區域名字標籤</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.districtBg}" oninput="updateColor('districtBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('districtText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.districtText === 'white' ? 'selected' : ''}>白色字</option>
              <option value="black" ${C.districtText === 'black' ? 'selected' : ''}>黑色字</option>
            </select>
          </div>
        </div>

        <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-2">
          <div class="text-[11px] font-bold text-slate-200">分段收費 (粗體)</div>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${C.fareBg}" oninput="updateColor('fareBg', this.value)" class="w-7 h-6 rounded cursor-pointer bg-transparent" />
            <select onchange="updateColor('fareText', this.value)" class="flex-1 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px]">
              <option value="white" ${C.fareText === 'white' ? 'selected' : ''}>白色粗體</option>
              <option value="black" ${C.fareText === 'black' ? 'selected' : ''}>黑色粗體</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三區：全局所有 SVG 圖標與宣傳框預設顏色 -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-icons text-emerald-400"></i>
          <span>3. 全局 SVG 圖標與宣傳／轉乘框預設配色</span>
        </h3>
        <div class="flex items-center gap-1.5">
          ${createHkTrafficSign353Svg(15, curCorridorBg, curCorridorFg)}
          ${createHkTunnelSvg(15, curTunnelBg, curTunnelFg)}
          ${createMtrLogoSvg(13, curMtrBg, curMtrFg)}
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-emerald-300 font-bold mb-1">走廊 353 SVG 底色 / 圖案色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curCorridorBg}" oninput="updateColor('corridorSvgBg', this.value)" title="走廊 SVG 背景色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curCorridorFg}" oninput="updateColor('corridorSvgFg', this.value)" title="走廊 SVG 圖案色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" placeholder="自動跟隨主色" value="${esc(C.corridorSvgBg || '')}" onchange="updateColor('corridorSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-cyan-300 font-bold mb-1">隧道 Tunnel SVG 底色 / 圖案色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curTunnelBg}" oninput="updateColor('tunnelSvgBg', this.value)" title="隧道 SVG 背景色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curTunnelFg}" oninput="updateColor('tunnelSvgFg', this.value)" title="隧道 SVG 圖案色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" placeholder="自動跟隨主色" value="${esc(C.tunnelSvgBg || '')}" onchange="updateColor('tunnelSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-rose-300 font-bold mb-1">港鐵 MTR SVG 底色 / 符號色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curMtrBg}" oninput="updateColor('mtrSvgBg', this.value)" title="港鐵 SVG 底色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curMtrFg}" oninput="updateColor('mtrSvgFg', this.value)" title="港鐵 SVG 線條色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curMtrBg}" onchange="updateColor('mtrSvgBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-lime-300 font-bold mb-1">時間宣傳框底色 / 秒錶 SVG 色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curPromoBg}" oninput="updateColor('promoBannerBg', this.value)" title="宣傳框預設底色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="color" value="${curClockFg}" oninput="updateColor('fastClockSvgColor', this.value)" title="秒錶 SVG 顏色" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curPromoBg}" onchange="updateColor('promoBannerBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-sky-300 font-bold mb-1">轉乘圓角框預設主色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curInterchangeBg}" oninput="updateColor('interchangeDefaultBg', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curInterchangeBg}" onchange="updateColor('interchangeDefaultBg', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>

        <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/70">
          <label class="block text-[10px] text-slate-300 font-bold mb-1">站點圓圈 SVG 圓心填充色</label>
          <div class="flex items-center gap-1.5">
            <input type="color" value="${curNodeFill}" oninput="updateColor('nodeFillColor', this.value)" class="w-7 h-6 rounded bg-transparent cursor-pointer shrink-0" />
            <input type="text" value="${curNodeFill}" onchange="updateColor('nodeFillColor', this.value); renderEditorSidebar();" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
          </div>
        </div>
      </div>
    </div>

    <!-- 第四區：各「班次路線 #X」獨立顏色與 SVG 配色設定 -->
    <div class="bg-slate-800/70 border border-emerald-500/50 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-code-branch text-emerald-400"></i>
          <span>4. 各「班次路線 #X」獨立顏色、SVG 與時間表配色設定</span>
        </h3>
        <button onclick="addServiceVariant()" class="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] transition">
          + 新增班次
        </button>
      </div>
      <div class="text-[10px] text-slate-400">
        可為每個班次獨立設定路線圖線條及圓圈色、圓圈號碼字色、SVG 圖標色、時間表路線號碼框底色與字色、「XX開出」、「班次(分鐘)」、上方粗線與時鐘 SVG 顏色。
      </div>
      <div class="space-y-2.5">
        ${variantPalettesHTML}
      </div>
    </div>
  `;
}

function updateTimetableMeta(field, val) {
  appConfig.rightData.timetable[field] = val;
  if (field === 'mentionedRouteNumbers') {
    appConfig.rightData.headerMentionedRoutes = val;
  }
  renderA4Sheet();
}

function addHeaderRouteBox() {
  const boxes = ensureHeaderRouteBoxesSynced();
  boxes.push({
    id: 'rb_' + Date.now(),
    routeNumber: 'B13P',
    fontSizePx: 52,
    innerWhiteLine: true,
    bgColor: '',
    textColor: '',
    destZh: '',
    destEn: ''
  });
  if (boxes.length >= 2) {
    appConfig.rightData.headerTwoPerRow = true;
    if (boxes[0].fontSizePx > 60) {
      boxes[0].fontSizePx = 52;
      appConfig.rightData.routeNumberFontSizePx = 52;
    }
  }
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已新增路線號碼框（可獨立設定字體大小與框內細白線）');
}

function updateHeaderRouteBox(bIdx, field, val, refreshSidebar = false) {
  const boxes = ensureHeaderRouteBoxesSynced();
  if (!boxes[bIdx]) return;
  boxes[bIdx][field] = val;
  if (bIdx === 0) {
    if (field === 'routeNumber') appConfig.rightData.routeNumber = val;
    if (field === 'fontSizePx') appConfig.rightData.routeNumberFontSizePx = Number(val) || 100;
    if (field === 'innerWhiteLine') appConfig.rightData.routeBoxInnerWhiteLine = Boolean(val);
  }
  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  if (refreshSidebar || field === 'innerWhiteLine') {
    renderEditorSidebar();
  }
}

function removeHeaderRouteBox(bIdx) {
  const boxes = ensureHeaderRouteBoxesSynced();
  if (boxes.length <= 1) return;
  boxes.splice(bIdx, 1);
  appConfig.rightData.routeNumber = boxes[0].routeNumber;
  appConfig.rightData.routeBoxInnerWhiteLine = boxes[0].innerWhiteLine !== false;
  renderA4Sheet();
  renderEditorSidebar();
}

function insertStopLineBreak(idx, field) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  const textareaId = field === 'zh' ? `stop-zh-input-${idx}` : `stop-en-input-${idx}`;
  const el = document.getElementById(textareaId);
  const currentVal = String(stop[field] || '');

  if (el && typeof el.selectionStart === 'number') {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const nextVal = currentVal.slice(0, start) + '\n' + currentVal.slice(end);
    stop[field] = nextVal;
    el.value = nextVal;
    el.focus();
    el.setSelectionRange(start + 1, start + 1);
  } else {
    stop[field] = currentVal + '\n';
  }

  renderA4Sheet();
}

// --------------------------------------------------------------------------
// TAB 1: 純粹負責版面佈局、換欄、外邊距、站距空隙與每欄頂部留白 (所有顏色設定已歸納至 Tab 5)
// --------------------------------------------------------------------------
function renderThemeTabHTML() {
  const L = appConfig.layout;
  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const columns = splitStopsIntoColumns(enrichedStops);

  const perColumnSpacingControlsHTML = columns.map((_, colIdx) => {
    const topVal = getColTopSpacePx(colIdx);
    return `
      <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-emerald-300">第 ${colIdx + 1} 欄頂部拉低留白</span>
          <span id="col-space-label-top-${colIdx}" class="text-[11px] text-emerald-400 font-mono">${topVal} px</span>
        </div>
        <input type="range" min="0" max="320" step="2" value="${topVal}" oninput="updateColSpace('top', ${colIdx}, this.value)" class="w-full accent-emerald-500" />
      </div>
    `;
  }).join('');

  return `
    <!-- Flexible Route Map Position & Split -->
    <div class="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-100 flex items-center gap-2 text-xs">
          <i class="fa-solid fa-arrows-left-right text-emerald-400"></i>
          <span>路線圖靈活位置、外邊距與空隙設定</span>
        </h3>
        <button onclick="switchEditorTab('colors')" class="px-2 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[10px] font-bold transition">
          <i class="fa-solid fa-palette mr-1"></i>前往「5. 顏色與SVG」設定配色 ➔
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button onclick="updateLayout('mapPosition', 'left')" class="p-2 rounded-lg border text-left transition ${L.mapPosition === 'left' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
          <div class="text-xs">左邊路線圖 + 右邊資料</div>
          <div class="text-[10px] opacity-75">經典城巴 B13 標準排版</div>
        </button>
        <button onclick="updateLayout('mapPosition', 'right')" class="p-2 rounded-lg border text-left transition ${L.mapPosition === 'right' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-slate-700 text-slate-400'}">
          <div class="text-xs">右邊路線圖 + 左邊資料</div>
          <div class="text-[10px] opacity-75">鏡像對調版面位置</div>
        </button>
      </div>

      <!-- Unlocked Sheet Outer Margin & Map Width & Max Stops -->
      <div class="grid grid-cols-3 gap-2.5 pt-1">
        <div>
          <label class="block text-[11px] text-slate-300 mb-1">路線圖寬度 (<span id="label-mapWidthPercent" class="text-emerald-400 font-mono">${L.mapWidthPercent}%</span>)</label>
          <input id="range-mapWidthPercent" type="range" min="48" max="76" step="1" value="${L.mapWidthPercent}" oninput="updateLayout('mapWidthPercent', this.value)" class="w-full accent-emerald-500" />
        </div>
        <div>
          <label class="block text-[11px] text-slate-300 mb-1">換欄站數 (<span id="label-autoSplitMaxStops" class="text-emerald-400 font-mono">${L.autoSplitMaxStops} 站</span>)</label>
          <input id="range-autoSplitMaxStops" type="range" min="10" max="35" step="1" value="${L.autoSplitMaxStops}" oninput="updateLayout('autoSplitMaxStops', this.value)" class="w-full accent-emerald-500" />
        </div>
        <div>
          <label class="block text-[11px] text-slate-300 mb-1">紙張外邊距 (<span id="label-sheetPaddingMm" class="text-emerald-400 font-mono">${L.sheetPaddingMm} mm</span>)</label>
          <div class="flex items-center gap-1">
            <input id="range-sheetPaddingMm" type="range" min="0" max="15" step="0.5" value="${L.sheetPaddingMm}" oninput="updateLayout('sheetPaddingMm', this.value)" class="w-full accent-emerald-500" />
            <input id="input-sheetPaddingMm" type="number" min="0" max="20" step="0.5" value="${L.sheetPaddingMm}" oninput="updateLayout('sheetPaddingMm', this.value)" class="w-12 bg-slate-900 border border-slate-700 rounded px-1 py-0.5 text-[10px] text-center text-slate-100" />
          </div>
        </div>
      </div>

      <!-- Custom Stop Vertical Gap & Custom Stop Marker-to-Name Horizontal Gap -->
      <div class="bg-slate-900/70 p-2.5 rounded-lg border border-slate-700/70 grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[11px] text-emerald-300 font-bold mb-1">
            自定義站距的空隙 (<span id="label-stopVerticalGapPx" class="text-emerald-400 font-mono">${L.stopVerticalGapPx} px</span>)
          </label>
          <div class="flex items-center gap-1.5">
            <input id="range-stopVerticalGapPx" type="range" min="0" max="14" step="0.2" value="${L.stopVerticalGapPx}" oninput="updateLayout('stopVerticalGapPx', this.value)" class="flex-1 accent-emerald-500" />
            <input id="input-stopVerticalGapPx" type="number" step="0.2" min="0" max="20" value="${L.stopVerticalGapPx}" oninput="updateLayout('stopVerticalGapPx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-slate-100" />
          </div>
        </div>
        <div>
          <label class="block text-[11px] text-emerald-300 font-bold mb-1">
            站點樣式與站名空隙 (<span id="label-nodeToNameGapPx" class="text-emerald-400 font-mono">${L.nodeToNameGapPx ?? 6} px</span>)
          </label>
          <div class="flex items-center gap-1.5">
            <input id="range-nodeToNameGapPx" type="range" min="0" max="24" step="0.5" value="${L.nodeToNameGapPx ?? 6}" oninput="updateLayout('nodeToNameGapPx', this.value)" class="flex-1 accent-emerald-500" />
            <input id="input-nodeToNameGapPx" type="number" step="0.5" min="0" max="30" value="${L.nodeToNameGapPx ?? 6}" oninput="updateLayout('nodeToNameGapPx', this.value)" class="w-14 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-center text-slate-100" />
          </div>
        </div>
      </div>

      <!-- Per-Column Top Pull-Down Sliders -->
      <div class="space-y-2 pt-1">
        ${perColumnSpacingControlsHTML}
      </div>

      <div class="grid grid-cols-3 gap-2 pt-1">
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線圖水平位移 X (px)</label>
          <input type="number" value="${L.mapOffsetX}" oninput="updateLayout('mapOffsetX', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">路線圖垂直位移 Y (px)</label>
          <input type="number" value="${L.mapOffsetY}" oninput="updateLayout('mapOffsetY', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1">普通站點圓點大小 (px)</label>
          <input type="number" step="0.5" min="7" max="15" value="${L.normalNodeSizePx}" oninput="updateLayout('normalNodeSizePx', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-center text-emerald-300 font-mono" />
        </div>
      </div>
    </div>
  `;
}

// 更新全局顏色：當修改主題底色 (routeLineColor / themePrimary) 時，自動同步右側橫線與八達通/轉乘資訊外框色 (infoAccentColor)
function updateColor(key, val) {
  appConfig.colors[key] = val;
  if (key === 'routeLineColor' || key === 'themePrimary') {
    appConfig.colors.routeLineColor = val;
    appConfig.colors.themePrimary = val;
    appConfig.colors.infoAccentColor = val;
  }
  syncBoundVariants();
  renderA4Sheet();
  if (['originHeaderBg', 'headwayHeaderBg', 'evenZoneBgEnabled'].includes(key)) {
    renderEditorSidebar();
  }
}

function syncAllColorsToPrimary() {
  const primary = appConfig.colors.routeLineColor;
  appConfig.colors.themePrimary = primary;
  appConfig.colors.infoAccentColor = primary;
  appConfig.colors.originDestBg = primary;
  appConfig.colors.districtBg = primary;
  appConfig.colors.fareBg = primary;
  appConfig.colors.originHeaderBg = primary;
  appConfig.colors.headwayHeaderBg = primary;
  appConfig.colors.routeBoxBg = primary;
  appConfig.colors.destBoxBg = primary;
  if (appConfig.variants[0]) {
    appConfig.variants[0].color = primary;
    appConfig.variants[0].routeBoxColor = primary;
    appConfig.variants[0].originHeaderBg = primary;
    appConfig.variants[0].headwayHeaderBg = primary;
    appConfig.variants[0].timetableThickLineColor = primary;
    appConfig.variants[0].clockSvgColor = primary;
  }
  syncBoundVariants();
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已同步所有標籤、右側橫線、外框及主班次至主題底色');
}

function syncVariantPaletteToMain(vIdx) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  const mainColor = v.color || appConfig.colors.routeLineColor || '#008837';
  v.nodeColor = mainColor;
  v.originDestBg = mainColor;
  v.corridorSvgBg = mainColor;
  v.tunnelSvgBg = mainColor;
  v.promoBg = mainColor;
  v.interchangeBg = mainColor;
  v.routeBoxColor = mainColor;
  v.originHeaderBg = mainColor;
  v.headwayHeaderBg = mainColor;
  v.timetableThickLineColor = mainColor;
  v.clockSvgColor = mainColor;

  ensureVariantTimetablesSynced();
  if (appConfig.rightData.timetable.variantTables?.[vIdx]) {
    appConfig.rightData.timetable.variantTables[vIdx].routeBoxColor = mainColor;
  }

  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已將「${v.name}」的路線圖、SVG 及時間表標題/粗線/時鐘同步至 ${mainColor}`);
}

// --------------------------------------------------------------------------
// TAB 5: 「5. 顏色與SVG」集中式配色管理中心 (四大清晰分類區塊)
// --------------------------------------------------------------------------

function addVariantTimetableDateGroup(vtIdx) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt) return;
  vt.dateGroups.push({
    id: 'dg_' + Date.now(),
    dateTitleZh: '星期一至五',
    dateTitleEn: 'Mon - Fri',
    rows: [
      { time: '0700 - 0900', headway: '15 - 20' }
    ]
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateVariantTimetableDateGroup(vtIdx, dgIdx, field, val) {
  ensureVariantTimetablesSynced();
  const dg = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx];
  if (!dg) return;
  dg[field] = val;
  renderA4Sheet();
}

function addVariantTimetableRow(vtIdx, dgIdx) {
  ensureVariantTimetablesSynced();
  const dg = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx];
  if (!dg) return;
  dg.rows.push({
    time: '0900 - 2300',
    headway: '30'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateVariantTimetableRow(vtIdx, dgIdx, rIdx, field, val) {
  ensureVariantTimetablesSynced();
  const row = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx]?.rows?.[rIdx];
  if (!row) return;
  row[field] = val;
  renderA4Sheet();
}

function removeVariantTimetableRow(vtIdx, dgIdx, rIdx) {
  ensureVariantTimetablesSynced();
  const rows = appConfig.rightData.timetable.variantTables[vtIdx]?.dateGroups?.[dgIdx]?.rows;
  if (!rows || rows.length <= 1) return;
  rows.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// Render Right Info Column: Octopus Fare and ALL modules after it get a top horizontal line,
// and inner padding/border adapts symmetrically to mapPosition
// 右側資訊欄容器：所有模塊上方分隔橫線跟隨「主題底色」
function renderRightInfoColumnHTML() {
  const L = appConfig.layout;
  const C = appConfig.colors;
  const themeAccentColor = C.themePrimary || C.routeLineColor || C.infoAccentColor || '#008837';
  const rightWidth = 100 - Number(L.mapWidthPercent);
  const order = appConfig.rightModulesOrder || [];
  const enabledKeys = order.filter(k => isRightModuleEnabled(k));
  const octopusOrderIdx = order.indexOf('octopus_fare');
  const isMapLeft = L.mapPosition !== 'right';

  const modulesHTML = enabledKeys
    .map((key, idx) => {
      const isLastVisible = idx === enabledKeys.length - 1;
      const hasTopDividerLine = (octopusOrderIdx !== -1 && order.indexOf(key) >= octopusOrderIdx) || key === 'effective_footer';

      if (hasTopDividerLine) {
        const innerHTML = renderRightSideModuleHTML(key, false);
        if (!innerHTML) return '';
        const pushToBottomStyle = (isLastVisible && L.stickLastModuleToBottom) ? 'margin-top:auto;' : '';
        return `
          <div style="
            padding-top:6px;
            border-top:1.5px solid ${themeAccentColor};
            display:flex;
            flex-direction:column;
            ${pushToBottomStyle}
          ">
            ${innerHTML}
          </div>
        `;
      }

      return renderRightSideModuleHTML(key, isLastVisible);
    })
    .join('');

  return `
    <div style="
      width:${rightWidth}%;
      height:100%;
      display:flex;
      flex-direction:column;
      gap:6px;
      box-sizing:border-box;
      ${isMapLeft ? 'padding-left:8px; border-left:1.5px solid #e2e8f0;' : 'padding-right:8px; border-right:1.5px solid #e2e8f0;'}
    ">
      ${modulesHTML}
    </div>
  `;
}

function renderRightSideModuleHTML(moduleKey, isLastVisibleModule = false) {
  const C = appConfig.colors;
  const R = appConfig.rightData;
  const L = appConfig.layout;
  const T = R.timetable || {};
  const themePrimaryColor = C.themePrimary || C.routeLineColor || C.infoAccentColor || '#008837';
  const pushToBottomStyle = (isLastVisibleModule && L.stickLastModuleToBottom) ? 'margin-top:auto;' : '';

  const globalExtraRoutes = [
    T.mentionedRouteNumbers || '',
    R.headerMentionedRoutes || ''
  ].filter(Boolean).join(',');

  switch (moduleKey) {
    // 1. Route Number Container + Separate Destination Container + Via Container
    case 'route_header': {
      const routeBoxes = ensureHeaderRouteBoxesSynced();
      const mainRouteFontSize = Math.max(16, Number(R.routeNumberFontSizePx) || 100);
      const headerMentionedSize = Math.max(6, Number(R.headerMentionedRouteFontSizePx) || 13);
      const twoPerRow = Boolean(R.headerTwoPerRow);

      const headerBadgeOpts = {
        fontSizePx: headerMentionedSize,
        bgColor: C.routeBoxBg || '#008837',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        contrastBorder: true,
        innerWhiteLine: false
      };

      const renderSingleRouteBoxHTML = (box, isCompactGrid = false) => {
        const boxBg = box.bgColor || C.routeBoxBg || '#008837';
        const boxText = box.textColor || C.routeBoxText || '#ffffff';
        const showInnerLine = box.innerWhiteLine !== undefined ? Boolean(box.innerWhiteLine) : Boolean(R.routeBoxInnerWhiteLine);
        const rawStr = String(box.routeNumber || '').trim();
        const routeParts = rawStr.match(/^(\S+)(\s+.*)$/);
        const effectiveFontSize = Math.max(16, Number(box.fontSizePx) || mainRouteFontSize);

        const boxBadgeOpts = {
          ...headerBadgeOpts,
          bgColor: boxBg,
          textColor: boxText,
          innerWhiteLine: false
        };

        const renderedRouteHTML = routeParts
          ? `<span>${esc(routeParts[1])}</span><span style="font-size:${headerMentionedSize}px; font-weight:800; margin-left:4px; vertical-align:middle;">${formatTextWithRouteBadges(routeParts[2].trim(), boxBadgeOpts)}</span>`
          : esc(rawStr);

        const routeBoxEl = `
          <div style="
            background-color:${boxBg};
            color:${boxText};
            padding:${showInnerLine ? '5px' : '6px'};
            border-radius:4px;
            box-sizing:border-box;
            display:flex;
            flex-direction:column;
            justify-content:center;
          ">
            <div style="
              ${showInnerLine ? 'border:1.5px solid rgba(255,255,255,0.88);' : ''}
              border-radius:2.5px;
              padding:6px 8px;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              position:relative;
              height:100%;
              box-sizing:border-box;
            ">
              <div class="sheet-text-fix" style="
                font-size:${effectiveFontSize}px;
                font-weight:700;
                line-height:1;
                text-decoration:none;
                border-bottom:none;
                display:flex;
                align-items:baseline;
                justify-content:center;
                flex-wrap:wrap;
              ">${renderedRouteHTML}</div>
            </div>
          </div>
        `;

        if (box.destZh || box.destEn) {
          return `
            <div style="display:flex; flex-direction:column; gap:3px; min-width:0;">
              ${routeBoxEl}
              <div style="
                background-color:${C.destBoxBg};
                color:${C.destBoxText};
                padding:5px 8px;
                border-radius:4px;
                box-sizing:border-box;
              ">
                ${box.destZh ? `<div class="sheet-text-fix" style="font-size:${isCompactGrid ? '18px' : '25px'}; font-weight:900; line-height:1.15; display:block;">${formatTextWithRouteBadges(box.destZh, headerBadgeOpts)}</div>` : ''}
                ${box.destEn ? `<div class="sheet-text-fix" style="font-size:${isCompactGrid ? '11.5px' : '15px'}; font-weight:700; line-height:1.15; display:block; margin-top:1px;">${formatTextWithRouteBadges(box.destEn, headerBadgeOpts)}</div>` : ''}
              </div>
            </div>
          `;
        }

        return routeBoxEl;
      };

      const mainDestBoxHTML = (R.destZh || R.destEn) ? `
        <div style="
          background-color:${C.destBoxBg};
          color:${C.destBoxText};
          padding:6px 10px;
          border-radius:4px;
          box-sizing:border-box;
          display:flex;
          flex-direction:column;
          justify-content:center;
        ">
          <div class="sheet-text-fix" style="font-size:${twoPerRow && routeBoxes.length === 1 ? '20px' : '25px'}; font-weight:900; line-height:1.15; display:block;">
            ${formatTextWithRouteBadges(R.destZh, headerBadgeOpts)}
          </div>
          <div class="sheet-text-fix" style="font-size:${twoPerRow && routeBoxes.length === 1 ? '12.5px' : '15px'}; font-weight:700; line-height:1.15; display:block; margin-top:1px;">
            ${formatTextWithRouteBadges(R.destEn, headerBadgeOpts)}
          </div>
        </div>
      ` : '';

      const cleanViaZh = String(R.viaZh || '').trim().replace(/^經\s*/, '');
      const cleanViaEn = String(R.viaEn || '').trim().replace(/^via\s+/i, '');

      const viaBoxHTML = (cleanViaZh || cleanViaEn) ? `
        <div style="
          background-color:${C.viaBoxBg};
          color:${C.viaBoxText};
          padding:4.5px 10px;
          border-radius:4px;
          box-sizing:border-box;
        ">
          ${cleanViaZh ? `
            <div class="sheet-text-fix" style="font-size:12.5px; font-weight:800; display:block; line-height:1.2;">
              <span style="font-size:9.6px; font-weight:700; margin-right:2px; vertical-align:baseline; opacity:0.95;">經</span><span>${formatTextWithRouteBadges(cleanViaZh, headerBadgeOpts)}</span>
            </div>
          ` : ''}
          ${cleanViaEn ? `
            <div class="sheet-text-fix" style="font-size:10.5px; font-weight:700; display:block; line-height:1.15;">
              <span style="font-size:8.0px; font-weight:700; margin-right:3px; vertical-align:baseline; opacity:0.95;">VIA</span><span>${formatTextWithRouteBadges(cleanViaEn, headerBadgeOpts)}</span>
            </div>
          ` : ''}
        </div>
      ` : '';

      if (routeBoxes.length === 1 && twoPerRow) {
        return `
          <div onclick="switchEditorTab('info', 'sec-route')" class="preview-clickable" style="display:flex; flex-direction:column; gap:3px; ${pushToBottomStyle}">
            <div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:3px; align-items:stretch;">
              ${renderSingleRouteBoxHTML(routeBoxes[0], true)}
              ${mainDestBoxHTML}
            </div>
            ${viaBoxHTML}
          </div>
        `;
      }

      const routeBoxesContainerHTML = twoPerRow
        ? `<div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:3px; align-items:stretch;">
             ${routeBoxes.map(b => renderSingleRouteBoxHTML(b, true)).join('')}
           </div>`
        : `<div style="display:flex; flex-direction:column; gap:3px;">
             ${routeBoxes.map(b => renderSingleRouteBoxHTML(b, false)).join('')}
           </div>`;

      return `
        <div onclick="switchEditorTab('info', 'sec-route')" class="preview-clickable" style="display:flex; flex-direction:column; gap:3px; ${pushToBottomStyle}">
          ${routeBoxesContainerHTML}
          ${mainDestBoxHTML}
          ${viaBoxHTML}
        </div>
      `;
    }

    // 2. Route Intro Banner
    case 'intro_banner': {
      if (!R.introZh && !R.introEn) return '';
      const headerMentionedSize = Math.max(6, Number(R.headerMentionedRouteFontSizePx) || 13);
      const introBadgeOpts = {
        fontSizePx: headerMentionedSize,
        bgColor: C.routeBoxBg || '#008837',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        contrastBorder: true,
        innerWhiteLine: false
      };

      const iconType = R.introIconType || 'none';
      const iconSize = Math.max(14, Number(R.introIconSizePx) || 22);
      const v0 = appConfig.variants?.[0] || {};
      const corridorBg = v0.corridorSvgBg || C.corridorSvgBg || v0.color || themePrimaryColor;
      const corridorFg = v0.corridorSvgFg || C.corridorSvgFg || '#ffffff';
      const tunnelBg = v0.tunnelSvgBg || C.tunnelSvgBg || v0.color || themePrimaryColor;
      const tunnelFg = v0.tunnelSvgFg || C.tunnelSvgFg || '#ffffff';

      let introIconsHTML = '';
      if (iconType === 'corridor') {
        introIconsHTML = `<div style="display:flex; align-items:center; flex-shrink:0;">${createHkTrafficSign353Svg(iconSize, corridorBg, corridorFg)}</div>`;
      } else if (iconType === 'tunnel') {
        introIconsHTML = `<div style="display:flex; align-items:center; flex-shrink:0;">${createHkTunnelSvg(iconSize, tunnelBg, tunnelFg)}</div>`;
      } else if (iconType === 'both') {
        introIconsHTML = `<div style="display:flex; align-items:center; gap:3px; flex-shrink:0;">${createHkTrafficSign353Svg(iconSize, corridorBg, corridorFg)}${createHkTunnelSvg(iconSize, tunnelBg, tunnelFg)}</div>`;
      }

      return `
        <div onclick="switchEditorTab('info', 'sec-intro')" class="preview-clickable" style="
          background-color:${C.introBannerBg};
          color:${C.introBannerText};
          padding:5px 10px;
          border-radius:4px;
          text-align:center;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:6px;
          box-sizing:border-box;
          ${pushToBottomStyle}
        ">
          ${introIconsHTML}
          <div style="display:flex; flex-direction:column; justify-content:center; min-width:0;">
            ${R.introZh ? `<div class="sheet-text-fix" style="font-size:13px; font-weight:900; display:block; line-height:1.22;">${formatTextWithRouteBadges(R.introZh, introBadgeOpts)}</div>` : ''}
            ${R.introEn ? `<div class="sheet-text-fix" style="font-size:9.8px; font-weight:700; display:block; line-height:1.18; margin-top:1px;">${formatTextWithRouteBadges(R.introEn, introBadgeOpts)}</div>` : ''}
          </div>
        </div>
      `;
    }

    // 3. Timetable Module (保留日期與時鐘 SVG 上方粗線，取消「XX開出」與「班次(分鐘)」上方粗線)
    case 'timetable': {
      const variants = appConfig.variants || [];
      const variantTables = ensureVariantTimetablesSynced();
      const hasMultipleVariants = variants.length > 1;

      const defaultLightContainerBg = C.evenZoneBg || '#dcedc8';
      const containerTextColor = '#111827';
      const mentionedFontSize = Math.max(5, Number(T.mentionedRouteFontSizePx) || 9.2);
      const mentionedScaleRatio = mentionedFontSize / 9.2;
      const mentionedStyleMode = T.mentionedRouteStyle || 'badge';

      const activeTables = hasMultipleVariants
        ? variantTables.map((vt, idx) => ({ vt, variant: variants[idx], idx })).filter(item => item.vt.enabled !== false)
        : [{ vt: variantTables[0], variant: variants[0], idx: 0 }];

      const variantTablesHTML = activeTables.map(({ vt, variant, idx }) => {
        const vColor = variant?.color || themePrimaryColor;
        const vBadgeText = variant?.badgeText === 'black' ? '#111827' : '#ffffff';
        const showHeadway = vt.showHeadwayCol !== false;
        const showDateBar = vt.showDateHeader !== false;

        const thickLineColor = variant?.timetableThickLineColor || vColor || themePrimaryColor;
        const dateBarBgColor = variant?.dateHeaderBg || variant?.clockContainerBg || defaultLightContainerBg;
        const clockContainerBgColor = variant?.clockContainerBg || dateBarBgColor;
        const clockSvgStrokeColor = variant?.clockSvgColor || vColor || themePrimaryColor;

        const originHeaderBgColor = variant?.originHeaderBg || C.originHeaderBg || vColor || defaultLightContainerBg;
        const originTextMode = variant?.originHeaderText || C.originHeaderText || 'white';
        const originHeaderTextColor = originTextMode === 'black' ? '#111827' : '#ffffff';
        const originSubTextColor = originTextMode === 'black' ? '#334155' : 'rgba(255,255,255,0.92)';

        const headwayHeaderBgColor = variant?.headwayHeaderBg || C.headwayHeaderBg || vColor || defaultLightContainerBg;
        const headwayTextMode = variant?.headwayHeaderText || C.headwayHeaderText || 'white';
        const headwayHeaderTextColor = headwayTextMode === 'black' ? '#111827' : '#ffffff';
        const headwaySubTextColor = headwayTextMode === 'black' ? '#334155' : 'rgba(255,255,255,0.92)';

        const vRouteNo = (vt.routeNumber || variant?.routeNumber || '').trim();
        const vRouteInnerLine = vt.routeBoxInnerWhiteLine !== undefined
          ? Boolean(vt.routeBoxInnerWhiteLine)
          : (variant?.routeBoxInnerWhiteLine !== false);
        const vRouteBoxPos = vt.routeBoxPosition || variant?.routeBoxPosition || 'left';
        const hasLeftRouteBox = Boolean(vRouteNo) && vRouteBoxPos === 'left';
        const hasTopRouteBox = Boolean(vRouteNo) && vRouteBoxPos === 'top';

        const vRouteBoxBg = vt.routeBoxColor || variant?.routeBoxColor || C.routeBoxBg || '#008837';
        const vRouteBoxText = vt.routeBoxTextColor || variant?.routeBoxTextColor || C.routeBoxText || '#ffffff';
        const combinedExtraRoutes = [
          globalExtraRoutes,
          vt.mentionedRouteNumbers || '',
          vRouteNo
        ].filter(Boolean).join(',');

        const routeFormatTextOpts = {
          fontSizePx: mentionedFontSize,
          bgColor: vRouteBoxBg,
          textColor: vRouteBoxText,
          styleMode: mentionedStyleMode,
          extraRoutes: combinedExtraRoutes,
          allowPureNumbers: false,
          innerWhiteLine: vRouteInnerLine
        };
        const routeFormatRowOpts = {
          fontSizePx: mentionedFontSize,
          bgColor: vRouteBoxBg,
          textColor: vRouteBoxText,
          styleMode: mentionedStyleMode,
          extraRoutes: combinedExtraRoutes,
          allowPureNumbers: false,
          innerWhiteLine: vRouteInnerLine
        };

        const charCount = Array.from(vRouteNo).length;
        const baseLeftSize = charCount >= 5 ? 9.5 : (charCount === 4 ? 11.2 : 14.2);
        const baseTopSize = charCount >= 5 ? 12.5 : (charCount === 4 ? 14.5 : 18.0);
        const customBoxFontSize = Number(vt.routeBoxFontSizePx || variant?.routeBoxFontSizePx) || 0;
        const leftFontSizePx = customBoxFontSize > 0 ? customBoxFontSize : Math.round(baseLeftSize * mentionedScaleRatio * 10) / 10;
        const leftPadX = charCount >= 4 ? 4 : 5.5;
        const topFontSizePx = customBoxFontSize > 0 ? customBoxFontSize : Math.round(baseTopSize * mentionedScaleRatio * 10) / 10;

        const bodyGridCols = showHeadway ? '2.5fr 1fr' : '1fr';

        const leftRouteBoxHTML = hasLeftRouteBox ? `
          <div style="
            background-color:${vRouteBoxBg};
            color:${vRouteBoxText};
            padding:${vRouteInnerLine ? '1.5px' : '0px'};
            border-radius:3px 3px 0 0;
            box-sizing:border-box;
            display:flex;
            align-items:stretch;
            justify-content:center;
            flex-shrink:0;
          ">
            <div style="
              ${vRouteInnerLine ? 'border:0.9px solid rgba(255,255,255,0.82);' : ''}
              border-radius:2px;
              padding:1.5px ${leftPadX}px;
              min-width:30px;
              display:flex;
              align-items:center;
              justify-content:center;
              box-sizing:border-box;
            ">
              <div class="sheet-text-fix" style="
                font-size:${leftFontSizePx}px;
                font-weight:900;
                letter-spacing:${charCount >= 4 ? '-0.03em' : '-0.01em'};
                line-height:1;
                color:${vRouteBoxText};
                white-space:nowrap;
              ">${esc(vRouteNo)}</div>
            </div>
          </div>
        ` : '';

        const topRouteBoxHTML = hasTopRouteBox ? `
          <div style="
            background-color:${vRouteBoxBg};
            color:${vRouteBoxText};
            padding:${vRouteInnerLine ? '1.8px' : '0px'};
            border-radius:3px;
            box-sizing:border-box;
          ">
            <div style="
              ${vRouteInnerLine ? 'border:1px solid rgba(255,255,255,0.85);' : ''}
              border-radius:2px;
              padding:2px 8px;
              display:flex;
              align-items:center;
              justify-content:center;
              box-sizing:border-box;
            ">
              <div class="sheet-text-fix" style="
                font-size:${topFontSizePx}px;
                font-weight:900;
                letter-spacing:${charCount >= 4 ? '-0.02em' : '0'};
                line-height:1.05;
                color:${vRouteBoxText};
                white-space:nowrap;
              ">${esc(vRouteNo)}</div>
            </div>
          </div>
        ` : '';

        const showBadge = hasMultipleVariants && (vt.showVariantBadge !== false);
        const variantBadgeHTML = showBadge ? `
          <span style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            width:13.5px;
            height:13.5px;
            border-radius:9999px;
            background-color:${vColor};
            color:${vBadgeText};
            font-size:8.8px;
            font-weight:900;
            line-height:1;
            box-shadow:0 0 0 1px #ffffff;
            flex-shrink:0;
          ">
            <span class="sheet-text-fix" style="line-height:1;">${idx + 1}</span>
          </span>
        ` : '';

        const topNoteHTML = (vt.topNoteZh || vt.topNoteEn) ? `
          <div style="font-size:7.2px; color:#475569; line-height:1.15; padding:1px 1px;">
            ${vt.topNoteZh ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.topNoteZh, routeFormatTextOpts)}</div>` : ''}
            ${vt.topNoteEn ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.topNoteEn, routeFormatTextOpts)}</div>` : ''}
          </div>
        ` : '';

        const dateGroupsHTML = (vt.dateGroups || []).map(dg => {
          const rowsHTML = (dg.rows || []).map((r, rIdx) => `
            <div style="
              display:grid;
              grid-template-columns: ${bodyGridCols};
              gap:3px;
              font-size:10.5px;
              font-weight:700;
              color:#111827;
            ">
              <div style="
                background:${rIdx % 2 === 0 ? '#f8fafc' : '#f1f5f9'};
                padding:2.2px 6px;
                border-radius:2.5px;
                display:flex;
                align-items:center;
              ">
                <span class="sheet-text-fix">${formatTextWithRouteBadges(r.time, routeFormatRowOpts)}</span>
              </div>
              ${showHeadway ? `
                <div style="
                  background:${rIdx % 2 === 0 ? '#f8fafc' : '#f1f5f9'};
                  padding:2.2px 6px;
                  border-radius:2.5px;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  font-weight:800;
                ">
                  <span class="sheet-text-fix">${formatTextWithRouteBadges(r.headway, routeFormatRowOpts)}</span>
                </div>
              ` : ''}
            </div>
          `).join('');

          return `
            <div style="display:flex; flex-direction:column; gap:2px;">
              <div style="display:flex; flex-direction:column; width:100%;">
                <!-- 保留日期與時鐘 SVG 容器上方的粗線 (支援各班次獨立顏色) -->
                <div style="width:100%; height:2.5px; background-color:${thickLineColor}; flex-shrink:0;"></div>
                ${showDateBar ? `
                  <div style="display:grid; grid-template-columns: ${bodyGridCols}; gap:3px; align-items:stretch;">
                    <div style="
                      background-color:${dateBarBgColor};
                      color:${containerTextColor};
                      padding:2.5px 6px;
                      border-radius:0 0 3px 3px;
                      display:flex;
                      align-items:center;
                    ">
                      <span class="sheet-text-fix" style="font-size:9.2px; font-weight:800; color:${containerTextColor}; line-height:1.12;">
                        ${formatTextWithRouteBadges(dg.dateTitleZh, routeFormatTextOpts)}${dg.dateTitleEn ? ` | ${formatTextWithRouteBadges(dg.dateTitleEn, routeFormatTextOpts)}` : ''}
                      </span>
                    </div>
                    ${showHeadway ? `
                      <div style="
                        background-color:${clockContainerBgColor};
                        color:${clockSvgStrokeColor};
                        padding:2.5px 6px;
                        border-radius:0 0 3px 3px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                      ">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${clockSvgStrokeColor}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block; flex-shrink:0;">
                          <circle cx="12" cy="12" r="9.5"></circle>
                          <polyline points="12 6.5 12 12 15.8 14.2"></polyline>
                        </svg>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
              ${rowsHTML}
            </div>
          `;
        }).join('');

        const bottomNoteHTML = (vt.bottomNoteZh || vt.bottomNoteEn) ? `
          <div style="font-size:7.2px; color:#475569; line-height:1.15; padding:1px 1px;">
            ${vt.bottomNoteZh ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.bottomNoteZh, routeFormatTextOpts)}</div>` : ''}
            ${vt.bottomNoteEn ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(vt.bottomNoteEn, routeFormatTextOpts)}</div>` : ''}
          </div>
        ` : '';

        return `
          <div style="display:flex; flex-direction:column; gap:2.5px; ${idx > 0 ? 'margin-top:5px;' : ''}">
            ${topNoteHTML}
            ${topRouteBoxHTML}
            <!-- 「XX開出」與「班次(分鐘)」標題列 (已取消上方粗線) -->
            <div style="display:grid; grid-template-columns: ${bodyGridCols}; gap:3px; align-items:stretch;">
              <div style="display:flex; align-items:stretch; gap:2.5px; min-width:0;">
                ${leftRouteBoxHTML}
                <div style="
                  flex:1;
                  min-width:0;
                  background-color:${originHeaderBgColor};
                  color:${originHeaderTextColor};
                  padding:3px 6px;
                  border-radius:3px 3px 0 0;
                  display:flex;
                  align-items:center;
                  gap:4.5px;
                ">
                  ${variantBadgeHTML}
                  <div style="display:flex; flex-direction:column; justify-content:center; min-width:0;">
                    <div class="sheet-text-fix" style="font-size:9.8px; font-weight:900; color:${originHeaderTextColor}; display:block; line-height:1.14;">
                      ${formatTextWithRouteBadges(vt.originHeaderZh, { ...routeFormatTextOpts, contrastBorder: true })}
                    </div>
                    ${vt.originHeaderEn ? `
                      <div class="sheet-text-fix" style="font-size:7.8px; font-weight:600; color:${originSubTextColor}; display:block; line-height:1.08;">
                        ${formatTextWithRouteBadges(vt.originHeaderEn, { ...routeFormatTextOpts, contrastBorder: true })}
                      </div>
                    ` : ''}
                  </div>
                </div>
              </div>

              ${showHeadway ? `
                <div style="
                  background-color:${headwayHeaderBgColor};
                  color:${headwayHeaderTextColor};
                  padding:3px 6px;
                  border-radius:3px 3px 0 0;
                  text-align:center;
                  display:flex;
                  flex-direction:column;
                  align-items:center;
                  justify-content:center;
                  min-width:0;
                ">
                  <div class="sheet-text-fix" style="font-size:9.2px; font-weight:900; color:${headwayHeaderTextColor}; display:block; line-height:1.14;">
                    ${formatTextWithRouteBadges(vt.headwayLabelZh, { ...routeFormatTextOpts, contrastBorder: true })}
                  </div>
                  ${vt.headwayLabelEn ? `
                    <div class="sheet-text-fix" style="font-size:7.6px; font-weight:600; color:${headwaySubTextColor}; display:block; line-height:1.08;">
                      ${formatTextWithRouteBadges(vt.headwayLabelEn, { ...routeFormatTextOpts, contrastBorder: true })}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>

            ${dateGroupsHTML}
            ${bottomNoteHTML}
          </div>
        `;
      }).join('');

      return `
        <div onclick="switchEditorTab('info', 'sec-timetable')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          ${pushToBottomStyle}
        ">
          ${renderRightModuleTitleLabelHTML(T.titleZh, T.titleEn, C, 'inline')}
          <div style="display:flex; flex-direction:column; gap:3px;">
            ${variantTablesHTML}
          </div>
        </div>
      `;
    }

    // 4. Additional Info / Remarks
    case 'additional_info': {
      const A = R.additionalInfo;
      if (!A.enabled) return '';
      const noteRouteOpts = {
        fontSizePx: Math.max(5, Number(T.mentionedRouteFontSizePx) || 9.2),
        bgColor: C.routeBoxBg || '#008837',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: T.mentionedRouteStyle || 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        innerWhiteLine: false
      };
      return `
        <div onclick="switchEditorTab('info', 'sec-additional')" class="preview-clickable" style="
          padding:2px 2px;
          display:flex;
          flex-direction:column;
          gap:4px;
          ${pushToBottomStyle}
        ">
          ${(A.notes || []).map(n => `
            <div style="display:flex; align-items:flex-start; gap:4px; font-size:8.8px; color:#111827; line-height:1.22;">
              ${n.symbol ? `<span class="sheet-text-fix" style="font-weight:900; min-width:9px;">${esc(n.symbol)}</span>` : ''}
              <div style="flex:1;">
                ${n.zh ? `<div class="sheet-text-fix" style="font-weight:700; display:block;">${formatTextWithRouteBadges(n.zh, noteRouteOpts)}</div>` : ''}
                ${n.en ? `<div class="sheet-text-fix" style="font-weight:500; font-size:8px; color:#334155; display:block;">${formatTextWithRouteBadges(n.en, noteRouteOpts)}</div>` : ''}
              </div>
            </div>
          `).join('')}

          ${(A.disclaimerZh || A.disclaimerEn) ? `
            <div style="margin-top:2px; padding-top:3px; border-top:0.5px solid #cbd5e1; font-size:7.5px; color:#475569; line-height:1.15;">
              ${A.disclaimerZh ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(A.disclaimerZh, noteRouteOpts)}</div>` : ''}
              ${A.disclaimerEn ? `<div class="sheet-text-fix" style="display:block;">${formatTextWithRouteBadges(A.disclaimerEn, noteRouteOpts)}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 5. Octopus & E-Payment Section Fare Info
    case 'octopus_fare': {
      const O = R.octopusFare;
      if (!O.enabled) return '';
      const containerRouteOpts = {
        fontSizePx: Math.max(6, Number(T.mentionedRouteFontSizePx) || 9.2),
        bgColor: C.routeBoxBg || '#008837',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        innerWhiteLine: false
      };
      return `
        <div onclick="switchEditorTab('info', 'sec-octopus')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          ${pushToBottomStyle}
        ">
          ${renderRightModuleTitleLabelHTML(O.titleZh, O.titleEn, C, 'pipe_break')}
          <div style="
            border:1.5px solid ${themePrimaryColor};
            border-radius:4px;
            padding:5px 8px;
            background:#ffffff;
            display:flex;
            flex-direction:column;
            gap:4px;
          ">
            ${(O.items || []).map(item => `
              <div style="
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:6px;
                padding-bottom:3px;
                border-bottom:0.5px solid #e2e8f0;
              ">
                <div>
                  <div class="sheet-text-fix" style="font-size:10px; font-weight:800; color:#111827; display:block;">${formatTextWithRouteBadges(item.sectionZh, containerRouteOpts)}</div>
                  <div class="sheet-text-fix" style="font-size:8.3px; font-weight:600; color:#334155; display:block;">${formatTextWithRouteBadges(item.sectionEn, containerRouteOpts)}</div>
                </div>
                <div class="sheet-text-fix" style="font-size:15px; font-weight:900; color:#111827; white-space:nowrap;">
                  ${esc(item.price)}
                </div>
              </div>
            `).join('')}

            <div style="font-size:7.6px; color:#334155; line-height:1.18;">
              ${O.noteZh ? `<div class="sheet-text-fix" style="font-weight:600; display:block; margin-bottom:2px;">${formatTextWithRouteBadges(O.noteZh, containerRouteOpts)}</div>` : ''}
              ${O.noteEn ? `<div class="sheet-text-fix" style="font-size:7.1px; display:block;">${formatTextWithRouteBadges(O.noteEn, containerRouteOpts)}</div>` : ''}
            </div>
          </div>
        </div>
      `;
    }

    // 6. Bus-Bus Interchange Info
    case 'bbi_info': {
      const B = R.bbiInfo;
      if (!B.enabled) return '';
      const containerRouteOpts = {
        fontSizePx: Math.max(6, Number(T.mentionedRouteFontSizePx) || 9.2),
        bgColor: C.routeBoxBg || '#008837',
        textColor: C.routeBoxText || '#ffffff',
        styleMode: 'badge',
        extraRoutes: globalExtraRoutes,
        allowPureNumbers: false,
        innerWhiteLine: false
      };
      return `
        <div onclick="switchEditorTab('info', 'sec-bbi')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          ${pushToBottomStyle}
        ">
          ${renderRightModuleTitleLabelHTML(B.titleZh, B.titleEn, C, 'inline')}
          <div style="
            border:1.5px solid ${themePrimaryColor};
            border-radius:4px;
            padding:6px 8px;
            background:#ffffff;
            display:flex;
            flex-direction:column;
            gap:4px;
          ">
            ${(B.items || []).map(item => `
              <div style="font-size:8.8px; border-bottom:0.5px dashed #cbd5e1; padding-bottom:3px;">
                <div class="sheet-text-fix" style="font-weight:800; color:#111827; display:block;">${formatTextWithRouteBadges(item.zh, containerRouteOpts)}</div>${item.en ? `<div class="sheet-text-fix" style="font-size:7.8px; color:#334155; display:block;">${formatTextWithRouteBadges(item.en, containerRouteOpts)}</div>` : ''}
              </div>
            `).join('')}

            <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
              <div style="flex:1;">
                <div class="sheet-text-fix" style="font-size:9.5px; font-weight:800; color:#111827; display:block;">${formatTextWithRouteBadges(B.footerZh, containerRouteOpts)}</div>
                <div class="sheet-text-fix" style="font-size:8px; font-weight:600; color:#334155; display:block;">${formatTextWithRouteBadges(B.footerEn, containerRouteOpts)}</div>
              </div>
              ${B.showQrBox ? `
                <div style="
                  width:34px;
                  height:34px;
                  border:1.5px solid #111827;
                  border-radius:3px;
                  display:grid;
                  grid-template-columns:repeat(3,1fr);
                  grid-template-rows:repeat(3,1fr);
                  padding:2px;
                  gap:1.5px;
                  flex-shrink:0;
                ">
                  <div style="background:#111827;"></div>
                  <div style="background:transparent;"></div>
                  <div style="background:#111827;"></div>
                  <div style="background:transparent;"></div>
                  <div style="background:#111827;"></div>
                  <div style="background:transparent;"></div>
                  <div style="background:#111827;"></div>
                  <div style="background:#111827;"></div>
                  <div style="background:#111827;"></div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    // 7. Effective Date & Operator Info
    case 'effective_footer': {
      const F = R.effectiveFooter;
      if (!F.enabled) return '';
      const effectiveRichHTML = renderEffectiveDateRichHTML(F);

      return `
        <div onclick="switchEditorTab('info', 'sec-footer')" class="preview-clickable" style="
          display:flex;
          flex-direction:column;
          gap:4px;
          ${pushToBottomStyle}
        ">
          ${effectiveRichHTML ? `
            <div style="font-size:7.2px; color:#475569; line-height:1.18;">
              <div class="sheet-text-fix" style="display:block;">${effectiveRichHTML}</div>
            </div>
          ` : ''}

          ${(F.concessionZh || F.concessionEn) ? `
            <div style="font-size:7.2px; color:#475569; line-height:1.15;">
              ${F.concessionZh ? `<div class="sheet-text-fix" style="display:block;">${esc(F.concessionZh)}</div>` : ''}
              ${F.concessionEn ? `<div class="sheet-text-fix" style="display:block;">${esc(F.concessionEn)}</div>` : ''}
            </div>
          ` : ''}

          <div style="
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            gap:6px;
            padding-top:2px;
          ">
            <div>
              <div style="display:flex; align-items:center; gap:3px; font-size:9px; font-weight:800; color:#111827;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="${themePrimaryColor}" style="flex-shrink:0;">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                <span class="sheet-text-fix">${esc(F.hotline)}</span>
              </div>
              <div class="sheet-text-fix" style="font-size:8px; font-weight:700; color:#334155; display:block;">
                ${esc(F.website)}
              </div>
            </div>

            <div style="text-align:right;">
              <div style="
                display:inline-flex;
                align-items:center;
                gap:4px;
                background:${themePrimaryColor};
                color:#ffffff;
                padding:2.5px 7px;
                border-radius:3px;
              ">
                <span class="sheet-text-fix" style="font-size:11px; font-weight:900;">${esc(F.operatorEn)}</span>
                <span class="sheet-text-fix" style="font-size:11px; font-weight:900;">${esc(F.operatorZh)}</span>
              </div>
              ${F.versionCode ? `
                <div class="sheet-text-fix" style="font-size:6.5px; color:#64748b; display:block; margin-top:1.5px; font-family:monospace;">
                  ${esc(F.versionCode)}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }

    default:
      return '';
  }
}

// ==========================================================================
// 5. EDITOR SIDEBAR RENDERERS & INTERACTION HANDLERS
// ==========================================================================
// 自動在左側頂部 Tab 導航列注入「5. 顏色與SVG」分頁按鈕（無需手動改動 HTML）
function ensureColorsTabButton() {
  const themeBtn = document.getElementById('tab-btn-theme');
  if (!themeBtn || !themeBtn.parentElement) return;
  const tabBar = themeBtn.parentElement;
  if (!document.getElementById('tab-btn-colors')) {
    tabBar.classList.remove('grid-cols-4');
    tabBar.classList.add('grid-cols-5');
    const btn = document.createElement('button');
    btn.id = 'tab-btn-colors';
    btn.setAttribute('onclick', "switchEditorTab('colors')");
    btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
    btn.innerHTML = `
      <i class="fa-solid fa-eye-dropper text-sm"></i>
      <span>5. 顏色與SVG</span>
    `;
    tabBar.appendChild(btn);
  }
}

function switchEditorTab(tabName, scrollToSectionId = null) {
  ensureColorsTabButton();
  currentTab = tabName;
  ['theme', 'stops', 'info', 'export', 'colors'].forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    if (!btn) return;
    if (t === tabName) {
      btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition bg-emerald-600 text-white shadow';
    } else {
      btn.className = 'py-2 px-1 rounded-lg flex flex-col items-center gap-1 transition text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
    }
  });
  renderEditorSidebar();

  if (scrollToSectionId) {
    setTimeout(() => {
      const target = document.getElementById(scrollToSectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('ring-2', 'ring-emerald-400');
        setTimeout(() => target.classList.remove('ring-2', 'ring-emerald-400'), 1200);
      }
    }, 60);
  }
}

function renderEditorSidebar() {
  ensureColorsTabButton();
  const container = document.getElementById('editor-content');
  if (!container) return;

  if (currentTab === 'theme') {
    container.innerHTML = renderThemeTabHTML();
  } else if (currentTab === 'stops') {
    container.innerHTML = renderStopsTabHTML();
  } else if (currentTab === 'info') {
    container.innerHTML = renderInfoTabHTML();
  } else if (currentTab === 'export') {
    container.innerHTML = renderVariantsAndExportTabHTML();
  } else if (currentTab === 'colors') {
    container.innerHTML = renderColorsAndSvgTabHTML();
  }
}

// 更新單一班次 (Variant) 的專屬顏色與 SVG 配色
function updateVariantColorPalette(vIdx, field, val, refreshSidebar = false) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  v[field] = val;

  if (field === 'color') {
    if (!v.nodeColor) v.nodeColor = val;
    if (!v.corridorSvgBg) v.corridorSvgBg = val;
    if (!v.tunnelSvgBg) v.tunnelSvgBg = val;
    v.routeBoxColor = val;
  }

  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables?.[vIdx];
  if (vt && ['routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    vt[field] = val;
  }

  renderA4Sheet();
  if (refreshSidebar) {
    renderEditorSidebar();
  }
}

// --------------------------------------------------------------------------
// TAB 5: 集中管理所有全局顏色、所有 SVG 圖標顏色 及 各班次獨立專屬配色
// --------------------------------------------------------------------------
function jumpToStopEditor(stopId) {
  expandedStopId = stopId;
  switchEditorTab('stops', `stop-card-${stopId}`);
}

// Update per-variant stop type ('origin' | 'normal' | 'colored' | 'destination')
function updateStopVariantType(idx, variantId, vType) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  if (!stop.variantType) {
    stop.variantType = {};
    (appConfig.variants || []).forEach(v => {
      stop.variantType[v.id] = getStopVariantType(stop, v.id, idx, appConfig.stops.length);
    });
  }
  stop.variantType[variantId] = vType;
  renderA4Sheet();
  renderEditorSidebar();
}

// ==========================================================================
// 6. STATE MUTATION HELPERS
// ==========================================================================
// Stops mutations
function toggleExpandStop(stopId) {
  expandedStopId = expandedStopId === stopId ? null : stopId;
  renderEditorSidebar();
}

function filterStopsSearch(val) {
  stopSearchQuery = val;
  renderEditorSidebar();
  const inputs = document.querySelectorAll('#editor-content input[placeholder*="搜尋站名"]');
  if (inputs[0]) {
    inputs[0].focus();
    inputs[0].setSelectionRange(val.length, val.length);
  }
}

function updateStopField(idx, field, val, refreshSidebar = false) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  stop[field] = val;

  if (field === 'hasTimePromo' && val === true) {
    if (stop.timePromoMins === undefined || String(stop.timePromoMins).trim() === '') {
      stop.timePromoMins = '8';
    }
    if (!stop.timePromoStyle) stop.timePromoStyle = 'pointer';
    if (!stop.timePromoLayout) stop.timePromoLayout = 'side_by_side';
    if (!stop.timePromoScale) stop.timePromoScale = 100;
    if (stop.timePromoPrefixZh === undefined) stop.timePromoPrefixZh = '約';
    if (stop.timePromoPrefixEn === undefined) stop.timePromoPrefixEn = 'approx';
    if (stop.timePromoSuffixZh === undefined) stop.timePromoSuffixZh = '分鐘直達';
    if (stop.timePromoSuffixEn === undefined) stop.timePromoSuffixEn = 'mins direct to';
  }

  if (field === 'hasInterchangeBox' && val === true) {
    if (stop.interchangeTitleZh === undefined) stop.interchangeTitleZh = '轉乘';
    if (stop.interchangeTitleEn === undefined) stop.interchangeTitleEn = 'Interchange';
    if (!stop.interchangeHeaderPos) stop.interchangeHeaderPos = 'top';
    if (!stop.interchangePointerStyle) stop.interchangePointerStyle = 'pointer';
    if (!stop.interchangeLayout) stop.interchangeLayout = 'side_by_side';
    if (!stop.interchangeScale) stop.interchangeScale = 100;
  }

  renderA4Sheet();
  if (refreshSidebar || field === 'type') {
    renderEditorSidebar();
  }
}

function addStopAt(insertIdx) {
  const newId = 'stop_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'normal';
  });
  const newStop = {
    id: newId,
    type: 'normal',
    variantType: vType,
    zh: '新巴士站, 道路名稱',
    en: 'New Bus Stop, Road Name',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: false,
    hasTunnel: false,
    corridorPipeHeightPx: 24,
    hasTimePromo: false,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '8',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已新增巴士站點');
}

function addCorridorStopAt(insertIdx) {
  const newId = 'corridor_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'corridor';
  });
  const newCorridorStop = {
    id: newId,
    type: 'corridor',
    variantType: vType,
    zh: '吐露港公路',
    en: 'Tolo Highway',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: true,
    hasTunnel: false,
    corridorPipeHeightPx: 24,
    hasTimePromo: true,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '10',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newCorridorStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已在路線圖站點新增「途徑走廊 + 約X分鐘直達」項目');
}

function addTunnelStopAt(insertIdx) {
  const newId = 'tunnel_' + Date.now();
  const vStatus = {};
  const vType = {};
  (appConfig.variants || []).forEach(v => {
    vStatus[v.id] = 'stop';
    vType[v.id] = 'tunnel';
  });
  const newTunnelStop = {
    id: newId,
    type: 'tunnel',
    variantType: vType,
    zh: '龍山隧道',
    en: 'Lung Shan Tunnel',
    remarkSymbol: '',
    remarkZh: '',
    remarkEn: '',
    districtZh: '',
    districtEn: '',
    districtWidth: '100%',
    fare: '',
    fareLabelExtraPx: 0,
    fareLineWidth: '100%',
    coloredBoxWidth: '',
    ignoreLandmarkZh: false,
    ignoreLandmarkEn: false,
    hasMtr: false,
    hasCorridor: false,
    hasTunnel: true,
    corridorPipeHeightPx: 24,
    hasTimePromo: false,
    timePromoStyle: 'pointer',
    timePromoLayout: 'side_by_side',
    timePromoScale: 100,
    timePromoMins: '5',
    timePromoPrefixZh: '約',
    timePromoPrefixEn: 'approx',
    timePromoSuffixZh: '分鐘直達',
    timePromoSuffixEn: 'mins direct to',
    timePromoBg: '',
    hasInterchangeBox: false,
    interchangePointerStyle: 'pointer',
    interchangeLayout: 'side_by_side',
    interchangeScale: 100,
    interchangeTitleZh: '轉乘',
    interchangeTitleEn: 'Interchange',
    interchangeBoxColor: '',
    interchangeBoxTextColor: '#ffffff',
    interchangeRoutes: [],
    symbol: '',
    contFromLeft: false,
    contToRight: false,
    manualBreakAfter: false,
    landmarkPosition: 'middle',
    landmarks: [],
    variantStatus: vStatus
  };
  appConfig.stops.splice(insertIdx, 0, newTunnelStop);
  expandedStopId = newId;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已在路線圖站點新增「途徑隧道 (HK_Tunnel)」項目');
}

// --------------------------------------------------------------------------
// TAB 2: STOPS & ROUTE MAP EDITOR (INCLUDES IGNORE LANDMARK TOGGLES FOR ZH & EN)
// --------------------------------------------------------------------------
function renderStopsTabHTML() {
  const enrichedStops = computeStopsWithFareZones(appConfig.stops);
  const totalStops = appConfig.stops.length;
  const C = appConfig.colors;
  const variants = appConfig.variants || [];
  const primaryVariantColor = variants[0]?.color || C.routeLineColor || '#008837';
  const q = stopSearchQuery.trim().toLowerCase();
  const filteredStops = enrichedStops.filter(s => {
    if (!q) return true;
    return (s.zh && s.zh.toLowerCase().includes(q)) ||
           (s.en && s.en.toLowerCase().includes(q)) ||
           (s.districtZh && s.districtZh.toLowerCase().includes(q)) ||
           (s.fare && s.fare.toLowerCase().includes(q));
  });

  const stopCardsHTML = filteredStops.map(stop => {
    const isExpanded = expandedStopId === stop.id;
    const idx = stop.index;
    const isTunnel = Boolean(stop.isTunnelStop || stop.hasTunnel || stop.type === 'tunnel');
    const isCorridor = !isTunnel && Boolean(stop.isCorridorStop || stop.hasCorridor || stop.type === 'corridor');
    const isSpecialPass = isCorridor || isTunnel;
    const effVar = getStopEffectiveVariant(stop) || {};

    const zoneBadge = stop.fareZoneNumber > 0
      ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${stop.fareZoneNumber % 2 === 0 ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50' : 'bg-slate-700 text-slate-300'}">
           第${stop.fareZoneNumber}分段${stop.fareZoneNumber % 2 === 0 ? '(雙數淺色底)' : ''}
         </span>`
      : '';

    const previewZhLine = String(stop.zh || '').replace(/\r?\n|\|/g, ' ↵ ');
    const previewEnLine = String(stop.en || '').replace(/\r?\n|\|/g, ' ↵ ');

    if (!isExpanded) {
      return `
        <div id="stop-card-${stop.id}" class="bg-slate-800/60 hover:bg-slate-800 border ${isSpecialPass ? 'border-emerald-500/60 bg-emerald-950/20' : 'border-slate-700/80'} rounded-lg px-3 py-2 flex items-center justify-between gap-2 transition">
          <div onclick="toggleExpandStop('${stop.id}')" class="flex-1 min-w-0 cursor-pointer flex items-center gap-2">
            ${isTunnel ? `
              <span class="w-6 h-6 rounded flex items-center justify-center shrink-0" title="途徑隧道 (HK_Tunnel)">
                ${createHkTunnelSvg(18, effVar.tunnelSvgBg || effVar.color || primaryVariantColor, effVar.tunnelSvgFg)}
              </span>
            ` : isCorridor ? `
              <span class="w-6 h-6 rounded flex items-center justify-center shrink-0" title="途徑走廊 (香港交通標誌 353)">
                ${createHkTrafficSign353Svg(18, effVar.corridorSvgBg || effVar.color || primaryVariantColor, effVar.corridorSvgFg)}
              </span>
            ` : `
              <span class="w-6 h-6 rounded-full ${stop.isColoredBgStop ? 'bg-emerald-600 text-white font-black' : 'bg-slate-700 text-slate-300 font-semibold'} flex items-center justify-center text-[11px] shrink-0">
                ${idx + 1}
              </span>
            `}
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-100 truncate">${stop.symbol ? `<sup class="text-amber-300 font-black mr-0.5">${esc(stop.symbol)}</sup>` : ''}${esc(previewZhLine)}</span>
                ${isCorridor ? `<span class="px-1.5 py-0.2 bg-[#008837] text-white rounded text-[10px] font-bold">途徑走廊(353)</span>` : ''}
                ${isTunnel ? `<span class="px-1.5 py-0.2 bg-teal-700 text-white rounded text-[10px] font-bold">途徑隧道(Tunnel)</span>` : ''}
                ${stop.hasTimePromo ? `<span class="px-1.5 py-0.2 bg-lime-600/80 text-white rounded text-[10px] font-bold"><i class="fa-regular fa-clock mr-0.5"></i>約${esc(stop.timePromoMins ?? '8')}分鐘直達</span>` : ''}
                ${stop.hasInterchangeBox ? `<span class="px-1.5 py-0.2 bg-sky-600/80 text-white rounded text-[10px] font-bold"><i class="fa-solid fa-shuffle mr-0.5"></i>${esc(stop.interchangeTitleZh || '轉乘')}(${(stop.interchangeRoutes || []).length})</span>` : ''}
                ${stop.hasMtr ? `<span class="px-1.5 py-0.2 bg-[#A81428] text-white rounded text-[10px] font-bold">港鐵 MTR</span>` : ''}
                ${!isSpecialPass && stop.isColoredBgStop ? `<span class="px-1.5 py-0.2 bg-emerald-600/40 text-emerald-200 rounded text-[10px]">純色底</span>` : ''}
                ${!isSpecialPass && !stop.isColoredBgStop && stop.isOrigin ? `<span class="px-1.5 py-0.2 bg-sky-600/40 text-sky-200 rounded text-[10px]">起點(純編號)</span>` : ''}
                ${stop.districtZh ? `<span class="px-1.5 py-0.2 bg-emerald-700/60 text-emerald-200 rounded text-[10px]">${esc(stop.districtZh)}</span>` : ''}
                ${stop.fare ? `<span class="px-1.5 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-[10px] font-bold">${esc(stop.fare)}</span>` : ''}
                ${stop.contFromLeft ? `<span class="px-1.5 py-0.2 bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded text-[10px]">▲續欄箭嘴</span>` : ''}
                ${(stop.manualBreakAfter || stop.contToRight) ? `<span class="px-1.5 py-0.2 bg-sky-500/20 text-sky-300 border border-sky-500/40 rounded text-[10px]">接右欄➔</span>` : ''}
                ${zoneBadge}
              </div>
              <div class="text-[10px] text-slate-400 truncate">${esc(previewEnLine)}</div>
            </div>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <button onclick="moveStop(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-900/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center" title="上移"><i class="fa-solid fa-chevron-up text-[10px]"></i></button>
            <button onclick="moveStop(${idx}, 1)" ${idx === appConfig.stops.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-slate-900/80 hover:bg-slate-700 disabled:opacity-30 text-slate-300 flex items-center justify-center" title="下移"><i class="fa-solid fa-chevron-down text-[10px]"></i></button>
            <button onclick="toggleExpandStop('${stop.id}')" class="w-6 h-6 rounded bg-slate-900/80 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center" title="展開編輯"><i class="fa-solid fa-pen text-[10px]"></i></button>
            <button onclick="deleteStop(${idx})" class="w-6 h-6 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center transition" title="刪除此項"><i class="fa-solid fa-trash text-[10px]"></i></button>
          </div>
        </div>
      `;
    }

    const variantControlsHTML = variants.map((v, vIdx) => {
      const curStatus = (stop.variantStatus && stop.variantStatus[v.id]) || 'stop';
      const curType = getStopVariantType(stop, v.id, idx, totalStops);
      const vBadgeTextColor = v.badgeText === 'black' ? '#111827' : '#ffffff';
      return `
        <div class="bg-slate-900/90 p-2 rounded border border-slate-700/80 space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0" style="background:${v.color}; color:${vBadgeTextColor};">${vIdx + 1}</span>
            <span class="text-[11px] font-bold text-slate-200 truncate">${esc(v.name)}</span>
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">此班次站點類型</label>
              <select onchange="updateStopVariantType(${idx}, '${v.id}', this.value)" class="w-full bg-slate-800 border border-slate-600 rounded px-1.5 py-1 text-[11px] text-emerald-300 font-semibold">
                <option value="origin" ${curType === 'origin' ? 'selected' : ''}>起點 (純色底+班次編號)</option>
                <option value="origin_number_only" ${curType === 'origin_number_only' ? 'selected' : ''}>起點 (純班次編號)</option>
                <option value="normal" ${curType === 'normal' ? 'selected' : ''}>普通分站</option>
                <option value="corridor" ${curType === 'corridor' ? 'selected' : ''}>途徑走廊 (正方形標誌 353)</option>
                <option value="tunnel" ${curType === 'tunnel' ? 'selected' : ''}>途徑隧道 (正方形標誌 HK_Tunnel)</option>
                <option value="colored" ${curType === 'colored' ? 'selected' : ''}>純色底分站</option>
                <option value="destination" ${curType === 'destination' ? 'selected' : ''}>終點 (純色底+上箭嘴)</option>
              </select>
            </div>
            <div>
              <label class="block text-[9px] text-slate-400 mb-0.5">此班次停靠狀態</label>
              <select onchange="updateStopVariantStatus(${idx}, '${v.id}', this.value)" class="w-full bg-slate-800 border border-slate-600 rounded px-1.5 py-1 text-[11px] text-slate-100">
                <option value="stop" ${curStatus === 'stop' ? 'selected' : ''}>● 停靠 / 途經顯示 (Active)</option>
                <option value="bypass" ${curStatus === 'bypass' ? 'selected' : ''}>│ 不停站通過 (Bypass)</option>
                <option value="none" ${curStatus === 'none' ? 'selected' : ''}>✕ 不途經 (Not Routed)</option>
              </select>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const curStopLmPos = stop.landmarkPosition || 'middle';
    const landmarksListHTML = (stop.landmarks || []).map((lm, lmIdx) => {
      const lmPos = lm.position || curStopLmPos;
      return `
        <div class="flex items-center gap-1 bg-slate-900/80 p-1.5 rounded border border-slate-700">
          <input type="text" placeholder="中文地標" value="${esc(lm.zh)}" oninput="updateStopLandmark(${idx}, ${lmIdx}, 'zh', this.value)" class="flex-1 min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px] text-center" />
          <input type="text" placeholder="英文地標" value="${esc(lm.en)}" oninput="updateStopLandmark(${idx}, ${lmIdx}, 'en', this.value)" class="flex-1 min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px] text-center" />
          <select onchange="updateStopLandmark(${idx}, ${lmIdx}, 'position', this.value)" title="此地標顯示位置" class="w-28 bg-slate-800 border border-slate-700 rounded px-1 py-1 text-[10px] text-amber-300 shrink-0">
            <option value="middle" ${lmPos === 'middle' ? 'selected' : ''}>中間(右)</option>
            <option value="bottom_right" ${lmPos === 'bottom_right' ? 'selected' : ''}>右下</option>
            <option value="below_name" ${lmPos === 'below_name' ? 'selected' : ''}>站名下面</option>
            <option value="after_callouts" ${lmPos === 'after_callouts' ? 'selected' : ''}>宣傳/轉乘框最後面</option>
          </select>
          <input type="number" min="0" max="180" step="2" placeholder="+px" title="地標額外加長(px)" value="${Number(lm.extraWidthPx) || 0}" oninput="updateStopLandmark(${idx}, ${lmIdx}, 'extraWidthPx', Number(this.value))" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-1 text-[11px] text-emerald-300 font-mono text-center shrink-0" />
          <button onclick="removeStopLandmark(${idx}, ${lmIdx})" class="px-1.5 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white transition shrink-0"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    }).join('');

    const curPromoBg = stop.timePromoBg || effVar.promoBg || C.promoBannerBg || C.introBannerBg || '#65b741';
    const curPromoScale = Number(stop.timePromoScale) || 100;
    const isPromoTextOnly = stop.timePromoStyle === 'text_only';
    const curInterchangeBg = stop.interchangeBoxColor || effVar.interchangeBg || C.interchangeDefaultBg || C.introBannerBg || '#65b741';
    const curInterchangeScale = Number(stop.interchangeScale) || 100;

    const interchangeRoutesListHTML = (stop.interchangeRoutes || []).map((ir, rIdx) => {
      const curNodeStyle = ir.nodeStyle || (ir.showDot ? 'solid_dot' : 'none');
      const curNodeColor = ir.nodeColor || ir.bgColor || effVar.color || C.routeLineColor || '#008837';
      const subRoutes = ensureInterchangeItemRoutesList(ir, C.routeBoxBg || '#008837');

      const subRoutesBadgesEditorHTML = subRoutes.map((sr, subIdx) => `
        <div class="inline-flex items-center gap-1 bg-slate-900 px-1.5 py-1 rounded border border-slate-700">
          <input type="text" placeholder="路線" value="${esc(sr.route || '')}" oninput="updateInterchangeSubRoute(${idx}, ${rIdx}, ${subIdx}, 'route', this.value)" class="w-12 bg-slate-800 border border-slate-600 rounded px-1 py-0.5 text-[10px] font-black text-emerald-300 text-center" />
          <span class="text-[8px] text-slate-400">底</span>
          <input type="color" value="${sr.bgColor || C.routeBoxBg || '#008837'}" oninput="updateInterchangeSubRoute(${idx}, ${rIdx}, ${subIdx}, 'bgColor', this.value)" title="此路線框底色" class="w-4 h-4 rounded bg-transparent cursor-pointer shrink-0" />
          <span class="text-[8px] text-slate-400">字</span>
          <input type="color" value="${sr.textColor || '#ffffff'}" oninput="updateInterchangeSubRoute(${idx}, ${rIdx}, ${subIdx}, 'textColor', this.value)" title="此路線框字色" class="w-4 h-4 rounded bg-transparent cursor-pointer shrink-0" />
          <button type="button" onclick="removeInterchangeSubRoute(${idx}, ${rIdx}, ${subIdx})" class="text-rose-400 hover:text-rose-200 text-[10px] px-0.5" title="刪除此路線"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `).join('');

      return `
        <div class="bg-slate-950/85 p-2 rounded-lg border border-slate-700/90 space-y-2">
          <div class="flex items-center justify-between gap-1 border-b border-slate-800 pb-1">
            <span class="text-[10px] font-bold text-sky-300">項目 #${rIdx + 1} (同一項目內可單獨加多條路線・共用相同目的地)</span>
            <button onclick="removeStopInterchangeRoute(${idx}, ${rIdx})" class="px-1.5 py-0.5 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] shrink-0" title="刪除此整行項目"><i class="fa-solid fa-trash-can"></i></button>
          </div>

          <!-- 第一部分：站點樣式選擇 + 站點顏色 + 自定義中英文站名 -->
          <div class="grid grid-cols-12 gap-1 items-center">
            <div class="col-span-4">
              <label class="block text-[8px] text-amber-300">站點樣式 (選填)</label>
              <div class="flex items-center gap-1">
                <select onchange="updateStopInterchangeRoute(${idx}, ${rIdx}, 'nodeStyle', this.value, true)" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-[10px] text-amber-200 font-semibold">
                  <option value="none" ${curNodeStyle === 'none' ? 'selected' : ''}>無站點圖標</option>
                  <option value="normal" ${curNodeStyle === 'normal' ? 'selected' : ''}>○ 普通空心圓站點</option>
                  <option value="terminal" ${curNodeStyle === 'terminal' ? 'selected' : ''}>◎ 起終點粗圈站點</option>
                  <option value="solid_dot" ${curNodeStyle === 'solid_dot' ? 'selected' : ''}>● 實心圓點</option>
                  <option value="partial" ${curNodeStyle === 'partial' ? 'selected' : ''}>⊙ 雙環虛線站點</option>
                  <option value="corridor" ${curNodeStyle === 'corridor' ? 'selected' : ''}>🛣️ 途徑走廊 353</option>
                  <option value="tunnel" ${curNodeStyle === 'tunnel' ? 'selected' : ''}>🚇 途徑隧道</option>
                  <option value="mtr" ${curNodeStyle === 'mtr' ? 'selected' : ''}>Ж 港鐵 MTR</option>
                </select>
                ${curNodeStyle !== 'none' && curNodeStyle !== 'mtr' ? `
                  <input type="color" value="${curNodeColor}" oninput="updateStopInterchangeRoute(${idx}, ${rIdx}, 'nodeColor', this.value)" title="站點樣式顏色" class="w-5 h-5 rounded bg-transparent cursor-pointer shrink-0" />
                ` : ''}
              </div>
            </div>
            <div class="col-span-4">
              <label class="block text-[8px] text-slate-400">自定義中文站名 (選填)</label>
              <input type="text" placeholder="如：禾輋邨 / 大圍站" value="${esc(ir.stationZh || '')}" oninput="updateStopInterchangeRoute(${idx}, ${rIdx}, 'stationZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-100 font-bold" />
            </div>
            <div class="col-span-4">
              <label class="block text-[8px] text-slate-400">自定義英文站名 (選填)</label>
              <input type="text" placeholder="如：Wo Che Est" value="${esc(ir.stationEn || '')}" oninput="updateStopInterchangeRoute(${idx}, ${rIdx}, 'stationEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-300" />
            </div>
          </div>

          <!-- 第二部分：單獨新增/編輯路線號碼 + 框底色 + 框字色 (共用下方目的地) -->
          <div class="pt-1 border-t border-slate-900 space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[8px] text-emerald-300 font-bold">此項目轉乘路線號碼 (可設定每條路線框底色與框字色，共用下方目的地)：</label>
              <button type="button" onclick="addInterchangeSubRoute(${idx}, ${rIdx})" class="px-1.5 py-0.5 rounded bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-[9px] font-bold transition">
                + 單獨加路線
              </button>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              ${subRoutesBadgesEditorHTML || `<span class="text-[9px] text-slate-500 italic">無路線標籤（純站名模式），可點擊右上「+ 單獨加路線」加入路線</span>`}
            </div>
          </div>

          <!-- 第三部分：共用中英文目的地 -->
          <div class="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-900">
            <div>
              <label class="block text-[8px] text-slate-400">共用中文目的地 (選填)</label>
              <input type="text" placeholder="如：石門、第一城" value="${esc(ir.destZh || '')}" oninput="updateStopInterchangeRoute(${idx}, ${rIdx}, 'destZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-100 font-bold" />
            </div>
            <div>
              <label class="block text-[8px] text-slate-400">共用英文目的地 (選填)</label>
              <input type="text" placeholder="如：Shek Mun, City One" value="${esc(ir.destEn || '')}" oninput="updateStopInterchangeRoute(${idx}, ${rIdx}, 'destEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-300" />
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div id="stop-card-${stop.id}" class="bg-slate-800 border-2 border-emerald-500/80 rounded-xl p-3 space-y-3 shadow-lg">
        <div class="flex items-center justify-between border-b border-slate-700 pb-2">
          <div class="flex items-center gap-2">
            ${isTunnel ? createHkTunnelSvg(18, effVar.tunnelSvgBg || effVar.color || primaryVariantColor, effVar.tunnelSvgFg) : isCorridor ? createHkTrafficSign353Svg(18, effVar.corridorSvgBg || effVar.color || primaryVariantColor, effVar.corridorSvgFg) : `<span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-xs">${idx + 1}</span>`}
            <span class="font-bold text-emerald-300">${isTunnel ? `編輯第 ${idx + 1} 項 (途徑隧道)` : isCorridor ? `編輯第 ${idx + 1} 項 (途徑走廊)` : `編輯第 ${idx + 1} 站`}</span>
            ${zoneBadge}
          </div>
          <div class="flex items-center gap-1">
            <button onclick="addStopAt(${idx + 1})" class="px-1.5 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-[10px] transition" title="在下方插入新站">+ 站點</button>
            <button onclick="addCorridorStopAt(${idx + 1})" class="px-1.5 py-1 rounded bg-teal-600/30 hover:bg-teal-600 text-teal-200 hover:text-white text-[10px] transition" title="在下方插入途徑走廊">+ 走廊</button>
            <button onclick="addTunnelStopAt(${idx + 1})" class="px-1.5 py-1 rounded bg-cyan-600/30 hover:bg-cyan-600 text-cyan-200 hover:text-white text-[10px] transition" title="在下方插入途徑隧道">+ 隧道</button>
            <button onclick="toggleExpandStop(null)" class="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-[10px]">收起</button>
            <button onclick="deleteStop(${idx})" class="px-2 py-1 rounded bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-[10px] transition" title="刪除此站"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <!-- 1. 途徑走廊 (正方形 353) / 途徑隧道 (正方形 HK_Tunnel) 與套用班次配色選擇 -->
        <div class="grid grid-cols-1 gap-2">
          <div class="bg-slate-900/90 px-3 py-2 rounded-lg border border-emerald-500/50 space-y-2">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex items-center justify-between bg-slate-950/70 px-2.5 py-1.5 rounded border border-slate-800">
                <label class="flex items-center gap-1.5 cursor-pointer text-[11px] font-bold text-emerald-300">
                  <input type="checkbox" ${isCorridor ? 'checked' : ''} onchange="setStopRoadPassType(${idx}, 'corridor', this.checked)" class="rounded accent-emerald-500" />
                  <span>設為「途徑走廊」</span>
                </label>
                <span class="inline-flex items-center">${createHkTrafficSign353Svg(15, effVar.corridorSvgBg || effVar.color || primaryVariantColor, effVar.corridorSvgFg)}</span>
              </div>

              <div class="flex items-center justify-between bg-slate-950/70 px-2.5 py-1.5 rounded border border-slate-800">
                <label class="flex items-center gap-1.5 cursor-pointer text-[11px] font-bold text-cyan-300">
                  <input type="checkbox" ${isTunnel ? 'checked' : ''} onchange="setStopRoadPassType(${idx}, 'tunnel', this.checked)" class="rounded accent-cyan-500" />
                  <span>設為「途徑隧道」</span>
                </label>
                <span class="inline-flex items-center">${createHkTunnelSvg(15, effVar.tunnelSvgBg || effVar.color || primaryVariantColor, effVar.tunnelSvgFg)}</span>
              </div>
            </div>

            <div class="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-800">
              <div class="flex items-center gap-1.5 flex-1 min-w-0">
                <span class="text-[10px] text-amber-300 font-bold shrink-0">此項套用班次配色:</span>
                <select onchange="updateStopField(${idx}, 'colorVariantId', this.value, true)" class="flex-1 min-w-0 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-100">
                  <option value="" ${!stop.colorVariantId ? 'selected' : ''}>自動跟隨停靠班次 / 主色</option>
                  ${variants.map((v, vIdx) => `<option value="${v.id}" ${stop.colorVariantId === v.id ? 'selected' : ''}>套用班次 #${vIdx + 1} (${esc(v.name)}) 專屬色</option>`).join('')}
                </select>
              </div>
              ${isSpecialPass ? `
                <div class="flex items-center gap-1 shrink-0">
                  <span class="text-[10px] text-slate-400">行高(px):</span>
                  <input type="number" min="18" max="90" step="2" value="${Number(stop.corridorPipeHeightPx) || 24}" oninput="updateStopField(${idx}, 'corridorPipeHeightPx', Number(this.value))" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 2. 「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅 (自定義大小 %) -->
          <div class="bg-slate-900/90 px-3 py-2 rounded-lg border border-lime-500/50 space-y-2">
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 cursor-pointer text-[11px] font-bold text-lime-300">
                <input type="checkbox" ${stop.hasTimePromo ? 'checked' : ''} onchange="updateStopField(${idx}, 'hasTimePromo', this.checked, true)" class="rounded accent-lime-500" />
                <span>顯示「時間 SVG + 約 X 分鐘直達」大字宣傳橫幅 (若有地標會自動排在地標下)</span>
              </label>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded" style="background:${isPromoTextOnly ? 'transparent' : curPromoBg}; border:${isPromoTextOnly ? `1px dashed ${curPromoBg}` : 'none'};">
                ${createFastClockSvg(14, isPromoTextOnly ? curPromoBg : '#ffffff')}
              </span>
            </div>

            ${stop.hasTimePromo ? `
              <div class="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800">
                <div>
                  <label class="block text-[9px] text-amber-300 mb-0.5">宣傳橫幅樣式</label>
                  <select onchange="updateStopField(${idx}, 'timePromoStyle', this.value, true)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-amber-200 font-bold">
                    <option value="pointer" ${(stop.timePromoStyle || 'pointer') === 'pointer' ? 'selected' : ''}>樣式一：帶聊天框箭嘴指著 (◀/▲)</option>
                    <option value="flat" ${stop.timePromoStyle === 'flat' ? 'selected' : ''}>樣式二：無箭嘴純圓角矩形框</option>
                    <option value="text_only" ${stop.timePromoStyle === 'text_only' ? 'selected' : ''}>樣式三：無聊天框 (文字及SVG為宣傳框底色)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[9px] text-slate-400 mb-0.5">宣傳框顯示位置</label>
                  <select onchange="updateStopField(${idx}, 'timePromoLayout', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[10px] text-slate-100">
                    <option value="side_by_side" ${(stop.timePromoLayout || 'side_by_side') === 'side_by_side' ? 'selected' : ''}>同行右側並排 (有右側地標時自動轉下方)</option>
                    <option value="stacked" ${stop.timePromoLayout === 'stacked' ? 'selected' : ''}>名字與地標正下方排列</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-12 gap-1.5 items-center">
                <div class="col-span-3">
                  <label class="block text-[9px] text-amber-300 mb-0.5">直達分鐘大字</label>
                  <input type="text" placeholder="如 8 或 10" value="${esc(stop.timePromoMins ?? '8')}" oninput="updateStopField(${idx}, 'timePromoMins', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-center font-black text-amber-300 text-xs" />
                </div>
                <div class="col-span-5">
                  <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">宣傳橫幅自定義大小 (%)</label>
                  <div class="flex items-center gap-1">
                    <input type="range" min="50" max="180" step="5" value="${curPromoScale}" oninput="updateStopField(${idx}, 'timePromoScale', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-emerald-500" />
                    <input type="number" min="50" max="220" step="5" value="${curPromoScale}" oninput="updateStopField(${idx}, 'timePromoScale', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-12 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-emerald-300 font-mono text-[10px]" />
                  </div>
                </div>
                <div class="col-span-4">
                  <label class="block text-[9px] text-slate-400 mb-0.5">宣傳框底色 (或文字色)</label>
                  <div class="flex items-center gap-1">
                    <input type="color" value="${curPromoBg}" oninput="updateStopField(${idx}, 'timePromoBg', this.value)" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
                    <input type="text" placeholder="預設綠" value="${esc(stop.timePromoBg || '')}" onchange="updateStopField(${idx}, 'timePromoBg', this.value, true)" class="w-full min-w-0 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 font-mono text-[10px]" />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-1">
                <div>
                  <label class="block text-[8px] text-slate-400">前綴(中)</label>
                  <input type="text" value="${esc(stop.timePromoPrefixZh ?? '約')}" oninput="updateStopField(${idx}, 'timePromoPrefixZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-200" />
                </div>
                <div>
                  <label class="block text-[8px] text-slate-400">前綴(英)</label>
                  <input type="text" value="${esc(stop.timePromoPrefixEn ?? 'approx')}" oninput="updateStopField(${idx}, 'timePromoPrefixEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-200" />
                </div>
                <div>
                  <label class="block text-[8px] text-slate-400">後綴(中)</label>
                  <input type="text" value="${esc(stop.timePromoSuffixZh ?? '分鐘直達')}" oninput="updateStopField(${idx}, 'timePromoSuffixZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-200" />
                </div>
                <div>
                  <label class="block text-[8px] text-slate-400">後綴(英)</label>
                  <input type="text" value="${esc(stop.timePromoSuffixEn ?? 'mins direct to')}" oninput="updateStopField(${idx}, 'timePromoSuffixEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-200" />
                </div>
              </div>
            ` : ''}
          </div>

          <!-- 3. 參考 sampleroute2.pdf：指著站點的「轉乘 (Interchange)」圓角矩形框 (新增自定義大小 % 與路線框字色) -->
          <div class="bg-slate-900/90 px-3 py-2 rounded-lg border border-sky-500/50 space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-1">
              <label class="flex items-center gap-2 cursor-pointer text-[11px] font-bold text-sky-300">
                <input type="checkbox" ${stop.hasInterchangeBox ? 'checked' : ''} onchange="updateStopField(${idx}, 'hasInterchangeBox', this.checked, true); if(this.checked && (!appConfig.stops[${idx}].interchangeRoutes || appConfig.stops[${idx}].interchangeRoutes.length === 0)) addStopInterchangeRoute(${idx}, 'route');" class="rounded accent-sky-500" />
                <span>顯示指著此站的「轉乘」圓角矩形框 (若有地標會自動排在地標下)</span>
              </label>
              ${stop.hasInterchangeBox ? `
                <div class="flex items-center gap-1">
                  <button onclick="addStopInterchangeRoute(${idx}, 'route')" class="px-1.5 py-0.5 rounded bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-bold transition">+ 路線項目</button>
                  <button onclick="addStopInterchangeRoute(${idx}, 'station')" class="px-1.5 py-0.5 rounded bg-teal-600 hover:bg-teal-500 text-white text-[10px] font-bold transition">+ 站名項目</button>
                  <button onclick="addStopInterchangeRoute(${idx}, 'station_route')" class="px-1.5 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold transition">+ 站名+路線</button>
                </div>
              ` : ''}
            </div>

            ${stop.hasInterchangeBox ? `
              <div class="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800">
                <div>
                  <label class="block text-[9px] text-sky-300 mb-0.5">標題中文 (預設：轉乘，可用 | 分隔多行)</label>
                  <input type="text" placeholder="如：轉乘 或 轉乘站" value="${esc(stop.interchangeTitleZh ?? '轉乘')}" oninput="updateStopField(${idx}, 'interchangeTitleZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100 font-bold" />
                </div>
                <div>
                  <label class="block text-[9px] text-sky-300 mb-0.5">標題英文 (預設：Interchange，可用 | 分隔多行)</label>
                  <input type="text" placeholder="如：Interchange" value="${esc(stop.interchangeTitleEn ?? 'Interchange')}" oninput="updateStopField(${idx}, 'interchangeTitleEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200" />
                </div>
              </div>
              <div class="grid grid-cols-12 gap-1.5 items-center">
                <div class="col-span-4">
                  <label class="block text-[9px] text-emerald-300 font-bold mb-0.5">轉乘框自定義大小 (%)</label>
                  <div class="flex items-center gap-1">
                    <input type="range" min="50" max="180" step="5" value="${curInterchangeScale}" oninput="updateStopField(${idx}, 'interchangeScale', Number(this.value)); this.nextElementSibling.value = this.value;" class="flex-1 accent-sky-500" />
                    <input type="number" min="50" max="220" step="5" value="${curInterchangeScale}" oninput="updateStopField(${idx}, 'interchangeScale', Number(this.value)); this.previousElementSibling.value = this.value;" class="w-11 bg-slate-800 border border-slate-700 rounded px-1 py-0.5 text-center text-sky-300 font-mono text-[10px]" />
                  </div>
                </div>
                <div class="col-span-3">
                  <label class="block text-[9px] text-slate-400 mb-0.5">標題列位置</label>
                  <select onchange="updateStopField(${idx}, 'interchangeHeaderPos', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-1 text-[10px] text-emerald-300 font-bold">
                    <option value="top" ${(stop.interchangeHeaderPos || 'top') === 'top' ? 'selected' : ''}>頂部標題列</option>
                    <option value="left" ${stop.interchangeHeaderPos === 'left' ? 'selected' : ''}>左側標題列</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <label class="block text-[9px] text-slate-400 mb-0.5">箭嘴樣式</label>
                  <select onchange="updateStopField(${idx}, 'interchangePointerStyle', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-1 text-[10px] text-amber-200">
                    <option value="pointer" ${(stop.interchangePointerStyle || 'pointer') === 'pointer' ? 'selected' : ''}>帶箭嘴</option>
                    <option value="flat" ${stop.interchangePointerStyle === 'flat' ? 'selected' : ''}>無箭嘴</option>
                  </select>
                </div>
                <div class="col-span-3">
                  <label class="block text-[9px] text-slate-400 mb-0.5">顯示位置</label>
                  <select onchange="updateStopField(${idx}, 'interchangeLayout', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1 py-1 text-[10px] text-slate-100">
                    <option value="side_by_side" ${(stop.interchangeLayout || 'side_by_side') === 'side_by_side' ? 'selected' : ''}>右側(有地標轉下)</option>
                    <option value="stacked" ${stop.interchangeLayout === 'stacked' ? 'selected' : ''}>站名下方 (▲)</option>
                  </select>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[9px] text-slate-400 shrink-0">轉乘框主色:</span>
                <input type="color" value="${curInterchangeBg}" oninput="updateStopField(${idx}, 'interchangeBoxColor', this.value)" class="w-6 h-5 rounded bg-transparent cursor-pointer shrink-0" />
                <input type="text" placeholder="預設綠" value="${esc(stop.interchangeBoxColor || '')}" onchange="updateStopField(${idx}, 'interchangeBoxColor', this.value, true)" class="w-28 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 font-mono text-[10px]" />
              </div>
              <div class="space-y-1.5">
                <div class="text-[9px] text-slate-400">圓角矩形框項目列表（每個項目內可單獨加入多條路線及設定框底色/框字色，共用同一目的地）：</div>
                ${interchangeRoutesListHTML || `<div class="text-[10px] text-slate-500 italic">點擊右上角「+ 路線項目」、「+ 站名項目」或「+ 站名+路線」加入項目。</div>`}
              </div>
            ` : ''}
          </div>

          <div class="bg-slate-900/90 px-3 py-2 rounded-lg border border-rose-500/40 flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer text-[11px] font-bold text-rose-200">
              <input type="checkbox" ${stop.hasMtr ? 'checked' : ''} onchange="updateStopField(${idx}, 'hasMtr', this.checked, true)" class="rounded accent-rose-600" />
              <span>顯示該站點有鐵路標誌（港鐵 MTR 標誌）</span>
            </label>
            <span class="inline-flex items-center">${createMtrLogoSvg(13)}</span>
          </div>
        </div>

        <!-- Fare, Fare Label Extra Width, Fare Line/Zone Width & Top-Left Symbol -->
        <div class="grid grid-cols-4 gap-2">
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">分段收費</label>
            <input type="text" placeholder="如 $19.50" value="${esc(stop.fare)}" oninput="updateStopField(${idx}, 'fare', this.value, true)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-amber-300 font-bold" />
          </div>
          <div>
            <label class="block text-[10px] text-emerald-300 mb-1">收費Label加長(px)</label>
            <input type="number" min="0" max="260" step="2" value="${Number(stop.fareLabelExtraPx) || 0}" oninput="updateStopField(${idx}, 'fareLabelExtraPx', Number(this.value))" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-200 font-mono text-[11px]" />
          </div>
          <div>
            <label class="block text-[10px] text-emerald-300 mb-1">橫線及淺色底長</label>
            <input type="text" placeholder="100% 或 120px" value="${esc(stop.fareLineWidth || '100%')}" oninput="updateStopField(${idx}, 'fareLineWidth', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-200 font-mono text-[11px]" />
          </div>
          <div>
            <label class="block text-[10px] text-amber-300 mb-1" title="顯示在站名的左上角且包覆於分段淺色背景內">旁註符號(左上內)</label>
            <input type="text" placeholder="* 或 #" value="${esc(stop.symbol)}" oninput="updateStopField(${idx}, 'symbol', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100 font-bold" />
          </div>
        </div>

        <!-- District Chinese, English & Custom District Label Width -->
        <div class="grid grid-cols-3 gap-2">
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">區域中文名字</label>
            <input type="text" placeholder="例如：西九龍" value="${esc(stop.districtZh)}" oninput="updateStopField(${idx}, 'districtZh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">區域英文名字</label>
            <input type="text" placeholder="West Kowloon" value="${esc(stop.districtEn)}" oninput="updateStopField(${idx}, 'districtEn', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-100" />
          </div>
          <div>
            <label class="block text-[10px] text-emerald-300 mb-1">區域 Label 長度</label>
            <input type="text" placeholder="預設 100% 或 80px" value="${esc(stop.districtWidth || '100%')}" oninput="updateStopField(${idx}, 'districtWidth', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-200 font-mono text-[11px]" />
          </div>
        </div>

        <!-- Stop / Corridor / Tunnel Chinese & English Name -->
        <div class="grid grid-cols-1 gap-2">
          <div class="grid grid-cols-3 gap-2">
            <div class="col-span-2">
              <div class="flex items-center justify-between mb-1 gap-1">
                <label class="text-[10px] text-slate-400">${isTunnel ? '中文途徑隧道名稱' : isCorridor ? '中文途徑走廊名稱' : '中文站點名稱'} <span class="text-emerald-400">(可按 Enter 或 | 隔行)</span></label>
                <div class="flex items-center gap-1.5">
                  <button type="button" onclick="insertStopLineBreak(${idx}, 'zh')" class="px-1.5 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-[9px] text-slate-200 hover:text-white transition" title="插入隔行">+ 隔行</button>
                  <label class="flex items-center gap-1 text-[10px] text-amber-300 cursor-pointer">
                    <input type="checkbox" ${stop.ignoreLandmarkZh ? 'checked' : ''} onchange="updateStopField(${idx}, 'ignoreLandmarkZh', this.checked)" class="rounded accent-amber-500" />
                    <span>忽略地標限制</span>
                  </label>
                </div>
              </div>
              <textarea id="stop-zh-input-${idx}" rows="2" oninput="updateStopField(${idx}, 'zh', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-100 font-bold leading-snug resize-y">${esc(stop.zh)}</textarea>
            </div>
            <div>
              <label class="block text-[10px] text-emerald-300 mb-1">起點/純色底長度</label>
              <input type="text" placeholder="自動 / 140px / 100%" value="${esc(stop.coloredBoxWidth || '')}" oninput="updateStopField(${idx}, 'coloredBoxWidth', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-emerald-200 font-mono text-[11px]" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1 gap-1">
              <label class="text-[10px] text-slate-400">${isTunnel ? '英文途徑隧道名稱' : isCorridor ? '英文途徑走廊名稱' : '英文站點名稱'} <span class="text-emerald-400">(可按 Enter 或 | 隔行)</span></label>
              <div class="flex items-center gap-1.5">
                <button type="button" onclick="insertStopLineBreak(${idx}, 'en')" class="px-1.5 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-[9px] text-slate-200 hover:text-white transition" title="插入隔行">+ 隔行</button>
                <label class="flex items-center gap-1 text-[10px] text-amber-300 cursor-pointer">
                  <input type="checkbox" ${stop.ignoreLandmarkEn ? 'checked' : ''} onchange="updateStopField(${idx}, 'ignoreLandmarkEn', this.checked)" class="rounded accent-amber-500" />
                  <span>英文忽略地標限制</span>
                </label>
              </div>
            </div>
            <textarea id="stop-en-input-${idx}" rows="2" oninput="updateStopField(${idx}, 'en', this.value)" class="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-100 leading-snug resize-y">${esc(stop.en)}</textarea>
          </div>

          <!-- 站名下方注解（支援與站名一樣的左上內旁註符號 remarkSymbol） -->
          <div class="bg-slate-900/75 p-2 rounded-lg border border-slate-700/80 space-y-1.5">
            <div class="text-[10px] font-bold text-slate-300">
              <i class="fa-solid fa-comment-dots text-sky-400 mr-1"></i>站名下方注解 (支援左上內旁註符號，處理方法與站名相同)
            </div>
            <div class="grid grid-cols-12 gap-1.5">
              <div class="col-span-3">
                <input type="text" placeholder="旁註符號 (*)" title="注解左上角旁註符號" value="${esc(stop.remarkSymbol || '')}" oninput="updateStopField(${idx}, 'remarkSymbol', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-1.5 py-1 text-[11px] text-amber-300 font-bold text-center" />
              </div>
              <div class="col-span-4">
                <input type="text" placeholder="中文注解 (選填)" value="${esc(stop.remarkZh || '')}" oninput="updateStopField(${idx}, 'remarkZh', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-100" />
              </div>
              <div class="col-span-5">
                <input type="text" placeholder="英文注解 (Optional remark)" value="${esc(stop.remarkEn || '')}" oninput="updateStopField(${idx}, 'remarkEn', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200" />
              </div>
            </div>
          </div>
        </div>

        <!-- Landmarks (新增「大字宣傳/轉乘框最後面」選項) -->
        <div class="space-y-1.5 pt-1 border-t border-slate-700/70">
          <div class="flex items-center justify-between flex-wrap gap-1.5">
            <label class="text-[11px] font-bold text-slate-200"><i class="fa-solid fa-location-dot text-amber-400 mr-1"></i>地標標籤與顯示位置</label>
            <div class="flex items-center gap-1.5">
              <select onchange="updateStopAllLandmarksPosition(${idx}, this.value)" class="bg-slate-900 border border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-amber-300 font-semibold">
                <option value="middle" ${curStopLmPos === 'middle' ? 'selected' : ''}>位置：中間 (預設)</option>
                <option value="bottom_right" ${curStopLmPos === 'bottom_right' ? 'selected' : ''}>位置：右下</option>
                <option value="below_name" ${curStopLmPos === 'below_name' ? 'selected' : ''}>位置：站名下面</option>
                <option value="after_callouts" ${curStopLmPos === 'after_callouts' ? 'selected' : ''}>位置：大字宣傳/轉乘框最後面</option>
              </select>
              <button onclick="addStopLandmark(${idx})" class="px-2 py-0.5 rounded bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white text-[10px] transition">+ 新增地標</button>
            </div>
          </div>
          ${landmarksListHTML || `<div class="text-[10px] text-slate-500 italic">此站暫無地標標籤，點擊右上角「+ 新增地標」即可加入。</div>`}
        </div>

        <!-- Per-Variant Stop Type & Stopping Status -->
        <div class="space-y-1.5 pt-1 border-t border-slate-700/70">
          <label class="block text-[11px] font-bold text-slate-200"><i class="fa-solid fa-code-branch text-sky-400 mr-1"></i>各班次在此站的獨立類型與停靠樣式</label>
          <div class="space-y-1.5">
            ${variantControlsHTML}
          </div>
        </div>

        <!-- Continuation & Manual Column Split Toggles -->
        <div class="pt-1.5 border-t border-slate-700/70 space-y-1.5">
          <div class="grid grid-cols-2 gap-2">
            <label class="flex items-center gap-1.5 cursor-pointer text-[10px] text-purple-300 font-medium bg-slate-900/70 p-1.5 rounded border border-slate-700/80">
              <input type="checkbox" ${stop.contFromLeft ? 'checked' : ''} onchange="updateStopField(${idx}, 'contFromLeft', this.checked, true)" class="rounded accent-purple-500" />
              <span>上方續欄箭嘴 (無前站亦可用・不顯示文字)</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer text-[10px] text-emerald-300 font-medium bg-slate-900/70 p-1.5 rounded border border-slate-700/80">
              <input type="checkbox" ${stop.contToRight ? 'checked' : ''} onchange="updateStopField(${idx}, 'contToRight', this.checked, true)" class="rounded accent-emerald-500" />
              <span>下方接欄箭嘴 (無後站亦可用・不顯示文字)</span>
            </label>
          </div>
          <label class="flex items-center gap-2 cursor-pointer text-[11px] text-sky-300 font-medium">
            <input type="checkbox" ${stop.manualBreakAfter ? 'checked' : ''} onchange="updateStopField(${idx}, 'manualBreakAfter', this.checked, true)" class="rounded accent-sky-500" />
            <span>在此站之後強制換行到右邊下一欄 (線條暫時斷裂並標示接右欄)</span>
          </label>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Top Stop Search & Add Toolbar -->
    <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-3 space-y-2.5 sticky top-0 z-10 backdrop-blur">
      <div class="flex items-center justify-between gap-1.5">
        <div class="relative flex-1 min-w-0">
          <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2 text-slate-400 text-xs"></i>
          <input type="text" placeholder="搜尋站名、走廊、隧道或收費..." value="${esc(stopSearchQuery)}" oninput="filterStopsSearch(this.value)" class="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-slate-100" />
        </div>
        <button onclick="addStopAt(appConfig.stops.length)" class="px-2 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 shrink-0 shadow">
          <i class="fa-solid fa-plus"></i>
          <span>站點</span>
        </button>
        <button onclick="addCorridorStopAt(appConfig.stops.length)" class="px-2 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-[11px] flex items-center gap-1 shrink-0 shadow" title="新增途徑走廊 (正方形353標誌)">
          <i class="fa-solid fa-road"></i>
          <span>走廊</span>
        </button>
        <button onclick="addTunnelStopAt(appConfig.stops.length)" class="px-2 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[11px] flex items-center gap-1 shrink-0 shadow" title="新增途徑隧道 (正方形HK_Tunnel標誌)">
          <i class="fa-solid fa-archway"></i>
          <span>隧道</span>
        </button>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-400">
        <span>共 <strong class="text-slate-200">${appConfig.stops.length}</strong> 個路線圖項目</span>
        <span>支援地標排在宣傳/轉乘框最後面及自定義大小</span>
      </div>
    </div>

    <!-- Stops List -->
    <div class="space-y-2">
      ${stopCardsHTML}
    </div>
  `;
}

function updateStopVariantStatus(idx, variantId, status) {
  if (!appConfig.stops[idx]) return;
  if (!appConfig.stops[idx].variantStatus) appConfig.stops[idx].variantStatus = {};
  appConfig.stops[idx].variantStatus[variantId] = status;
  renderA4Sheet();
}

function addStopLandmark(idx) {
  if (!appConfig.stops[idx].landmarks) appConfig.stops[idx].landmarks = [];
  const defaultPos = appConfig.stops[idx].landmarkPosition || 'middle';
  appConfig.stops[idx].landmarks.push({ zh: '新地標', en: 'Landmark', extraWidthPx: 0, position: defaultPos });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateStopAllLandmarksPosition(idx, pos) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  stop.landmarkPosition = pos;
  if (Array.isArray(stop.landmarks)) {
    stop.landmarks.forEach(lm => {
      lm.position = pos;
    });
  }
  renderA4Sheet();
  renderEditorSidebar();
}

// 切換站點為一般站點 / 途徑走廊 / 途徑隧道（確保走廊與隧道互斥且同步各班次類型）
function setStopRoadPassType(idx, mode, checked) {
  const stop = appConfig.stops[idx];
  if (!stop) return;
  if (mode === 'corridor') {
    stop.hasCorridor = Boolean(checked);
    if (checked) stop.hasTunnel = false;
  } else if (mode === 'tunnel') {
    stop.hasTunnel = Boolean(checked);
    if (checked) stop.hasCorridor = false;
  }

  const nextType = stop.hasTunnel ? 'tunnel' : (stop.hasCorridor ? 'corridor' : 'normal');
  stop.type = nextType;
  if (!stop.variantType) stop.variantType = {};
  (appConfig.variants || []).forEach(v => {
    stop.variantType[v.id] = nextType;
  });

  renderA4Sheet();
  renderEditorSidebar();
}

// --------------------------------------------------------------------------
// TAB 4: SERVICE VARIANTS & ZERO-SHIFT EXPORT SETTINGS (INCLUDES ROUTE NUMBER BOX CONFIG)
// --------------------------------------------------------------------------


function updateVariantField(vIdx, field, val) {
  const v = appConfig.variants[vIdx];
  if (!v) return;
  v[field] = val;

  // 若改變了線條及圓圈底色，預設同步至該班次的時間表路線框底色
  if (field === 'color') {
    v.routeBoxColor = val;
  }

  // 若此班次已捆綁至某目標，反向同步更新目標，讓所有互相捆綁的班次保持一致
  if (v.boundToId) {
    if (v.boundToId === '__theme__' && (field === 'color' || field === 'routeBoxColor')) {
      appConfig.colors.routeLineColor = val;
      appConfig.colors.themePrimary = val;
      appConfig.colors.routeBoxBg = val;
    } else if (v.boundToId.startsWith('rb_')) {
      const boxes = ensureHeaderRouteBoxesSynced();
      const targetBox = boxes.find(b => b.id === v.boundToId);
      if (targetBox) {
        if (field === 'color' || field === 'routeBoxColor') targetBox.bgColor = val;
        if (field === 'routeBoxTextColor') targetBox.textColor = val;
        if (field === 'routeBoxInnerWhiteLine') targetBox.innerWhiteLine = Boolean(val);
      }
    } else {
      const targetV = appConfig.variants.find(item => item.id === v.boundToId);
      if (targetV && ['color', 'badgeText', 'routeBoxColor', 'routeBoxTextColor', 'routeBoxInnerWhiteLine'].includes(field)) {
        targetV[field] = val;
        if (field === 'color') targetV.routeBoxColor = val;
      }
    }
  }

  syncBoundVariants();
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vIdx];
  if (vt && ['routeNumber', 'routeBoxInnerWhiteLine', 'routeBoxPosition', 'routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    vt[field] = v[field];
  }
  renderA4Sheet();
  if (['color', 'badgeText', 'routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    renderEditorSidebar();
  }
}

function updateVariantTimetableMeta(vtIdx, field, val, refreshSidebar = false) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt) return;
  vt[field] = val;
  if (appConfig.variants[vtIdx] && ['routeNumber', 'routeBoxInnerWhiteLine', 'routeBoxPosition', 'routeBoxColor', 'routeBoxTextColor'].includes(field)) {
    appConfig.variants[vtIdx][field] = val;
    if (field === 'routeBoxColor' && appConfig.variants[vtIdx].boundToId) {
      appConfig.variants[vtIdx].color = val;
    }
  }
  if (vtIdx === 0 && ['originHeaderZh', 'originHeaderEn', 'headwayLabelZh', 'headwayLabelEn'].includes(field)) {
    appConfig.rightData.timetable[field] = val;
  }
  syncBoundVariants();
  renderA4Sheet();
  if (refreshSidebar) renderEditorSidebar();
}

function addServiceVariant() {
  const nextNum = appConfig.variants.length + 1;
  const newVarId = 'v_' + Date.now();
  const palette = ['#008837', '#0284c7', '#dc2626', '#d97706'];
  const pickedColor = palette[(nextNum - 1) % palette.length];
  appConfig.variants.push({
    id: newVarId,
    name: `班次分支 ${nextNum}`,
    code: nextNum === 2 ? '#' : '*',
    routeNumber: '',
    routeBoxInnerWhiteLine: true,
    routeBoxPosition: 'left',
    routeBoxColor: appConfig.colors.routeBoxBg || pickedColor,
    routeBoxTextColor: appConfig.colors.routeBoxText || '#ffffff',
    color: pickedColor,
    badgeText: 'white',
    lineStyle: 'dashed'
  });
  const total = appConfig.stops.length;
  appConfig.stops.forEach((s, idx) => {
    if (!s.variantStatus) s.variantStatus = {};
    s.variantStatus[newVarId] = 'stop';
    if (!s.variantType) s.variantType = {};
    s.variantType[newVarId] = idx === 0 ? 'origin' : (idx === total - 1 ? 'destination' : 'normal');
  });
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
  showToast(`已新增班次分支 #${nextNum}`);
}

function removeServiceVariant(vIdx) {
  if (appConfig.variants.length <= 1) return;
  const removed = appConfig.variants.splice(vIdx, 1)[0];
  if (removed && Array.isArray(appConfig.rightData.timetable.variantTables)) {
    appConfig.rightData.timetable.variantTables = appConfig.rightData.timetable.variantTables.filter(vt => vt.variantId !== removed.id);
  }
  ensureVariantTimetablesSynced();
  renderA4Sheet();
  renderEditorSidebar();
}

// Allows removing dateGroups down to 0!
function removeVariantTimetableDateGroup(vtIdx, dgIdx) {
  ensureVariantTimetablesSynced();
  const vt = appConfig.rightData.timetable.variantTables[vtIdx];
  if (!vt || vt.dateGroups.length === 0) return;
  vt.dateGroups.splice(dgIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function removeTimetableDateGroup(dgIdx) {
  if (!appConfig.rightData.timetable.dateGroups || appConfig.rightData.timetable.dateGroups.length === 0) return;
  appConfig.rightData.timetable.dateGroups.splice(dgIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

// ==========================================================================
// 8. 100% WYSIWYG IN-PLACE A4 CAPTURE ENGINE (ZERO FONT OR LAYOUT SHIFT)
// ==========================================================================

function updateStopLandmark(idx, lmIdx, field, val) {
  if (!appConfig.stops[idx]?.landmarks?.[lmIdx]) return;
  appConfig.stops[idx].landmarks[lmIdx][field] = val;
  renderA4Sheet();
}

function removeStopLandmark(idx, lmIdx) {
  appConfig.stops[idx].landmarks.splice(lmIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function moveStop(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= appConfig.stops.length) return;
  const temp = appConfig.stops[idx];
  appConfig.stops[idx] = appConfig.stops[target];
  appConfig.stops[target] = temp;
  renderA4Sheet();
  renderEditorSidebar();
}

function deleteStop(idx) {
  if (appConfig.stops.length <= 2) {
    showToast('路線最少需要保留 2 個站點', 'error');
    return;
  }
  appConfig.stops.splice(idx, 1);
  expandedStopId = null;
  renderA4Sheet();
  renderEditorSidebar();
  showToast('已刪除站點', 'info');
}

// Right side data mutations
function moveRightModule(idx, dir) {
  const arr = appConfig.rightModulesOrder;
  const target = idx + dir;
  if (target < 0 || target >= arr.length) return;
  const tmp = arr[idx];
  arr[idx] = arr[target];
  arr[target] = tmp;
  renderA4Sheet();
  renderEditorSidebar();
}

function addTimetableDateGroup() {
  appConfig.rightData.timetable.dateGroups.push({
    id: 'dg_' + Date.now(),
    dateTitleZh: '星期一至五',
    dateTitleEn: 'Mon - Fri',
    rows: [
      { time: '0700 - 0900', headway: '15 - 20' }
    ]
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateTimetableDateGroup(dgIdx, field, val) {
  appConfig.rightData.timetable.dateGroups[dgIdx][field] = val;
  renderA4Sheet();
}

function addTimetableRow(dgIdx) {
  appConfig.rightData.timetable.dateGroups[dgIdx].rows.push({
    time: '0900 - 2300',
    headway: '30'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateTimetableRow(dgIdx, rIdx, field, val) {
  appConfig.rightData.timetable.dateGroups[dgIdx].rows[rIdx][field] = val;
  renderA4Sheet();
}

function removeTimetableRow(dgIdx, rIdx) {
  const rows = appConfig.rightData.timetable.dateGroups[dgIdx].rows;
  if (rows.length <= 1) return;
  rows.splice(rIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateAdditionalMeta(field, val) {
  appConfig.rightData.additionalInfo[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addAdditionalNote() {
  appConfig.rightData.additionalInfo.notes.push({
    symbol: '#',
    zh: '新特別班次或服務備註說明。',
    en: 'Additional service remark.'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateAdditionalNote(nIdx, field, val) {
  appConfig.rightData.additionalInfo.notes[nIdx][field] = val;
  renderA4Sheet();
}

function removeAdditionalNote(nIdx) {
  appConfig.rightData.additionalInfo.notes.splice(nIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateOctopusMeta(field, val) {
  appConfig.rightData.octopusFare[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addOctopusItem() {
  appConfig.rightData.octopusFare.items.push({
    sectionZh: '分段起點 往 分段終點',
    sectionEn: 'Section Origin to Destination',
    price: '$5.5'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateOctopusItem(iIdx, field, val) {
  appConfig.rightData.octopusFare.items[iIdx][field] = val;
  renderA4Sheet();
}

function removeOctopusItem(iIdx) {
  appConfig.rightData.octopusFare.items.splice(iIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateBbiMeta(field, val) {
  appConfig.rightData.bbiInfo[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

function addBbiItem() {
  appConfig.rightData.bbiInfo.items.push({
    zh: '於指定轉乘站轉乘指定路線可享車資優惠',
    en: 'Fare discount available when interchanging with designated routes'
  });
  renderA4Sheet();
  renderEditorSidebar();
}

function updateBbiItem(bIdx, field, val) {
  appConfig.rightData.bbiInfo.items[bIdx][field] = val;
  renderA4Sheet();
}

function removeBbiItem(bIdx) {
  appConfig.rightData.bbiInfo.items.splice(bIdx, 1);
  renderA4Sheet();
  renderEditorSidebar();
}

function updateFooterMeta(field, val) {
  appConfig.rightData.effectiveFooter[field] = val;
  renderA4Sheet();
  if (field === 'enabled') renderEditorSidebar();
}

// ==========================================================================
// 7. PRESETS, ZOOM & JSON IMPORT/EXPORT
// ==========================================================================
function loadPreset(presetKey) {
  if (presetKey === 'B13') {
    appConfig = getDefaultB13Config();
    showToast('已載入城巴 B13 (小西灣 往 皇崗口岸) 原版設定');
  } else if (presetKey === 'CTB_CITY') {
    appConfig.colors.routeLineColor = '#005596';
    appConfig.colors.themePrimary = '#005596';
    appConfig.colors.originDestBg = '#005596';
    appConfig.colors.districtBg = '#005596';
    appConfig.colors.fareBg = '#d97706';
    appConfig.colors.originHeaderBg = '#005596';
    appConfig.colors.headwayHeaderBg = '#005596';
    appConfig.colors.evenZoneBg = '#e0f2fe';
    appConfig.colors.routeBoxBg = '#005596';
    appConfig.colors.destBoxBg = '#005596';
    appConfig.colors.viaBoxBg = '#003d6b';
    appConfig.colors.introBannerBg = '#0284c7';
    appConfig.colors.infoAccentColor = '#005596';
    if (appConfig.variants[0]) appConfig.variants[0].color = '#005596';
    showToast('已套用城巴市區藍黃主題配色');
  } else if (presetKey === 'KMB_RED') {
    appConfig.colors.routeLineColor = '#c8102e';
    appConfig.colors.themePrimary = '#c8102e';
    appConfig.colors.originDestBg = '#c8102e';
    appConfig.colors.districtBg = '#c8102e';
    appConfig.colors.fareBg = '#991b1b';
    appConfig.colors.originHeaderBg = '#c8102e';
    appConfig.colors.headwayHeaderBg = '#c8102e';
    appConfig.colors.evenZoneBg = '#fee2e2';
    appConfig.colors.routeBoxBg = '#c8102e';
    appConfig.colors.destBoxBg = '#c8102e';
    appConfig.colors.viaBoxBg = '#881337';
    appConfig.colors.introBannerBg = '#e11d48';
    appConfig.colors.infoAccentColor = '#c8102e';
    if (appConfig.variants[0]) appConfig.variants[0].color = '#c8102e';
    showToast('已套用九巴經典紅線主題配色');
  }
  renderA4Sheet();
  renderEditorSidebar();
}

function adjustZoom(delta) {
  currentZoom = Math.min(1.35, Math.max(0.45, Math.round((currentZoom + delta) * 100) / 100));
  applyZoom();
}

function fitZoom() {
  const viewport = document.getElementById('preview-viewport');
  if (!viewport) return;
  const availH = viewport.clientHeight - 48;
  const availW = viewport.clientWidth - 48;
  const scaleH = availH / 1123;
  const scaleW = availW / 794;
  currentZoom = Math.min(1.1, Math.max(0.48, Math.min(scaleH, scaleW)));
  applyZoom();
}

function applyZoom() {
  const wrapper = document.getElementById('a4-scale-wrapper');
  const label = document.getElementById('zoom-label');
  if (wrapper) {
    wrapper.style.transform = `scale(${currentZoom})`;
    const extraBottom = (1123 * currentZoom) - 1123;
    wrapper.style.marginBottom = `${extraBottom + 24}px`;
  }
  if (label) {
    label.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function exportConfigJSON() {
  const dataStr = JSON.stringify(appConfig, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bus_route_${appConfig.rightData.routeNumber || 'sheet'}_config.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('已匯出 JSON 設定檔');
}

function importConfigJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && parsed.stops && parsed.rightData) {
        appConfig = {
          ...getDefaultB13Config(),
          ...parsed,
          layout: { ...getDefaultB13Config().layout, ...(parsed.layout || {}) },
          colors: { ...getDefaultB13Config().colors, ...(parsed.colors || {}) }
        };
        renderA4Sheet();
        renderEditorSidebar();
        showToast('成功載入自定義 JSON 設定檔！');
      } else {
        showToast('JSON 格式不正確', 'error');
      }
    } catch (err) {
      showToast('讀取 JSON 失敗：' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ==========================================================================
// 8. 智慧型平行字型切片嵌入與 100% 零移位極速導出引擎
// ==========================================================================
let rawGoogleFontCSSTextCache = null;
const fontSliceDataUrlCache = new Map();

// 檢查某個 @font-face 的 unicode-range 是否包含當前路線紙實際使用到的字元
function doesUnicodeRangeMatchCodePoints(rangeStr, codePointsSet) {
  if (!rangeStr) return true;
  const parts = rangeStr.split(',');
  for (let i = 0; i < parts.length; i++) {
    const token = parts[i].trim().replace(/^[Uu]\+/, '');
    if (!token) continue;
    let start, end;
    if (token.includes('?')) {
      start = parseInt(token.replace(/\?/g, '0'), 16);
      end = parseInt(token.replace(/\?/g, 'F'), 16);
    } else if (token.includes('-')) {
      const [s, e] = token.split('-');
      start = parseInt(s, 16);
      end = parseInt(e, 16);
    } else {
      start = end = parseInt(token, 16);
    }
    if (isNaN(start) || isNaN(end)) continue;
    for (const cp of codePointsSet) {
      if (cp >= start && cp <= end) return true;
    }
  }
  return false;
}

// 將 ArrayBuffer 轉為 Base64 Data URL
function arrayBufferToBase64DataUrl(buffer, mimeType = 'font/woff2') {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return `data:${mimeType};base64,${btoa(binary)}`;
}

// 僅針對 #a4-sheet 實際使用到的字元，平行下載並快取所需的 Inter 與 Noto Sans TC 字型切片（完全跳過龐大的 FontAwesome）
async function buildA4FontEmbedCSS(sourceSheet) {
  const baseResetCSS = `
    #a4-sheet, #a4-sheet * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }
    #a4-sheet {
      --sheet-font: 'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif;
      font-family: 'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif !important;
      line-height: 1.5;
    }
    #a4-sheet svg {
      display: block;
    }
  `;

  try {
    if (!rawGoogleFontCSSTextCache) {
      const fontLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(l => l.href)
        .filter(href => href && href.includes('fonts.googleapis.com'));

      if (fontLinks.length > 0) {
        const cssTexts = await Promise.all(
          fontLinks.map(url => fetch(url).then(r => (r.ok ? r.text() : '')).catch(() => ''))
        );
        rawGoogleFontCSSTextCache = cssTexts.join('\n');
      } else {
        rawGoogleFontCSSTextCache = '';
      }
    }

    if (!rawGoogleFontCSSTextCache) return baseResetCSS;

    const textContent = (sourceSheet ? sourceSheet.textContent : '') || '';
    const codePointsSet = new Set();
    for (const ch of textContent) {
      const cp = ch.codePointAt(0);
      if (cp !== undefined) codePointsSet.add(cp);
    }

    const blocks = rawGoogleFontCSSTextCache.match(/@font-face\s*\{[^}]+\}/g) || [];
    const matchedBlocks = blocks.filter(block => {
      const rangeMatch = block.match(/unicode-range\s*:\s*([^;]+);/i);
      if (!rangeMatch) return true;
      return doesUnicodeRangeMatchCodePoints(rangeMatch[1], codePointsSet);
    });

    const embeddedBlocks = await Promise.all(
      matchedBlocks.map(async block => {
        const urlMatch = block.match(/url\((['"]?)(https:\/\/[^)'"]+)\1\)/i);
        if (!urlMatch) return block;
        const fontUrl = urlMatch[2];

        let dataUrl = fontSliceDataUrlCache.get(fontUrl);
        if (!dataUrl) {
          try {
            const resp = await fetch(fontUrl, { mode: 'cors', cache: 'force-cache' });
            if (resp.ok) {
              const buf = await resp.arrayBuffer();
              dataUrl = arrayBufferToBase64DataUrl(buf, 'font/woff2');
              fontSliceDataUrlCache.set(fontUrl, dataUrl);
            }
          } catch (_) {}
        }

        if (dataUrl) {
          return block.replace(urlMatch[0], `url("${dataUrl}")`);
        }
        return block;
      })
    );

    return baseResetCSS + '\n' + embeddedBlocks.join('\n');
  } catch (e) {
    return baseResetCSS;
  }
}

// 頁面載入後於背景預熱字型切片快取，導出時即可 0 秒等待
async function warmUpFontCache() {
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    const sheet = document.getElementById('a4-sheet');
    if (sheet) {
      cachedFontEmbedCSS = await buildA4FontEmbedCSS(sheet);
    }
  } catch (_) {}
}

async function captureA4Canvas() {
  const sourceSheet = document.getElementById('a4-sheet');
  const wrapper = document.getElementById('a4-scale-wrapper');
  const scale = Number(appConfig.layout.exportScale) || 2;
  const engine = appConfig.layout.exportEngine || 'svg';

  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (_) {}
  }

  const prevWrapperTransform = wrapper ? wrapper.style.transform : '';
  const prevWrapperTransition = wrapper ? wrapper.style.transition : '';
  const prevWrapperMarginBottom = wrapper ? wrapper.style.marginBottom : '';
  const prevSheetShadow = sourceSheet.style.boxShadow;

  // 暫時將預覽縮放還原為 1:1，並等待瀏覽器完成 Container Queries (100cqw) 與 Flexbox 1:1 重排，徹底消除排版移位
  if (wrapper) {
    wrapper.style.transition = 'none';
    wrapper.style.transform = 'scale(1)';
    wrapper.style.marginBottom = '0px';
  }
  sourceSheet.classList.add('exporting-clean');
  sourceSheet.style.boxShadow = 'none';
  void sourceSheet.offsetHeight;

  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  try {
    if (engine === 'svg' && window.htmlToImage) {
      const fontEmbedCSS = await buildA4FontEmbedCSS(sourceSheet);
      return await window.htmlToImage.toCanvas(sourceSheet, {
        width: 794,
        height: 1123,
        canvasWidth: 794 * scale,
        canvasHeight: 1123 * scale,
        pixelRatio: scale,
        backgroundColor: '#ffffff',
        cacheBust: false,
        fontEmbedCSS: fontEmbedCSS,
        style: {
          transform: 'none',
          margin: '0',
          boxShadow: 'none',
          fontFamily: "'Inter', 'Noto Sans TC', 'PingFang HK', 'Microsoft JhengHei', sans-serif",
          lineHeight: '1.5'
        }
      });
    } else {
      return await window.html2canvas(sourceSheet, {
        scale: scale,
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
        ignoreElements: el =>
          el.id === 'editor-sidebar' ||
          el.id === 'top-navbar' ||
          el.id === 'workspace-toolbar' ||
          el.id === 'toast-container'
      });
    }
  } finally {
    sourceSheet.classList.remove('exporting-clean');
    sourceSheet.style.boxShadow = prevSheetShadow;
    if (wrapper) {
      wrapper.style.transform = prevWrapperTransform;
      wrapper.style.marginBottom = prevWrapperMarginBottom;
      void wrapper.offsetHeight;
      wrapper.style.transition = prevWrapperTransition;
    }
  }
}

async function exportA4(format = 'png') {
  const btnId = format === 'pdf' ? 'btn-export-pdf' : 'btn-export-png';
  const btn = document.getElementById(btnId);
  const originalHTML = btn ? btn.innerHTML : '';

  try {
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>極速生成中...</span>`;
    }

    await new Promise(r => setTimeout(r, 16));

    const canvas = await captureA4Canvas();
    const routeNo = (appConfig.rightData.routeNumber || 'Route').replace(/[^a-zA-Z0-9_-]/g, '');

    if (format === 'png') {
      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${routeNo}_A4_RouteSheet.png`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 3000);
        showToast('成功導出 100% 原字體零移位 A4 高清 PNG 圖檔！');
      }, 'image/png');
    } else {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save(`${routeNo}_A4_RouteSheet.pdf`);
      showToast('成功導出 100% 原字體零移位 A4 (210×297mm) PDF 檔案！');
    }
  } catch (err) {
    console.error('Export error:', err);
    showToast('正在使用備用引擎完成導出...', 'info');
    try {
      const prevEngine = appConfig.layout.exportEngine;
      appConfig.layout.exportEngine = 'canvas';
      const fallbackCanvas = await captureA4Canvas();
      appConfig.layout.exportEngine = prevEngine;
      const routeNo = (appConfig.rightData.routeNumber || 'Route').replace(/[^a-zA-Z0-9_-]/g, '');
      if (format === 'pdf') {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
        const imgData = fallbackCanvas.toDataURL('image/jpeg', 0.98);
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
        pdf.save(`${routeNo}_A4_RouteSheet.pdf`);
      } else {
        const link = document.createElement('a');
        link.download = `${routeNo}_A4_RouteSheet.png`;
        link.href = fallbackCanvas.toDataURL('image/png');
        link.click();
      }
    } catch (e2) {
      console.error(e2);
      showToast('導出失敗，請嘗試使用右上角「原生列印」輸出向量 PDF', 'error');
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  }
}

// ==========================================================================
// 9. INITIALIZATION ON WINDOW LOAD
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  renderA4Sheet();
  renderEditorSidebar();
  setTimeout(fitZoom, 80);
  setTimeout(warmUpFontCache, 600);
  window.addEventListener('resize', () => {
    fitZoom();
  });
});