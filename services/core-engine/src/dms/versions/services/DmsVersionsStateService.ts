import { DmsVersionsStateModel, DmsVersionsStateValidator } from "@nexora/types/domains/dms/versions/DmsVersionsState";

export class DmsVersionsStateService {
  private repository = new Map<string, DmsVersionsStateModel>();

  public create(data: Omit<DmsVersionsStateModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsStateModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsStateModel>): DmsVersionsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsStateModel = {
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
