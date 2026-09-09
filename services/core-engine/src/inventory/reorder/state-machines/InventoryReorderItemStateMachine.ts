export type InventoryReorderItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderItemStateMachine {
  private allowedTransitions: Record<InventoryReorderItemState, InventoryReorderItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderItemState, to: InventoryReorderItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderItemState, to: InventoryReorderItemState): InventoryReorderItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderItem: " + from + " -> " + to);
    }
    return to;
  }
}
