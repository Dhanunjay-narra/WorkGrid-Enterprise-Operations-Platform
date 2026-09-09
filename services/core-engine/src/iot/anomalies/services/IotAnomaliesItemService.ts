import { IotAnomaliesItemModel, IotAnomaliesItemValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesItem";

export class IotAnomaliesItemService {
  private repository = new Map<string, IotAnomaliesItemModel>();

  public create(data: Omit<IotAnomaliesItemModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesItemModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesItemModel>): IotAnomaliesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesItemModel = {
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
