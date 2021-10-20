const Person = {
    data() {
      return {
        "person": {
            name: {},
            dob: {},
            picture: {},
            location: {}
            },
        books:[],
        bookForm: {}
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

        postNewBook(evt) {
            //this.offerForm.studentId = this.selectedStudent.id;        
            
            console.log("Creating!", this.offerForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.offers = json;
                
                // reset the form
                this.handleResetEdit();
              });
          },
          handleEditOffer(offer) {
              this.selectedOffer = offer;
              this.offerForm = Object.assign({}, this.selectedOffer);
          },
          handleResetEdit() {
              this.selectedOffer = null;
              this.offerForm = {};
          }
        
    },
    created() {
        this.fetchBookData();
    }
  }
  
Vue.createApp(Person).mount('#personApp');