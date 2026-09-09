export type InventoryTransfersRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersRecordStateMachine {
  private allowedTransitions: Record<InventoryTransfersRecordState, InventoryTransfersRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersRecordState, to: InventoryTransfersRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersRecordState, to: InventoryTransfersRecordState): InventoryTransfersRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersRecord: " + from + " -> " + to);
    }
    return to;
  }
}
