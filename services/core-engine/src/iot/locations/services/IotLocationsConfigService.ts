import { IotLocationsConfigModel, IotLocationsConfigValidator } from "@nexora/types/domains/iot/locations/IotLocationsConfig";

export class IotLocationsConfigService {
  private repository = new Map<string, IotLocationsConfigModel>();

  public create(data: Omit<IotLocationsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsConfigModel>): IotLocationsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsConfigModel = {
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
