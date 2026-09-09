import { CommDigestTaskModel, CommDigestTaskValidator } from "@nexora/types/domains/comm/digest/CommDigestTask";

export class CommDigestTaskService {
  private repository = new Map<string, CommDigestTaskModel>();

  public create(data: Omit<CommDigestTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestTaskModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestTaskModel>): CommDigestTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestTaskModel = {
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
