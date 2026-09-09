import { WorkflowCronsItemModel, WorkflowCronsItemValidator } from "@nexora/types/domains/workflow/crons/WorkflowCronsItem";

export class WorkflowCronsItemService {
  private repository = new Map<string, WorkflowCronsItemModel>();

  public create(data: Omit<WorkflowCronsItemModel, "id" | "version" | "createdAt" | "updatedAt">): WorkflowCronsItemModel {
    const id = "work_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: WorkflowCronsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = WorkflowCronsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WorkflowCronsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WorkflowCronsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: WorkflowCronsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<WorkflowCronsItemModel>): WorkflowCronsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WorkflowCronsItemModel = {
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
