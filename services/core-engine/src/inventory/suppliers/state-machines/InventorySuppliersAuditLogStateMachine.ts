export type InventorySuppliersAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersAuditLogStateMachine {
  private allowedTransitions: Record<InventorySuppliersAuditLogState, InventorySuppliersAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersAuditLogState, to: InventorySuppliersAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersAuditLogState, to: InventorySuppliersAuditLogState): InventorySuppliersAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
