export type DmsFilesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesAssignmentStateMachine {
  private allowedTransitions: Record<DmsFilesAssignmentState, DmsFilesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesAssignmentState, to: DmsFilesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesAssignmentState, to: DmsFilesAssignmentState): DmsFilesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
