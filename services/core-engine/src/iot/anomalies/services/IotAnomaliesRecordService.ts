import { IotAnomaliesRecordModel, IotAnomaliesRecordValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesRecord";

export class IotAnomaliesRecordService {
  private repository = new Map<string, IotAnomaliesRecordModel>();

  public create(data: Omit<IotAnomaliesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesRecordModel>): IotAnomaliesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesRecordModel = {
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
