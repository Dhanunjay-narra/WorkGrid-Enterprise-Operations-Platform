import { ObsProbesNodeModel, ObsProbesNodeValidator } from "@nexora/types/domains/obs/probes/ObsProbesNode";

export class ObsProbesNodeService {
  private repository = new Map<string, ObsProbesNodeModel>();

  public create(data: Omit<ObsProbesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesNodeModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesNodeModel>): ObsProbesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesNodeModel = {
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
