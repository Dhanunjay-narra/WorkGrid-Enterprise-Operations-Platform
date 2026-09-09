import { IotThresholdsSnapshotModel, IotThresholdsSnapshotValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsSnapshot";

export class IotThresholdsSnapshotService {
  private repository = new Map<string, IotThresholdsSnapshotModel>();

  public create(data: Omit<IotThresholdsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsSnapshotModel>): IotThresholdsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsSnapshotModel = {
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
