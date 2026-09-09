export type DmsSignaturesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesAssignmentStateMachine {
  private allowedTransitions: Record<DmsSignaturesAssignmentState, DmsSignaturesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesAssignmentState, to: DmsSignaturesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesAssignmentState, to: DmsSignaturesAssignmentState): DmsSignaturesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
