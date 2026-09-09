export type SupportEscalationThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationThresholdStateMachine {
  private allowedTransitions: Record<SupportEscalationThresholdState, SupportEscalationThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationThresholdState, to: SupportEscalationThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationThresholdState, to: SupportEscalationThresholdState): SupportEscalationThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
