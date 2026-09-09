export type SupportTicketsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsAssignmentStateMachine {
  private allowedTransitions: Record<SupportTicketsAssignmentState, SupportTicketsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsAssignmentState, to: SupportTicketsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsAssignmentState, to: SupportTicketsAssignmentState): SupportTicketsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
