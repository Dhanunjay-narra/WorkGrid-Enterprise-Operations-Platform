import { IotAnomaliesSnapshotModel, IotAnomaliesSnapshotValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesSnapshot";

export class IotAnomaliesSnapshotService {
  private repository = new Map<string, IotAnomaliesSnapshotModel>();

  public create(data: Omit<IotAnomaliesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesSnapshotModel>): IotAnomaliesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesSnapshotModel = {
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
