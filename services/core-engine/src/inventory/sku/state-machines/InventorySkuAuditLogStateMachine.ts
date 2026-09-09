export type InventorySkuAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuAuditLogStateMachine {
  private allowedTransitions: Record<InventorySkuAuditLogState, InventorySkuAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuAuditLogState, to: InventorySkuAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuAuditLogState, to: InventorySkuAuditLogState): InventorySkuAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
