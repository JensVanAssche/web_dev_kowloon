<template>
    <ul class="select-dropdown">
      <li @click="toggleDropdown()" class="select-selected">
        {{ value.name !== undefined ? value.name : placeholder }}
      </li>

      <div v-if="showMenu" class="select-options">
        <li v-for="option in options" :key="option.id" @click="updateValue(option)">
            {{ option.name }}
        </li>
      </div>
    </ul>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
        options: [
            { id: "1", name: "Sort by relevance"},
            { id: "2", name: "Price: low to high"},
            { id: "3", name: "Price: high to low"},
            { id: "4", name: "Lastest"},
            { id: "5", name: "Oldest"}
        ],
        value: { id: "1", name: "Sort by relevance"},
        placeholder: "Sort by relevance"
      }
    },
    methods: {
      updateValue(option) {
        this.showMenu = false;
        this.value = option;
      },
      toggleDropdown() {
        this.showMenu = !this.showMenu;
      }
    }
  }
</script>