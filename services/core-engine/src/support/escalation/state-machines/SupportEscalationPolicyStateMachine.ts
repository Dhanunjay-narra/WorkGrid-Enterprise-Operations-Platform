export type SupportEscalationPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationPolicyStateMachine {
  private allowedTransitions: Record<SupportEscalationPolicyState, SupportEscalationPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationPolicyState, to: SupportEscalationPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationPolicyState, to: SupportEscalationPolicyState): SupportEscalationPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
