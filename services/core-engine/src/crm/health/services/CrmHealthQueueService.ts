import { CrmHealthQueueModel, CrmHealthQueueValidator } from "@nexora/types/domains/crm/health/CrmHealthQueue";

export class CrmHealthQueueService {
  private repository = new Map<string, CrmHealthQueueModel>();

  public create(data: Omit<CrmHealthQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthQueueModel>): CrmHealthQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthQueueModel = {
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
