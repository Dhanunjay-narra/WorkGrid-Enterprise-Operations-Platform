import { CommCallsStateModel, CommCallsStateValidator } from "@nexora/types/domains/comm/calls/CommCallsState";

export class CommCallsStateService {
  private repository = new Map<string, CommCallsStateModel>();

  public create(data: Omit<CommCallsStateModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsStateModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsStateModel>): CommCallsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsStateModel = {
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
