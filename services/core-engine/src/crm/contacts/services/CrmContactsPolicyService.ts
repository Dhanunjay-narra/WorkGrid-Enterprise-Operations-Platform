import { CrmContactsPolicyModel, CrmContactsPolicyValidator } from "@nexora/types/domains/crm/contacts/CrmContactsPolicy";

export class CrmContactsPolicyService {
  private repository = new Map<string, CrmContactsPolicyModel>();

  public create(data: Omit<CrmContactsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsPolicyModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsPolicyModel>): CrmContactsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsPolicyModel = {
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
