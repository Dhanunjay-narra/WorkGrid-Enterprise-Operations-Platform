import { BiWidgetsThresholdModel, BiWidgetsThresholdValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsThreshold";

export class BiWidgetsThresholdService {
  private repository = new Map<string, BiWidgetsThresholdModel>();

  public create(data: Omit<BiWidgetsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsThresholdModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsThresholdModel>): BiWidgetsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsThresholdModel = {
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
