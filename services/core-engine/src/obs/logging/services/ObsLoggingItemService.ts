import { ObsLoggingItemModel, ObsLoggingItemValidator } from "@nexora/types/domains/obs/logging/ObsLoggingItem";

export class ObsLoggingItemService {
  private repository = new Map<string, ObsLoggingItemModel>();

  public create(data: Omit<ObsLoggingItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingItemModel>): ObsLoggingItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingItemModel = {
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
