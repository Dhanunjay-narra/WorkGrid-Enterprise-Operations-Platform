import { DmsChunksItemModel, DmsChunksItemValidator } from "@nexora/types/domains/dms/chunks/DmsChunksItem";

export class DmsChunksItemService {
  private repository = new Map<string, DmsChunksItemModel>();

  public create(data: Omit<DmsChunksItemModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksItemModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksItemModel>): DmsChunksItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksItemModel = {
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
