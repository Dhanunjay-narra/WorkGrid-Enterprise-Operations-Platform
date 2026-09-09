import { DmsFoldersAuditLogModel, DmsFoldersAuditLogValidator } from "@nexora/types/domains/dms/folders/DmsFoldersAuditLog";

export class DmsFoldersAuditLogService {
  private repository = new Map<string, DmsFoldersAuditLogModel>();

  public create(data: Omit<DmsFoldersAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersAuditLogModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersAuditLogModel>): DmsFoldersAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersAuditLogModel = {
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
