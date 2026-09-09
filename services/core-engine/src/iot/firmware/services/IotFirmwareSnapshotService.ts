import { IotFirmwareSnapshotModel, IotFirmwareSnapshotValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareSnapshot";

export class IotFirmwareSnapshotService {
  private repository = new Map<string, IotFirmwareSnapshotModel>();

  public create(data: Omit<IotFirmwareSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareSnapshotModel>): IotFirmwareSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareSnapshotModel = {
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
