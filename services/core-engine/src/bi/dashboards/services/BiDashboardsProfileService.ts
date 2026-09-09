import { BiDashboardsProfileModel, BiDashboardsProfileValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsProfile";

export class BiDashboardsProfileService {
  private repository = new Map<string, BiDashboardsProfileModel>();

  public create(data: Omit<BiDashboardsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsProfileModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsProfileModel>): BiDashboardsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsProfileModel = {
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
