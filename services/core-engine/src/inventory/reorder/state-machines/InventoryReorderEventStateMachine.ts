export type InventoryReorderEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderEventStateMachine {
  private allowedTransitions: Record<InventoryReorderEventState, InventoryReorderEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderEventState, to: InventoryReorderEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderEventState, to: InventoryReorderEventState): InventoryReorderEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderEvent: " + from + " -> " + to);
    }
    return to;
  }
}
