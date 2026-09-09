import { IntSyncAssignmentModel, IntSyncAssignmentValidator } from "@nexora/types/domains/int/sync/IntSyncAssignment";

export class IntSyncAssignmentService {
  private repository = new Map<string, IntSyncAssignmentModel>();

  public create(data: Omit<IntSyncAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncAssignmentModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncAssignmentModel>): IntSyncAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncAssignmentModel = {
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
