export type InventoryReorderThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderThresholdStateMachine {
  private allowedTransitions: Record<InventoryReorderThresholdState, InventoryReorderThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderThresholdState, to: InventoryReorderThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderThresholdState, to: InventoryReorderThresholdState): InventoryReorderThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
