import { CommCallsTaskModel, CommCallsTaskValidator } from "@nexora/types/domains/comm/calls/CommCallsTask";

export class CommCallsTaskService {
  private repository = new Map<string, CommCallsTaskModel>();

  public create(data: Omit<CommCallsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsTaskModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsTaskModel>): CommCallsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsTaskModel = {
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
