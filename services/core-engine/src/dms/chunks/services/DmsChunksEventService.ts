import { DmsChunksEventModel, DmsChunksEventValidator } from "@nexora/types/domains/dms/chunks/DmsChunksEvent";

export class DmsChunksEventService {
  private repository = new Map<string, DmsChunksEventModel>();

  public create(data: Omit<DmsChunksEventModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksEventModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksEventModel>): DmsChunksEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksEventModel = {
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
