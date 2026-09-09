import { IotCommandsConfigModel, IotCommandsConfigValidator } from "@nexora/types/domains/iot/commands/IotCommandsConfig";

export class IotCommandsConfigService {
  private repository = new Map<string, IotCommandsConfigModel>();

  public create(data: Omit<IotCommandsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsConfigModel>): IotCommandsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsConfigModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
