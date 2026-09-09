export type InventoryOrdersAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersAuditLogStateMachine {
  private allowedTransitions: Record<InventoryOrdersAuditLogState, InventoryOrdersAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersAuditLogState, to: InventoryOrdersAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersAuditLogState, to: InventoryOrdersAuditLogState): InventoryOrdersAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
