import { ObsAlertsNodeModel, ObsAlertsNodeValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsNode";

export class ObsAlertsNodeService {
  private repository = new Map<string, ObsAlertsNodeModel>();

  public create(data: Omit<ObsAlertsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsNodeModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsNodeModel>): ObsAlertsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsNodeModel = {
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
