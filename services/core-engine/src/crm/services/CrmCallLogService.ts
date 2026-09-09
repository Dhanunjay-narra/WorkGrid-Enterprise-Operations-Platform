import { CrmCallLogData, CrmCallLogValidator } from "../../../../packages/types/src/domains/crm/CrmCallLog";

export class CrmCallLogService {
  private repository = new Map<string, CrmCallLogData>();

  public create(data: Omit<CrmCallLogData, "id" | "createdAt" | "updatedAt">): CrmCallLogData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmCallLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmCallLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmCallLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmCallLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmCallLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmCallLogData>): CrmCallLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmCallLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
