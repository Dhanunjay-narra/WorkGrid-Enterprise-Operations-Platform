export type WorkflowDagScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagScheduleStateMachine {
  private allowedTransitions: Record<WorkflowDagScheduleState, WorkflowDagScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagScheduleState, to: WorkflowDagScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagScheduleState, to: WorkflowDagScheduleState): WorkflowDagScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
