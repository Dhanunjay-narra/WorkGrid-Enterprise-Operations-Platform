import { ObsProfilingAuditLogModel, ObsProfilingAuditLogValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingAuditLog";

export class ObsProfilingAuditLogService {
  private repository = new Map<string, ObsProfilingAuditLogModel>();

  public create(data: Omit<ObsProfilingAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingAuditLogModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingAuditLogModel>): ObsProfilingAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingAuditLogModel = {
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
