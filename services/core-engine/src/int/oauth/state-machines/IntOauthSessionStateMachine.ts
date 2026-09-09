export type IntOauthSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthSessionStateMachine {
  private allowedTransitions: Record<IntOauthSessionState, IntOauthSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthSessionState, to: IntOauthSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthSessionState, to: IntOauthSessionState): IntOauthSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthSession: " + from + " -> " + to);
    }
    return to;
  }
}
