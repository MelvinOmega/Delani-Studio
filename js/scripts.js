$(document).ready(function(){
    $("#dimage").click(function(){
      $("#dimage").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#dimage").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#dvimage").click(function(){
      $("#dvimage").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#dvimage").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#productimg").click(function(){
      $("#productimg").slideDown('1500').hide('1000');
      $("#pmanagement").show('1500');
    });
    $("#pmanagement").click(function(){
      $("#pmanagement").slideUp('1500');
      $("#productimg").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#img1").mouseover(function(){
      $("#text1").show();
    }).mouseout(function(){
      $("#text1").hide();
    });
  });

  $(document).ready(function(){
    $("#img2").mouseover(function(){
      $("#text2").show();
    }).mouseout(function(){
      $("#text2").hide();
    });
  });

  $(document).ready(function(){
    $("#img3").mouseover(function(){
      $("#text3").show();
    }).mouseout(function(){
      $("#text3").hide();
    });
  });

  $(document).ready(function(){
    $("#img4").mouseover(function(){
      $("#text4").show();
    }).mouseout(function(){
      $("#text4").hide();
    });
  });

  $('.submit').click(function () {
    var Name = $('#mce-firstname').val();
    var Email = $('#mce-EMAIL').val();
    var Message = $('#mce-MESSAGE comment');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please fill in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});

