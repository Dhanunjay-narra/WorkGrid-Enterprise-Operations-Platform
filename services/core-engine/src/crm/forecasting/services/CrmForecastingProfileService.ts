import { CrmForecastingProfileModel, CrmForecastingProfileValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingProfile";

export class CrmForecastingProfileService {
  private repository = new Map<string, CrmForecastingProfileModel>();

  public create(data: Omit<CrmForecastingProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingProfileModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingProfileModel>): CrmForecastingProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingProfileModel = {
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
