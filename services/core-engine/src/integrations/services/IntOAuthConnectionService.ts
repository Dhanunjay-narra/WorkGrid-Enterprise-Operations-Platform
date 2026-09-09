import { IntOAuthConnectionData, IntOAuthConnectionValidator } from "../../../../packages/types/src/domains/integrations/IntOAuthConnection";

export class IntOAuthConnectionService {
  private repository = new Map<string, IntOAuthConnectionData>();

  public create(data: Omit<IntOAuthConnectionData, "id" | "createdAt" | "updatedAt">): IntOAuthConnectionData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntOAuthConnectionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOAuthConnectionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOAuthConnection: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOAuthConnectionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntOAuthConnectionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntOAuthConnectionData>): IntOAuthConnectionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOAuthConnectionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
