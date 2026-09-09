export type InventoryBatchesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesAuditLogStateMachine {
  private allowedTransitions: Record<InventoryBatchesAuditLogState, InventoryBatchesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesAuditLogState, to: InventoryBatchesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesAuditLogState, to: InventoryBatchesAuditLogState): InventoryBatchesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
