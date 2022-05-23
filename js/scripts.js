$(document).ready(function () {
    $("#text").submit(function (event) {
        event.preventDefault();
        let sent = $("input#sent").val()
        let arr = sent.split(' ');

        let arr1 = 3;


        let result = [];

        arr.forEach(function (string) {
            if (string.length > arr1) {
                result.push(string);
            }

        });

        let newArr = result.reverse()
        let newArr2 = newArr.join(",");
        $("#put").append(newArr2);



    });
});
