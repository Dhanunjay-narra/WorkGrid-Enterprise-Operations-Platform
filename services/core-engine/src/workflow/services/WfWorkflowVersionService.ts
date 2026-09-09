import { WfWorkflowVersionData, WfWorkflowVersionValidator } from "../../../../packages/types/src/domains/workflow/WfWorkflowVersion";

export class WfWorkflowVersionService {
  private repository = new Map<string, WfWorkflowVersionData>();

  public create(data: Omit<WfWorkflowVersionData, "id" | "createdAt" | "updatedAt">): WfWorkflowVersionData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfWorkflowVersionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfWorkflowVersionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfWorkflowVersion: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfWorkflowVersionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfWorkflowVersionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfWorkflowVersionData>): WfWorkflowVersionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfWorkflowVersionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
