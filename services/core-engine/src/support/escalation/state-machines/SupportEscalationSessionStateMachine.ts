export type SupportEscalationSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationSessionStateMachine {
  private allowedTransitions: Record<SupportEscalationSessionState, SupportEscalationSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationSessionState, to: SupportEscalationSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationSessionState, to: SupportEscalationSessionState): SupportEscalationSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationSession: " + from + " -> " + to);
    }
    return to;
  }
}
