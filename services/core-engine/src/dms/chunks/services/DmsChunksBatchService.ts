import { DmsChunksBatchModel, DmsChunksBatchValidator } from "@nexora/types/domains/dms/chunks/DmsChunksBatch";

export class DmsChunksBatchService {
  private repository = new Map<string, DmsChunksBatchModel>();

  public create(data: Omit<DmsChunksBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksBatchModel>): DmsChunksBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksBatchModel = {
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
