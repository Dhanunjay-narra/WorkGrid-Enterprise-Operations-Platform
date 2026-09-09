import { BiWidgetsBatchModel, BiWidgetsBatchValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsBatch";

export class BiWidgetsBatchService {
  private repository = new Map<string, BiWidgetsBatchModel>();

  public create(data: Omit<BiWidgetsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsBatchModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsBatchModel>): BiWidgetsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsBatchModel = {
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
