import { DmsChunksNodeModel, DmsChunksNodeValidator } from "@nexora/types/domains/dms/chunks/DmsChunksNode";

export class DmsChunksNodeService {
  private repository = new Map<string, DmsChunksNodeModel>();

  public create(data: Omit<DmsChunksNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksNodeModel>): DmsChunksNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksNodeModel = {
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
