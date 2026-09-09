import { SupportCsatItemModel, SupportCsatItemValidator } from "@nexora/types/domains/support/csat/SupportCsatItem";

export class SupportCsatItemService {
  private repository = new Map<string, SupportCsatItemModel>();

  public create(data: Omit<SupportCsatItemModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatItemModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatItemModel>): SupportCsatItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatItemModel = {
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
