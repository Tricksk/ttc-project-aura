export default interface ICreateClientDTO {
  name: string;
  sex: 'M' | 'F';
  works_seated: boolean;
  birthday: Date;
  cellphone: string;
  contact: string;
  contact_cellphone: string;
}