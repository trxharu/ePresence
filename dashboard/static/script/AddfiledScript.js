$(document).ready(function(){
    var max_fields = 10;
    var wrapper_E = $(".input_fields_waper_Education");
    var add_button_E = $(".add_field_button_Education");
    var wrapper_J = $(".input_fields_waper_Job");
    var add_button_J = $(".add_field_button_Job");
    var wrapper_P = $(".input_fields_waper_Project");
    var add_button_P = $(".add_field_button_Project");
    var wrapper_W = $(".input_fields_waper_Workshop");
    var add_button_W = $(".add_field_button_Workshop");
    var wrapper_C = $(".input_fields_waper_Courses");
    var add_button_C = $(".add_field_button_Courses");
    
    var x = 1;
    var P = 1;
    var W = 1;
    var C = 1;
    var J = 1;
    $(add_button_E).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            x++;
            $(wrapper_E).append('<div class="col-md-6"><div class="form-row"><div class="form-group col-md-6"><label for="Institution" class="col-form-label">Institution</label><input type="text" class="form-control form-control-sm" id="E_Institution" name="E_Institution" placeholder="Institution Name"></div><div class="form-group col-md-6"><label for="Degree" class="col-form-label">Degree</label><input type="text" class="form-control form-control-sm" id="E_Degree" placeholder="E_Degree" name="E_Degree"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="startEndDate" class="col-form-label">Start & End Date</label><input type="text" class="form-control form-control-sm" id="E_SED" name="E_SED" placeholder="01/01/2020 - 01/04/2020"></div><div class="form-group col-md-6"><label for="City" class="col-form-label">City</label><input type="text" class="form-control form-control-sm" id="E_City" name="E_City" placeholder="City"></div></div><label for="Description" class="col-form-label">Description</label><textarea name="E_Description" class="form-control form-control-sm " cols="50" rows="5"></textarea><div class="form-group col-md-6"><label for="Document" class="col-form-label">Document</label><input type="text" class="form-control form-control-sm" id="E_Document" name="E_Document" placeholder="Document"></div><a href="#" class="remove_field">Remove</a></div>')
        }
    });
    $(add_button_J).click(function(e){
        e.preventDefault();
        if(J < max_fields){
            J++;
            $(wrapper_J).append('<div class="col-md-6"><div class="form-row"><div class="form-group col-md-6"><label for="Company" class="col-form-label">Course Name</label><input type="text" class="form-control form-control-sm" id="J_Company" name="J_Company" placeholder="Company Name"></div><div class="form-group col-md-6"><label for="Position" class="col-form-label">Postion</label><input type="text" class="form-control form-control-sm" id="J_Postion" placeholder="Postion" name="J_Position"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="startEndDate" class="col-form-label">Start & End Date</label><input type="text" class="form-control form-control-sm" id="J_SED" name="J_SED" placeholder="01/01/2020 - 01/04/2020"></div></div><label for="Description" class="col-form-label">Description</label><textarea name="J_Description" class="form-control form-control-sm " cols="50" rows="5"></textarea><a href="#" class="remove_field">Remove</a></div>')
        }
    });
    $(add_button_P).click(function(e){
        e.preventDefault();
        if(P < max_fields){
            P++;
            $(wrapper_P).append('<div class="col-md-6"><div class="form-row"><div class="form-group col-md-6"><label for="Title" class="col-form-label">Title</label><input type="text" class="form-control form-control-sm" id="P_Title" name="P_Title" placeholder="Title"></div><div class="form-group col-md-6"><label for="startEndDate" class="col-form-label">Start & End Date</label><input type="text" class="form-control form-control-sm" id="P_SED" name="P_SED" placeholder="01/01/2020 - 01/04/2020"></div></div><label for="Description" class="col-form-label">Description</label><textarea name="P_Description" class="form-control form-control-sm " cols="50" rows="5"></textarea><a href="#" class="remove_field">Remove</a></div>')
        }
    });
    $(add_button_W).click(function(e){
        e.preventDefault();
        if(W < max_fields){
            W++;
            $(wrapper_W).append('<div class="col-md-6"><div class="form-row"><div class="form-group col-md-6"><label for="Title" class="col-form-label">Title</label><input type="text" class="form-control form-control-sm" id="W_Title" name="W_Title" placeholder="Title"></div><div class="form-group col-md-6"><label for="Organizer" class="col-form-label">Organizer</label><input type="text" class="form-control form-control-sm" id="W_Organizer" placeholder="Organizer" name="W_Organizer"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="startEndDate" class="col-form-label">Start & End Date</label><input type="text" class="form-control form-control-sm" id="W_SED" name="W_SED" placeholder="01/01/2020 - 01/04/2020"></div></div><label for="Description" class="col-form-label">Description</label><textarea name="W_Description" class="form-control form-control-sm " cols="50" rows="5"></textarea><a href="#" class="remove_field">Remove</a></div>')
        }
    });
    $(add_button_C).click(function(e){
        e.preventDefault();
        if(C < max_fields){
            C++;
            $(wrapper_C).append('<div class="col-md-6"><div class="form-row"><div class="form-group col-md-6"><label for="Course" class="col-form-label">Course Name</label><input type="text" class="form-control form-control-sm" id="C_Course" name="C_Course" placeholder="Course Name"></div><div class="form-group col-md-6"><label for="Institution" class="col-form-label">Institute Name</label><input type="text" class="form-control form-control-sm" id="C_Institute" placeholder="Intitute Name" name="C_Institute"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="startEndDate" class="col-form-label">Start & End Date</label><input type="text" class="form-control form-control-sm" id="C_SED" name="C_SED" placeholder="01/01/2020 - 01/04/2020"></div></div><label for="Description" class="col-form-label">Description</label><textarea name="C_Description" class="form-control form-control-sm " cols="50" rows="5"></textarea><a href="#" class="remove_field">Remove</a></div>')
        }
    });
    $(wrapper_E).on("click",".remove_field",function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
    $(wrapper_J).on("click",".remove_field",function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        J--;
    });
    $(wrapper_P).on("click",".remove_field",function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        P--;
    });
    $(wrapper_W).on("click",".remove_field",function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        W--;
    });
    $(wrapper_C).on("click",".remove_field",function(e){
        e.preventDefault();
        $(this).parent('div').remove();
        C--;
    });
});