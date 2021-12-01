$('#fName').keyup(function(){
    var firstName = $('#fName').val();
    var reg = /^[a-zA-Z . -]{2,10}$/;
    
    if(reg.test(firstName)){
        $('#fNameError').text(' ');
    }else{
            $('#fNameError').text('First name should be 2 to 10 character');
        }
    
        
});


$('#lName').keyup(function(){
    var lastName = $('#lName').val();
    var reg = /^[a-zA-Z . -]{2,10}$/;
    
    if(reg.test(lastName)){
        $('#lNameError').text(' ');
    }else{
            $('#lNameError').text('Last name should be 2 to 10 character');
        }
    
        
});

$('#emailadd').keyup(function(){
    var email = $('#emailadd').val();
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(reg.test(email)){
        $('#emailaddError').text(' ');
    }else{
            $('#emailaddError').text('Invalid email');
        }
    
        
});

$('#pass').keyup(function(){
    var password = $('#pass').val();
    var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(reg.test(password)){
        $('#passError').text(' ');
    }else{
            $('#passError').text(' Password should be minimum eight characters, at least one letter and one number');
        }
    
        
});

$('#visInv').click(function(){
    $('#pass').attr('type',$('#visInv').is(':checked')?'text':'password');
    
    
        
});


$('#confirmPass').keyup(function(){
    var password = $('#pass').val();
    var reg = $('#confirmPass').val();
    if(password===reg){
        $('#confirmPassError').text(' ');
    }else{
            $('#confirmPassError').text(' Password does not match');
        }
    
        
});




