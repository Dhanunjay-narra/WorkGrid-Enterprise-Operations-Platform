import { IotDevicesSnapshotModel, IotDevicesSnapshotValidator } from "@nexora/types/domains/iot/devices/IotDevicesSnapshot";

export class IotDevicesSnapshotService {
  private repository = new Map<string, IotDevicesSnapshotModel>();

  public create(data: Omit<IotDevicesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesSnapshotModel>): IotDevicesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesSnapshotModel = {
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
