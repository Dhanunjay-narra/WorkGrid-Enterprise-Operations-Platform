import { DmsExportTaskModel, DmsExportTaskValidator } from "@nexora/types/domains/dms/export/DmsExportTask";

export class DmsExportTaskService {
  private repository = new Map<string, DmsExportTaskModel>();

  public create(data: Omit<DmsExportTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportTaskModel>): DmsExportTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportTaskModel = {
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
