export class UserRO {
  objectID;
  name;
  phone;
  language;
  role;
  zipCode;
  points;

  constructor(id, name, phone, language, role, zipCode, points) {
    this.objectID = id;
    this.name = name;
    this.phone = phone;
    this.language = language;
    this.role = role;
    this.zipCode = zipCode;
    this.points = points;
  }
}
