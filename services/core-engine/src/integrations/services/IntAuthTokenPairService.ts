import { IntAuthTokenPairData, IntAuthTokenPairValidator } from "../../../../packages/types/src/domains/integrations/IntAuthTokenPair";

export class IntAuthTokenPairService {
  private repository = new Map<string, IntAuthTokenPairData>();

  public create(data: Omit<IntAuthTokenPairData, "id" | "createdAt" | "updatedAt">): IntAuthTokenPairData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntAuthTokenPairData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntAuthTokenPairValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntAuthTokenPair: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntAuthTokenPairData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntAuthTokenPairData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntAuthTokenPairData>): IntAuthTokenPairData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntAuthTokenPairData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
