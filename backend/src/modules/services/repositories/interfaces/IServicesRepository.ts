import ICreateServiceDTO from "../../dtos/ICreateServiceDTO";
import Service from "../../models/Service";

export default interface IServicesRepository {
  create(data: ICreateServiceDTO): Promise<Service>;
  save(service: Service): Promise<Service>;
  list(): Promise<Service[]>;
}