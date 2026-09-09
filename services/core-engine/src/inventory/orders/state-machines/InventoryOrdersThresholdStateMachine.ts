export type InventoryOrdersThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersThresholdStateMachine {
  private allowedTransitions: Record<InventoryOrdersThresholdState, InventoryOrdersThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersThresholdState, to: InventoryOrdersThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersThresholdState, to: InventoryOrdersThresholdState): InventoryOrdersThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
