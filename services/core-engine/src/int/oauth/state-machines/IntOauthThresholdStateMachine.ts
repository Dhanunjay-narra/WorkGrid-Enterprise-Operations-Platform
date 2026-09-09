export type IntOauthThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthThresholdStateMachine {
  private allowedTransitions: Record<IntOauthThresholdState, IntOauthThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthThresholdState, to: IntOauthThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthThresholdState, to: IntOauthThresholdState): IntOauthThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
