import { BiWidgetData, BiWidgetValidator } from "../../../../packages/types/src/domains/analytics/BiWidget";

export class BiWidgetService {
  private repository = new Map<string, BiWidgetData>();

  public create(data: Omit<BiWidgetData, "id" | "createdAt" | "updatedAt">): BiWidgetData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiWidgetData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidget: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiWidgetData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiWidgetData>): BiWidgetData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
