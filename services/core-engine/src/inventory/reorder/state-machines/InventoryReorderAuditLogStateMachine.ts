export type InventoryReorderAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderAuditLogStateMachine {
  private allowedTransitions: Record<InventoryReorderAuditLogState, InventoryReorderAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderAuditLogState, to: InventoryReorderAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderAuditLogState, to: InventoryReorderAuditLogState): InventoryReorderAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
