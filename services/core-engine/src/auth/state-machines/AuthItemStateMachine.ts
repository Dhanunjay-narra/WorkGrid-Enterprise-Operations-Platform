export type AuthItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthItemStateMachine {
  private allowedTransitions: Record<AuthItemState, AuthItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthItemState, to: AuthItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthItemState, to: AuthItemState): AuthItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthItem: " + from + " -> " + to);
    }
    return to;
  }
}
