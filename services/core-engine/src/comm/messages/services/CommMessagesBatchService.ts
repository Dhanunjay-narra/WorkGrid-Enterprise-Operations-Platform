import { CommMessagesBatchModel, CommMessagesBatchValidator } from "@nexora/types/domains/comm/messages/CommMessagesBatch";

export class CommMessagesBatchService {
  private repository = new Map<string, CommMessagesBatchModel>();

  public create(data: Omit<CommMessagesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesBatchModel>): CommMessagesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesBatchModel = {
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
