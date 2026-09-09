import { DmsChunksMappingModel, DmsChunksMappingValidator } from "@nexora/types/domains/dms/chunks/DmsChunksMapping";

export class DmsChunksMappingService {
  private repository = new Map<string, DmsChunksMappingModel>();

  public create(data: Omit<DmsChunksMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksMappingModel>): DmsChunksMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksMappingModel = {
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
