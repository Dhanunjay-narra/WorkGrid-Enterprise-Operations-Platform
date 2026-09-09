import { WfVariableStoreData, WfVariableStoreValidator } from "../../../../packages/types/src/domains/workflow/WfVariableStore";

export class WfVariableStoreService {
  private repository = new Map<string, WfVariableStoreData>();

  public create(data: Omit<WfVariableStoreData, "id" | "createdAt" | "updatedAt">): WfVariableStoreData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfVariableStoreData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfVariableStoreValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfVariableStore: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfVariableStoreData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfVariableStoreData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfVariableStoreData>): WfVariableStoreData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfVariableStoreData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
