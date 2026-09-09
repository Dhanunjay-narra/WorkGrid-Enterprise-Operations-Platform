import { DmsRetentionPolicyModel, DmsRetentionPolicyValidator } from "@nexora/types/domains/dms/retention/DmsRetentionPolicy";

export class DmsRetentionPolicyService {
  private repository = new Map<string, DmsRetentionPolicyModel>();

  public create(data: Omit<DmsRetentionPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionPolicyModel>): DmsRetentionPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionPolicyModel = {
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
