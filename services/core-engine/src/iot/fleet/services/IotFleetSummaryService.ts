import { IotFleetSummaryModel, IotFleetSummaryValidator } from "@nexora/types/domains/iot/fleet/IotFleetSummary";

export class IotFleetSummaryService {
  private repository = new Map<string, IotFleetSummaryModel>();

  public create(data: Omit<IotFleetSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetSummaryModel>): IotFleetSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetSummaryModel = {
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
