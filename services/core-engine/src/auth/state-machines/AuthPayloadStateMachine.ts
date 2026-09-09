export type AuthPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthPayloadStateMachine {
  private allowedTransitions: Record<AuthPayloadState, AuthPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthPayloadState, to: AuthPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthPayloadState, to: AuthPayloadState): AuthPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthPayload: " + from + " -> " + to);
    }
    return to;
  }
}
