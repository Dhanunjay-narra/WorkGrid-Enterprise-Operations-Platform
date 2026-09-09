export type IdentityItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityItemStateMachine {
  private allowedTransitions: Record<IdentityItemState, IdentityItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityItemState, to: IdentityItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityItemState, to: IdentityItemState): IdentityItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityItem: " + from + " -> " + to);
    }
    return to;
  }
}
