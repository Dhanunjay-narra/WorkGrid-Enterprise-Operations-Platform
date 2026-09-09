import { DmsChunksTaskModel, DmsChunksTaskValidator } from "@nexora/types/domains/dms/chunks/DmsChunksTask";

export class DmsChunksTaskService {
  private repository = new Map<string, DmsChunksTaskModel>();

  public create(data: Omit<DmsChunksTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksTaskModel>): DmsChunksTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksTaskModel = {
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
