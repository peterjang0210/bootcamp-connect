import React from "react";
import ContactsFilter from './ContactsFilter';
import ContactsList from './ContactsList';
import * as $ from "axios";

class ContactsView extends React.Component {
    state = {
        isCohort: false,
    }

    componentDidMount() {
        const allProfiles = this.props.profiles;
        const cohortProfiles = allProfiles.filter((profile) => {return profile.cohortId === this.state.cohortId});
        this.setState({
            allProfiles: allProfiles,
            cohortProfiles: cohortProfiles,
        })
    }
    getCohortProfiles = () => {
        const cohortProfiles = this.props.profiles.filter((profile) => { return profile.cohortId === this.props.cohortId });
        return cohortProfiles
    }
    handleShowCohortList = (e) => {
        e.preventDefault();
        this.setState({
            isCohort: true
        })
    }
    handleShowAllList = (e) => {
        e.preventDefault();
        this.setState({
            isCohort: false
        })
    }

    render() {
        return <div>
            <ContactsFilter 
                showCohort={this.handleShowCohortList} 
                showAll={this.handleShowAllList} />
            {this.state.isCohort 
                ? 
            <ContactsList 
                handleContactClick={this.props.handleContactClick}
                contactsList={this.getCohortProfiles()} /> 
                : 
            <ContactsList 
                handleContactClick={this.props.handleContactClick}
                contactsList={this.props.profiles} />}
        </div>
    }
}

export default ContactsView;