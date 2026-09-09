import { CrmAccountsPolicyModel, CrmAccountsPolicyValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsPolicy";

export class CrmAccountsPolicyService {
  private repository = new Map<string, CrmAccountsPolicyModel>();

  public create(data: Omit<CrmAccountsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsPolicyModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsPolicyModel>): CrmAccountsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsPolicyModel = {
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
