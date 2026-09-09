import { SupSlaPolicyData, SupSlaPolicyValidator } from "../../../../packages/types/src/domains/support/SupSlaPolicy";

export class SupSlaPolicyService {
  private repository = new Map<string, SupSlaPolicyData>();

  public create(data: Omit<SupSlaPolicyData, "id" | "createdAt" | "updatedAt">): SupSlaPolicyData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupSlaPolicyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupSlaPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupSlaPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupSlaPolicyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupSlaPolicyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupSlaPolicyData>): SupSlaPolicyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupSlaPolicyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
