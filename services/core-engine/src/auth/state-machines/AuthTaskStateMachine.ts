export type AuthTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthTaskStateMachine {
  private allowedTransitions: Record<AuthTaskState, AuthTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthTaskState, to: AuthTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthTaskState, to: AuthTaskState): AuthTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthTask: " + from + " -> " + to);
    }
    return to;
  }
}
