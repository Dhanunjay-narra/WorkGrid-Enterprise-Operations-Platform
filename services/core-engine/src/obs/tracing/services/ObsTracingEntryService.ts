import { ObsTracingEntryModel, ObsTracingEntryValidator } from "@nexora/types/domains/obs/tracing/ObsTracingEntry";

export class ObsTracingEntryService {
  private repository = new Map<string, ObsTracingEntryModel>();

  public create(data: Omit<ObsTracingEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingEntryModel>): ObsTracingEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingEntryModel = {
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
