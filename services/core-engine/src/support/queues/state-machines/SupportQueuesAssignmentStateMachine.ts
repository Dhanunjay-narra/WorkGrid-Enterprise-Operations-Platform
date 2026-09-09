export type SupportQueuesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesAssignmentStateMachine {
  private allowedTransitions: Record<SupportQueuesAssignmentState, SupportQueuesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesAssignmentState, to: SupportQueuesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesAssignmentState, to: SupportQueuesAssignmentState): SupportQueuesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
