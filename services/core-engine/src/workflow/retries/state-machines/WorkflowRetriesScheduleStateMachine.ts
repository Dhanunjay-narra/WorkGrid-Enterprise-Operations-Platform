export type WorkflowRetriesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowRetriesScheduleStateMachine {
  private allowedTransitions: Record<WorkflowRetriesScheduleState, WorkflowRetriesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowRetriesScheduleState, to: WorkflowRetriesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowRetriesScheduleState, to: WorkflowRetriesScheduleState): WorkflowRetriesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowRetriesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
