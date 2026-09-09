import { ObsProbesItemModel, ObsProbesItemValidator } from "@nexora/types/domains/obs/probes/ObsProbesItem";

export class ObsProbesItemService {
  private repository = new Map<string, ObsProbesItemModel>();

  public create(data: Omit<ObsProbesItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesItemModel>): ObsProbesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesItemModel = {
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
