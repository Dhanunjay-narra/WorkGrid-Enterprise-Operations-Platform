export type InventoryOrdersProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersProfileStateMachine {
  private allowedTransitions: Record<InventoryOrdersProfileState, InventoryOrdersProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersProfileState, to: InventoryOrdersProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersProfileState, to: InventoryOrdersProfileState): InventoryOrdersProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersProfile: " + from + " -> " + to);
    }
    return to;
  }
}
