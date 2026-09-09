import { BiExportsMappingModel, BiExportsMappingValidator } from "@nexora/types/domains/bi/exports/BiExportsMapping";

export class BiExportsMappingService {
  private repository = new Map<string, BiExportsMappingModel>();

  public create(data: Omit<BiExportsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsMappingModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsMappingModel>): BiExportsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsMappingModel = {
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
