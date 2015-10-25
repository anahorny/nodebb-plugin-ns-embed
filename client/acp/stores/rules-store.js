/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import alt from '../alt';


class RulesStore {
    constructor() {
        this.bindAction(Actions.ruleDidDelete, this.ruleDidDelete);
        this.bindAction(Actions.rulesDidUpdate, this.rulesDidUpdate);
        this.bindAction(Actions.selectRule, this.ruleDidSelect);

        this.state = {
            rules       : [],
            selectedRule: null
        };
    }

    ruleDidDelete(rule) {
        if (this.state.selectedRule && this.state.selectedRule.name === rule.name) {
            this.setState({
                selectedRule: null
            });
        }
    }

    ruleDidSelect(rule) {
        this.setState({
            selectedRule: rule
        });
    }

    rulesDidUpdate(rules) {
        this.setState({
            rules: rules
        })
    }
}

export default alt.createStore(RulesStore, 'RulesStore');