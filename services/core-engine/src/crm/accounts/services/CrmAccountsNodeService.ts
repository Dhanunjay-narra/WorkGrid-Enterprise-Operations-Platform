import { CrmAccountsNodeModel, CrmAccountsNodeValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsNode";

export class CrmAccountsNodeService {
  private repository = new Map<string, CrmAccountsNodeModel>();

  public create(data: Omit<CrmAccountsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsNodeModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsNodeModel>): CrmAccountsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsNodeModel = {
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
