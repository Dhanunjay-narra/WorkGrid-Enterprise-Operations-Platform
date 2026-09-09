import { CrmAccountsQueueModel, CrmAccountsQueueValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsQueue";

export class CrmAccountsQueueService {
  private repository = new Map<string, CrmAccountsQueueModel>();

  public create(data: Omit<CrmAccountsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsQueueModel>): CrmAccountsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsQueueModel = {
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
