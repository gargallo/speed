function kameleon_resizetheArea(){jQuery(".km-hb-maker").css({width:jQuery(".km-hb-big-cnt").width()+"px"})}function kameleon_demo_importer(a){var b=jQuery(a).parent(".km-demo-item-actions").parent(".km-demo-item"),c=b.attr("data-optionsUrl"),d=b.attr("data-widgetsUrl"),e=b.attr("data-contentUrl"),f=b.attr("data-revolutionSliderFiles");jQuery(".sy-mmaker-overlay.importation").fadeIn(100),jQuery(".sy-mmaker-done").fadeOut(100),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{optionsUrl:c,contentUrl:e,widgetsUrl:d,revolutionSliderFiles:f,action:"kameleonImportDemo"},success:function(a){jQuery(".sy-mmaker-done").fadeIn(100),jQuery(".sy-mmaker-overlay").fadeOut(100)}})}function km_save_custom_code(){var a=editorCSS.getValue(),b=editorJS.getValue(),c=jQuery("#km-ganalytics-code").val(),d=jQuery("#km-gmaps-key").val();jQuery(".km-custom-save-sit").attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{customCSS:a,customJS:b,gAnalytics:c,gMapsKey:d,action:"kameleonCustomCode"},success:function(a){jQuery(".km-custom-save-sit").attr({"data-situation":"done"}),setTimeout(function(){jQuery(".km-custom-save-sit").attr({"data-situation":"none"})},5e3)}})}function km_sidebar_action(a,b){var c=jQuery("#km-sidebar-input").val(),d=jQuery(".km-sidebar-form-button");"deleteSidebar"==a&&(c=jQuery(b).attr("data-sidebar-id")),""!=jQuery.trim(c)&&(d.attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{sidebarName:c,actionName:a,action:"kameleonSidebarAction"},success:function(c){if("newSidebar"==a){c=JSON.parse(c);var e=jQuery(".km-sidebarmaker-el-sidebar").length;jQuery(".km-sidebarmaker-el-table").append('<div class="km-sidebarmaker-el-item km-sidebarmaker-el-sidebar">\t\t\t\t\t\t\t\t<div class="km-sidebarmaker-name">'+c.name+'</div>\t\t\t\t\t\t\t\t<div class="km-sidebarmaker-date">'+c.date+'</div>\t\t\t\t\t\t\t\t<div class="km-sidebarmaker-action" data-sidebar-id="'+e+'" onclick="km_sidebar_action(\'deleteSidebar\',this);" >\t\t\t\t\t\t\t\t<a><i class="fa fa-trash-o"></i></a></div>\t\t\t\t\t\t\t</div>')}"deleteSidebar"==a&&jQuery(b).parent(".km-sidebarmaker-el-item").fadeOut(400),d.attr({"data-situation":"none"})}}),jQuery("#km-sidebar-input").val(""))}function kmcf7m_show_input(a){var a=jQuery(a);kmcf7m_action_hidden(),a.parent(".kmcf7m-top-act-ele").attr({"data-situation":"shown"}),jQuery(".kmcf7m-ac-btn").attr({onclick:"kmcf7m_show_input(this)"}),a.children("span").html("&#10003;");var b=a.attr("data-action");"new"==b&&a.attr({onclick:"kmcf7m_new_style()"}),"edit"==b&&a.attr({onclick:"kmcf7m_edit_style()"})}function kmcf7m_edit_style(){var a=jQuery("#kmcf7m-mystyles-select"),b=a.find(":selected"),c=b.attr("data-stylename");if(""!=c&&void 0!=c){var d=b.attr("data-styletype"),e=b.attr("data-stylebutton"),f=b.attr("data-thestyle"),g=jQuery("#kameleon-cf7-container");g.attr({"data-style-name":c,"data-button-style":e,"data-style":d,style:f}),jQuery("#kmcf7m-curentstyle").html(c),kmfc7_chooser_curent_activate(e,"button"),kmfc7_chooser_curent_activate(d,"style"),kmcf7m_go_tostep(3),kmcf7m_actual_situation("end")}}function kmcf7_set_default(a,b){b.indexOf("px")>-1&&(b=b.replace("px","")),b.indexOf("%")>-1&&(b=b.replace("%","")),jQuery('.kmcf7_maker_inp[data-cssname="'+a+'"]').parent(".minicolors").find(".minicolors-swatch-color").css({"background-color":b}),jQuery('.kmcf7_maker_inp[data-cssname="'+a+'"]').val(b).change()}function kmcf7m_action_hidden(){jQuery(".kmcf7m-top-act-ele").attr({"data-situation":"hidden"}),jQuery(".kmcf7m-top-action-button.action").each(function(){jQuery(this).children("span").html(jQuery(this).attr("data-realicon"))})}function kmcf7m_new_style(){var a=jQuery("#kmcf7m-stylename").val(),b=jQuery("#kameleon-cf7-container");""!=jQuery.trim(a)&&(jQuery("#kmcf7m-curentstyle").html(a),b.attr({style:""}),b.attr({"data-style-name":a}),b.attr({"data-button-style":"qaswara"}),b.attr({"data-style":"qaswara"}),kmcf7m_go_tostep(2),kmcf7m_actual_situation("end"),kmfc7_chooser_curent_activate("qaswara","button"),kmfc7_chooser_curent_activate("qaswara","style"),km_cf7_form_style_loader("qaswara","form",!0))}function kmcf7m_go_tostep(a){var b=jQuery("#kameleon-cf7-container"),c=b.attr("data-style"),d=b.attr("data-style-old");""!=jQuery.trim(b.attr("data-style-name"))?(jQuery(".km-builder-cr-element").attr({"data-situation":"hidden"}),jQuery(".kmcf7m-ele"+a).attr({"data-situation":"shown"}),jQuery(".kmcf7m-process-container").attr({"data-step":a}),3==a&&c!=d&&km_cf7_form_style_loader(c,"form"),jQuery(".kmcf7m-process-element").attr({"data-situation":"noactive"}),jQuery(".kmcf7m-pp-step-"+a).attr({"data-situation":"active"})):(jQuery(".km-builder-cr-element").attr({"data-situation":"hidden"}),jQuery(".kmcf7m-ele1").attr({"data-situation":"shown"}),jQuery(".kmcf7m-process-container").attr({"data-step":"1"}))}function kmcf7m_actual_situation(a){jQuery(".kmcf7m-top-actions").attr({"data-situation":a}),kmcf7m_action_hidden(),"begin"==a&&(jQuery("#kmcf7m-curentstyle").html(""),jQuery(".kmcf7m-ac-btn").attr({onclick:"kmcf7m_show_input(this)"}),kmcf7m_go_tostep(1),jQuery("#kameleon-cf7-container").attr({"data-style-name":"","data-button-style":"qaswara","data-style":"qaswara",style:""}))}function km_cf7_designer_focus_plugin(a){jQuery(".km_cf7-input-container").removeClass("filled"),jQuery(a).parent(".km_cf7-input-container").addClass("filled"),km_cf7_designer_checkfill_plugin()}function km_cf7_designer_blur_plugin(a){jQuery(".km_cf7-input-container").removeClass("filled"),km_cf7_designer_checkfill_plugin()}function km_cf7_designer_checkfill_plugin(){jQuery(".km_cf7-input").each(function(){var a=jQuery(this);""!=jQuery.trim(a.val())&&a.parent(".km_cf7-input-container").addClass("filled")})}function km_cf7_onfield_change(a){var a=jQuery(a),b=a.attr("data-cssname"),c=a.attr("data-csssufix"),d=a.attr("data-element-type");km_cf7_replace_style(b,a.val(),c,d)}function km_cf7_replace_style(a,b,c,d){var e=jQuery(".kameleon-cf7-container"),f=e.attr("style"),g=f.split(";"),h=buttonStyleResult="",i=0;g.forEach(function(d,e){var f=d.split(":");a===f[0]&&(d=f[0]+":"+b+c,i=1),""!=jQuery.trim(d)&&(h+=d+";")}),0==i&&(h+=a+":"+b+c),e.attr({style:h,"data-button-css":buttonStyleResult})}function km_cf7_button_type_chooser(a){var a=jQuery(a);jQuery(".km-builder-style-element.buttontype").attr({"data-situation":"none"}),a.attr({"data-situation":"active"});var b=a.attr("data-buttonname");jQuery("#kameleon-cf7-container").attr({style:a.attr("data-defaultstyle"),"data-button-style":b}),kmcf7m_go_tostep(5),kmfc7_chooser_curent_activate(b,"button")}function km_cf7_style_type_chooser(a){var a=jQuery(a),b=jQuery("#kameleon-cf7-container");b.attr("data-button-css");jQuery(".km-builder-style-element.styletype").attr({"data-situation":"none"}),a.attr({"data-situation":"active"});var d=a.attr("data-stylename");a.attr("data-defaultstyle");b.attr({"data-style":d,style:"","data-button-css":""}),kmcf7m_go_tostep(3),km_cf7_form_style_loader(d,"form"),kmfc7_chooser_curent_activate(d,"style")}function km_cf7_form_style_loader(a,b,c){if(""!=jQuery.trim(a)){jQuery("#kameleon-cf7-container");jQuery(".sy-admin-logo").attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{styleType:a,actionName:b,action:"kameleonCf7FormCreator"},success:function(b){jQuery(".km-builder-cr-element").attr({"data-situation":"hidden"}),jQuery(".km-builder-form-styler").html(b).attr({"data-situation":"shown"}),kmfc7_input_default_colorpicker(),kmcf7_set_default_loader(),kmfc7_input_default_values(),kmfc7_svg_adder_plugin(),jQuery(".sy-admin-logo").attr({"data-situation":"normal"}),jQuery("#kameleon-cf7-container").attr({"data-style-old":a}),1==c&&(kmcf7m_go_tostep(2),kmfc7_button_form_default()),km_admin_success()}})}}function km_cf7_save_style(a,b){var b=jQuery(b),c=jQuery("#kameleon-cf7-container"),d=c.attr("data-style-name"),e=c.attr("data-style"),f=c.attr("data-button-style"),g=c.attr("style"),h=c.attr("data-button-css"),i=d.toLowerCase();i=i.replace(" ","-"),""!=jQuery.trim(d)&&(jQuery("#kmcf7m-mystyles-select option[data-stylename='"+d+"']").attr({"data-styletype":e,"data-stylebutton":f,"data-thestyle":g}),0==jQuery("#kmcf7m-mystyles-select option[data-stylename='"+d+"']").length&&jQuery("#kmcf7m-mystyles-select").append('<option value="'+i+'" data-button-css="" data-styleid="'+i+'" data-stylename="'+d+'"  data-styletype="'+e+'" \t\t\t\tdata-stylebutton="'+f+'" data-thestyle="'+g+'">'+d+"</option>"),jQuery(".sy-admin-logo").attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{styleName:d,styleType:e,styleButton:f,theStyle:g,actionName:a,buttonCSS:h,action:"kameleonCf7Designer"},success:function(a){jQuery(".sy-admin-logo").attr({"data-situation":"normal"}),jQuery("#kmcf7m-stylename").val(""),km_admin_success()}})),"yes"==jQuery.trim(b.attr("data-begin"))&&kmcf7m_actual_situation("begin")}function km_cf7_delete_style(){var a=jQuery("#kameleon-cf7-container").attr("data-style-name");""!=jQuery.trim(a)&&(jQuery(".sy-admin-logo").attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{styleName:a,actionName:"delete",action:"kameleonCf7Designer"},success:function(b){jQuery(".sy-admin-logo").attr({"data-situation":"normal"}),jQuery("#kmcf7m-mystyles-select option[data-stylename='"+a+"']").remove(),jQuery("#kameleon-cf7-container").attr({"data-style-name":"","data-button-style":"qaswara","data-style":"qaswara",style:""}),kmcf7m_go_tostep(1),kmcf7m_actual_situation("begin"),km_admin_success()}}))}function kmcf7_set_default_loader(){var a=jQuery("#kameleon-cf7-container").attr("style"),b=a.split(";");b.forEach(function(a,b){var c=a.split(":");""!=jQuery.trim(c)&&void 0!=c&&kmcf7_set_default(c[0],c[1])})}function kmfc7_input_default_values(){jQuery(".km-slider-range").each(function(a,b){kameleon_change_range(b,"slider")}),jQuery("body").find(".color-picker").minicolors({animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",dataUris:!0,defaultValue:"",format:"rgb",hide:null,hideSpeed:100,inline:!1,keywords:"",letterCase:"lowercase",opacity:!0,position:"bottom right",show:null,showSpeed:100,theme:"default",swatches:[]}),jQuery(".kmcf7_maker_inp").change()}function kmfc7_input_default_colorpicker(){jQuery("body").find(".color-picker").minicolors({animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",dataUris:!0,defaultValue:"",format:"rgb",hide:null,hideSpeed:100,inline:!1,keywords:"",letterCase:"lowercase",opacity:!0,position:"bottom right",show:null,showSpeed:100,theme:"default",swatches:[]})}function kmfc7_chooser_curent_activate(a,b){"style"==b&&(jQuery(".km-builder-style-element.styletype").attr({"data-situation":""}),jQuery('.km-builder-style-element.styletype[data-stylename="'+a+'"]').attr({"data-situation":"active"})),"button"==b&&(jQuery(".km-builder-style-element.buttontype").attr({"data-situation":""}),jQuery('.km-builder-style-element.buttontype[data-buttonname="'+a+'"]').attr({"data-situation":"active"}))}function kmfc7_svg_adder_plugin(){jQuery(".km_cf7-input-container").find(".km_cf7-graphic").remove(),jQuery('.kameleon-cf7-container[data-style="shoko"]').children(".km_cf7-input-container").append('<svg class="graphic km_cf7-graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">\t\t\t\t\t<path vector-effect="non-scaling-stroke" d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>\t\t\t\t\t<path vector-effect="non-scaling-stroke" d="M0,2.5c0,0,298.666,0,399.333,0C448.336,2.5,513.994,13,597,13c77.327,0,135-10.5,200.999-10.5c95.996,0,402.001,0,402.001,0"/>\t\t\t</svg>')}function km_admin_success(){jQuery(".sy-admin-success-message").attr({"data-situation":"shown"}),setTimeout(function(){jQuery(".sy-admin-success-message").attr({"data-situation":"hidden"})},5e3)}function kmfc7_button_form_default(){jQuery("#kameleon-cf7-container").attr("style","");var a="--kmcf7-btn-align: center;--kmcf7-btn-fontsize: 16px;   --kmcf7-btn-width: 50%;    --kmcf7-btn-letterspacing: 1px;    --kmcf7-btn-height: 45px;    --kmcf7-btn-mgtop: 15px;    --kmcf7-btn-mgbottom: 15px;    --kmcf7-btn-color: #ccc;    --kmcf7-btn-color-hover: #fff;   --kmcf7-btn-bg-color: #111;      --kmcf7-btn-bg-color-hover: #269AD6; --kmcf7-btn-border-radius: 0px;     --kmcf7-btn-border-width: 0px;      --kmcf7-btn-border-color: #1a1a1a;      --kmcf7-btn-border-color-hover:#2492CA;";a.split(";");jQuery("#kameleon-cf7-container").attr({style:a}),jQuery(".sy-admin-logo").attr({"data-situation":"loading"}),jQuery.ajax({type:"POST",url:plugindir.ajax_handler,data:{action:"kameleonCf7FormCreatorButton"},success:function(a){jQuery(".sy-admin-logo").attr({"data-situation":"normal"}),jQuery("#kmcf7-button-styler-form").html(a),km_admin_success(),jQuery(".km-slider-range").each(function(a,b){kameleon_change_range(b,"slider")}),kmfc7_input_default_colorpicker()}})}function kameleon_change_bg_color(a,b){var c=jQuery(a).val();jQuery(b).css({"background-color":c})}function km_change_distanceinput(a){var a=jQuery(a),b=a.attr("data-posdistance"),c=a.attr("data-distance-name"),d=a.parent(".ultimate-margins").children(".wpb_vc_param_value.km-"+c+"-value"),e=d.val(),f=e.split(";"),g=0,h="";f.forEach(function(d,e){var f=d.split(":");c+"-"+b==f[0]&&(d=c+"-"+b+":"+a.val(),g=1),""!=jQuery.trim(d)&&(h+=d+";")}),0==g&&(h+=c+"-"+b+":"+a.val()),d.val(h)}function km_change_fontinput(a){var a=jQuery(a),b=a.attr("data-name"),c=a.parent(".sy-fonts-elem").parent(".sy-fonts-container").children(".km-fonts-value"),d=c.val(),e=d.split(";"),f=0,g="";if(e.forEach(function(c,d){var e=c.split(":");b==e[0]&&(c=b+":"+a.val()+"px",f=1),""!=jQuery.trim(c)&&(g+=c+";")}),0==f&&(g+=b+":"+a.val()+"px"),""==jQuery.trim(a.val())){var h=b+":px;",i=new RegExp(h,"g");g=g.replace(i,"")}c.val(g)}jQuery(function(a){"use strict";jQuery(document).ready(function(){kmfc7_svg_adder_plugin(),kameleon_resizetheArea(),a(window).resize(function(){kameleon_resizetheArea()})})});