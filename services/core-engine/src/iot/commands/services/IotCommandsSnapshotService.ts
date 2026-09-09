import { IotCommandsSnapshotModel, IotCommandsSnapshotValidator } from "@nexora/types/domains/iot/commands/IotCommandsSnapshot";

export class IotCommandsSnapshotService {
  private repository = new Map<string, IotCommandsSnapshotModel>();

  public create(data: Omit<IotCommandsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsSnapshotModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsSnapshotModel>): IotCommandsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsSnapshotModel = {
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
