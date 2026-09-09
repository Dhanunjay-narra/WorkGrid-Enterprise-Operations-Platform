import { ComplianceAssignmentModel, ComplianceAssignmentValidator } from "@nexora/types/domains/compliance/ComplianceAssignment";

export class ComplianceAssignmentService {
  private repository = new Map<string, ComplianceAssignmentModel>();

  public create(data: Omit<ComplianceAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceAssignmentModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceAssignmentModel>): ComplianceAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceAssignmentModel = {
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
