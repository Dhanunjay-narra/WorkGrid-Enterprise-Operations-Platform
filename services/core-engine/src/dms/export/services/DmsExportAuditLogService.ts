import { DmsExportAuditLogModel, DmsExportAuditLogValidator } from "@nexora/types/domains/dms/export/DmsExportAuditLog";

export class DmsExportAuditLogService {
  private repository = new Map<string, DmsExportAuditLogModel>();

  public create(data: Omit<DmsExportAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportAuditLogModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportAuditLogModel>): DmsExportAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportAuditLogModel = {
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
