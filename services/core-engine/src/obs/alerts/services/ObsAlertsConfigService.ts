import { ObsAlertsConfigModel, ObsAlertsConfigValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsConfig";

export class ObsAlertsConfigService {
  private repository = new Map<string, ObsAlertsConfigModel>();

  public create(data: Omit<ObsAlertsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsConfigModel>): ObsAlertsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsConfigModel = {
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
