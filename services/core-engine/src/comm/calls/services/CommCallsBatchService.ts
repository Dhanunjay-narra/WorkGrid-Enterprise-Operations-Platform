import { CommCallsBatchModel, CommCallsBatchValidator } from "@nexora/types/domains/comm/calls/CommCallsBatch";

export class CommCallsBatchService {
  private repository = new Map<string, CommCallsBatchModel>();

  public create(data: Omit<CommCallsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsBatchModel>): CommCallsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsBatchModel = {
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
