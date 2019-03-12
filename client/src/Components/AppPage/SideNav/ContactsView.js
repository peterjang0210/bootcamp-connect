import React from "react";
import ContactsFilter from './ContactsFilter';
import ContactsList from './ContactsList';
import * as $ from "axios";

class ContactsView extends React.Component {
    state = {
        isCohort: true,
        accessToken: "",
        cohortProfiles: [],
        allProfiles: [],
        cohortId: "",
        userProfile: {}
    }
    componentDidMount() {
        this.setState({
            accessToken: this.props.accessToken,
            cohortId: this.props.cohortId
        })
        $({
            url: `/api/users/${this.state.userId}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        }).then((userProfile) => {
            this.setState({
                userProfile: userProfile.data,
            });
        })
        $({
            url: '/api/profiles',
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        })
            .then((getProfilesResponse) => {
                const allProfiles = getProfilesResponse.data;
                const cohortProfiles = allProfiles.filter((profile) => {return profile.cohortId === this.state.cohortId})
                this.setState({
                    allProfiles: allProfiles.data,
                    // viewPosts: true
                })
            })
        this.setState({
            allProfiles: this.props.profiles

        })
    }
    handleShowCohortList = (e) => {
        e.preventDefault();
        console.log('showCohort was clicked')
        this.setState({
            isCohort: true
        })
    }
    handleShowAllList = (e) => {
        e.preventDefault();
        console.log('show all was clicked')
        this.setState({
            isCohort: false
        })
    }

    render() {
        return <div>
            <ContactsFilter showCohort={this.handleShowCohortList} showAll={this.handleShowAllList} />
            {this.state.isCohort ? <ContactsList contactsList={this.state.cohortProfiles} /> : <ContactsList contactsList={this.state.allProfiles} />}
        </div>
    }
}

export default ContactsView;