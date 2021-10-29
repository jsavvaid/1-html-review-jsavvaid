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
        selectedBook: null,
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
        selectStudent(s) {
            if (s == this.selectedBook) {
                return;
            }
            this.selectedBook = s;
        },
        postOffer(evt) {
            console.log ("Test:", this.selectedBook);
          if (this.selectedBook) {
              this.postEditOffer(evt);
          } else {
              this.postNewBook(evt);
          }
        },
        postEditOffer(evt) {
            this.bookForm.id = this.selectedBook.id;
                    
            
            console.log("Editing!", this.bookForm);
    
            fetch('api/books/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
        },
        postDeleteOffer(o) {  
            if ( !confirm("Are you sure you want to delete the offer from " + o.title + "?") ) {
                return;
            }  
            
            console.log("Delete!", o);
    
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
        },

        postNewBook(evt) {
            //this.offerForm.studentId = this.selectedStudent.id;        
            
            console.log("Creating!", this.bookForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                // reset the form
                this.handleResetEdit();
              });
        },
        handleEditOffer(book) {
            this.selectedBook = book;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        handleResetEdit() {
            this.selectedBook = null;
            this.bookForm = {};
        }
        
    },
    created() {
        this.fetchBookData();
    }
  }
  
Vue.createApp(Person).mount('#personApp');