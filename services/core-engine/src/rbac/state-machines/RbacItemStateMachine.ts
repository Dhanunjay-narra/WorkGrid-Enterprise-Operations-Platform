export type RbacItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacItemStateMachine {
  private allowedTransitions: Record<RbacItemState, RbacItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacItemState, to: RbacItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacItemState, to: RbacItemState): RbacItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacItem: " + from + " -> " + to);
    }
    return to;
  }
}
