import { SupportEscalationAssignmentModel, SupportEscalationAssignmentValidator } from "@nexora/types/domains/support/escalation/SupportEscalationAssignment";

export class SupportEscalationAssignmentService {
  private repository = new Map<string, SupportEscalationAssignmentModel>();

  public create(data: Omit<SupportEscalationAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationAssignmentModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationAssignmentModel>): SupportEscalationAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationAssignmentModel = {
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
