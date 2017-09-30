this["nhl"] = this["nhl"] || {};
this["nhl"]["templates"] = this["nhl"]["templates"] || {};
this["nhl"]["templates"]["goalies"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"container text-center team-container "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(data && data.index),0,{"name":"ifCond","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <div class=\"row\">\r\n          <h3 class=\"matchup\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.away : depth0)) != null ? stack1.team : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1.team : stack1), depth0))
    + "</h3>\r\n      </div>\r\n  </div>\r\n\r\n<div class=\"container bg-grey\">\r\n  <div class=\"row slideanim\">\r\n"
    + ((stack1 = this.invokePartial(partials.goalie,(depth0 != null ? depth0.away : depth0),{"name":"goalie","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.goalie,(depth0 != null ? depth0.home : depth0),{"name":"goalie","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>   \r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "first-container";
},"4":function(depth0,helpers,partials,data) {
    return "Can't find any matchups, is it off- or pre-season?\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
this["nhl"]["templates"]["_goalie"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
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
},"useData":true});
this["nhl"]["templates"]["highlights"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<div data-container=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = this.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "<div class=\"container bg-grey\">\r\n  <div class=\"row slideanim\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.games : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"col-sm-3 col-xs-12\">\r\n      <div class=\"panel panel-default text-center\">\r\n        <div class=\"panel-heading\">\r\n          <div data-spoil>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gameFinished : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "             <h4 class=\"spoiler\"><strong>"
    + alias3(((helper = (helper = helpers.awayGoals || (depth0 != null ? depth0.awayGoals : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"awayGoals","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.homeGoals || (depth0 != null ? depth0.homeGoals : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"homeGoals","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.endedWith || (depth0 != null ? depth0.endedWith : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endedWith","hash":{},"data":data}) : helper)))
    + "</strong></h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"highlight logo-large "
    + alias3((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.awayTeam : depth0),{"name":"helperLowerCase","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gameFinished : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\r\n            </div>\r\n            <div class=\"highlight logo-large "
    + alias3((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.homeTeam : depth0),{"name":"helperLowerCase","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gameFinished : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\r\n            </div>\r\n            <!-- p>"
    + alias3(((helper = (helper = helpers.arena || (depth0 != null ? depth0.arena : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"arena","hash":{},"data":data}) : helper)))
    + "</p -->\r\n        </div>\r\n        \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n      </div>\r\n    </div>     \r\n";
},"3":function(depth0,helpers,partials,data) {
    return "                <h4><a class=\"show-result\" href=\"#\">Show result</a></h4>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "              <h4 data-toggle=\"tooltip\" data-placement=\"top\" title=\"In your local time\">Game starts "
    + this.escapeExpression((helpers.hourMinute || (depth0 && depth0.hourMinute) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.date : depth0),{"name":"hourMinute","hash":{},"data":data}))
    + "</h4>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "";
},"9":function(depth0,helpers,partials,data) {
    return "not-played";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-button=\"iframe\" data-title=\""
    + alias3(((helper = (helper = helpers.awayTeam || (depth0 != null ? depth0.awayTeam : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"awayTeam","hash":{},"data":data}) : helper)))
    + " vs "
    + alias3(((helper = (helper = helpers.homeTeam || (depth0 != null ? depth0.homeTeam : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"homeTeam","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.arena || (depth0 != null ? depth0.arena : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"arena","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(this.lambda((depths[2] != null ? depths[2].date : depths[2]), depth0))
    + "\" data-url=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"modal\" data-target=\"#myModal\">Watch highlights</button>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["nhl"]["templates"]["_header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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
},"useData":true});
this["nhl"]["templates"]["injuries"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression;

  return "<div class=\"table-responsive\">\r\n  <div class=\"injury "
    + alias1((helpers.helperLowerCase || (depth0 && depth0.helperLowerCase) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.Team : depth0)) != null ? stack1.Name : stack1),{"name":"helperLowerCase","hash":{},"data":data}))
    + " logo-medium\"></div>\r\n  <h2 class=\"injuries-team\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.Team : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</h2>\r\n    <table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>Player</th>\r\n            <th>Date</th>\r\n            <th>Status</th>\r\n            <th>Description</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Injuries : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n  </table>\r\n</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <tr>\r\n          <td class=\"col-md-3\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Player : depth0)) != null ? stack1.FirstName : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Player : depth0)) != null ? stack1.LastName : stack1), depth0))
    + "</td>\r\n          <td class=\"col-md-2\">"
    + alias2(((helper = (helper = helpers.ReportedDate || (depth0 != null ? depth0.ReportedDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ReportedDate","hash":{},"data":data}) : helper)))
    + "</td>\r\n          <td class=\"col-md-2\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.InjuryDetail : depth0)) != null ? stack1.Status : stack1), depth0))
    + "</td>\r\n          <td class=\"col-md-4\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.InjuryDetail : depth0)) != null ? stack1.Description : stack1), depth0))
    + "</td>\r\n      </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.InjuryReports : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["nhl"]["templates"]["stats"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "      <tr>\r\n        <td><strong>"
    + alias2((helpers.add || (depth0 && depth0.add) || alias1).call(depth0,(data && data.index),(depths[1] != null ? depths[1].start : depths[1]),1,{"name":"add","hash":{},"data":data}))
    + "</strong></td>\r\n       <td class=\"col-md-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Player\">"
    + alias2(((helper = (helper = helpers.playerName || (depth0 != null ? depth0.playerName : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"playerName","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1 logo-padding\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\"><div class=\"small-logo logo-small "
    + alias2((helpers.fixTeam || (depth0 && depth0.fixTeam) || alias1).call(depth0,(depth0 != null ? depth0.playerTeamsPlayedFor : depth0),{"name":"fixTeam","hash":{},"data":data}))
    + "\"></div></td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Position\">"
    + alias2(((helper = (helper = helpers.playerPositionCode || (depth0 != null ? depth0.playerPositionCode : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"playerPositionCode","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">"
    + alias2(((helper = (helper = helpers.gamesPlayed || (depth0 != null ? depth0.gamesPlayed : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"gamesPlayed","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals\">"
    + alias2(((helper = (helper = helpers.goals || (depth0 != null ? depth0.goals : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"goals","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Assists\">"
    + alias2(((helper = (helper = helpers.assists || (depth0 != null ? depth0.assists : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"assists","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">"
    + alias2(((helper = (helper = helpers.points || (depth0 != null ? depth0.points : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"points","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Penalty per 60 minutes of icetime\">"
    + alias2((helpers.toFixed || (depth0 && depth0.toFixed) || alias1).call(depth0,(depth0 != null ? depth0.penaltiesPerSixty : depth0),2,{"name":"toFixed","hash":{},"data":data}))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points per 60 minutes of icetime\">"
    + alias2((helpers.toFixed || (depth0 && depth0.toFixed) || alias1).call(depth0,(depth0 != null ? depth0.pointsPerSixty : depth0),2,{"name":"toFixed","hash":{},"data":data}))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points in even strength\">"
    + alias2(((helper = (helper = helpers.fsPoints || (depth0 != null ? depth0.fsPoints : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"fsPoints","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td class=\"col-md-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Faceoff win percentage\">"
    + alias2((helpers.toFixed || (depth0 && depth0.toFixed) || alias1).call(depth0,(depth0 != null ? depth0.faceoffWinPctg : depth0),2,{"name":"toFixed","hash":{},"data":data}))
    + "</td>\r\n      </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"table-responsive\">\r\n      <div class=\"row\">\r\n        <h2 class=\"text-center\">Stats</h2>\r\n        <div class=\"container\">\r\n          <div class=\"row\"></div>\r\n          <div class=\"text-left\">   \r\n            <h4>Sorting by:</h4>\r\n            <select class=\"selectpicker drop\" id=\"sortby\" data-width=\"170px\">\r\n              <option value=\"\" disabled>Sort by</option>\r\n              <option value=\"points\">Points</option>\r\n              <option value=\"goals\">Goals</option>\r\n              <option value=\"assists\">Assists</option>\r\n              <option value=\"fsPoints\">Points 5v5</option>\r\n              <option value=\"penaltiesPerSixty\">PIM per 60</option>\r\n              <option value=\"pointsPerSixty\">Points per 60</option>\r\n              <option value=\"faceoffWinPctg\">Faceoff percentage</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        </div>\r\n    <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Player\">Player</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">Team</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Position\">Pos</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">Gp</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals\">G</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Assists\">A</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">P</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Penalty per 60 minutes of icetime\">PIM/60</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points per 60 minutes of icetime\">P/60</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points in even strength\">P/5v5</th>\r\n        <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Faceoff win percentage\">FO%</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n  </table>\r\n  <div class=\"text-center\">\r\n      <nav aria-label=\"Page navigation pagination\">\r\n        <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n                <a class=\"page-link\" data-change=\"prev\" href=\"#\" aria-label=\"Previous\">\r\n                    <span aria-hidden=\"true\">&laquo;</span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n                <a class=\"page-link\" data-change=\"next\" href=\"#\" aria-label=\"Next\">\r\n                    <span aria-hidden=\"true\">&raquo;</span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n      </nav>\r\n    </div>";
},"useData":true,"useDepths":true});
this["nhl"]["templates"]["standings-division"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"table-responsive\">\r\n        <h2 class=\"text-center\">Standings</h2>\r\n"
    + ((stack1 = this.invokePartial(partials.select,depth0,{"name":"select","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    <table class=\"table table-striped\">\r\n"
    + ((stack1 = this.invokePartial(partials.thead,"Team",{"name":"thead","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    <tbody>\r\n"
    + ((stack1 = this.invokePartial(partials.tr,depth0,{"name":"tr","data":data,"indent":"     ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </tbody>\r\n  </table>";
},"usePartial":true,"useData":true});
this["nhl"]["templates"]["standings-wildcard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"table-responsive\">\r\n    <h2 class=\"text-center\">Standings</h2>\r\n"
    + ((stack1 = this.invokePartial(partials.select,depth0,{"name":"select","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    <h3>Eastern</h3>\r\n"
    + ((stack1 = this.invokePartial(partials.table,(depth0 != null ? depth0.eastern : depth0),{"name":"table","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\r\n    <h3>Western</h3>\r\n"
    + ((stack1 = this.invokePartial(partials.table,(depth0 != null ? depth0.western : depth0),{"name":"table","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>";
},"usePartial":true,"useData":true});
this["nhl"]["templates"]["_select"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<select class=\"selectpicker drop\" id=\"type\" data-width=\"100px\">\r\n  <option value=\"wildcardstandings\">Wildcard</option>\r\n  <option value=\"divisionstandings\">League</option>\r\n</select>";
},"useData":true});
this["nhl"]["templates"]["_table"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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
},"usePartial":true,"useData":true});
this["nhl"]["templates"]["_thead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\r\n  <tr>\r\n    <th></th>\r\n    <th class=\"th-placeholder\"></th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Team\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Games played\">GP</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Wins - Losses - OT Losses\">Record</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Points\">PTS</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Point percentage\">PTS%</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Goals for - Goals against\">GF-GA</th>\r\n    <th data-toggle=\"tooltip\" data-placement=\"top\" title=\"Current streak\">Streak</th>\r\n  </tr>\r\n</thead>";
},"useData":true});
this["nhl"]["templates"]["_tr"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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
},"useData":true});