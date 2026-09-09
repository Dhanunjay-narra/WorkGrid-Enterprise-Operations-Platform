import { IotFleetConfigModel, IotFleetConfigValidator } from "@nexora/types/domains/iot/fleet/IotFleetConfig";

export class IotFleetConfigService {
  private repository = new Map<string, IotFleetConfigModel>();

  public create(data: Omit<IotFleetConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetConfigModel>): IotFleetConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetConfigModel = {
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
