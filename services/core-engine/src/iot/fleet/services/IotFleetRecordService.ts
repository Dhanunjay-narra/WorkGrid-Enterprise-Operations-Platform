import { IotFleetRecordModel, IotFleetRecordValidator } from "@nexora/types/domains/iot/fleet/IotFleetRecord";

export class IotFleetRecordService {
  private repository = new Map<string, IotFleetRecordModel>();

  public create(data: Omit<IotFleetRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetRecordModel>): IotFleetRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetRecordModel = {
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
