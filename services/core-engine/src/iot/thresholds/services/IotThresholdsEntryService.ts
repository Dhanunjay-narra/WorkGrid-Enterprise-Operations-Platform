import { IotThresholdsEntryModel, IotThresholdsEntryValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsEntry";

export class IotThresholdsEntryService {
  private repository = new Map<string, IotThresholdsEntryModel>();

  public create(data: Omit<IotThresholdsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsEntryModel>): IotThresholdsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsEntryModel = {
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
