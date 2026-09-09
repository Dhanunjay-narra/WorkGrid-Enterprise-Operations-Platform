import { WfWorkflowExecutionData, WfWorkflowExecutionValidator } from "../../../../packages/types/src/domains/workflow/WfWorkflowExecution";

export class WfWorkflowExecutionService {
  private repository = new Map<string, WfWorkflowExecutionData>();

  public create(data: Omit<WfWorkflowExecutionData, "id" | "createdAt" | "updatedAt">): WfWorkflowExecutionData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfWorkflowExecutionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfWorkflowExecutionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfWorkflowExecution: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfWorkflowExecutionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfWorkflowExecutionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfWorkflowExecutionData>): WfWorkflowExecutionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfWorkflowExecutionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
