import { INewData } from "../../../interfaces/INewData";
import { LivroEntitie } from "../../entities/LivroEntitie";

export interface UpdateLivroByIdPort {
  updateLivroById(id: string, newData: INewData): Promise<any>;
}
