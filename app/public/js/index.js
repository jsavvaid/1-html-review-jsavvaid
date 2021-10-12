const Person = {
    data() {
      return {
        "person": {
            name: {},
            dob: {},
            picture: {},
            location: {}
            },
        books:[]
        }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date).format('D MMM YYYY');
        }
    },

    methods: {
        // fetchUserData() {
        //     fetch('https://randomuser.me/api/')
        //     .then(response => response.json())
        //     .then((parsedJson) => {
        //         console.log(parsedJson);
        //         this.person = parsedJson.results[0]
        //         console.log("C");
        //     })
        //     .catch( err => {
        //         console.error(err)
        //     })

        //     console.log("B");
        // },

        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
    },
    created() {
        this.fetchBookData();
    }
  }
  
Vue.createApp(Person).mount('#personApp');