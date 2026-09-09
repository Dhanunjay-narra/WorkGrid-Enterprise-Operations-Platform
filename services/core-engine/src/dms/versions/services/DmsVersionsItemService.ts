import { DmsVersionsItemModel, DmsVersionsItemValidator } from "@nexora/types/domains/dms/versions/DmsVersionsItem";

export class DmsVersionsItemService {
  private repository = new Map<string, DmsVersionsItemModel>();

  public create(data: Omit<DmsVersionsItemModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsItemModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsItemModel>): DmsVersionsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsItemModel = {
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
