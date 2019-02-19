<template>
  <b-jumbotron id="visits">
    <template slot="lead">Your medical visits</template>
    <b-list-group>
      <b-list-group-item v-for="(visit, index) in visits" :key="index" href="#" @click="visitClick(visit, index)">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h5 class="mb-1">{{visit.firstName}} {{ visit.lastName}}</h5>
            <b-badge :variant="pillColor(visit.medicalVisit.paid)" pill>{{ visit.medicalVisit.visitDate }}</b-badge>
        </div>  
      </b-list-group-item>
    </b-list-group>

    <b-modal ref="visitModal" hide-footer title="Visit Information">
      <div class="d-block text-center">
        <h3>{{ selectedVisit.firstName }} {{ selectedVisit.lastName }}</h3>
        <h5>Total : ${{ selectedVisit.medicalVisit.cost }}</h5>
      </div>

      <div class="d-block text-center">
        <p class="mb-1">
          Reason: {{ selectedVisit.medicalVisit.reason }}
        </p>
        <small>Description: {{ selectedVisit.medicalVisit.description}}</small>
      </div>
      <b-button class="mt-3" variant="outline-primary" block @click="payClicked">Pay</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'
export default {
  name: 'visits',
  data() {
    return {
      visits: [],
      selectedIndex: -1,
      selectedVisit: {
        firstName: '',
        lastName: '',
        medicalVisit: {
          cost: ''
        }
      }
    }
  },
  beforeCreate: async function() {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/visits',
      headers: {
        'api-key': this.$cookies.get('api-key')
      }
    }
    try {
      const visitsResponse = await axios(options);
      
      this.visits = visitsResponse.data.visits;
    }
    catch(err) {
      this.$router.push({ path: '/error'})
    }
  },
  methods: {
    pillColor: function(paid) {
      return paid ? 'primary': 'danger';
    },
    visitClick: function(visit, index) {
      this.selectedVisit = visit;
      this.selectedIndex = index;
      this.$refs.visitModal.show();
    },
    hideModal() {
      this.$refs.visitModal.hide();
    },
    payClicked() {
      this.visits[this.selectedIndex].medicalVisit.paid = true;
      this.$refs.visitModal.hide();
    }
  }
}
</script>

<style lang="less">
#visits {
  width: 50%;
  margin: 0 auto;
}
</style>