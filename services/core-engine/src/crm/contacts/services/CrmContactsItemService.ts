import { CrmContactsItemModel, CrmContactsItemValidator } from "@nexora/types/domains/crm/contacts/CrmContactsItem";

export class CrmContactsItemService {
  private repository = new Map<string, CrmContactsItemModel>();

  public create(data: Omit<CrmContactsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsItemModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsItemModel>): CrmContactsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsItemModel = {
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
