export type WorkflowEdgesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowEdgesScheduleStateMachine {
  private allowedTransitions: Record<WorkflowEdgesScheduleState, WorkflowEdgesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowEdgesScheduleState, to: WorkflowEdgesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowEdgesScheduleState, to: WorkflowEdgesScheduleState): WorkflowEdgesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowEdgesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
