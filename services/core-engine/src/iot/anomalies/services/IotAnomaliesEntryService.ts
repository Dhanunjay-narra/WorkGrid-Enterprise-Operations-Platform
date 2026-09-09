import { IotAnomaliesEntryModel, IotAnomaliesEntryValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesEntry";

export class IotAnomaliesEntryService {
  private repository = new Map<string, IotAnomaliesEntryModel>();

  public create(data: Omit<IotAnomaliesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesEntryModel>): IotAnomaliesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesEntryModel = {
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
