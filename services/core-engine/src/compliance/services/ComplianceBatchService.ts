import { ComplianceBatchModel, ComplianceBatchValidator } from "@nexora/types/domains/compliance/ComplianceBatch";

export class ComplianceBatchService {
  private repository = new Map<string, ComplianceBatchModel>();

  public create(data: Omit<ComplianceBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceBatchModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceBatchModel>): ComplianceBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceBatchModel = {
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
