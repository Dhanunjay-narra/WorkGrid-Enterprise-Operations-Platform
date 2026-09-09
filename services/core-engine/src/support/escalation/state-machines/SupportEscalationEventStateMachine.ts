export type SupportEscalationEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationEventStateMachine {
  private allowedTransitions: Record<SupportEscalationEventState, SupportEscalationEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationEventState, to: SupportEscalationEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationEventState, to: SupportEscalationEventState): SupportEscalationEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationEvent: " + from + " -> " + to);
    }
    return to;
  }
}
