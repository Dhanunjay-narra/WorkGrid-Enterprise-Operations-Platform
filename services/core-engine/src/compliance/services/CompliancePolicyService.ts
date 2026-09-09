import { CompliancePolicyModel, CompliancePolicyValidator } from "@nexora/types/domains/compliance/CompliancePolicy";

export class CompliancePolicyService {
  private repository = new Map<string, CompliancePolicyModel>();

  public create(data: Omit<CompliancePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CompliancePolicyModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CompliancePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CompliancePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CompliancePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CompliancePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CompliancePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CompliancePolicyModel>): CompliancePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CompliancePolicyModel = {
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
