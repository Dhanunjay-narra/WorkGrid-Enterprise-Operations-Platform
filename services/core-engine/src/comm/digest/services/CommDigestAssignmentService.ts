import { CommDigestAssignmentModel, CommDigestAssignmentValidator } from "@nexora/types/domains/comm/digest/CommDigestAssignment";

export class CommDigestAssignmentService {
  private repository = new Map<string, CommDigestAssignmentModel>();

  public create(data: Omit<CommDigestAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestAssignmentModel>): CommDigestAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestAssignmentModel = {
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
