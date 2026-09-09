import { CrmAccountsItemModel, CrmAccountsItemValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsItem";

export class CrmAccountsItemService {
  private repository = new Map<string, CrmAccountsItemModel>();

  public create(data: Omit<CrmAccountsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsItemModel>): CrmAccountsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsItemModel = {
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
