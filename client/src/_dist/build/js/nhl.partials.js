Handlebars.registerPartial("date", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container text-center date-container\">\n    <div class=\"row\">\n    	<div class=\"col-md-4 col-xs-12\">\n   			<button type=\"button\" class=\"btn btn-default show-all pull-left\">Show all results</button>\n   		</div> \n        <div class=\"col-md-4 col-xs-12 center-button text-center\">\n       		<h3 class=\"date\">"
    + this.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</h3>\n        </div>\n    </div>\n</div>\n";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container text-center date-container\">\n    <div class=\"row\">\n    	<div class=\"col-md-4 col-xs-12 col-centered\">\n   			<button type=\"button\" class=\"btn btn-default show-all\">Show results</button>\n   		</div> \n        <div class=\"col-md-4 col-xs-12 center-button text-center\">\n       		<h3 class=\"date\">"
    + this.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</h3>\n        </div>\n    </div>\n</div>\n";
},"useData":true}));
Handlebars.registerPartial("select", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<select class=\"selectpicker drop\" id=\"type\" data-width=\"100px\">\n  <option value=\"wildcardstandings\">Wildcard</option>\n  <option value=\"divisionstandings\">League</option>\n</select>";
},"useData":true}));
Handlebars.registerPartial("table", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <table class=\"table table-striped "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.division : depth0),"Wild Card",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = this.invokePartial(partials.thead,(depth0 != null ? depth0.division : depth0),{"name":"thead","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </thead>\n    <tbody>\n"
    + ((stack1 = this.invokePartial(partials.tr,(depth0 != null ? depth0.teams : depth0),{"name":"tr","data":data,"indent":"     ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n";
},"2":function(depth0,helpers,partials,data) {
    return "wildcard-delimeter";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("thead", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\n  <tr>\n    <th class=\"th-placeholder\"></th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">GP</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wins - Losses - OT Losses\">Record</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">PTS</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Point percentage\">PTS%</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals for - Goals against\">GF-GA</th>\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Current streak\">Streak</th>\n  </tr>\n</thead>";
},"useData":true}));
Handlebars.registerPartial("tr", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "      <tr>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"small-logo "
    + alias2((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1),{"name":"helperLowerCase","hash":{},"data":data}))
    + "\"></td>\n        <td class=\"col-md-3\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">"
    + alias2(((helper = (helper = helpers.gamesPlayed || (depth0 != null ? depth0.gamesPlayed : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"gamesPlayed","hash":{},"data":data}) : helper)))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wins - Losses - OT Losses\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.wins : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.losses : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.leagueRecord : depth0)) != null ? stack1.ot : stack1), depth0))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">"
    + alias2(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Point percentage\">"
    + alias2(((helper = (helper = helpers.pointPercentage || (depth0 != null ? depth0.pointPercentage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"pointPercentage","hash":{},"data":data}) : helper)))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals for - Goals against\">"
    + alias2(((helper = (helper = helpers.goalsScored || (depth0 != null ? depth0.goalsScored : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"goalsScored","hash":{},"data":data}) : helper)))
    + "-"
    + alias2(((helper = (helper = helpers.goalsAgainst || (depth0 != null ? depth0.goalsAgainst : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"goalsAgainst","hash":{},"data":data}) : helper)))
    + "</td>\n        <td data-toggle=\"tooltip\" data-placement=\"top\" title=\"Current streak\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.streak : depth0)) != null ? stack1.streakCode : stack1), depth0))
    + "</td>\n      </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));