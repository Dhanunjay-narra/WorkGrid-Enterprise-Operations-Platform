import { ComplianceAuditLogModel, ComplianceAuditLogValidator } from "@nexora/types/domains/compliance/ComplianceAuditLog";

export class ComplianceAuditLogService {
  private repository = new Map<string, ComplianceAuditLogModel>();

  public create(data: Omit<ComplianceAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceAuditLogModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceAuditLogModel>): ComplianceAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceAuditLogModel = {
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
