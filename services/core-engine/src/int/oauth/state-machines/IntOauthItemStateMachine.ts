export type IntOauthItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthItemStateMachine {
  private allowedTransitions: Record<IntOauthItemState, IntOauthItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthItemState, to: IntOauthItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthItemState, to: IntOauthItemState): IntOauthItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthItem: " + from + " -> " + to);
    }
    return to;
  }
}
