import { CommCallsNodeModel, CommCallsNodeValidator } from "@nexora/types/domains/comm/calls/CommCallsNode";

export class CommCallsNodeService {
  private repository = new Map<string, CommCallsNodeModel>();

  public create(data: Omit<CommCallsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsNodeModel>): CommCallsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsNodeModel = {
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
