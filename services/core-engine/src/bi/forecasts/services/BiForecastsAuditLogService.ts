import { BiForecastsAuditLogModel, BiForecastsAuditLogValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsAuditLog";

export class BiForecastsAuditLogService {
  private repository = new Map<string, BiForecastsAuditLogModel>();

  public create(data: Omit<BiForecastsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsAuditLogModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsAuditLogModel>): BiForecastsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsAuditLogModel = {
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
