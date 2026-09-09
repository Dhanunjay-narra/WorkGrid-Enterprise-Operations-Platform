export type InventorySkuPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuPayloadStateMachine {
  private allowedTransitions: Record<InventorySkuPayloadState, InventorySkuPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuPayloadState, to: InventorySkuPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuPayloadState, to: InventorySkuPayloadState): InventorySkuPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuPayload: " + from + " -> " + to);
    }
    return to;
  }
}
