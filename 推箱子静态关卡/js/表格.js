var htmlStr = "<div class='box'>";
var userName = "慢羊羊";
var sex = "男";
var age = "54岁";
var education = "博士后";
var graduationDate = "1988年";
var graduateInstitutions = "清华大学";
var workingTime = "1988年7月30日";
var responsibilities = "哈哈哈哈,工作职责就是工作者具体工作的内容所负的责任及达到岗位要求的标准，完成上级交付的任务。";

var str = "<table border='1'>";


str += "<tr>";
str += "<th colspan='4'>慢洋洋-个人简历</th>";
str += "</tr>";

str += "<tr>";
str += "<td>姓名</td>";
str += "<td>" + userName + "</td>";
str += "<td>性别</td>";
str += "<td>" + sex + "</td>";
str += "</tr>";

str += "<tr>";
str += "<td>年龄:</td>";
str += "<td>" + age + "</td>";
str += "<td>学历:</td>";
str += "<td>" + education + "</td>";
str += "</tr>";

str += "<tr>";
str += "<td>毕业时间:</td>";
str += "<td>" + graduationDate + "</td>";
str += "<td>毕业学校:</td>";
str += "<td>" + graduateInstitutions + "</td>";
str += "</tr>";

str += "<tr>";
str += "<td>工作时间:</td>";
str += "<td>" + workingTime + "</td>";
str += "<td>工作职责:</td>";
str += "<td>" + responsibilities + "</td>";
str += "</tr>";

str += "</table>";

document.write(str);