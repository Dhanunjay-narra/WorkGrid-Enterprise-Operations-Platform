import { DmsExportAssignmentModel, DmsExportAssignmentValidator } from "@nexora/types/domains/dms/export/DmsExportAssignment";

export class DmsExportAssignmentService {
  private repository = new Map<string, DmsExportAssignmentModel>();

  public create(data: Omit<DmsExportAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportAssignmentModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportAssignmentModel>): DmsExportAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportAssignmentModel = {
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
