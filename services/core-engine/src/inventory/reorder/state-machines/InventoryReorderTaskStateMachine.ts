export type InventoryReorderTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderTaskStateMachine {
  private allowedTransitions: Record<InventoryReorderTaskState, InventoryReorderTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderTaskState, to: InventoryReorderTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderTaskState, to: InventoryReorderTaskState): InventoryReorderTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderTask: " + from + " -> " + to);
    }
    return to;
  }
}
