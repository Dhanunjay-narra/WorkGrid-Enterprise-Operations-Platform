import { BiAnomaliesEventModel, BiAnomaliesEventValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesEvent";

export class BiAnomaliesEventService {
  private repository = new Map<string, BiAnomaliesEventModel>();

  public create(data: Omit<BiAnomaliesEventModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesEventModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesEventModel>): BiAnomaliesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesEventModel = {
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
