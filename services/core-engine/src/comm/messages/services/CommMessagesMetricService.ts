import { CommMessagesMetricModel, CommMessagesMetricValidator } from "@nexora/types/domains/comm/messages/CommMessagesMetric";

export class CommMessagesMetricService {
  private repository = new Map<string, CommMessagesMetricModel>();

  public create(data: Omit<CommMessagesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesMetricModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesMetricModel>): CommMessagesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesMetricModel = {
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
