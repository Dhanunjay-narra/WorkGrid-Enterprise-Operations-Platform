import { ObsAlertsPolicyModel, ObsAlertsPolicyValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsPolicy";

export class ObsAlertsPolicyService {
  private repository = new Map<string, ObsAlertsPolicyModel>();

  public create(data: Omit<ObsAlertsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsPolicyModel>): ObsAlertsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsPolicyModel = {
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
