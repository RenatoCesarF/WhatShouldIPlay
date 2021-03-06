import 'game_model.dart';
import 'logo_model.dart';

class Company {
  int id;
  String name;
  List<Game> published;
  List<Game> developed;
  Logo logo;

  Company({this.id, this.name, this.published, this.logo, this.developed});

  Company.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];

    if (json['logo'] != null) {
      logo = Logo.fromJson(json['logo']);
    }

    if (json['published'] != null) {
      published = <Game>[];
      json['published'].forEach((v) {
        published.add(new Game.fromJson(v));
      });
    }

    if (json['developed'] != null) {
      developed = <Game>[];
      json['developed'].forEach((v) {
        developed.add(new Game.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    if (this.published != null) {
      data['published'] = this.published.map((v) => v.toJson()).toList();
    }
    if (this.developed != null) {
      data['developed'] = this.developed.map((v) => v.toJson()).toList();
    }
    return data;
  }
}
