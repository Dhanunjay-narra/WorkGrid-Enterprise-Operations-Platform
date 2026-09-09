import { BiWidgetsPolicyModel, BiWidgetsPolicyValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsPolicy";

export class BiWidgetsPolicyService {
  private repository = new Map<string, BiWidgetsPolicyModel>();

  public create(data: Omit<BiWidgetsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsPolicyModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsPolicyModel>): BiWidgetsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsPolicyModel = {
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
