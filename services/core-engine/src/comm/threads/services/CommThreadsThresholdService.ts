import { CommThreadsThresholdModel, CommThreadsThresholdValidator } from "@nexora/types/domains/comm/threads/CommThreadsThreshold";

export class CommThreadsThresholdService {
  private repository = new Map<string, CommThreadsThresholdModel>();

  public create(data: Omit<CommThreadsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsThresholdModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsThresholdModel>): CommThreadsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsThresholdModel = {
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
