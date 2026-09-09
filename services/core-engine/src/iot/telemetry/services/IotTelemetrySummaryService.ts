import { IotTelemetrySummaryModel, IotTelemetrySummaryValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetrySummary";

export class IotTelemetrySummaryService {
  private repository = new Map<string, IotTelemetrySummaryModel>();

  public create(data: Omit<IotTelemetrySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetrySummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetrySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetrySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetrySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetrySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetrySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetrySummaryModel>): IotTelemetrySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetrySummaryModel = {
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
