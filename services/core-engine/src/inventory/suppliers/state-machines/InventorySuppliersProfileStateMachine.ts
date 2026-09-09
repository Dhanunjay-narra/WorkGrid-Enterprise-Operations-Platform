export type InventorySuppliersProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersProfileStateMachine {
  private allowedTransitions: Record<InventorySuppliersProfileState, InventorySuppliersProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersProfileState, to: InventorySuppliersProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersProfileState, to: InventorySuppliersProfileState): InventorySuppliersProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersProfile: " + from + " -> " + to);
    }
    return to;
  }
}
