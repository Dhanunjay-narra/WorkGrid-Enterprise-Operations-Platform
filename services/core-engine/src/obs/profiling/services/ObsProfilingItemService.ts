import { ObsProfilingItemModel, ObsProfilingItemValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingItem";

export class ObsProfilingItemService {
  private repository = new Map<string, ObsProfilingItemModel>();

  public create(data: Omit<ObsProfilingItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingItemModel>): ObsProfilingItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingItemModel = {
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
