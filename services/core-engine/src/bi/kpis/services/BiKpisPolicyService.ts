import { BiKpisPolicyModel, BiKpisPolicyValidator } from "@nexora/types/domains/bi/kpis/BiKpisPolicy";

export class BiKpisPolicyService {
  private repository = new Map<string, BiKpisPolicyModel>();

  public create(data: Omit<BiKpisPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisPolicyModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisPolicyModel>): BiKpisPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisPolicyModel = {
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
