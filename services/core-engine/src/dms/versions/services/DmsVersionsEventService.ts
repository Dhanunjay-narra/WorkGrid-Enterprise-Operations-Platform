import { DmsVersionsEventModel, DmsVersionsEventValidator } from "@nexora/types/domains/dms/versions/DmsVersionsEvent";

export class DmsVersionsEventService {
  private repository = new Map<string, DmsVersionsEventModel>();

  public create(data: Omit<DmsVersionsEventModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsEventModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsEventModel>): DmsVersionsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsEventModel = {
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
