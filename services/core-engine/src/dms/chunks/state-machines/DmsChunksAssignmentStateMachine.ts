export type DmsChunksAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksAssignmentStateMachine {
  private allowedTransitions: Record<DmsChunksAssignmentState, DmsChunksAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksAssignmentState, to: DmsChunksAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksAssignmentState, to: DmsChunksAssignmentState): DmsChunksAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
