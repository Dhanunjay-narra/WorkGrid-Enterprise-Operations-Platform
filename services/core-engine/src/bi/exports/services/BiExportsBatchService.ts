import { BiExportsBatchModel, BiExportsBatchValidator } from "@nexora/types/domains/bi/exports/BiExportsBatch";

export class BiExportsBatchService {
  private repository = new Map<string, BiExportsBatchModel>();

  public create(data: Omit<BiExportsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsBatchModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsBatchModel>): BiExportsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsBatchModel = {
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
