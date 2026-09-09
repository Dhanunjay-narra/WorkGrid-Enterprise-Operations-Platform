export type InventorySuppliersRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersRecordStateMachine {
  private allowedTransitions: Record<InventorySuppliersRecordState, InventorySuppliersRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersRecordState, to: InventorySuppliersRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersRecordState, to: InventorySuppliersRecordState): InventorySuppliersRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersRecord: " + from + " -> " + to);
    }
    return to;
  }
}
