import { DmsChunksStateModel, DmsChunksStateValidator } from "@nexora/types/domains/dms/chunks/DmsChunksState";

export class DmsChunksStateService {
  private repository = new Map<string, DmsChunksStateModel>();

  public create(data: Omit<DmsChunksStateModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksStateModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksStateModel>): DmsChunksStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksStateModel = {
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
