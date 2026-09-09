import { CrmAccountData, CrmAccountValidator } from "../../../../packages/types/src/domains/crm/CrmAccount";

export class CrmAccountService {
  private repository = new Map<string, CrmAccountData>();

  public create(data: Omit<CrmAccountData, "id" | "createdAt" | "updatedAt">): CrmAccountData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmAccountData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccount: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmAccountData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmAccountData>): CrmAccountData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
