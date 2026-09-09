import { CrmContactsSessionModel, CrmContactsSessionValidator } from "@nexora/types/domains/crm/contacts/CrmContactsSession";

export class CrmContactsSessionService {
  private repository = new Map<string, CrmContactsSessionModel>();

  public create(data: Omit<CrmContactsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsSessionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsSessionModel>): CrmContactsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsSessionModel = {
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
