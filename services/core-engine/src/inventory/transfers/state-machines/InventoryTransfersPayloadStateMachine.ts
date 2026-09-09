export type InventoryTransfersPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersPayloadStateMachine {
  private allowedTransitions: Record<InventoryTransfersPayloadState, InventoryTransfersPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersPayloadState, to: InventoryTransfersPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersPayloadState, to: InventoryTransfersPayloadState): InventoryTransfersPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersPayload: " + from + " -> " + to);
    }
    return to;
  }
}
