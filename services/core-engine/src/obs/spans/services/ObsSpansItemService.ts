import { ObsSpansItemModel, ObsSpansItemValidator } from "@nexora/types/domains/obs/spans/ObsSpansItem";

export class ObsSpansItemService {
  private repository = new Map<string, ObsSpansItemModel>();

  public create(data: Omit<ObsSpansItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansItemModel>): ObsSpansItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansItemModel = {
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
