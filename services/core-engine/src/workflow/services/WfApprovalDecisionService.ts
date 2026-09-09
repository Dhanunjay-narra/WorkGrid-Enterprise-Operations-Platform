import { WfApprovalDecisionData, WfApprovalDecisionValidator } from "../../../../packages/types/src/domains/workflow/WfApprovalDecision";

export class WfApprovalDecisionService {
  private repository = new Map<string, WfApprovalDecisionData>();

  public create(data: Omit<WfApprovalDecisionData, "id" | "createdAt" | "updatedAt">): WfApprovalDecisionData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfApprovalDecisionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfApprovalDecisionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfApprovalDecision: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfApprovalDecisionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfApprovalDecisionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfApprovalDecisionData>): WfApprovalDecisionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfApprovalDecisionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
