export type AuthEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthEntryStateMachine {
  private allowedTransitions: Record<AuthEntryState, AuthEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthEntryState, to: AuthEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthEntryState, to: AuthEntryState): AuthEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthEntry: " + from + " -> " + to);
    }
    return to;
  }
}
