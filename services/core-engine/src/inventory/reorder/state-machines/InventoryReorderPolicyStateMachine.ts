export type InventoryReorderPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderPolicyStateMachine {
  private allowedTransitions: Record<InventoryReorderPolicyState, InventoryReorderPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderPolicyState, to: InventoryReorderPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderPolicyState, to: InventoryReorderPolicyState): InventoryReorderPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
