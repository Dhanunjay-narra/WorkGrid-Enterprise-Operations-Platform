import { ObsProfilingNodeModel, ObsProfilingNodeValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingNode";

export class ObsProfilingNodeService {
  private repository = new Map<string, ObsProfilingNodeModel>();

  public create(data: Omit<ObsProfilingNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingNodeModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingNodeModel>): ObsProfilingNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingNodeModel = {
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
