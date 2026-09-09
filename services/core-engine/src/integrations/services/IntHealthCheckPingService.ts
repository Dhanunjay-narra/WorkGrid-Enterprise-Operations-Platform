import { IntHealthCheckPingData, IntHealthCheckPingValidator } from "../../../../packages/types/src/domains/integrations/IntHealthCheckPing";

export class IntHealthCheckPingService {
  private repository = new Map<string, IntHealthCheckPingData>();

  public create(data: Omit<IntHealthCheckPingData, "id" | "createdAt" | "updatedAt">): IntHealthCheckPingData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntHealthCheckPingData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntHealthCheckPingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntHealthCheckPing: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntHealthCheckPingData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntHealthCheckPingData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntHealthCheckPingData>): IntHealthCheckPingData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntHealthCheckPingData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
