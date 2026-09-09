import { CrmAccountsPayloadModel, CrmAccountsPayloadValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsPayload";

export class CrmAccountsPayloadService {
  private repository = new Map<string, CrmAccountsPayloadModel>();

  public create(data: Omit<CrmAccountsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsPayloadModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsPayloadModel>): CrmAccountsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsPayloadModel = {
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
