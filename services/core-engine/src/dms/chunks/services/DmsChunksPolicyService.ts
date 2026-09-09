import { DmsChunksPolicyModel, DmsChunksPolicyValidator } from "@nexora/types/domains/dms/chunks/DmsChunksPolicy";

export class DmsChunksPolicyService {
  private repository = new Map<string, DmsChunksPolicyModel>();

  public create(data: Omit<DmsChunksPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksPolicyModel>): DmsChunksPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksPolicyModel = {
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
