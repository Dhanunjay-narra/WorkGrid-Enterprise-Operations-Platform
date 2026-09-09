export type InventoryOrdersTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersTaskStateMachine {
  private allowedTransitions: Record<InventoryOrdersTaskState, InventoryOrdersTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersTaskState, to: InventoryOrdersTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersTaskState, to: InventoryOrdersTaskState): InventoryOrdersTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersTask: " + from + " -> " + to);
    }
    return to;
  }
}
