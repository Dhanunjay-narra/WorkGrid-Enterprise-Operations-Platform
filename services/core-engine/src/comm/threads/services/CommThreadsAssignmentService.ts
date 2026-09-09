import { CommThreadsAssignmentModel, CommThreadsAssignmentValidator } from "@nexora/types/domains/comm/threads/CommThreadsAssignment";

export class CommThreadsAssignmentService {
  private repository = new Map<string, CommThreadsAssignmentModel>();

  public create(data: Omit<CommThreadsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsAssignmentModel>): CommThreadsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsAssignmentModel = {
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
