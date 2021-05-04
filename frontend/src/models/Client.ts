export default interface Client {
    id: string;
    name: string;
    sex: 'M' | 'F';
    sexText: 'Masculino' | 'Feminino';
    works_seated: boolean;
    birthday: Date;
    formatBirthday: string;
    cellphone: string;
    contact: string;
    contact_cellphone: string;
    lastService: string;
}