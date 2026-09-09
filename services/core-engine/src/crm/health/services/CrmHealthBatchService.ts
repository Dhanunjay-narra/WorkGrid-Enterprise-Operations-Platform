import { CrmHealthBatchModel, CrmHealthBatchValidator } from "@nexora/types/domains/crm/health/CrmHealthBatch";

export class CrmHealthBatchService {
  private repository = new Map<string, CrmHealthBatchModel>();

  public create(data: Omit<CrmHealthBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthBatchModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthBatchModel>): CrmHealthBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthBatchModel = {
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
