import { DmsSignaturesItemModel, DmsSignaturesItemValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesItem";

export class DmsSignaturesItemService {
  private repository = new Map<string, DmsSignaturesItemModel>();

  public create(data: Omit<DmsSignaturesItemModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesItemModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesItemModel>): DmsSignaturesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesItemModel = {
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
