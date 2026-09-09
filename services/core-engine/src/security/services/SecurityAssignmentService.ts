import { SecurityAssignmentModel, SecurityAssignmentValidator } from "@nexora/types/domains/security/SecurityAssignment";

export class SecurityAssignmentService {
  private repository = new Map<string, SecurityAssignmentModel>();

  public create(data: Omit<SecurityAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityAssignmentModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityAssignmentModel>): SecurityAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityAssignmentModel = {
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
