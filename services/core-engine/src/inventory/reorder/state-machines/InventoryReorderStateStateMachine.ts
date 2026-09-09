export type InventoryReorderStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderStateStateMachine {
  private allowedTransitions: Record<InventoryReorderStateState, InventoryReorderStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderStateState, to: InventoryReorderStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderStateState, to: InventoryReorderStateState): InventoryReorderStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderState: " + from + " -> " + to);
    }
    return to;
  }
}
