import { DmsRetentionAssignmentModel, DmsRetentionAssignmentValidator } from "@nexora/types/domains/dms/retention/DmsRetentionAssignment";

export class DmsRetentionAssignmentService {
  private repository = new Map<string, DmsRetentionAssignmentModel>();

  public create(data: Omit<DmsRetentionAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionAssignmentModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionAssignmentModel>): DmsRetentionAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionAssignmentModel = {
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
