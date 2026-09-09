import { IotLocationsSnapshotModel, IotLocationsSnapshotValidator } from "@nexora/types/domains/iot/locations/IotLocationsSnapshot";

export class IotLocationsSnapshotService {
  private repository = new Map<string, IotLocationsSnapshotModel>();

  public create(data: Omit<IotLocationsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsSnapshotModel>): IotLocationsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsSnapshotModel = {
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
