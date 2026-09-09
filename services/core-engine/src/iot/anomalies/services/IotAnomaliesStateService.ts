import { IotAnomaliesStateModel, IotAnomaliesStateValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesState";

export class IotAnomaliesStateService {
  private repository = new Map<string, IotAnomaliesStateModel>();

  public create(data: Omit<IotAnomaliesStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesStateModel>): IotAnomaliesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesStateModel = {
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
