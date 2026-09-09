import { BiForecastsAssignmentModel, BiForecastsAssignmentValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsAssignment";

export class BiForecastsAssignmentService {
  private repository = new Map<string, BiForecastsAssignmentModel>();

  public create(data: Omit<BiForecastsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsAssignmentModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsAssignmentModel>): BiForecastsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsAssignmentModel = {
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
