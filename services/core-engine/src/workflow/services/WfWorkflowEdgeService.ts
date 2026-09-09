import { WfWorkflowEdgeData, WfWorkflowEdgeValidator } from "../../../../packages/types/src/domains/workflow/WfWorkflowEdge";

export class WfWorkflowEdgeService {
  private repository = new Map<string, WfWorkflowEdgeData>();

  public create(data: Omit<WfWorkflowEdgeData, "id" | "createdAt" | "updatedAt">): WfWorkflowEdgeData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfWorkflowEdgeData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfWorkflowEdgeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfWorkflowEdge: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfWorkflowEdgeData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfWorkflowEdgeData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfWorkflowEdgeData>): WfWorkflowEdgeData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfWorkflowEdgeData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
