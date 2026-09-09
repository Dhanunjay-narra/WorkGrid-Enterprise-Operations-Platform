import { IotAnomaliesEventModel, IotAnomaliesEventValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesEvent";

export class IotAnomaliesEventService {
  private repository = new Map<string, IotAnomaliesEventModel>();

  public create(data: Omit<IotAnomaliesEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesEventModel>): IotAnomaliesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesEventModel = {
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
