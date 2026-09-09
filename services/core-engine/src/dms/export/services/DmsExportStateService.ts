import { DmsExportStateModel, DmsExportStateValidator } from "@nexora/types/domains/dms/export/DmsExportState";

export class DmsExportStateService {
  private repository = new Map<string, DmsExportStateModel>();

  public create(data: Omit<DmsExportStateModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportStateModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportStateModel>): DmsExportStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportStateModel = {
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
