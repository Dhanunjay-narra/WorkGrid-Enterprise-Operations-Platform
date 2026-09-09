import { WfEventTriggerData, WfEventTriggerValidator } from "../../../../packages/types/src/domains/workflow/WfEventTrigger";

export class WfEventTriggerService {
  private repository = new Map<string, WfEventTriggerData>();

  public create(data: Omit<WfEventTriggerData, "id" | "createdAt" | "updatedAt">): WfEventTriggerData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfEventTriggerData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfEventTriggerValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfEventTrigger: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfEventTriggerData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfEventTriggerData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfEventTriggerData>): WfEventTriggerData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfEventTriggerData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
