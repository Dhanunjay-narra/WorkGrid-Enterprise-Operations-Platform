export type InventorySkuProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuProfileStateMachine {
  private allowedTransitions: Record<InventorySkuProfileState, InventorySkuProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuProfileState, to: InventorySkuProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuProfileState, to: InventorySkuProfileState): InventorySkuProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuProfile: " + from + " -> " + to);
    }
    return to;
  }
}
