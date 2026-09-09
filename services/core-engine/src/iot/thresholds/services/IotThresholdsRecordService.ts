import { IotThresholdsRecordModel, IotThresholdsRecordValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsRecord";

export class IotThresholdsRecordService {
  private repository = new Map<string, IotThresholdsRecordModel>();

  public create(data: Omit<IotThresholdsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsRecordModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsRecordModel>): IotThresholdsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsRecordModel = {
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
