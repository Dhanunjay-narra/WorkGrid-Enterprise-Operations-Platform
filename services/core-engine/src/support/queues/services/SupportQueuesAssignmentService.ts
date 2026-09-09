import { SupportQueuesAssignmentModel, SupportQueuesAssignmentValidator } from "@nexora/types/domains/support/queues/SupportQueuesAssignment";

export class SupportQueuesAssignmentService {
  private repository = new Map<string, SupportQueuesAssignmentModel>();

  public create(data: Omit<SupportQueuesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesAssignmentModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesAssignmentModel>): SupportQueuesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesAssignmentModel = {
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
