export type DmsVersionsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsAssignmentStateMachine {
  private allowedTransitions: Record<DmsVersionsAssignmentState, DmsVersionsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsAssignmentState, to: DmsVersionsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsAssignmentState, to: DmsVersionsAssignmentState): DmsVersionsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
