import { CrmContactsEventModel, CrmContactsEventValidator } from "@nexora/types/domains/crm/contacts/CrmContactsEvent";

export class CrmContactsEventService {
  private repository = new Map<string, CrmContactsEventModel>();

  public create(data: Omit<CrmContactsEventModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsEventModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsEventModel>): CrmContactsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsEventModel = {
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
