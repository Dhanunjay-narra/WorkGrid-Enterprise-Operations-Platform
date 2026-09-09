import { CrmTerritoryAuditLogModel, CrmTerritoryAuditLogValidator } from "@nexora/types/domains/crm/territory/CrmTerritoryAuditLog";

export class CrmTerritoryAuditLogService {
  private repository = new Map<string, CrmTerritoryAuditLogModel>();

  public create(data: Omit<CrmTerritoryAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryAuditLogModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritoryAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryAuditLogModel>): CrmTerritoryAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryAuditLogModel = {
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
