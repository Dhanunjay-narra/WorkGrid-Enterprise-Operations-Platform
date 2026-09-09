export type DmsExportScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportScheduleStateMachine {
  private allowedTransitions: Record<DmsExportScheduleState, DmsExportScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportScheduleState, to: DmsExportScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportScheduleState, to: DmsExportScheduleState): DmsExportScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
