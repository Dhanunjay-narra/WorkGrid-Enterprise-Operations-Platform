import { WfDeadLetterQueueData, WfDeadLetterQueueValidator } from "../../../../packages/types/src/domains/workflow/WfDeadLetterQueue";

export class WfDeadLetterQueueService {
  private repository = new Map<string, WfDeadLetterQueueData>();

  public create(data: Omit<WfDeadLetterQueueData, "id" | "createdAt" | "updatedAt">): WfDeadLetterQueueData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfDeadLetterQueueData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfDeadLetterQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfDeadLetterQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfDeadLetterQueueData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfDeadLetterQueueData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfDeadLetterQueueData>): WfDeadLetterQueueData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfDeadLetterQueueData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
