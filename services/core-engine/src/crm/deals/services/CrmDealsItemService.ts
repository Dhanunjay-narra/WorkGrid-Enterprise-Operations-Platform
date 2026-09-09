import { CrmDealsItemModel, CrmDealsItemValidator } from "@nexora/types/domains/crm/deals/CrmDealsItem";

export class CrmDealsItemService {
  private repository = new Map<string, CrmDealsItemModel>();

  public create(data: Omit<CrmDealsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsItemModel>): CrmDealsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsItemModel = {
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
