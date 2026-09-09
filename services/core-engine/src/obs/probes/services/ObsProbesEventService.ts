import { ObsProbesEventModel, ObsProbesEventValidator } from "@nexora/types/domains/obs/probes/ObsProbesEvent";

export class ObsProbesEventService {
  private repository = new Map<string, ObsProbesEventModel>();

  public create(data: Omit<ObsProbesEventModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesEventModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesEventModel>): ObsProbesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesEventModel = {
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
