<template>
     <input type="radio" :id="id" name="rate" :value="value" />
     <label :for="id" title="text">5 stars</label>
</template>
<script>

export default {
  name: "estrella-item",
  components: {
  },
  data() {
    return {
     id:this.getID()
    };
  },
  props: {
    starID : String,
    texto: String,
    value:String
  },
  methods: {
    getID(){
        return this.starID;
    }
  }

  

};
</script>

<style scoped>


/* Rating estrellas */
.rate {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse; 
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:fixed;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#d9d9d9;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #fde480;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #fde480;    
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #fde480;   
}
</style>
