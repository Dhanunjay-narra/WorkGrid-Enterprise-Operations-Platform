export type SupportSlaSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaSessionStateMachine {
  private allowedTransitions: Record<SupportSlaSessionState, SupportSlaSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaSessionState, to: SupportSlaSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaSessionState, to: SupportSlaSessionState): SupportSlaSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaSession: " + from + " -> " + to);
    }
    return to;
  }
}
