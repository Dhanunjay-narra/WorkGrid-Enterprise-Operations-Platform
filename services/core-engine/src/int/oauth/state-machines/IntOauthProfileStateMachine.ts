export type IntOauthProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthProfileStateMachine {
  private allowedTransitions: Record<IntOauthProfileState, IntOauthProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthProfileState, to: IntOauthProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthProfileState, to: IntOauthProfileState): IntOauthProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthProfile: " + from + " -> " + to);
    }
    return to;
  }
}
