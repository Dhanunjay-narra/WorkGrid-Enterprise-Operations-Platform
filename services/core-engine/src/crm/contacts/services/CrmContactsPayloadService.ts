import { CrmContactsPayloadModel, CrmContactsPayloadValidator } from "@nexora/types/domains/crm/contacts/CrmContactsPayload";

export class CrmContactsPayloadService {
  private repository = new Map<string, CrmContactsPayloadModel>();

  public create(data: Omit<CrmContactsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsPayloadModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsPayloadModel>): CrmContactsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsPayloadModel = {
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
