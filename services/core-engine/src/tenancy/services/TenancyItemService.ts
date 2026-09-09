import { TenancyItemModel, TenancyItemValidator } from "@nexora/types/domains/tenancy/TenancyItem";

export class TenancyItemService {
  private repository = new Map<string, TenancyItemModel>();

  public create(data: Omit<TenancyItemModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyItemModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyItemModel>): TenancyItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyItemModel = {
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
