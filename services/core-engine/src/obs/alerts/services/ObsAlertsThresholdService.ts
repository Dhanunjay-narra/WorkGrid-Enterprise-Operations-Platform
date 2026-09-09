import { ObsAlertsThresholdModel, ObsAlertsThresholdValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsThreshold";

export class ObsAlertsThresholdService {
  private repository = new Map<string, ObsAlertsThresholdModel>();

  public create(data: Omit<ObsAlertsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsThresholdModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsThresholdModel>): ObsAlertsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsThresholdModel = {
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
