import { IotAnomaliesSessionModel, IotAnomaliesSessionValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesSession";

export class IotAnomaliesSessionService {
  private repository = new Map<string, IotAnomaliesSessionModel>();

  public create(data: Omit<IotAnomaliesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesSessionModel>): IotAnomaliesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesSessionModel = {
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
