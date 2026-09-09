import { CommCallsAssignmentModel, CommCallsAssignmentValidator } from "@nexora/types/domains/comm/calls/CommCallsAssignment";

export class CommCallsAssignmentService {
  private repository = new Map<string, CommCallsAssignmentModel>();

  public create(data: Omit<CommCallsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsAssignmentModel>): CommCallsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsAssignmentModel = {
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
