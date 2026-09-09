import { BiWidgetsMappingModel, BiWidgetsMappingValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsMapping";

export class BiWidgetsMappingService {
  private repository = new Map<string, BiWidgetsMappingModel>();

  public create(data: Omit<BiWidgetsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsMappingModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsMappingModel>): BiWidgetsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsMappingModel = {
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
