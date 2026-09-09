import { DmsChunksAssignmentModel, DmsChunksAssignmentValidator } from "@nexora/types/domains/dms/chunks/DmsChunksAssignment";

export class DmsChunksAssignmentService {
  private repository = new Map<string, DmsChunksAssignmentModel>();

  public create(data: Omit<DmsChunksAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksAssignmentModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksAssignmentModel>): DmsChunksAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksAssignmentModel = {
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
