import { SecurityBatchModel, SecurityBatchValidator } from "@nexora/types/domains/security/SecurityBatch";

export class SecurityBatchService {
  private repository = new Map<string, SecurityBatchModel>();

  public create(data: Omit<SecurityBatchModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityBatchModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityBatchModel>): SecurityBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityBatchModel = {
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
