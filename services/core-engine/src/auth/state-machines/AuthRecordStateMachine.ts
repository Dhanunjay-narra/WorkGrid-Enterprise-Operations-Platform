export type AuthRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthRecordStateMachine {
  private allowedTransitions: Record<AuthRecordState, AuthRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthRecordState, to: AuthRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthRecordState, to: AuthRecordState): AuthRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthRecord: " + from + " -> " + to);
    }
    return to;
  }
}
