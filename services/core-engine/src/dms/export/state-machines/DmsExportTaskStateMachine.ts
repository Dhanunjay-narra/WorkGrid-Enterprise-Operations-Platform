export type DmsExportTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportTaskStateMachine {
  private allowedTransitions: Record<DmsExportTaskState, DmsExportTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportTaskState, to: DmsExportTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportTaskState, to: DmsExportTaskState): DmsExportTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportTask: " + from + " -> " + to);
    }
    return to;
  }
}
