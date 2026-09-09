export type InventorySkuTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuTaskStateMachine {
  private allowedTransitions: Record<InventorySkuTaskState, InventorySkuTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuTaskState, to: InventorySkuTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuTaskState, to: InventorySkuTaskState): InventorySkuTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuTask: " + from + " -> " + to);
    }
    return to;
  }
}
