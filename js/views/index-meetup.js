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
  function generatePanelHTML(variablesObject) {
    return _.template(
      '<div class="meetupPanel">' +
        '<h4><%- timeStatus %></h4>' +
        '<a href="">' +
          // update this to grab the location
          '<img src="images/placeHolder.jpg" alt="<%- timeStatus %>">' +
        '</a>' +
        '<h4><%- title %></h4>' +
        '<p><%= description %></p>' +
        '<a href="<%- joinUrl %>"><div class="fccBtn-small">Join us!</div></a>' +
      '</div>'
    )({
      timeStatus: variablesObject.timeStatus,
      title: variablesObject.eventTitle,
      description: variablesObject.eventDescription,
      joinUrl: variablesObject.eventUrl
    });
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
        return generatePanelHTML({
          timeStatus: flavoredEventStatus,
          eventTitle: eventTitle,
          eventDescription: eventDescription,
          eventUrl: eventUrl
        });
      });
      var innerHtml = panels.join('');
      document.getElementById(targetContentDivId).innerHTML = innerHtml;
    });
  });
})();
