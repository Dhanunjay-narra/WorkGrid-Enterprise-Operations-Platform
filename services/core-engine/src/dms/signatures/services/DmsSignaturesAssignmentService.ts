import { DmsSignaturesAssignmentModel, DmsSignaturesAssignmentValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesAssignment";

export class DmsSignaturesAssignmentService {
  private repository = new Map<string, DmsSignaturesAssignmentModel>();

  public create(data: Omit<DmsSignaturesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesAssignmentModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesAssignmentModel>): DmsSignaturesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesAssignmentModel = {
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
