import { AuditPolicyModel, AuditPolicyValidator } from "@nexora/types/domains/audit/AuditPolicy";

export class AuditPolicyService {
  private repository = new Map<string, AuditPolicyModel>();

  public create(data: Omit<AuditPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AuditPolicyModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditPolicyModel>): AuditPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditPolicyModel = {
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
