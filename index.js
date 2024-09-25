Vue.createApp({
  data() {
    return {
      lastUpdated: "2022-09-19",
      weekdays: [
        {
          id: "monday",
          name: "Pazartesi",
          sessions: [
            {
              startTime: "14:00",
              endTime: "16:35",
              courseCode: "CE457",
              courseName: "Data Mining",
              place: "A-118",
            },
            {
              startTime: "16:45",
              endTime: "19:20",
              courseCode: "CE434",
              courseName: "Computer & Network Security",
              place: "A-118",
            },
          ],
        },
        {
          id: "tuesday",
          name: "Salı",
          sessions: [],
        },
        {
          id: "wednesday",
          name: "Çarşamba",
          sessions: [
            {
              startTime: "14:55",
              endTime: "17:30",
              courseCode: "CE420",
              courseName: "Java'da Uygulama Geliştirme",
              place: "M-301",
            },
          ],
        },
        {
          id: "thursday",
          name: "Perşembe",
          sessions: [],
        },
        {
          id: "friday",
          name: "Cuma",
          sessions: [],
        },
        {
          id: "saturday",
          name: "Cumartesi",
          sessions: [],
        },
        {
          id: "sunday",
          name: "Pazar",
          sessions: [],
        },
      ],
    };
  },
}).mount("#app");
