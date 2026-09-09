import { CrmContactsRecordModel, CrmContactsRecordValidator } from "@nexora/types/domains/crm/contacts/CrmContactsRecord";

export class CrmContactsRecordService {
  private repository = new Map<string, CrmContactsRecordModel>();

  public create(data: Omit<CrmContactsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsRecordModel>): CrmContactsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsRecordModel = {
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
