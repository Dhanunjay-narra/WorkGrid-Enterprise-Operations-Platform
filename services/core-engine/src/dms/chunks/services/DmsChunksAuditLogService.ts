import { DmsChunksAuditLogModel, DmsChunksAuditLogValidator } from "@nexora/types/domains/dms/chunks/DmsChunksAuditLog";

export class DmsChunksAuditLogService {
  private repository = new Map<string, DmsChunksAuditLogModel>();

  public create(data: Omit<DmsChunksAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksAuditLogModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksAuditLogModel>): DmsChunksAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksAuditLogModel = {
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
