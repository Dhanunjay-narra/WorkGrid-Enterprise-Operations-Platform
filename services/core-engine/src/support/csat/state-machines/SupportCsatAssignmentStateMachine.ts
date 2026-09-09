export type SupportCsatAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatAssignmentStateMachine {
  private allowedTransitions: Record<SupportCsatAssignmentState, SupportCsatAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatAssignmentState, to: SupportCsatAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatAssignmentState, to: SupportCsatAssignmentState): SupportCsatAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
