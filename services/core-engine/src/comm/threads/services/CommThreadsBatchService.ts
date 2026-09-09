import { CommThreadsBatchModel, CommThreadsBatchValidator } from "@nexora/types/domains/comm/threads/CommThreadsBatch";

export class CommThreadsBatchService {
  private repository = new Map<string, CommThreadsBatchModel>();

  public create(data: Omit<CommThreadsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsBatchModel>): CommThreadsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsBatchModel = {
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
