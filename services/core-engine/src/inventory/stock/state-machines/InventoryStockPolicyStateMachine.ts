export type InventoryStockPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockPolicyStateMachine {
  private allowedTransitions: Record<InventoryStockPolicyState, InventoryStockPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockPolicyState, to: InventoryStockPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockPolicyState, to: InventoryStockPolicyState): InventoryStockPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
