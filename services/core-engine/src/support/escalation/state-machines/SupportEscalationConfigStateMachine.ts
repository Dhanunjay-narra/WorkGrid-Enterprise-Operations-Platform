export type SupportEscalationConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationConfigStateMachine {
  private allowedTransitions: Record<SupportEscalationConfigState, SupportEscalationConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationConfigState, to: SupportEscalationConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationConfigState, to: SupportEscalationConfigState): SupportEscalationConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationConfig: " + from + " -> " + to);
    }
    return to;
  }
}
