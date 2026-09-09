import { CrmContactsQueueModel, CrmContactsQueueValidator } from "@nexora/types/domains/crm/contacts/CrmContactsQueue";

export class CrmContactsQueueService {
  private repository = new Map<string, CrmContactsQueueModel>();

  public create(data: Omit<CrmContactsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsQueueModel>): CrmContactsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsQueueModel = {
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
