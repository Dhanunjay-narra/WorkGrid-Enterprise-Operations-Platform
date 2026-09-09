import { ObsProbesEntryModel, ObsProbesEntryValidator } from "@nexora/types/domains/obs/probes/ObsProbesEntry";

export class ObsProbesEntryService {
  private repository = new Map<string, ObsProbesEntryModel>();

  public create(data: Omit<ObsProbesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesEntryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesEntryModel>): ObsProbesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesEntryModel = {
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
