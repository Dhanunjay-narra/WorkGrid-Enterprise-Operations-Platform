import { IotThresholdsSummaryModel, IotThresholdsSummaryValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsSummary";

export class IotThresholdsSummaryService {
  private repository = new Map<string, IotThresholdsSummaryModel>();

  public create(data: Omit<IotThresholdsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsSummaryModel>): IotThresholdsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsSummaryModel = {
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
