import { BiDashboardsRecordModel, BiDashboardsRecordValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsRecord";

export class BiDashboardsRecordService {
  private repository = new Map<string, BiDashboardsRecordModel>();

  public create(data: Omit<BiDashboardsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsRecordModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsRecordModel>): BiDashboardsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsRecordModel = {
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
