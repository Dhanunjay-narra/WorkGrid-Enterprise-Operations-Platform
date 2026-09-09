import { ObsAlertsPayloadModel, ObsAlertsPayloadValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsPayload";

export class ObsAlertsPayloadService {
  private repository = new Map<string, ObsAlertsPayloadModel>();

  public create(data: Omit<ObsAlertsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsPayloadModel>): ObsAlertsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsPayloadModel = {
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
