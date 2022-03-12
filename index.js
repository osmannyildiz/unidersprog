Vue.createApp({
	data() {
		return {
			weekdays: [
				{
					id: "monday",
					name: "Pazartesi",
					sessions: [
						{
							startTime: "14:00",
							endTime: "16:15",
							courseCode: "CE322",
							courseName: "Distributed Systems",
							place: "A-119",
						},
					],
				},
				{
					id: "tuesday",
					name: "Salı",
					sessions: [
						{
							startTime: "09:20",
							endTime: "13:15",
							courseCode: "EEE621",
							courseName: "Haberleşme Mühendisliği",
							place: "M-Z02",
						},
						{
							startTime: "14:00",
							endTime: "16:15",
							courseCode: "CE435",
							courseName: "Internet Programming",
							place: "A-118",
						},
					],
				},
				{
					id: "wednesday",
					name: "Çarşamba",
					sessions: [
						{
							startTime: "14:50",
							endTime: "17:05",
							courseCode: "CE426",
							courseName: "Formal Languages and Automata Theory",
							place: "M-201",
						},
					],
				},
				{
					id: "thursday",
					name: "Perşembe",
					sessions: [
						{
							startTime: "09:20",
							endTime: "13:15",
							courseCode: "CE332",
							courseName: "Computer Networks",
							place: "M-101",
						},
					],
				},
				{
					id: "friday",
					name: "Cuma",
					sessions: [
						{
							startTime: "08:30",
							endTime: "12:25",
							courseCode: "CE334",
							courseName: "Operating Systems",
							place: "M-202",
						},
					],
				},
				{
					id: "saturday",
					name: "Cumartesi",
					sessions: [
						{
							startTime: "13:10",
							endTime: "14:20",
							courseCode: "US183",
							courseName: "Basit Şifreleme Teknikleri",
							place: "UZEM",
						},
					],
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
