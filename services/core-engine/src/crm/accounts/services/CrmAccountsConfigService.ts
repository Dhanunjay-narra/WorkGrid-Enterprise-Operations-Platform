import { CrmAccountsConfigModel, CrmAccountsConfigValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsConfig";

export class CrmAccountsConfigService {
  private repository = new Map<string, CrmAccountsConfigModel>();

  public create(data: Omit<CrmAccountsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsConfigModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsConfigModel>): CrmAccountsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsConfigModel = {
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
