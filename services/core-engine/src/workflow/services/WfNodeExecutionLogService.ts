import { WfNodeExecutionLogData, WfNodeExecutionLogValidator } from "../../../../packages/types/src/domains/workflow/WfNodeExecutionLog";

export class WfNodeExecutionLogService {
  private repository = new Map<string, WfNodeExecutionLogData>();

  public create(data: Omit<WfNodeExecutionLogData, "id" | "createdAt" | "updatedAt">): WfNodeExecutionLogData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfNodeExecutionLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfNodeExecutionLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfNodeExecutionLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfNodeExecutionLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfNodeExecutionLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfNodeExecutionLogData>): WfNodeExecutionLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfNodeExecutionLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
