export type InventoryReorderProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderProfileStateMachine {
  private allowedTransitions: Record<InventoryReorderProfileState, InventoryReorderProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderProfileState, to: InventoryReorderProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderProfileState, to: InventoryReorderProfileState): InventoryReorderProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderProfile: " + from + " -> " + to);
    }
    return to;
  }
}
