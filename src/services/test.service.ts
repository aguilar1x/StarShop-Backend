import { Repository } from "typeorm";
import { TestEntity } from "../entities/testEntity";
import { DataSource } from "typeorm";

export class TestService {
  private repo: Repository<TestEntity>;

  constructor(dataSource: DataSource) {
    this.repo = dataSource.getRepository(TestEntity);
  }

  async getEntityByName(name: string): Promise<TestEntity | null> {
    return this.repo.findOneBy({ name });
  }

  async validateEntityExists(name: string): Promise<boolean> {
    const entity = await this.getEntityByName(name);
    return !!entity;
  }
}
