export type InventoryOrdersPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersPayloadStateMachine {
  private allowedTransitions: Record<InventoryOrdersPayloadState, InventoryOrdersPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersPayloadState, to: InventoryOrdersPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersPayloadState, to: InventoryOrdersPayloadState): InventoryOrdersPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersPayload: " + from + " -> " + to);
    }
    return to;
  }
}
