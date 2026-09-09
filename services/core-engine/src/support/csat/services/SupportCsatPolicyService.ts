import { SupportCsatPolicyModel, SupportCsatPolicyValidator } from "@nexora/types/domains/support/csat/SupportCsatPolicy";

export class SupportCsatPolicyService {
  private repository = new Map<string, SupportCsatPolicyModel>();

  public create(data: Omit<SupportCsatPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatPolicyModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatPolicyModel>): SupportCsatPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatPolicyModel = {
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
