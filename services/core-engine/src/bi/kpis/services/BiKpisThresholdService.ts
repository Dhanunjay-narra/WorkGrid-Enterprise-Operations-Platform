import { BiKpisThresholdModel, BiKpisThresholdValidator } from "@nexora/types/domains/bi/kpis/BiKpisThreshold";

export class BiKpisThresholdService {
  private repository = new Map<string, BiKpisThresholdModel>();

  public create(data: Omit<BiKpisThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisThresholdModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisThresholdModel>): BiKpisThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisThresholdModel = {
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
