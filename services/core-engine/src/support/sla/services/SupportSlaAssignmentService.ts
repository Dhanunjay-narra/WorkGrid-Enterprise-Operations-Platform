import { SupportSlaAssignmentModel, SupportSlaAssignmentValidator } from "@nexora/types/domains/support/sla/SupportSlaAssignment";

export class SupportSlaAssignmentService {
  private repository = new Map<string, SupportSlaAssignmentModel>();

  public create(data: Omit<SupportSlaAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaAssignmentModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaAssignmentModel>): SupportSlaAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaAssignmentModel = {
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
