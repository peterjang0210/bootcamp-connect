import React from "react";
import ContactsFilter from './ContactsFilter';
import ContactsList from './ContactsList';

class ContactsView extends React.Component {
    state = {
        isCohort: true,
        cohortProfiles: [],
        allProfiles: [],
    }

    componentDidMount() {
        console.log(this.props.profiles);
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
            {this.state.isCohort ? <ContactsList contactsList={this.state.cohortProfiles} /> : <ContactsList contactsList={this.props.profiles} />}
        </div>
    }
}

export default ContactsView;