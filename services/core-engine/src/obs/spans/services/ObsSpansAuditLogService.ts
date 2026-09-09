import { ObsSpansAuditLogModel, ObsSpansAuditLogValidator } from "@nexora/types/domains/obs/spans/ObsSpansAuditLog";

export class ObsSpansAuditLogService {
  private repository = new Map<string, ObsSpansAuditLogModel>();

  public create(data: Omit<ObsSpansAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansAuditLogModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansAuditLogModel>): ObsSpansAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansAuditLogModel = {
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
