import { ObsSpansEntryModel, ObsSpansEntryValidator } from "@nexora/types/domains/obs/spans/ObsSpansEntry";

export class ObsSpansEntryService {
  private repository = new Map<string, ObsSpansEntryModel>();

  public create(data: Omit<ObsSpansEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansEntryModel>): ObsSpansEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansEntryModel = {
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
