import { SupportCsatAssignmentModel, SupportCsatAssignmentValidator } from "@nexora/types/domains/support/csat/SupportCsatAssignment";

export class SupportCsatAssignmentService {
  private repository = new Map<string, SupportCsatAssignmentModel>();

  public create(data: Omit<SupportCsatAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatAssignmentModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatAssignmentModel>): SupportCsatAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatAssignmentModel = {
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
