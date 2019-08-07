<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <h2>I have <span class="badge badge-secondary">{{notes.length}} </span> notes!</h2>
   
<form class="my-5">
      <div class="form-group my-3" >
        <label for="title">Note title</label>
        <input
                @keyup = "titleValidation"
                type="text"
                id = "title"
                placeholder="Title"
                class="form-control"
                :class="{ 'is-valid': titleState.changed && titleState.valid,
                                     'is-invalid': titleState.changed && !titleState.valid }"
                v-model="note.title" />
        <div class="alert alert-danger" role="alert" v-if="titleState.changed && !titleState.valid">
          Title doesn't  contain  5 and more letters and start with the capital letter
        </div>
      </div>
      <div class="form-group">
        <label for="text">Note text</label>
        <input
                @keyup = "textValidation"
                type="text"
                placeholder="Text of Note"
                class="form-control"
                :class="{ 'is-valid': textState.changed && textState.valid,
                                     'is-invalid': textState.changed && !textState.valid }"
                v-model="note.text" />
        <div class="alert alert-danger" role="alert" v-if="textState.changed && !textState.valid">
          Note doesn't  contain  5 and more  words and start with the capital letter
        </div>
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
                @keyup = "emailValidation"
                type="text"
                placeholder="Email"
                class="form-control"
                :class="{ 'is-valid': emailState.changed && emailState.valid,
                                     'is-invalid': emailState.changed && !emailState.valid }"
                v-model="note.email" />
        <div class="alert alert-danger" role="alert" v-if="emailState.changed && !emailState.valid">
          E-mail is not valid
        </div>
      </div>
      <button
              type="button"
              class="btn col-12 btn-lg"
              :class = "btnDisabled ? 'btn-secondary' : 'btn-success'"
              :disabled = "btnDisabled"
              @click = "addNote"
      >
        Submit
      </button>
</form>

 <div class="d-flex flex-row-reverse mb-3" >
      <button type="button"
              @click="sortNotes('date')"
              :class="(sortedBy === 'date') ? 'btn-primary' : 'btn-secondary'"
              class="btn btn-lg mx-1">Sort By Date</button>
      <button type="button"
              @click="sortNotes('title')"
              :class="(sortedBy === 'title') ? 'btn-primary' : 'btn-secondary'"
              class="btn btn-lg mx-1">Sort By Title</button>
  </div>

    <div class="container px-0">
      <div class="card my-3 shadow"  v-for="(note, index) in sortedNotes">
        <h5 class="card-header">{{note.date | formatDate}}</h5>
        <div class="card-body">
          <h3 class="card-title">{{note.title}}</h3>
          <p class="card-text">{{note.text}}</p>
          <div>
            Author: <a href="#" class="alert-link">{{note.email}}</a>.
          </div>
          <div class="d-flex flex-row-reverse ">
               <button
                    type="button"
                    class="btn btn-outline-danger mx-1"
                    @click = "removeNote(index)">Delete </button>
            <button
                    type="button"
                    class="btn btn-outline-primary mx-1"
                    @click = "copyNote(index)">Copy </button>
         
          </div>
        </div>
      </div>
    </div>    
    
    </div>

</template>

<script>
export default {
  name: 'Notes',
  data() {
    return {
      title: 'Welcome to my Notes',
      note: {
        title: '',
        text: '',
        email: ''
      },
      titleState: {
        changed: false,
        valid: false
      },
      textState: {
        changed: false,
        valid: false
      },
      emailState: {
        changed: false,
        valid: false
      },
      btnDisabled: true,
      sortedBy: 'date',
      notes: [
        {
          title: 'How to Write a Thank-You Note',
          text: 'Expressing your gratitude to someone is very satisfying, not only for you but also for the one receiving it.',
          email: 'my1@gmail.com',
          date: new Date(Date.now())
        },
        {
          title: 'Tips On How to Write a Note Template',
          text: 'As much as we don’t want to accept it, people these days are be coming too lazy to read. If they see a whole page of text, chances are they don’t bother to read it anymore.',
          email: 'my22@gmail.com',
          date: new Date(Date.now())
        }
      ]
    }
  },
  methods: {
    formIsChanged(formState) {
      if (!formState.changed) formState.changed = true;
    },
    titleValidation() {
      this.formIsChanged(this.titleState);
      const regExp = /^[A-ZА-ЯЁ].{5,}/g;
      this.titleState.valid = regExp.test(this.note.title);
      this.isBtnDisabled();
    },
    textValidation() {
      this.formIsChanged(this.textState);
      const regExp = /^[A-ZА-ЯЁ]([\wа-яё]+\W+){5,}[\wа-яё]+/gi;
      this.textState.valid = regExp.test(this.note.text);
      this.isBtnDisabled();
    },
    emailValidation() {
      this.formIsChanged(this.emailState);
      const regExp = /([\w-\.]+)(@\w{1,6})(\.\w{2,6})/g;
      this.emailState.valid = regExp.test(this.note.email);
      this.isBtnDisabled();
    },
    isBtnDisabled() {
      this.btnDisabled = !(this.titleState.valid && this.textState.valid && this.emailState.valid);
    },
    addNote() {
      let { text, title, email } = this.note;
      this.notes = [...this.notes, { text, title, email, date: new Date(Date.now())}];
      this.note = {
        title: '',
        text: '',
        email: '',
      };
      this.titleState.changed = false;
      this.textState.changed = false;
      this.emailState.changed = false;
      this.btnDisabled = true;
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    copyNote(index) {
      let { text, title, email } = this.notes[index];

      this.notes = [...this.notes,
        {
          text,
          title: `Copy ${title}`,
          email,
          date: new Date(Date.now())}]
    },
    sortNotes(sign) {
      this.sortedBy = sign;
    }
  },
  computed: {
    sortedNotes() {
      return (this.sortedBy === 'date') ?
        this.notes.sort( (a,b) => a[this.sortedBy] - b[this.sortedBy]) :
        this.notes.sort( (a,b) => (a[this.sortedBy]).localeCompare(b[this.sortedBy]));
    },
  },
  filters: {
    formatDate(date) {
      if (!date) return '';

      let day = date.getDate();
      let formattedDay = (day > 9) ? day : `0${day}`;
      let month = date.getMonth();
      let formattedMonth = (month >= 9) ? month + 1 : `0${month + 1}`;

      return `${formattedDay}-${formattedMonth}-${date.getFullYear()}`;
    }
  }
}
</script>
