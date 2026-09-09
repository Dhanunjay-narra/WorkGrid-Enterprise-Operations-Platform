import { DmsExportConfigModel, DmsExportConfigValidator } from "@nexora/types/domains/dms/export/DmsExportConfig";

export class DmsExportConfigService {
  private repository = new Map<string, DmsExportConfigModel>();

  public create(data: Omit<DmsExportConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportConfigModel>): DmsExportConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportConfigModel = {
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
