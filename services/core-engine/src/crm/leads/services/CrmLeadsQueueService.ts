import { CrmLeadsQueueModel, CrmLeadsQueueValidator } from "@nexora/types/domains/crm/leads/CrmLeadsQueue";

export class CrmLeadsQueueService {
  private repository = new Map<string, CrmLeadsQueueModel>();

  public create(data: Omit<CrmLeadsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsQueueModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsQueueModel>): CrmLeadsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsQueueModel = {
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
