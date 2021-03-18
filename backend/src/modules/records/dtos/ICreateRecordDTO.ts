export default interface ICreateRecordDTO {
  name: string;
  fields: Array<{
    field_id: string;
    order: number;
  }>
}