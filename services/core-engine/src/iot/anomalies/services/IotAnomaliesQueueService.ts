import { IotAnomaliesQueueModel, IotAnomaliesQueueValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesQueue";

export class IotAnomaliesQueueService {
  private repository = new Map<string, IotAnomaliesQueueModel>();

  public create(data: Omit<IotAnomaliesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesQueueModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesQueueModel>): IotAnomaliesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesQueueModel = {
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
