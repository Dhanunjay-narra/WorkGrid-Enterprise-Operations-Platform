import { SupSupportAgentData, SupSupportAgentValidator } from "../../../../packages/types/src/domains/support/SupSupportAgent";

export class SupSupportAgentService {
  private repository = new Map<string, SupSupportAgentData>();

  public create(data: Omit<SupSupportAgentData, "id" | "createdAt" | "updatedAt">): SupSupportAgentData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupSupportAgentData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupSupportAgentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupSupportAgent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupSupportAgentData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupSupportAgentData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupSupportAgentData>): SupSupportAgentData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupSupportAgentData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
