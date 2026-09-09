import { DmsFilesAssignmentModel, DmsFilesAssignmentValidator } from "@nexora/types/domains/dms/files/DmsFilesAssignment";

export class DmsFilesAssignmentService {
  private repository = new Map<string, DmsFilesAssignmentModel>();

  public create(data: Omit<DmsFilesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesAssignmentModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesAssignmentModel>): DmsFilesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesAssignmentModel = {
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
