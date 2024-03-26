import React from 'react';
import moment from 'moment';
import DateTime from './DateTime';

function DateTimePretty(Component) {
    return class extends React.Component {
        formatDate(date) {
            const now = moment();
            const postedDate = moment(date);
            const diffMinutes = now.diff(postedDate, 'minutes');
            const diffHours = now.diff(postedDate, 'hours');
            const diffDays = now.diff(postedDate, 'days');

            if (diffMinutes < 60) {
                return `${diffMinutes} минут назад`;
            } else if (diffHours < 24) {
                return `${diffHours} часов назад`;
            } else {
                return `${diffDays} дней назад`;
            }
        }

        render() {
            const {date, ...props} = this.props;
            const formattedDate = this.formatDate(date);
            return <Component date={formattedDate} {...props} />;
        }
    };
}

const DateTimePrettyWrapped = DateTimePretty(DateTime);
export default DateTimePrettyWrapped;