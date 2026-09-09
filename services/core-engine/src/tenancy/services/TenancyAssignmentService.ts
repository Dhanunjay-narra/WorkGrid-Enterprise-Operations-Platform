import { TenancyAssignmentModel, TenancyAssignmentValidator } from "@nexora/types/domains/tenancy/TenancyAssignment";

export class TenancyAssignmentService {
  private repository = new Map<string, TenancyAssignmentModel>();

  public create(data: Omit<TenancyAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyAssignmentModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyAssignmentModel>): TenancyAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyAssignmentModel = {
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
