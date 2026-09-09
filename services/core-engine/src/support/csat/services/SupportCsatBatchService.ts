import { SupportCsatBatchModel, SupportCsatBatchValidator } from "@nexora/types/domains/support/csat/SupportCsatBatch";

export class SupportCsatBatchService {
  private repository = new Map<string, SupportCsatBatchModel>();

  public create(data: Omit<SupportCsatBatchModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatBatchModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatBatchModel>): SupportCsatBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatBatchModel = {
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
