import { CrmAccountsTaskModel, CrmAccountsTaskValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsTask";

export class CrmAccountsTaskService {
  private repository = new Map<string, CrmAccountsTaskModel>();

  public create(data: Omit<CrmAccountsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsTaskModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsTaskModel>): CrmAccountsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsTaskModel = {
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
