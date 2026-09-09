import { ObsAlertsProfileModel, ObsAlertsProfileValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsProfile";

export class ObsAlertsProfileService {
  private repository = new Map<string, ObsAlertsProfileModel>();

  public create(data: Omit<ObsAlertsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsProfileModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsProfileModel>): ObsAlertsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsProfileModel = {
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
