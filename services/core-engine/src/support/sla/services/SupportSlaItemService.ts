import { SupportSlaItemModel, SupportSlaItemValidator } from "@nexora/types/domains/support/sla/SupportSlaItem";

export class SupportSlaItemService {
  private repository = new Map<string, SupportSlaItemModel>();

  public create(data: Omit<SupportSlaItemModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaItemModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaItemModel>): SupportSlaItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaItemModel = {
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
