import { DmsSignaturesAuditLogModel, DmsSignaturesAuditLogValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesAuditLog";

export class DmsSignaturesAuditLogService {
  private repository = new Map<string, DmsSignaturesAuditLogModel>();

  public create(data: Omit<DmsSignaturesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesAuditLogModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesAuditLogModel>): DmsSignaturesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesAuditLogModel = {
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
