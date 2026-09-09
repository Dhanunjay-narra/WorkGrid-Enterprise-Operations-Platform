export type InventoryTransfersMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersMappingStateMachine {
  private allowedTransitions: Record<InventoryTransfersMappingState, InventoryTransfersMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersMappingState, to: InventoryTransfersMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersMappingState, to: InventoryTransfersMappingState): InventoryTransfersMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersMapping: " + from + " -> " + to);
    }
    return to;
  }
}
