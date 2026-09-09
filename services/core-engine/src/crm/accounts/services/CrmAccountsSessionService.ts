import { CrmAccountsSessionModel, CrmAccountsSessionValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsSession";

export class CrmAccountsSessionService {
  private repository = new Map<string, CrmAccountsSessionModel>();

  public create(data: Omit<CrmAccountsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsSessionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsSessionModel>): CrmAccountsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsSessionModel = {
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
