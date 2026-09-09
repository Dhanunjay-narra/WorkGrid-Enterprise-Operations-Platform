import { CommDigestNodeModel, CommDigestNodeValidator } from "@nexora/types/domains/comm/digest/CommDigestNode";

export class CommDigestNodeService {
  private repository = new Map<string, CommDigestNodeModel>();

  public create(data: Omit<CommDigestNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestNodeModel>): CommDigestNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestNodeModel = {
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
