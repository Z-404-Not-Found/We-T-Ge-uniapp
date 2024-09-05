"use strict";
const Calendar = {
  // calendar 组件
  calendar: {
    title: "日期选择",
    showTitle: true,
    showSubtitle: true,
    mode: "single",
    startText: "开始",
    endText: "结束",
    customList: [],
    color: "#3c9cff",
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER,
    // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: "确定",
    confirmDisabledText: "确定",
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER,
    // Infinity
    rangePrompt: "",
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3
  }
};
exports.Calendar = Calendar;
