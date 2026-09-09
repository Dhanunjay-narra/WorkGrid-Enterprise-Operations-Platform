import { CrmLeadsPolicyModel, CrmLeadsPolicyValidator } from "@nexora/types/domains/crm/leads/CrmLeadsPolicy";

export class CrmLeadsPolicyService {
  private repository = new Map<string, CrmLeadsPolicyModel>();

  public create(data: Omit<CrmLeadsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsPolicyModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsPolicyModel>): CrmLeadsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsPolicyModel = {
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
