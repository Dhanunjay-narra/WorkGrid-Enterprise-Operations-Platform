export type IntOauthEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthEntryStateMachine {
  private allowedTransitions: Record<IntOauthEntryState, IntOauthEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthEntryState, to: IntOauthEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthEntryState, to: IntOauthEntryState): IntOauthEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthEntry: " + from + " -> " + to);
    }
    return to;
  }
}
