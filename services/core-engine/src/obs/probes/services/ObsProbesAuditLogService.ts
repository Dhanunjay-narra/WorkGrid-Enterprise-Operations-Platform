import { ObsProbesAuditLogModel, ObsProbesAuditLogValidator } from "@nexora/types/domains/obs/probes/ObsProbesAuditLog";

export class ObsProbesAuditLogService {
  private repository = new Map<string, ObsProbesAuditLogModel>();

  public create(data: Omit<ObsProbesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesAuditLogModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesAuditLogModel>): ObsProbesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesAuditLogModel = {
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
