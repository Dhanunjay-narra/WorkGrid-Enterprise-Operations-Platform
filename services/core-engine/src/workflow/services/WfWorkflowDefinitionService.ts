import { WfWorkflowDefinitionData, WfWorkflowDefinitionValidator } from "../../../../packages/types/src/domains/workflow/WfWorkflowDefinition";

export class WfWorkflowDefinitionService {
  private repository = new Map<string, WfWorkflowDefinitionData>();

  public create(data: Omit<WfWorkflowDefinitionData, "id" | "createdAt" | "updatedAt">): WfWorkflowDefinitionData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfWorkflowDefinitionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfWorkflowDefinitionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfWorkflowDefinition: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfWorkflowDefinitionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfWorkflowDefinitionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfWorkflowDefinitionData>): WfWorkflowDefinitionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfWorkflowDefinitionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
