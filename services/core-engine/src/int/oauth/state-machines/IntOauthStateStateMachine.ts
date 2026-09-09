export type IntOauthStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthStateStateMachine {
  private allowedTransitions: Record<IntOauthStateState, IntOauthStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthStateState, to: IntOauthStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthStateState, to: IntOauthStateState): IntOauthStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthState: " + from + " -> " + to);
    }
    return to;
  }
}
