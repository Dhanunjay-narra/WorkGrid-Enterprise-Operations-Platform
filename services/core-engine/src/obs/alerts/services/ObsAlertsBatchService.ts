import { ObsAlertsBatchModel, ObsAlertsBatchValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsBatch";

export class ObsAlertsBatchService {
  private repository = new Map<string, ObsAlertsBatchModel>();

  public create(data: Omit<ObsAlertsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsBatchModel>): ObsAlertsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsBatchModel = {
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
