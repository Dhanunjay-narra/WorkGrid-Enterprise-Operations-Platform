import { CrmForecastingSessionModel, CrmForecastingSessionValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingSession";

export class CrmForecastingSessionService {
  private repository = new Map<string, CrmForecastingSessionModel>();

  public create(data: Omit<CrmForecastingSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingSessionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingSessionModel>): CrmForecastingSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingSessionModel = {
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
