export type SupportEscalationStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationStateStateMachine {
  private allowedTransitions: Record<SupportEscalationStateState, SupportEscalationStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationStateState, to: SupportEscalationStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationStateState, to: SupportEscalationStateState): SupportEscalationStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationState: " + from + " -> " + to);
    }
    return to;
  }
}
