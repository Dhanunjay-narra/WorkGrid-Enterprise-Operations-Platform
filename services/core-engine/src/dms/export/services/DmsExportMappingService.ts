import { DmsExportMappingModel, DmsExportMappingValidator } from "@nexora/types/domains/dms/export/DmsExportMapping";

export class DmsExportMappingService {
  private repository = new Map<string, DmsExportMappingModel>();

  public create(data: Omit<DmsExportMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportMappingModel>): DmsExportMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportMappingModel = {
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
