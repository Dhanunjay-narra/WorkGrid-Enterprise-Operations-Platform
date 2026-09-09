import { BiKpisItemModel, BiKpisItemValidator } from "@nexora/types/domains/bi/kpis/BiKpisItem";

export class BiKpisItemService {
  private repository = new Map<string, BiKpisItemModel>();

  public create(data: Omit<BiKpisItemModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisItemModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisItemModel>): BiKpisItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisItemModel = {
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
