export type InventorySkuPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuPolicyStateMachine {
  private allowedTransitions: Record<InventorySkuPolicyState, InventorySkuPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuPolicyState, to: InventorySkuPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuPolicyState, to: InventorySkuPolicyState): InventorySkuPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
