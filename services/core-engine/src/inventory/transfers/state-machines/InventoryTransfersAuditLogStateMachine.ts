export type InventoryTransfersAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersAuditLogStateMachine {
  private allowedTransitions: Record<InventoryTransfersAuditLogState, InventoryTransfersAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersAuditLogState, to: InventoryTransfersAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersAuditLogState, to: InventoryTransfersAuditLogState): InventoryTransfersAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
