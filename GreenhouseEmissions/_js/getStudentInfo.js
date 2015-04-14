$.ajax({
		type:"GET",
		url:"me.json",
		dataType:"json",
		success:getStudent
	});

function getStudent(data){
		console.log("in getStudent");

		var name = data.student.name;
		var login = data.student.login;
		var stuNum = data.student.stuNum;
		var pic = data.student.pic;

		$("#name").append(name);
		$("#login").append(login);
		$("#stuNum").append(stuNum);
		$("#pic").append(pic);
	}