export type IntOauthEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthEventStateMachine {
  private allowedTransitions: Record<IntOauthEventState, IntOauthEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthEventState, to: IntOauthEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthEventState, to: IntOauthEventState): IntOauthEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthEvent: " + from + " -> " + to);
    }
    return to;
  }
}
