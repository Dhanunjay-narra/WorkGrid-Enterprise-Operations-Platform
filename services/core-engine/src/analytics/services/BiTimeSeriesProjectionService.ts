import { BiTimeSeriesProjectionData, BiTimeSeriesProjectionValidator } from "../../../../packages/types/src/domains/analytics/BiTimeSeriesProjection";

export class BiTimeSeriesProjectionService {
  private repository = new Map<string, BiTimeSeriesProjectionData>();

  public create(data: Omit<BiTimeSeriesProjectionData, "id" | "createdAt" | "updatedAt">): BiTimeSeriesProjectionData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiTimeSeriesProjectionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiTimeSeriesProjectionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiTimeSeriesProjection: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiTimeSeriesProjectionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiTimeSeriesProjectionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiTimeSeriesProjectionData>): BiTimeSeriesProjectionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiTimeSeriesProjectionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
