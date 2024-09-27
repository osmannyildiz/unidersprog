Vue.createApp({
  data() {
    return {
      lastUpdated: "2024-09-27",
      weekdays: [
        {
          id: "monday",
          name: "Monday",
          sessions: [
            {
              startTime: "13:00",
              endTime: "15:50",
              courseCode: "BUS515",
              courseName: "Inno and Tech Mgmt",
              place: "805",
            },
            {
              startTime: "18:00",
              endTime: "19:50",
              courseCode: "ISL707",
              courseName: "Üretim ve İşl Yön",
              place: "515",
            },
          ],
        },
        {
          id: "tuesday",
          name: "Tuesday",
          sessions: [
            {
              startTime: "10:00",
              endTime: "11:50",
              courseCode: "BUS501",
              courseName: "Ops Mgmt",
              place: "515",
            },
            {
              startTime: "17:30",
              endTime: "19:50",
              courseCode: "ISL705",
              courseName: "Paz Yön",
              place: "515",
            },
          ],
        },
        {
          id: "wednesday",
          name: "Wednesday",
          sessions: [
            {
              startTime: "13:00",
              endTime: "15:50",
              courseCode: "SBE1000",
              courseName: "Sci Res Methods",
              place: "515",
            },
            {
              startTime: "17:00",
              endTime: "19:50",
              courseCode: "ISL761",
              courseName: "Gir",
              place: "515",
            },
          ],
        },
        {
          id: "thursday",
          name: "Thursday",
          sessions: [
            {
              startTime: "10:00",
              endTime: "11:50",
              courseCode: "BUS511",
              courseName: "Cons Beh",
              place: "805",
            },
            {
              startTime: "15:00",
              endTime: "16:50",
              courseCode: "BUS503",
              courseName: "Fin Acc",
              place: "208",
            },
            {
              startTime: "18:00",
              endTime: "19:50",
              courseCode: "ISL703",
              courseName: "Fin Muh ve Rap",
              place: "208",
            },
          ],
        },
        {
          id: "friday",
          name: "Friday",
          sessions: [
            {
              startTime: "15:00",
              endTime: "17:50",
              courseCode: "CENG583",
              courseName: "Deep Learning",
              place: "C401",
            },
          ],
        },
        {
          id: "saturday",
          name: "Saturday",
          sessions: [],
        },
        {
          id: "sunday",
          name: "Sunday",
          sessions: [],
        },
      ],
    };
  },
}).mount("#app");
