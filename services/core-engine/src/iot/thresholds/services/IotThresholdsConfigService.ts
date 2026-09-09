import { IotThresholdsConfigModel, IotThresholdsConfigValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsConfig";

export class IotThresholdsConfigService {
  private repository = new Map<string, IotThresholdsConfigModel>();

  public create(data: Omit<IotThresholdsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsConfigModel>): IotThresholdsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsConfigModel = {
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
