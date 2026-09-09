import { CrmAccountsRecordModel, CrmAccountsRecordValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsRecord";

export class CrmAccountsRecordService {
  private repository = new Map<string, CrmAccountsRecordModel>();

  public create(data: Omit<CrmAccountsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsRecordModel>): CrmAccountsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsRecordModel = {
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
