import { Component, OnInit } from "@angular/core";
import { Metadata } from "./metadata";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 5";

  selectedTeam: Metadata;
  teams: Metadata[];
  selectedChannel: Metadata;
  channels: Metadata[];

  ngOnInit() {
    this.teams = [{ id: "Support", name: "Support" }];
    this.onSelectTeam(this.selectedTeam.id);
  }

  onSelectTeam(teamId) {
    this.channels = this.getChannels(teamId);
  }

  getChannels(teamId) {
    return [
      { id: "Assessment", name: "Assessment" },
      { id: "Assessment", name: "Assessment" }
    ];
  }
}
