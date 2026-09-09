export type DmsOcrAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrAssignmentStateMachine {
  private allowedTransitions: Record<DmsOcrAssignmentState, DmsOcrAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrAssignmentState, to: DmsOcrAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrAssignmentState, to: DmsOcrAssignmentState): DmsOcrAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
