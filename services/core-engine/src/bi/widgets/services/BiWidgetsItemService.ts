import { BiWidgetsItemModel, BiWidgetsItemValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsItem";

export class BiWidgetsItemService {
  private repository = new Map<string, BiWidgetsItemModel>();

  public create(data: Omit<BiWidgetsItemModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsItemModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsItemModel>): BiWidgetsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsItemModel = {
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
