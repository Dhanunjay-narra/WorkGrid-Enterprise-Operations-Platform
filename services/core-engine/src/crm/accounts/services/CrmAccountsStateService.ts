import { CrmAccountsStateModel, CrmAccountsStateValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsState";

export class CrmAccountsStateService {
  private repository = new Map<string, CrmAccountsStateModel>();

  public create(data: Omit<CrmAccountsStateModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsStateModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsStateModel>): CrmAccountsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsStateModel = {
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
