import { CrmHealthItemModel, CrmHealthItemValidator } from "@nexora/types/domains/crm/health/CrmHealthItem";

export class CrmHealthItemService {
  private repository = new Map<string, CrmHealthItemModel>();

  public create(data: Omit<CrmHealthItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthItemModel>): CrmHealthItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthItemModel = {
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
