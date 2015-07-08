//Date-time picker
$(function () {
    $('#datetimepicker1').datetimepicker();
});
//Calender for showing appointments
$(document).ready(function() {	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2015-07-08',
		editable: false,
		eventLimit: true, // allow "more" link when too many events
		eventColor: '#FF6347',
		events: [
			{
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-08'
			},
			{
				id: 999,
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-09T16:00:00'
			},
			{
				id: 999,
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-16T16:00:00'
			},
			{
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-12T10:30:00',
				end: '2015-07-12T12:30:00'
			},
			{
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-12T12:00:00'
			},
			{
				title: 'Call with Pt. Devichand Guruji',
				start: '2015-07-12T14:30:00'
			}
		]
	});
	
});

$('#userName').html(localStorage.getItem('username'));

$('#logout').click(function(){
	localStorage.removeItem('username');
	window.location.href = "index.html";
})