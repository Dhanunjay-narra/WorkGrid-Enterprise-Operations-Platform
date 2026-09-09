import { IntConnectorConfigData, IntConnectorConfigValidator } from "../../../../packages/types/src/domains/integrations/IntConnectorConfig";

export class IntConnectorConfigService {
  private repository = new Map<string, IntConnectorConfigData>();

  public create(data: Omit<IntConnectorConfigData, "id" | "createdAt" | "updatedAt">): IntConnectorConfigData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntConnectorConfigData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntConnectorConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntConnectorConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntConnectorConfigData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntConnectorConfigData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntConnectorConfigData>): IntConnectorConfigData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntConnectorConfigData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
