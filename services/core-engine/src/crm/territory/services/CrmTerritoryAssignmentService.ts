import { CrmTerritoryAssignmentModel, CrmTerritoryAssignmentValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryAssignment";

export class CrmTerritoryAssignmentService {
  private repository = new Map<string, CrmTerritoryAssignmentModel>();

  public create(data: Omit<CrmTerritoryAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryAssignmentModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryAssignmentModel>): CrmTerritoryAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryAssignmentModel = {
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
