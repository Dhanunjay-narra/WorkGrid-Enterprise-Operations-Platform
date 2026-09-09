import { ObsAlertsTaskModel, ObsAlertsTaskValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsTask";

export class ObsAlertsTaskService {
  private repository = new Map<string, ObsAlertsTaskModel>();

  public create(data: Omit<ObsAlertsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsTaskModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsTaskModel>): ObsAlertsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsTaskModel = {
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
