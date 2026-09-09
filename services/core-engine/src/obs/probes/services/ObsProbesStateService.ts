import { ObsProbesStateModel, ObsProbesStateValidator } from "@nexora/types/domains/obs/probes/ObsProbesState";

export class ObsProbesStateService {
  private repository = new Map<string, ObsProbesStateModel>();

  public create(data: Omit<ObsProbesStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesStateModel>): ObsProbesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesStateModel = {
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
