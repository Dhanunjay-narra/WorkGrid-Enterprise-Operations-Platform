export type TenancySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancySessionStateMachine {
  private allowedTransitions: Record<TenancySessionState, TenancySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancySessionState, to: TenancySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancySessionState, to: TenancySessionState): TenancySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancySession: " + from + " -> " + to);
    }
    return to;
  }
}
