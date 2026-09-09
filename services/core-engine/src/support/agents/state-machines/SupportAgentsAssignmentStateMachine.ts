export type SupportAgentsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsAssignmentStateMachine {
  private allowedTransitions: Record<SupportAgentsAssignmentState, SupportAgentsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsAssignmentState, to: SupportAgentsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsAssignmentState, to: SupportAgentsAssignmentState): SupportAgentsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
