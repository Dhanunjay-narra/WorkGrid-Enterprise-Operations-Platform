import { SupportSurveysAuditLogModel, SupportSurveysAuditLogValidator } from "@nexora/types/domains/support/surveys/SupportSurveysAuditLog";

export class SupportSurveysAuditLogService {
  private repository = new Map<string, SupportSurveysAuditLogModel>();

  public create(data: Omit<SupportSurveysAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysAuditLogModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysAuditLogModel>): SupportSurveysAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysAuditLogModel = {
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
