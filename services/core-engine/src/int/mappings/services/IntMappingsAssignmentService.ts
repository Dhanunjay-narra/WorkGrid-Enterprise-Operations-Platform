import { IntMappingsAssignmentModel, IntMappingsAssignmentValidator } from "@nexora/types/domains/int/mappings/IntMappingsAssignment";

export class IntMappingsAssignmentService {
  private repository = new Map<string, IntMappingsAssignmentModel>();

  public create(data: Omit<IntMappingsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsAssignmentModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsAssignmentModel>): IntMappingsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsAssignmentModel = {
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
