// Module pattern for script isolation.
(function () {
  var targetContentDivId = 'meetup-panels';
  var numberOfPanelsToDisplay = 3;
  var statusToHumanReadableDict = {
    'past': 'You just missed!',
    'upcoming': 'Happening Soon'
  }
  function getHumanReadableStatus(eventStatus) {
    return statusToHumanReadableDict[eventStatus];
  }
  function formatTime(timestamp) {
    var now = moment();
    var eventTime = moment(timestamp);
    var weekPriorToEvent = eventTime.subtract({weeks: 1});
    if (now.isBetween(eventTime, weekPriorToEvent)) {
      return eventTime.calendar();
    } else {
      return eventTime.format('LLL');
    }
  }
  function generatePanelHTML(variablesObject) {
    var templateData = {
      timeStatus: variablesObject.timeStatus,
      title: variablesObject.eventTitle,
      description: variablesObject.eventDescription,
      joinUrl: variablesObject.eventUrl,
      isUpcoming: variablesObject.eventStatus == 'upcoming',
      time: formatTime(variablesObject.eventTime),
      rsvp: variablesObject.eventRsvp
    };
    return _.template(
      '<div class="meetupPanel">' +
        '<h4><%- timeStatus %></h4>' +
        '<a href="">' +
          // update this to grab the location
          '<img src="images/placeHolder.jpg" class="panel-img img-responsive" alt="<%- timeStatus %>">' +
        '</a>' +
        '<h4><%- title %></h4>' +
        '<div class="text-wrapper">' +
        '<%= description %>' +
        (templateData.isUpcoming ?
          '<br/>' +
          '<p>RSVP Count: <%- rsvp %></p>' +
          '<p>Time: <%- time %></p>'
        : '') +
        '</div>' +
        '<a href="<%- joinUrl %>"><div class="fccBtn-small">Join us!</div></a>' +
      '</div>'
    )(templateData);
  }
  // Run only when document is ready.
  $(function () {
    var meetupEventDataRequest = $.getJSON('js/free-code-camp-events.mock.json');
    meetupEventDataRequest.then(function (data) {
      var sortedResults = _.sortBy(_.get(data, 'results'), 'time').reverse();
      var topResults = _.take(sortedResults, numberOfPanelsToDisplay);
      var panels = _.map(topResults, function (event) {
        var eventTitle = _.get(event, 'name');
        var eventStatus = _.get(event, 'status');
        var flavoredEventStatus = getHumanReadableStatus(eventStatus);
        var eventDescription = _.get(event, 'description');
        var eventUrl = _.get(event, 'event_url');
        var eventTime = _.get(event, 'time');
        var eventRsvp = _.get(event, 'yes_rsvp_count');
        return generatePanelHTML({
          timeStatus: flavoredEventStatus,
          eventStatus: eventStatus,
          eventTitle: eventTitle,
          eventDescription: eventDescription,
          eventUrl: eventUrl,
          eventTime: eventTime,
          eventRsvp: eventRsvp
        });
      });
      var innerHtml = panels.join('');
      document.getElementById(targetContentDivId).innerHTML = innerHtml;
    });
  });
})();
