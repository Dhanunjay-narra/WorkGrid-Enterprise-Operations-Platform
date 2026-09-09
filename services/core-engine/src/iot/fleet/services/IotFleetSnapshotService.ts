import { IotFleetSnapshotModel, IotFleetSnapshotValidator } from "@nexora/types/domains/iot/fleet/IotFleetSnapshot";

export class IotFleetSnapshotService {
  private repository = new Map<string, IotFleetSnapshotModel>();

  public create(data: Omit<IotFleetSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetSnapshotModel>): IotFleetSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetSnapshotModel = {
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
