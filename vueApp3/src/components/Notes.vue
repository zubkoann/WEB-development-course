<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="alert alert-primary" role="alert">
      You have {{notes.length}} notes!
    </div>

    <form action="#" style="margin: 15px 0">
      <div class="form-group">
        <label for="title">Note title</label>
        <input
                @keyup = "isTitleValid"
                type="text"
                id = "title"
                placeholder="Title"
                class="form-control"
                :class="{ 'is-valid': titleState.changed && titleState.valid,
                                     'is-invalid': titleState.changed && !titleState.valid }"
                v-model="note.title" />
        <div class="alert alert-danger" role="alert" v-if="titleState.changed && !titleState.valid">
          Title must contain at least 3 letters and start with the capital letter
        </div>
      </div>
      <div class="form-group">
        <label for="text">Note text</label>
        <input
                @keyup = "isTextValid"
                type="text"
                placeholder="Text"
                class="form-control"
                :class="{ 'is-valid': textState.changed && textState.valid,
                                     'is-invalid': textState.changed && !textState.valid }"
                v-model="note.text" />
        <div class="alert alert-danger" role="alert" v-if="textState.changed && !textState.valid">
          Note text must contain at least 3 words
        </div>
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
                @keyup = "isEmailValid"
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
              class="btn"
              :class = "formDisabled ? 'btn-secondary' : 'btn-primary'"
              :disabled = "formDisabled"
              @click = "addNote"
      >
        Submit
      </button>

    </form>
    <div class="btn-group" role="group">
      <button type="button"
              @click="sortNotes('date')"
              :class="(sortedBy === 'date') ? 'btn-primary' : 'btn-secondary'"
              class="btn">Sort By Date</button>
      <button type="button"
              @click="sortNotes('title')"
              :class="(sortedBy === 'title') ? 'btn-primary' : 'btn-secondary'"
              class="btn">Sort By Title</button>
    </div>
    <div class="container">
      <div class="card" v-for="(note, index) in sortedNotes">
        <h5 class="card-header">{{note.date | formatDate}}</h5>
        <div class="card-body">
          <h3 class="card-title">{{note.title}}</h3>
          <p class="card-text">{{note.text}}</p>
          <div class="card-body" role="alert">
            Author: <a href="#" class="alert-link">{{note.email}}</a>.
          </div>
          <div class="col-6">
            <button
                    type="button"
                    class="btn btn-primary"
                    @click = "copyNote(index)">Copy Note</button>
            <button
                    type="button"
                    class="btn btn-danger"
                    @click = "removeNote(index)">Delete Note</button>
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
      title: 'Notes',
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
      formDisabled: true,
      sortedBy: 'date',
      notes: [
        {
          title: 'Visited Hawaii',
          text: 'I loved the beaches and delicious fresh coconuts',
          email: 'person@gmail.com',
          date: new Date(Date.now())
        },
        {
          title: 'Visited London',
          text: 'I loved the beaches and delicious fresh coconuts',
          email: 'else@i.ua',
          date: new Date(Date.now())
        }
      ]
    }
  },
  methods: {
    formIsChanged(formState) {
      if (!formState.changed) formState.changed = true;
    },
    isTitleValid() {
      this.formIsChanged(this.titleState);
      const regExp = /^[A-ZА-ЯЁ].{2,}/g;
      this.titleState.valid = regExp.test(this.note.title);
      this.isFormDisabled();
    },
    isTextValid() {
      this.formIsChanged(this.textState);
      const regExp = /([\wа-яё]+\W+){2,}[\wа-яё]+/gi;
      this.textState.valid = regExp.test(this.note.text);
      this.isFormDisabled();
    },
    isEmailValid() {
      this.formIsChanged(this.emailState);
      const regExp = /([\w-\.]+)(@\w{1,6})(\.\w{2,6})/g;
      this.emailState.valid = regExp.test(this.note.email);
      this.isFormDisabled();
    },
    isFormDisabled() {
      this.formDisabled = !(this.titleState.valid && this.textState.valid && this.emailState.valid);
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
      this.formDisabled = true;
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

      return `${formattedDay}.${formattedMonth}.${date.getFullYear()}`;
    }
  }
}
</script>
