Handlebars.registerPartial("goalie", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"col-md-6 col-xs-6\">\r\n  <div class=\"panel panel-default text-center\">\r\n    <div class=\"panel-heading\">      \r\n      <h3 class=\"goalie-name\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\r\n      <div class=\""
    + alias3((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"helperLowerCase","hash":{},"data":data}))
    + " goalie-status\" role=\"alert\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"goalies\">\r\n            <div class=\"goalie-team logo-large "
    + alias3((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.team : depth0),{"name":"helperLowerCase","hash":{},"data":data}))
    + "\"></div>\r\n            <img class=\"goalie\" src=\""
    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" />\r\n        </div>\r\n  </div>\r\n  </div>      \r\n</div> ";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "first-container";
},"3":function(depth0,helpers,partials,data) {
    return "   			<button type=\"button\" class=\"btn btn-default show-all\">Show results</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<div class=\"container text-center date-container "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(data && data.index),0,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"row\">\r\n    	<div class=\"col-md-4 col-xs-12 col-centered\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gameFinished : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "   		</div> 	\r\n        <div class=\"col-md-4 col-xs-12 center-button text-center\">\r\n       		<h3 class=\"date\">"
    + this.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true}));
Handlebars.registerPartial("select", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<select class=\"selectpicker drop\" id=\"type\" data-width=\"100px\">\r\n  <option value=\"wildcardstandings\">Wildcard</option>\r\n  <option value=\"divisionstandings\">League</option>\r\n</select>";
},"useData":true}));
Handlebars.registerPartial("table", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <table class=\"table table-striped "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.division : depth0),"Wild Card",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = this.invokePartial(partials.thead,(depth0 != null ? depth0.division : depth0),{"name":"thead","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = this.invokePartial(partials.tr,(depth0 != null ? depth0.teams : depth0),{"name":"tr","data":data,"indent":"     ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </tbody>\r\n  </table>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "wildcard-delimeter";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("thead", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\r\n  <tr>\r\n    <th></th>\r\n    <th class=\"th-placeholder\"></th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">GP</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wins - Losses - OT Losses\">Record</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">PTS</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Point percentage\">PTS%</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals for - Goals against\">GF-GA</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Current streak\">Streak</th>\r\n  </tr>\r\n</thead>";
},"useData":true}));
Handlebars.registerPartial("tr", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda, alias4="function";

  return "      <tr>\r\n       <td><strong>"
    + alias2((helpers.add || (depth0 && depth0.add) || alias1).call(depth0,(data && data.index),1,0,{"name":"add","hash":{},"data":data}))
    + "</strong></td>\r\n       <td class=\"logo-padding\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\"><div class=\"small-logo logo-small "
    + alias2((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1),{"name":"helperLowerCase","hash":{},"data":data}))
    + "\"></div></td>\r\n        <td class=\"col-md-3\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">"
    + alias2(((helper = (helper = helpers.gamesPlayed || (depth0 != null ? depth0.gamesPlayed : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"gamesPlayed","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wins - Losses - OT Losses\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.wins : stack1), depth0))
    + "-"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.losses : stack1), depth0))
    + "-"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.ot : stack1), depth0))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">"
    + alias2(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Point percentage\">"
    + alias2(((helper = (helper = helpers.pointPercentage || (depth0 != null ? depth0.pointPercentage : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"pointPercentage","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals for - Goals against\">"
    + alias2(((helper = (helper = helpers.goalsScored || (depth0 != null ? depth0.goalsScored : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"goalsScored","hash":{},"data":data}) : helper)))
    + "-"
    + alias2(((helper = (helper = helpers.goalsAgainst || (depth0 != null ? depth0.goalsAgainst : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"goalsAgainst","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Current streak\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.streak : depth0)) != null ? stack1.streakCode : stack1), depth0))
    + "</td>\r\n      </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));