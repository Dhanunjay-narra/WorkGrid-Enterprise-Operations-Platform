import { BiDataSourceData, BiDataSourceValidator } from "../../../../packages/types/src/domains/analytics/BiDataSource";

export class BiDataSourceService {
  private repository = new Map<string, BiDataSourceData>();

  public create(data: Omit<BiDataSourceData, "id" | "createdAt" | "updatedAt">): BiDataSourceData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiDataSourceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDataSourceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDataSource: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDataSourceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiDataSourceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiDataSourceData>): BiDataSourceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDataSourceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
