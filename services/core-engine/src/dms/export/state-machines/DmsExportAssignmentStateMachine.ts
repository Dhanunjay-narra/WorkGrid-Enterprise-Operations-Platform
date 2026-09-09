export type DmsExportAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportAssignmentStateMachine {
  private allowedTransitions: Record<DmsExportAssignmentState, DmsExportAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportAssignmentState, to: DmsExportAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportAssignmentState, to: DmsExportAssignmentState): DmsExportAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
