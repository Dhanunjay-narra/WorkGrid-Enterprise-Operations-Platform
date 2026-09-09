import { IotAnomaliesSummaryModel, IotAnomaliesSummaryValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesSummary";

export class IotAnomaliesSummaryService {
  private repository = new Map<string, IotAnomaliesSummaryModel>();

  public create(data: Omit<IotAnomaliesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesSummaryModel>): IotAnomaliesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesSummaryModel = {
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
