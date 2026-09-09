import { ObsLoggingEntryModel, ObsLoggingEntryValidator } from "@nexora/types/domains/obs/logging/ObsLoggingEntry";

export class ObsLoggingEntryService {
  private repository = new Map<string, ObsLoggingEntryModel>();

  public create(data: Omit<ObsLoggingEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingEntryModel>): ObsLoggingEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingEntryModel = {
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
