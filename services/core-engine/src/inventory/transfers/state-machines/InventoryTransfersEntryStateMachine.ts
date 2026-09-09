export type InventoryTransfersEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersEntryStateMachine {
  private allowedTransitions: Record<InventoryTransfersEntryState, InventoryTransfersEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersEntryState, to: InventoryTransfersEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersEntryState, to: InventoryTransfersEntryState): InventoryTransfersEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersEntry: " + from + " -> " + to);
    }
    return to;
  }
}
