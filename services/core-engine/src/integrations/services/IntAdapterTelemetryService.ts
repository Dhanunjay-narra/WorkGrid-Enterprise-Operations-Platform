import { IntAdapterTelemetryData, IntAdapterTelemetryValidator } from "../../../../packages/types/src/domains/integrations/IntAdapterTelemetry";

export class IntAdapterTelemetryService {
  private repository = new Map<string, IntAdapterTelemetryData>();

  public create(data: Omit<IntAdapterTelemetryData, "id" | "createdAt" | "updatedAt">): IntAdapterTelemetryData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntAdapterTelemetryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntAdapterTelemetryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntAdapterTelemetry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntAdapterTelemetryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntAdapterTelemetryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntAdapterTelemetryData>): IntAdapterTelemetryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntAdapterTelemetryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
