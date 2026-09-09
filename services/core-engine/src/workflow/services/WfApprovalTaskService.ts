import { WfApprovalTaskData, WfApprovalTaskValidator } from "../../../../packages/types/src/domains/workflow/WfApprovalTask";

export class WfApprovalTaskService {
  private repository = new Map<string, WfApprovalTaskData>();

  public create(data: Omit<WfApprovalTaskData, "id" | "createdAt" | "updatedAt">): WfApprovalTaskData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfApprovalTaskData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfApprovalTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfApprovalTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfApprovalTaskData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfApprovalTaskData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfApprovalTaskData>): WfApprovalTaskData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfApprovalTaskData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
