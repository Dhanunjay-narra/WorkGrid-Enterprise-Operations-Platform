import { WfWorkflowNodeData, WfWorkflowNodeValidator } from "../../../../packages/types/src/domains/workflow/WfWorkflowNode";

export class WfWorkflowNodeService {
  private repository = new Map<string, WfWorkflowNodeData>();

  public create(data: Omit<WfWorkflowNodeData, "id" | "createdAt" | "updatedAt">): WfWorkflowNodeData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfWorkflowNodeData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfWorkflowNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfWorkflowNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfWorkflowNodeData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfWorkflowNodeData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfWorkflowNodeData>): WfWorkflowNodeData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfWorkflowNodeData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
