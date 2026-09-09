export type SupportEscalationAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationAssignmentStateMachine {
  private allowedTransitions: Record<SupportEscalationAssignmentState, SupportEscalationAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationAssignmentState, to: SupportEscalationAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationAssignmentState, to: SupportEscalationAssignmentState): SupportEscalationAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
